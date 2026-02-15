import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedPhrase } from '../store/uiSlice';
import PhraseBreakdown from '../components/PhraseBreakdown';
import './TextPage.css';

const WHEEL_TICKS_PER_PHRASE = 3;

export default function TextPage() {
  const { textId } = useParams<{ textId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.ui.displayMode);
  const interactionMode = useAppSelector((state) => state.ui.interactionMode);
  const selectedPhraseId = useAppSelector((state) => state.ui.selectedPhraseId);
  const showTranslation = useAppSelector((state) => state.ui.showTranslation);
  const phraseRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const wheelAccum = useRef(0);
  const lastClickedId = useRef<string | null>(null);

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

  useEffect(() => {
    if (interactionMode !== 'scroll') return;

    // Start from last clicked phrase, or first phrase if none
    if (!selectedPhraseId && allPhraseIds.length > 0) {
      const startId = lastClickedId.current && allPhraseIds.includes(lastClickedId.current)
        ? lastClickedId.current
        : allPhraseIds[0];
      dispatch(setSelectedPhrase(startId));
      setTimeout(() => {
        phraseRefs.current.get(startId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
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
          phraseRefs.current.get(nextId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [interactionMode, selectedPhraseId, allPhraseIds, dispatch]);

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
      {text.sections.map((section) => (
        <div key={section.id} className="section">
          <h3 className="section-title">{section.title}</h3>
          <div className="phrases">
            {section.phrases.map((phrase) => {
              const isNormal = phrase.type === 'normal';
              const isMantra = phrase.type === 'mantra';
              const isSpecial = phrase.type === 'instructions' || phrase.type === 'colophon';

              return (
                <div
                  key={phrase.id}
                  ref={(el) => setPhraseRef(phrase.id, el)}
                  data-phrase-id={phrase.id}
                  className={`phrase-container ${!isNormal ? 'phrase-no-interact' : ''}`}
                  onClick={() => isNormal && handlePhraseClick(phrase.id)}
                >
                  {isNormal && selectedPhraseId === phrase.id ? (
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
                      {showTranslation && phrase.translation && (
                        <span className="phrase-special-translation">{phrase.translation}</span>
                      )}
                    </div>
                  ) : (
                    <div className="phrase">
                      <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                        {displayMode === 'tibetan' ? phrase.tibetan : phrase.phonetics}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
