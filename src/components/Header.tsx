import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDisplayMode, setInteractionMode, toggleTranslation, changeFontSize, toggleAudioPlayer, toggleBreakdownPosition } from '../store/uiSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import type { DisplayMode, InteractionMode } from '../types';
import { practiceTexts } from '../data/texts';
import './Header.css';

export default function Header() {
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.ui.displayMode);
  const interactionMode = useAppSelector((state) => state.ui.interactionMode);
  const showTranslation = useAppSelector((state) => state.ui.showTranslation);
  const breakdownTranslationAbove = useAppSelector((state) => state.ui.breakdownTranslationAbove);
  const tibetanFontSize = useAppSelector((state) => state.ui.tibetanFontSize);
  const currentAudioSrc = useAppSelector((state) => state.ui.currentAudioSrc);
  const audioPlayerVisible = useAppSelector((state) => state.ui.audioPlayerVisible);
  const navigate = useNavigate();
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const isTextPage = location.pathname !== '/';
  const textId = location.pathname.startsWith('/text/') ? location.pathname.slice(6) : null;
  const isTibetanOnly = textId ? (practiceTexts.find(t => t.id === textId)?.tibetanOnly ?? false) : false;

  const handleModeChange = (mode: DisplayMode) => {
    dispatch(setDisplayMode(mode));
  };

  const handleInteractionChange = (mode: InteractionMode) => {
    const phrases = document.querySelectorAll('.phrase-container');
    let anchor: Element | null = null;
    let minDist = Infinity;
    phrases.forEach(el => {
      const dist = Math.abs(el.getBoundingClientRect().top);
      if (dist < minDist) { minDist = dist; anchor = el; }
    });
    const topBefore = (anchor as Element | null)?.getBoundingClientRect().top ?? 0;
    flushSync(() => { dispatch(setInteractionMode(mode)); });
    if (anchor) {
      window.scrollBy(0, (anchor as Element).getBoundingClientRect().top - topBefore);
    }
  };

  useEffect(() => {
    if (!settingsOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [settingsOpen]);

  return (
    <header className={`header${isTextPage ? ' header-text-page' : ''}`}>
      <h1 className="header-title" onClick={() => navigate('/')}>
        <span className="label-full">མོཊ་ཨ་མོཊ — Mot à Mot</span>
        <span className="label-short tibetan">མོཊ་ཨ་མོཊ</span>
      </h1>
      {isTextPage && currentAudioSrc && (
        <button
          className={`audio-toggle-btn${audioPlayerVisible ? ' active' : ''}`}
          onClick={() => dispatch(toggleAudioPlayer())}
          aria-label="Lecteur audio"
        ><svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg></button>
      )}
      {isTextPage && (
        <div className="settings-wrapper" ref={settingsRef}>
          <button
            className={`settings-btn${settingsOpen ? ' active' : ''}`}
            onClick={() => setSettingsOpen(!settingsOpen)}
            aria-label="Paramètres"
          ><svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg></button>
          {settingsOpen && (
            <div className="settings-menu">
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
                    <input type="radio" name="displayMode" value="tibetan" checked={displayMode === 'tibetan'} onChange={() => handleModeChange('tibetan')} />
                    Tibétain
                  </label>
                  <label className={`radio-label ${displayMode === 'phonetics' ? 'active' : ''}`}>
                    <input type="radio" name="displayMode" value="phonetics" checked={displayMode === 'phonetics'} onChange={() => handleModeChange('phonetics')} />
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
                        <input type="radio" name="interactionMode" value="click" checked={interactionMode === 'click'} onChange={() => handleInteractionChange('click')} />
                        Clic
                      </label>
                      <label className={`radio-label ${interactionMode === 'fixed' ? 'active' : ''}`}>
                        <input type="radio" name="interactionMode" value="fixed" checked={interactionMode === 'fixed'} onChange={() => handleInteractionChange('fixed')} />
                        Fixe
                      </label>
                      <label className={`radio-label radio-label-scroll ${interactionMode === 'scroll' ? 'active' : ''}`}>
                        <input type="radio" name="interactionMode" value="scroll" checked={interactionMode === 'scroll'} onChange={() => handleInteractionChange('scroll')} />
                        Défilement
                      </label>
                    </div>
                  </div>
                  <div className="settings-row">
                    <span className="settings-label">Traduction</span>
                    <button
                      className={`toggle-button ${showTranslation ? 'active' : ''}`}
                      onClick={() => dispatch(toggleTranslation())}
                    >
                      {showTranslation ? 'Activée' : 'Désactivée'}
                    </button>
                  </div>
                  <div className="settings-row">
                    <span className="settings-label">Mot à mot</span>
                    <div className="radio-group">
                      <label className={`radio-label ${breakdownTranslationAbove ? 'active' : ''}`}>
                        <input type="radio" name="breakdownPos" checked={breakdownTranslationAbove} onChange={() => !breakdownTranslationAbove && dispatch(toggleBreakdownPosition())} />
                        Dessus
                      </label>
                      <label className={`radio-label ${!breakdownTranslationAbove ? 'active' : ''}`}>
                        <input type="radio" name="breakdownPos" checked={!breakdownTranslationAbove} onChange={() => breakdownTranslationAbove && dispatch(toggleBreakdownPosition())} />
                        Dessous
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
