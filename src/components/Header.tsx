import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDisplayMode, setInteractionMode, toggleTranslation, changeFontSize, toggleAudioPlayer } from '../store/uiSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import type { DisplayMode, InteractionMode } from '../types';
import { practiceTexts } from '../data/texts';
import './Header.css';

export default function Header() {
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.ui.displayMode);
  const interactionMode = useAppSelector((state) => state.ui.interactionMode);
  const showTranslation = useAppSelector((state) => state.ui.showTranslation);
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
        >🔊</button>
      )}
      {isTextPage && (
        <div className="settings-wrapper" ref={settingsRef}>
          <button
            className={`settings-btn${settingsOpen ? ' active' : ''}`}
            onClick={() => setSettingsOpen(!settingsOpen)}
            aria-label="Paramètres"
          >⚙️</button>
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
                </>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
