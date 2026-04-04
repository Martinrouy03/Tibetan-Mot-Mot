import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedPhrase, setCurrentAudioSrc, setSeekToTimestamp, toggleAudioPlayer, changeFontSize, toggleTranslation, setDisplayMode, setInteractionMode } from '../store/uiSlice';
import type { DisplayMode, InteractionMode } from '../types';
import PhraseBreakdown from '../components/PhraseBreakdown';
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
  const currentAudioSrc = useAppSelector((state) => state.ui.currentAudioSrc);
  const audioPlayerVisible = useAppSelector((state) => state.ui.audioPlayerVisible);
  const tibetanFontSize = useAppSelector((state) => state.ui.tibetanFontSize);

  const [pemaKarpoCollapsed, setPemaKarpoCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSettingsOpen, setMobileSettingsOpen] = useState(false);
  const [scrollingMantraId, setScrollingMantraId] = useState<string | null>(null);
  const mantraWrapperRef = useRef<HTMLDivElement>(null);
  const phraseRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const wheelAccum = useRef(0);
  const lastClickedId = useRef<string | null>(null);
  const isProgrammaticScroll = useRef(false);
  const centerPhraseRef = useRef<Element | null>(null);
  const prevInteractionMode = useRef<string | null>(null);

  const text = practiceTexts.find((t) => t.id === textId);

  useEffect(() => {
    dispatch(setCurrentAudioSrc(text?.audioSrc ?? null));
    return () => { dispatch(setCurrentAudioSrc(null)); };
  }, [text?.audioSrc, dispatch]);

  useEffect(() => {
    const seekTo = (location.state as { seekTo?: number } | null)?.seekTo;
    if (seekTo !== undefined) {
      dispatch(setSeekToTimestamp(seekTo));
    }
  }, [location.state, dispatch]);

  useEffect(() => {
    let anchor: Element | null = null;

    const captureAnchor = () => {
      const phrases = document.querySelectorAll('[data-phrase-id]');
      let best: Element | null = null;
      let minDist = Infinity;
      phrases.forEach(el => {
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < minDist) { minDist = dist; best = el; }
      });
      anchor = best;
    };

    const restoreAnchor = () => {
      if (!anchor) return;
      anchor.scrollIntoView({ block: 'start' });
      anchor = null;
    };

    const onOrientationChange = () => {
      captureAnchor();
      const onResize = () => {
        restoreAnchor();
        window.removeEventListener('resize', onResize);
      };
      window.addEventListener('resize', onResize);
      setTimeout(() => { window.removeEventListener('resize', onResize); restoreAnchor(); }, 500);
    };

    window.addEventListener('orientationchange', onOrientationChange);
    return () => window.removeEventListener('orientationchange', onOrientationChange);
  }, []);

  useEffect(() => {
    const wrapper = mantraWrapperRef.current;
    if (!scrollingMantraId || !wrapper) return;
    const rafId = requestAnimationFrame(() => {
      const spans = wrapper.querySelectorAll<HTMLSpanElement>('.phrase-text');
      if (!spans[0]) return;
      const spanWidth = spans[0].getBoundingClientRect().width || wrapper.scrollWidth / 2;
      if (!spanWidth) return;
      wrapper.style.width = `${2 * spanWidth + 30}px`;
    });
    return () => {
      cancelAnimationFrame(rafId);
      if (wrapper) wrapper.style.width = '';
    };
  }, [scrollingMantraId]);

  const hasSidebar = textId === 'pratique-chenrezik' || textId === 'pratique-chenrezik-thoungma' || textId === 'souhaits-samantabhadra';
  const isTibetanOnly = text?.tibetanOnly ?? false;
  const navSections = useMemo(() => {
    if (!text || !hasSidebar) return [];
    return text.sections.filter((s) => s.title !== '');
  }, [text, hasSidebar]);

  const scrollToSection = (section: { id: string; audioTimestamp?: number }) => {
    document.getElementById(section.id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    if (section.audioTimestamp !== undefined) {
      dispatch(setSeekToTimestamp(section.audioTimestamp));
    }
    setSidebarOpen(false);
  };

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

  const updateCenterPhrase = useCallback(() => {
    const phrases = document.querySelectorAll('[data-phrase-id]');
    const viewportCenter = window.innerHeight / 2;
    let best: Element | null = null;
    let minDist = Infinity;
    phrases.forEach(el => {
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      if (dist < minDist) { minDist = dist; best = el; }
    });
    centerPhraseRef.current = best;
  }, []);

  useEffect(() => {
    updateCenterPhrase();
    window.addEventListener('scroll', updateCenterPhrase, { passive: true });
    return () => window.removeEventListener('scroll', updateCenterPhrase);
  }, [updateCenterPhrase]);

  useEffect(() => {
    if (prevInteractionMode.current === null) {
      prevInteractionMode.current = interactionMode;
      return;
    }
    if (prevInteractionMode.current === interactionMode) return;
    prevInteractionMode.current = interactionMode;
    const anchor = centerPhraseRef.current;
    if (!anchor) return;
    requestAnimationFrame(() => { anchor.scrollIntoView({ block: 'center' }); });
  }, [interactionMode]);

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
    <div className={hasSidebar ? 'text-page-layout' : ''}>
      <nav className="mobile-strip">
        <button className="mobile-strip-btn" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </button>
        {hasSidebar && (
          <button className={`mobile-strip-btn${sidebarOpen ? ' active' : ''}`}
            onClick={() => { setSidebarOpen(o => !o); setMobileSettingsOpen(false); }}>
            {sidebarOpen ? '✕' : '☰'}
          </button>
        )}
        {currentAudioSrc && (
          <button className={`mobile-strip-btn${audioPlayerVisible ? ' active' : ''}`}
            onClick={() => dispatch(toggleAudioPlayer())}>
            <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          </button>
        )}
        <button className={`mobile-strip-btn${mobileSettingsOpen ? ' active' : ''}`}
          onClick={() => { setMobileSettingsOpen(o => !o); setSidebarOpen(false); }}>
          <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
        </button>
        {sidebarOpen && hasSidebar && (
          <>
            <div className="mobile-strip-overlay" onClick={() => setSidebarOpen(false)} />
            <div className="mobile-strip-panel">
              <ul className="sidebar-nav-list">
                {navSections.map((s) => (
                  <li key={s.id}>
                    <button className="sidebar-nav-item" onClick={() => scrollToSection(s)}>
                      {s.title}{s.audioTimestamp !== undefined && <span className="sidebar-audio-icon">♪</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {mobileSettingsOpen && (
          <>
            <div className="mobile-strip-overlay" onClick={() => setMobileSettingsOpen(false)} />
            <div className="mobile-strip-panel">
              <div className="settings-row">
                <span className="settings-label">Taille</span>
                <div className="font-size-control">
                  <button className="font-size-btn" onClick={() => dispatch(changeFontSize(-3))}>−</button>
                  <span className="font-size-icon">{tibetanFontSize}px</span>
                  <button className="font-size-btn" onClick={() => dispatch(changeFontSize(3))}>+</button>
                </div>
              </div>
              <div className="settings-row">
                <span className="settings-label">Affichage</span>
                <div className="radio-group">
                  <label className={`radio-label ${displayMode === 'tibetan' ? 'active' : ''}`}>
                    <input type="radio" name="mobileDisplayMode" value="tibetan" checked={displayMode === 'tibetan'} onChange={() => dispatch(setDisplayMode('tibetan' as DisplayMode))} />
                    Tibétain
                  </label>
                  <label className={`radio-label ${displayMode === 'phonetics' ? 'active' : ''}`}>
                    <input type="radio" name="mobileDisplayMode" value="phonetics" checked={displayMode === 'phonetics'} onChange={() => dispatch(setDisplayMode('phonetics' as DisplayMode))} />
                    Phonétique
                  </label>
                </div>
              </div>
              {!isTibetanOnly && (
                <>
                  <div className="settings-row">
                    <span className="settings-label">Mode</span>
                    <div className="radio-group">
                      <label className={`radio-label ${interactionMode === 'click' ? 'active' : ''}`}>
                        <input type="radio" name="mobileInteractionMode" value="click" checked={interactionMode === 'click'} onChange={() => dispatch(setInteractionMode('click' as InteractionMode))} />
                        Clic
                      </label>
                      <label className={`radio-label ${interactionMode === 'fixed' ? 'active' : ''}`}>
                        <input type="radio" name="mobileInteractionMode" value="fixed" checked={interactionMode === 'fixed'} onChange={() => dispatch(setInteractionMode('fixed' as InteractionMode))} />
                        Fixe
                      </label>
                    </div>
                  </div>
                  <div className="settings-row">
                    <span className="settings-label">Traduction</span>
                    <button className={`toggle-button ${showTranslation ? 'active' : ''}`}
                      onClick={() => dispatch(toggleTranslation())}>
                      {showTranslation ? 'Activée' : 'Désactivée'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </nav>
      {hasSidebar && (
        <nav className={`text-sidebar ${sidebarOpen ? 'text-sidebar-open' : ''}`}>
          <div className="text-sidebar-sticky">
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen((o) => !o)}
              aria-label={sidebarOpen ? 'Fermer la navigation' : 'Ouvrir la navigation'}
            >
              {sidebarOpen ? '✕' : '☰'}
            </button>
            <ul className="sidebar-nav-list">
              {navSections.map((s) => (
                <li key={s.id}>
                  <button className="sidebar-nav-item" onClick={() => scrollToSection(s)}>
                    {s.title}{s.audioTimestamp !== undefined && <span className="sidebar-audio-icon">♪</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    <div className={`text-page text-${text.id} ${interactionMode === 'scroll' ? 'text-page-scroll' : ''}`}>
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
          const navState: { from: string; seekTo?: number } = { from: text.id };
          if (p.audioTimestamp !== undefined) navState.seekTo = p.audioTimestamp;
          if (hash) {
            navigate(path, { state: navState });
            setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
          } else {
            window.scrollTo(0, 0);
            navigate(target, { state: navState });
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
                      <img src={image.src} alt="" className="phrase-image" />
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
                        <img src={img.src} alt="" className="phrase-image" style={{ width: '100%' }} />
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
                  const navState: { from: string; seekTo?: number } = { from: text.id };
                  if (p.audioTimestamp !== undefined) navState.seekTo = p.audioTimestamp;
                  if (hash) {
                    navigate(path, { state: navState });
                    setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
                  } else {
                    window.scrollTo(0, 0);
                    navigate(target, { state: navState });
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
                <React.Fragment key={phrase.id}>
                <div
                  ref={(el) => setPhraseRef(phrase.id, el)}
                  data-phrase-id={phrase.id}
                  className={`phrase-container ${!isNormal || interactionMode === 'fixed' ? 'phrase-no-interact' : ''}${phrase.stanceNumber !== undefined ? ' has-stance-number' : ''}`}
                  onClick={() => isNormal && interactionMode !== 'fixed' && handlePhraseClick(phrase.id)}
                >
                  {phrase.stanceNumber !== undefined && (
                    <span className="stance-number">[S.{phrase.stanceNumber}]</span>
                  )}
                  {isImage ? (
                    <div className="phrase-image-wrapper phrase-image-mantra">
                      <img src={phrase.src} alt="" className="phrase-image" />
                    </div>
                  ) : isNormal && (interactionMode === 'fixed' || selectedPhraseId === phrase.id) ? (
                    <PhraseBreakdown phrase={phrase} displayMode={displayMode} showTranslation={showTranslation} />
                  ) : isMantra ? (
                    <div className={`phrase phrase-mantra${scrollingMantraId === phrase.id ? ' phrase-mantra-scrolling-active' : ''}`}>
                      {scrollingMantraId === phrase.id ? (
                        <div className="phrase-mantra-scroll-clip">
                          <div className="phrase-mantra-scroll-wrapper" ref={mantraWrapperRef}>
                            <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                              {displayMode === 'tibetan' ? phrase.tibetan : phrase.phonetics}
                            </span>
                            <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`} aria-hidden="true">
                              {displayMode === 'tibetan' ? phrase.tibetan : phrase.phonetics}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className={`phrase-text ${displayMode === 'tibetan' ? 'tibetan' : 'phrase-text-phonetics'}`}>
                          {displayMode === 'tibetan' ? phrase.tibetan : phrase.phonetics}
                        </span>
                      )}
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
                      { text: ' pad', color: '#1a56c4' },
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
                        <span className="phrase-special-translation">
                          <span dangerouslySetInnerHTML={{ __html: phrase.translation }} />
                          {phrase.id === 'vs-3-4' && (
                            <button
                              className="mantra-scroll-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setScrollingMantraId(scrollingMantraId === 'vs-3-3' ? null : 'vs-3-3');
                              }}
                            >
                              {scrollingMantraId === 'vs-3-3' ? '⏹' : '▶'}
                            </button>
                          )}
                        </span>
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
              {phrase.id === 'dw-mantra' && (
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
              </React.Fragment>
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
    </div>
    </div>
  );
}
