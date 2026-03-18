import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedPhrase } from '../store/uiSlice';
import PhraseBreakdown from '../components/PhraseBreakdown';
import AudioPlayer from '../components/AudioPlayer';
import './TextPage.css';

const WHEEL_TICKS_PER_PHRASE = 3;

const stripParens = (s: string) => s.replace(/ \([^)]*\)/g, '');
const renderTranslation = (s: string) => ({ __html: stripParens(s) });

export default function TextPage() {
  const { textId } = useParams<{ textId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.ui.displayMode);
  const interactionMode = useAppSelector((state) => state.ui.interactionMode);
  const selectedPhraseId = useAppSelector((state) => state.ui.selectedPhraseId);
  const showTranslation = useAppSelector((state) => state.ui.showTranslation);
  const [imageSizePct, setImageSizePct] = useState(60);
  const [chenrezikSizePct, setChenrezikSizePct] = useState(80);
  const [pemaKarpoCollapsed, setPemaKarpoCollapsed] = useState(false);
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
      {text.tibetanOnly && text.sections.map((section) => {
        const regularPhrases = section.phrases.filter(p => p.type !== 'nav-btn');
        const navPhrases = section.phrases.filter(p => p.type === 'nav-btn');
        const rows: { left: typeof regularPhrases[0]; right?: typeof regularPhrases[0] }[] = [];
        for (let i = 0; i < regularPhrases.length; i += 2) {
          rows.push({ left: regularPhrases[i], right: regularPhrases[i + 1] });
        }
        const makeNavClick = (p: typeof navPhrases[0]) => () => {
          dispatch(setSelectedPhrase(null));
          const from = (location.state as { from?: string } | null)?.from;
          const target = (p.altTargetFrom && from === p.altTargetFrom && p.altTargetId) ? p.altTargetId : (p.targetId ?? '/');
          const [path, hash] = target.split('#');
          if (hash) {
            navigate(path, { state: { from: text.id } });
            setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
          } else {
            window.scrollTo(0, 0);
            navigate(target, { state: { from: text.id } });
          }
        };
        return (
          <div key={section.id} className="section">
            {section.title && <h3 className="section-title">{section.title}</h3>}
            <div className="tibetan-pairs">
              {rows.map(({ left, right }) => (
                <div key={left.id} className="tibetan-pair-row">
                  <span className={displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}>
                    {displayMode === 'tibetan' ? left.tibetan : left.phonetics}
                  </span>
                  {right
                    ? <span className={displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}>
                        {displayMode === 'tibetan' ? right.tibetan : right.phonetics}
                      </span>
                    : <span />}
                </div>
              ))}
            </div>
            {navPhrases.length === 2 && (
              <div className="nav-btn-row">
                <button className="nav-btn" onClick={makeNavClick(navPhrases[0])}>{navPhrases[0].navBack ? `← ${navPhrases[0].translation}` : `${navPhrases[0].translation} →`}</button>
                <button className="nav-btn" onClick={makeNavClick(navPhrases[1])}>{navPhrases[1].navBack ? `← ${navPhrases[1].translation}` : `${navPhrases[1].translation} →`}</button>
              </div>
            )}
            {navPhrases.length === 1 && (
              <div className={`nav-btn-container${navPhrases[0].navBack ? ' nav-btn-container-left' : ''}`}>
                <button className="nav-btn" onClick={makeNavClick(navPhrases[0])}>{navPhrases[0].navBack ? `← ${navPhrases[0].translation}` : `${navPhrases[0].translation} →`}</button>
              </div>
            )}
          </div>
        );
      })}
      {!text.tibetanOnly && text.sections.map((section) => {
        let normalCount = 0;

        // Build pairs [label?, normal, image?] for ta-hommage
        type PhrasePair = { label?: typeof section.phrases[0]; normal: typeof section.phrases[0]; image?: typeof section.phrases[0] };
        const pairs: PhrasePair[] = [];
        const isHommageSection = section.id === 'ta-hommage' || section.id === 'ch-priere-lignee';
        if (isHommageSection) {
          let i = 0;
          while (i < section.phrases.length) {
            const p = section.phrases[i];
            if (p.type === 'instructions' && !p.tibetan && section.phrases[i + 1]?.type === 'normal') {
              const label = p;
              const normal = section.phrases[i + 1];
              const image = section.phrases[i + 2]?.type === 'image' ? section.phrases[i + 2] : undefined;
              pairs.push({ label, normal, image });
              i += image ? 3 : 2;
            } else if (p.type === 'normal' && section.phrases[i + 1]?.type === 'image') {
              pairs.push({ normal: p, image: section.phrases[i + 1] });
              i += 2;
            } else if (p.type === 'image-row') {
              pairs.push({ normal: p });
              i++;
            } else {
              pairs.push({ normal: p });
              i++;
            }
          }
        }

        return (
        <div key={section.id} id={section.id} className={`section section-${section.id}`}>
          {section.title && (
            <>
              <div className="section-title-row">
                <h3 className={section.subtitle ? 'section-subtitle' : 'section-title'}>{section.title}</h3>
                {section.id === 'ch-pema-karpo' && (
                  <button className="collapse-btn" onClick={() => setPemaKarpoCollapsed(c => !c)}>
                    {pemaKarpoCollapsed ? '▶' : '▼'}
                  </button>
                )}
              </div>
            </>
          )}
          <div className="phrases">
            {(section.id === 'ch-pema-karpo' && pemaKarpoCollapsed) ? null : isHommageSection ? pairs.map(({ label, normal, image }) => {
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
                    {normal.type === 'image-row' ? (() => {
                      const srcs = normal.srcs ?? [];
                      const single = srcs.length === 1;
                      return (
                        <div className="phrase-image-row" style={single ? { justifyContent: 'center' } : undefined}>
                          {srcs.map((src, idx) => (
                            <img key={idx} src={src} alt="" className="phrase-image-row-item" style={single ? { flex: 'none', width: '30%' } : undefined} />
                          ))}
                        </div>
                      );
                    })() : normal.type === 'instructions' ? (
                      <div className="phrase phrase-special">
                        <span className="phrase-text tibetan">{normal.tibetan}</span>
                        {normal.translation && (
                          <span className="phrase-special-translation" dangerouslySetInnerHTML={{ __html: normal.translation }} />
                        )}
                      </div>
                    ) : (
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
                    )}
                  </div>
                  {image && (
                    <div className="ta-hommage-image">
                      {section.id === 'ch-priere-lignee' ? (
                        <div className="phrase-image-wrapper">
                          <img src={image.src} alt="" className="phrase-image" style={{ width: `${imageSizePct}%` }} />
                          <div className="image-size-pill">
                            <button className="image-size-btn" onClick={() => setImageSizePct(p => Math.min(100, p + 10))}>+</button>
                            <span className="image-size-label">{imageSizePct}</span>
                            <button className="image-size-btn" onClick={() => setImageSizePct(p => Math.max(20, p - 10))}>−</button>
                          </div>
                        </div>
                      ) : (
                        <img src={image.src} alt="" className="phrase-image" style={{ width: '60%' }} />
                      )}
                    </div>
                  )}
                </div>
              );
            }) : section.id === 'ch-supplique' ? (() => {
              const renderInstr = (p: typeof section.phrases[0]) => (
                <div key={p.id} className="phrase-container phrase-no-interact">
                  <div className="phrase phrase-special">
                    <span className="phrase-text tibetan">{p.tibetan}</span>
                    {p.translation && <span className="phrase-special-translation" dangerouslySetInnerHTML={{ __html: p.translation }} />}
                  </div>
                </div>
              );
              const renderVerse = (p: typeof section.phrases[0]) => {
                const isSelected = interactionMode === 'fixed' || selectedPhraseId === p.id;
                return (
                  <div key={p.id} ref={(el) => setPhraseRef(p.id, el)} data-phrase-id={p.id}
                    className={`phrase-container ${interactionMode === 'fixed' ? 'phrase-no-interact' : ''}`}
                    onClick={() => interactionMode !== 'fixed' && handlePhraseClick(p.id)}
                  >
                    {isSelected ? (
                      <PhraseBreakdown phrase={p} displayMode={displayMode} showTranslation={showTranslation} />
                    ) : (
                      <div className="phrase">
                        <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                          {displayMode === 'tibetan' ? p.tibetan : p.phonetics}
                        </span>
                        {showTranslation && p.translation && (
                          <span className="phrase-inline-translation" dangerouslySetInnerHTML={renderTranslation(p.translation)} />
                        )}
                      </div>
                    )}
                  </div>
                );
              };
              const instr1 = section.phrases.find(p => p.id === 'ch-sup-instr-1');
              const verses = section.phrases.filter(p => ['ch-sup-1','ch-sup-2','ch-sup-3','ch-sup-4'].includes(p.id));
              const img = section.phrases.find(p => p.id === 'ch-sup-img');
              const instr2 = section.phrases.find(p => p.id === 'ch-sup-instr-2');
              return (
                <>
                  {instr1 && renderInstr(instr1)}
                  <div className="ch-supplique-layout">
                    <div className="ch-supplique-verses">
                      {verses.map(renderVerse)}
                    </div>
                    {img && (
                      <div className="ch-supplique-image">
                        <div className="phrase-image-wrapper">
                          <img src={img.src} alt="" className="phrase-image" style={{ width: `${chenrezikSizePct}%` }} />
                          <div className="image-size-pill">
                            <button className="image-size-btn" onClick={() => setChenrezikSizePct(p => Math.min(100, p + 10))}>+</button>
                            <span className="image-size-label">{chenrezikSizePct}</span>
                            <button className="image-size-btn" onClick={() => setChenrezikSizePct(p => Math.max(20, p - 10))}>−</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {instr2 && renderInstr(instr2)}
                </>
              );
            })() : section.phrases.map((phrase, idx, filteredPhrases) => {
              const isNormal = phrase.type === 'normal';
              const isMantra = phrase.type === 'mantra';
              const isMantraMain = phrase.type === 'mantra-main';
              const isSpecial = phrase.type === 'instructions' || phrase.type === 'colophon';
              const isImage = phrase.type === 'image';
              const isImageRow = phrase.type === 'image-row';
              const isRepeatBtn = phrase.type === 'repeat-btn';

              if (isRepeatBtn) {
                return (
                  <div key={phrase.id} className="phrase-container phrase-no-interact">
                    <button
                      className="repeat-btn"
                      onClick={() => document.querySelector(`[data-phrase-id="${phrase.targetId}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                      ↑ {phrase.translation}
                    </button>
                  </div>
                );
              }

              if (phrase.type === 'nav-btn') {
                const prevPhrase = filteredPhrases[idx - 1];
                if (prevPhrase?.type === 'nav-btn') return null;
                const nextPhrase = filteredPhrases[idx + 1];
                const makeNavClick = (p: typeof phrase) => () => {
                  dispatch(setSelectedPhrase(null));
                  const from = (location.state as { from?: string } | null)?.from;
                  const target = (p.altTargetFrom && from === p.altTargetFrom && p.altTargetId) ? p.altTargetId : (p.targetId ?? '/');
                  const [path, hash] = target.split('#');
                  if (hash) {
                    navigate(path, { state: { from: text.id } });
                    setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
                  } else {
                    window.scrollTo(0, 0);
                    navigate(target, { state: { from: text.id } });
                  }
                };
                if (nextPhrase?.type === 'nav-btn') {
                  return (
                    <div key={phrase.id} className="phrase-container phrase-no-interact nav-btn-row">
                      <button className="nav-btn" onClick={makeNavClick(phrase)}>{phrase.navBack ? `← ${phrase.translation}` : `${phrase.translation} →`}</button>
                      <button className="nav-btn" onClick={makeNavClick(nextPhrase)}>{nextPhrase.navBack ? `← ${nextPhrase.translation}` : `${nextPhrase.translation} →`}</button>
                    </div>
                  );
                }
                return (
                  <div key={phrase.id} className={`phrase-container phrase-no-interact nav-btn-container${phrase.navBack ? ' nav-btn-container-left' : ''}`}>
                    <button className="nav-btn" onClick={makeNavClick(phrase)}>
                      {phrase.navBack ? `← ${phrase.translation}` : `${phrase.translation} →`}
                    </button>
                  </div>
                );
              }

              if (isImageRow) {
                const srcs = phrase.srcs ?? [];
                const single = srcs.length === 1;
                return (
                  <div key={phrase.id} className="phrase-image-row" style={single ? { justifyContent: 'center' } : undefined}>
                    {srcs.map((src, i) => (
                      <img key={i} src={src} alt="" className="phrase-image-row-item" style={single ? { flex: 'none', width: '30%' } : undefined} />
                    ))}
                  </div>
                );
              }

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
                  ) : isMantraMain ? (() => {
                    const syllablesTib = [
                      { text: 'ཨོཾ་', color: '#ffffff' },
                      { text: 'མ་', color: '#2da44e' },
                      { text: 'ཎི་', color: '#f0c000' },
                      { text: 'པད་', color: '#1a56c4' },
                      { text: 'མེ་', color: '#d73a3a' },
                      { text: 'ཧཱུྃ།', color: '#111111' },
                    ];
                    const syllablesPho = [
                      { text: 'om', color: '#ffffff' },
                      { text: ' ma', color: '#2da44e' },
                      { text: 'ni', color: '#f0c000' },
                      { text: ' pé', color: '#1a56c4' },
                      { text: 'mé', color: '#d73a3a' },
                      { text: ' houng', color: '#111111' },
                    ];
                    const syllables = displayMode === 'tibetan' ? syllablesTib : syllablesPho;
                    return (
                      <div className="phrase phrase-mantra phrase-mantra-main">
                        <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                          {syllables.map((s, i) => (
                            <span key={i} style={s.color === '#111111'
                              ? { display: 'inline-block', verticalAlign: 'baseline', color: s.color, textShadow: '-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white' }
                              : { display: 'inline-block', verticalAlign: 'baseline', color: s.color }
                            }>{s.text}</span>
                          ))}
                        </span>
                      </div>
                    );
                  })() : isSpecial ? (
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
          {(section.id === 'refuge' || section.id === 'supplique' || section.id === 'ch-refuge') && (
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
        {textId !== 'mahakala' && (
          <button className="back-button back-button-bottom" onClick={() => navigate('/')}>
            ← Retour aux textes
          </button>
        )}
        {textId === 'trois-amoncellements' && (
          <button className="back-button back-button-bottom next-text-button" onClick={() => {
            dispatch(setSelectedPhrase(null));
            window.scrollTo(0, 0);
            navigate('/text/vajrasattva');
          }}>
            Vajrasattva →
          </button>
        )}
        {textId === 'vajrasattva' && (
          <button className="back-button back-button-bottom next-text-button" onClick={() => {
            dispatch(setSelectedPhrase(null));
            window.scrollTo(0, 0);
            navigate('/text/louange-manjushri');
          }}>
            Louange à Manjushri →
          </button>
        )}
      </div>
      {text.audioSrc && <AudioPlayer src={text.audioSrc} />}
    </div>
  );
}
