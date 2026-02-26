import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedPhrase } from '../store/uiSlice';
import PhraseBreakdown from '../components/PhraseBreakdown';
import './TextPage.css';

const WHEEL_TICKS_PER_PHRASE = 3;

const stripParens = (s: string) => s.replace(/ \([^)]*\)/g, '');
const renderTranslation = (s: string) => ({ __html: stripParens(s) });

export default function TextPage() {
  const { textId } = useParams<{ textId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.ui.displayMode);
  const interactionMode = useAppSelector((state) => state.ui.interactionMode);
  const selectedPhraseId = useAppSelector((state) => state.ui.selectedPhraseId);
  const showTranslation = useAppSelector((state) => state.ui.showTranslation);
  const [imageSizePct, setImageSizePct] = useState(60);
  const [ligneeVariant, setLigneeVariant] = useState<'mahamoudra' | 'dorje-chang'>('mahamoudra');
  const phraseRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const wheelAccum = useRef(0);
  const lastClickedId = useRef<string | null>(null);
  const isProgrammaticScroll = useRef(false);

  const text = practiceTexts.find((t) => t.id === textId);

  const allPhraseIds = useMemo(() => {
    if (!text) return [];
    return text.sections.flatMap((s) => s.phrases.map((p) => p.id));
  }, [text]);

  const setPhraseRef = useCallback((phraseId: string, el: HTMLDivElement | null) => {
    if (el) {
      phraseRefs.current.set(phraseId, el);
    } else {
      phraseRefs.current.delete(phraseId);
    }
  }, []);

  const scrollToPhrase = useCallback((id: string) => {
    isProgrammaticScroll.current = true;
    phraseRefs.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => { isProgrammaticScroll.current = false; }, 600);
  }, []);

  useEffect(() => {
    if (interactionMode !== 'scroll') return;

    // Start from last clicked phrase, or first phrase if none
    if (!selectedPhraseId && allPhraseIds.length > 0) {
      const startId = lastClickedId.current && allPhraseIds.includes(lastClickedId.current)
        ? lastClickedId.current
        : allPhraseIds[0];
      dispatch(setSelectedPhrase(startId));
      setTimeout(() => scrollToPhrase(startId), 50);
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      wheelAccum.current += direction;

      if (Math.abs(wheelAccum.current) >= WHEEL_TICKS_PER_PHRASE) {
        const step = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;

        const currentIndex = allPhraseIds.indexOf(selectedPhraseId ?? '');
        const nextIndex = Math.max(0, Math.min(allPhraseIds.length - 1, currentIndex + step));
        const nextId = allPhraseIds[nextIndex];

        if (nextId && nextId !== selectedPhraseId) {
          dispatch(setSelectedPhrase(nextId));
          scrollToPhrase(nextId);
        }
      }
    };

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      const viewportCenter = window.innerHeight * 0.4;
      let closestId: string | null = null;
      let closestDistance = Infinity;
      for (const [id, el] of phraseRefs.current) {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + Math.min(rect.height / 2, 40) - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }
      if (closestId && closestId !== selectedPhraseId) {
        dispatch(setSelectedPhrase(closestId));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [interactionMode, selectedPhraseId, allPhraseIds, dispatch, scrollToPhrase]);

  if (!text) {
    return (
      <div className="text-page">
        <p>Texte introuvable.</p>
        <button onClick={() => navigate('/')}>Retour</button>
      </div>
    );
  }

  const handlePhraseClick = (phraseId: string) => {
    if (interactionMode !== 'click') return;
    lastClickedId.current = phraseId;
    dispatch(setSelectedPhrase(selectedPhraseId === phraseId ? null : phraseId));
  };

  return (
    <div className={`text-page ${interactionMode === 'scroll' ? 'text-page-scroll' : ''}`}>
      <button className="back-button" onClick={() => navigate('/')}>
        ← Retour aux textes
      </button>
      <h2 className="text-page-title">
        <span className="text-page-title-tibetan tibetan">{text.tibetanTitle}</span>
        {text.title}
      </h2>
      {text.sections.map((section) => {
        let normalCount = 0;

        // Build pairs [label?, normal, image?] for ta-hommage and ch-priere-lignee
        type PhrasePair = { label?: typeof section.phrases[0]; normal: typeof section.phrases[0]; image?: typeof section.phrases[0] };
        const pairs: PhrasePair[] = [];
        const isHommageSection = section.id === 'ta-hommage' || section.id === 'ch-priere-lignee';
        const activePhrases = section.id === 'ch-priere-lignee' && ligneeVariant === 'dorje-chang' ? [] : section.phrases;
        if (isHommageSection) {
          let i = 0;
          while (i < activePhrases.length) {
            const p = activePhrases[i];
            if (p.type === 'instructions' && !p.tibetan && activePhrases[i + 1]?.type === 'normal') {
              const label = p;
              const normal = activePhrases[i + 1];
              const image = activePhrases[i + 2]?.type === 'image' ? activePhrases[i + 2] : undefined;
              pairs.push({ label, normal, image });
              i += image ? 3 : 2;
            } else if (p.type === 'normal' && activePhrases[i + 1]?.type === 'image') {
              pairs.push({ normal: p, image: activePhrases[i + 1] });
              i += 2;
            } else {
              pairs.push({ normal: p });
              i++;
            }
          }
        }

        return (
        <div key={section.id} className={`section section-${section.id}`}>
          {section.title && (
            <div className="section-title-row">
              <h3 className={section.subtitle ? 'section-subtitle' : 'section-title'}>{section.title}</h3>
              {section.id === 'ch-priere-lignee' && (
                <div className="variant-pill">
                  <button className={`variant-btn ${ligneeVariant === 'mahamoudra' ? 'variant-btn-active' : ''}`} onClick={() => setLigneeVariant('mahamoudra')}>Lignée du Mahamoudra</button>
                  <button className={`variant-btn ${ligneeVariant === 'dorje-chang' ? 'variant-btn-active' : ''}`} onClick={() => setLigneeVariant('dorje-chang')}>Dorje Chang Thoungma</button>
                </div>
              )}
            </div>
          )}
          <div className="phrases">
            {isHommageSection ? pairs.map(({ label, normal, image }) => {
              normalCount++;
              const buddhaName = image && section.id === 'ta-hommage'
                ? (normalCount === 1 ? 'Bouddha Shakyamuni' : (normal.translation.match(/\(([^)]+)\)/)?.[1] ?? ''))
                : null;
              const prefix = buddhaName ? `[${normalCount}. ${buddhaName}] ` : undefined;
              const isSelected = interactionMode === 'fixed' || selectedPhraseId === normal.id;
              const isLastPrayer = !image;
              return (
                <div key={normal.id} className={`ta-hommage-pair ${isLastPrayer ? 'ta-hommage-pair-solo' : ''}`}>
                  <div className="ta-hommage-left">
                    {label && (
                      <div className="phrase phrase-special ta-hommage-label">
                        <span className="phrase-special-translation" dangerouslySetInnerHTML={{ __html: label.translation }} />
                      </div>
                    )}
                    <div
                      ref={(el) => setPhraseRef(normal.id, el)}
                      data-phrase-id={normal.id}
                      className={`phrase-container ${interactionMode === 'fixed' ? 'phrase-no-interact' : ''}`}
                      onClick={() => interactionMode !== 'fixed' && handlePhraseClick(normal.id)}
                    >
                      {isSelected ? (
                        <PhraseBreakdown phrase={normal} displayMode={displayMode} showTranslation={showTranslation} prefix={prefix} />
                      ) : (
                        <div className="phrase">
                          {prefix && <span className="breakdown-prefix">{prefix}</span>}
                          <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                            {displayMode === 'tibetan' ? normal.tibetan : normal.phonetics}
                          </span>
                          {showTranslation && normal.translation && (
                            <span className="phrase-inline-translation" dangerouslySetInnerHTML={renderTranslation(normal.translation)} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  {image && (
                    <div className="ta-hommage-image">
                      <div className="phrase-image-wrapper">
                        <img src={image.src} alt="" className="phrase-image" style={{ width: `${imageSizePct}%` }} />
                        <div className="image-size-pill">
                          <button className="image-size-btn" onClick={() => setImageSizePct(p => Math.min(100, p + 10))}>+</button>
                          <span className="image-size-label">{imageSizePct}</span>
                          <button className="image-size-btn" onClick={() => setImageSizePct(p => Math.max(20, p - 10))}>−</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }) : section.phrases.map((phrase) => {
              const isNormal = phrase.type === 'normal';
              const isMantra = phrase.type === 'mantra';
              const isSpecial = phrase.type === 'instructions' || phrase.type === 'colophon';
              const isImage = phrase.type === 'image';

              return (
                <div
                  key={phrase.id}
                  ref={(el) => setPhraseRef(phrase.id, el)}
                  data-phrase-id={phrase.id}
                  className={`phrase-container ${!isNormal || interactionMode === 'fixed' ? 'phrase-no-interact' : ''}`}
                  onClick={() => isNormal && interactionMode !== 'fixed' && handlePhraseClick(phrase.id)}
                >
                  {isImage ? (
                    <div className="phrase-image-wrapper">
                      <img src={phrase.src} alt="" className="phrase-image" style={{ width: `${imageSizePct}%` }} />
                      <div className="image-size-pill">
                        <button className="image-size-btn" onClick={() => setImageSizePct(p => Math.min(100, p + 10))}>+</button>
                        <span className="image-size-label">{imageSizePct}</span>
                        <button className="image-size-btn" onClick={() => setImageSizePct(p => Math.max(20, p - 10))}>−</button>
                      </div>
                    </div>
                  ) : isNormal && (interactionMode === 'fixed' || selectedPhraseId === phrase.id) ? (
                    <PhraseBreakdown phrase={phrase} displayMode={displayMode} showTranslation={showTranslation} />
                  ) : isMantra ? (
                    <div className="phrase phrase-mantra">
                      <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                        {displayMode === 'tibetan' ? phrase.tibetan : phrase.phonetics}
                      </span>
                    </div>
                  ) : isSpecial ? (
                    <div className="phrase phrase-special">
                      <span className="phrase-text tibetan">{phrase.tibetan}</span>
                      {phrase.translation && (
                        <span className="phrase-special-translation" dangerouslySetInnerHTML={{ __html: phrase.translation }} />
                      )}
                    </div>
                  ) : (
                    <div className="phrase">
                      <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                        {displayMode === 'tibetan' ? phrase.tibetan : phrase.phonetics}
                      </span>
                      {showTranslation && phrase.translation && (
                        <span className="phrase-inline-translation" dangerouslySetInnerHTML={renderTranslation(phrase.translation)} />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {(section.id === 'refuge' || section.id === 'supplique') && (
            <button
              className="scroll-top-btn"
              onClick={() => {
                const firstNormal = section.phrases.find((p) => p.type === 'normal');
                if (!firstNormal) return;
                dispatch(setSelectedPhrase(firstNormal.id));
                scrollToPhrase(firstNormal.id);
              }}
            >
              ↑
            </button>
          )}
        </div>
        );
      })}
      <div className="bottom-nav">
        <button className="back-button back-button-bottom" onClick={() => navigate('/')}>
          ← Retour aux textes
        </button>
        {textId === 'trois-amoncellements' && (
          <button className="back-button back-button-bottom next-text-button" onClick={() => {
            dispatch(setSelectedPhrase(null));
            window.scrollTo(0, 0);
            navigate('/text/vajrasattva');
          }}>
            Vajrasattva →
          </button>
        )}
      </div>
    </div>
  );
}
