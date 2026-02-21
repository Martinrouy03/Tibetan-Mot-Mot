import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDisplayMode, setInteractionMode, toggleTranslation, changeFontSize } from '../store/uiSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import type { DisplayMode, InteractionMode } from '../types';
import './Header.css';

export default function Header() {
  const dispatch = useAppDispatch();
  const displayMode = useAppSelector((state) => state.ui.displayMode);
  const interactionMode = useAppSelector((state) => state.ui.interactionMode);
  const showTranslation = useAppSelector((state) => state.ui.showTranslation);
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const handleModeChange = (mode: DisplayMode) => {
    dispatch(setDisplayMode(mode));
  };

  const handleInteractionChange = (mode: InteractionMode) => {
    dispatch(setInteractionMode(mode));
  };

  const isTextPage = location.pathname !== '/';

  return (
    <header className={`header ${collapsed && isTextPage ? 'header-collapsed' : ''}`}>
      {!(collapsed && isTextPage) && (
        <h1 className="header-title" onClick={() => navigate('/')}>
          <span className="label-full">མོཊ་ཨ་མོཊ — Mot à Mot</span>
          <span className="label-short tibetan">མོཊ་ཨ་མོཊ</span>
        </h1>
      )}
      {isTextPage && (
        <button
          className="header-collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? '···' : '▲'}
        </button>
      )}
      {isTextPage && !collapsed && (
        <div className="header-controls">
          <div className="font-size-control">
            <button className="font-size-btn" onClick={() => dispatch(changeFontSize(-1))}>−</button>
            <span className="font-size-icon">🔍</span>
            <button className="font-size-btn" onClick={() => dispatch(changeFontSize(1))}>+</button>
          </div>
          <div className="radio-group">
            <label className={`radio-label ${displayMode === 'tibetan' ? 'active' : ''}`}>
              <input
                type="radio"
                name="displayMode"
                value="tibetan"
                checked={displayMode === 'tibetan'}
                onChange={() => handleModeChange('tibetan')}
              />
              <span className="label-full">Tibétain</span>
              <span className="label-short tibetan">ཀ</span>
            </label>
            <label className={`radio-label ${displayMode === 'phonetics' ? 'active' : ''}`}>
              <input
                type="radio"
                name="displayMode"
                value="phonetics"
                checked={displayMode === 'phonetics'}
                onChange={() => handleModeChange('phonetics')}
              />
              <span className="label-full">Phonétique</span>
              <span className="label-short">ka</span>
            </label>
          </div>
          <div className="radio-group">
            <label className={`radio-label ${interactionMode === 'click' ? 'active' : ''}`}>
              <input
                type="radio"
                name="interactionMode"
                value="click"
                checked={interactionMode === 'click'}
                onChange={() => handleInteractionChange('click')}
              />
              <span className="label-full">Clic</span>
              <span className="label-short">🖱</span>
            </label>
            <label className={`radio-label ${interactionMode === 'fixed' ? 'active' : ''}`}>
              <input
                type="radio"
                name="interactionMode"
                value="fixed"
                checked={interactionMode === 'fixed'}
                onChange={() => handleInteractionChange('fixed')}
              />
              <span className="label-full">Fixe</span>
              <span className="label-short">≡</span>
            </label>
            <label className={`radio-label ${interactionMode === 'scroll' ? 'active' : ''}`}>
              <input
                type="radio"
                name="interactionMode"
                value="scroll"
                checked={interactionMode === 'scroll'}
                onChange={() => handleInteractionChange('scroll')}
              />
              <span className="label-full">Défilement</span>
              <span className="label-short">↕</span>
            </label>
          </div>
          <button
            className={`toggle-button ${showTranslation ? 'active' : ''}`}
            onClick={() => dispatch(toggleTranslation())}
          >
            <span className="label-full">Traduction</span>
            <span className="label-short">Trad</span>
          </button>
        </div>
      )}
    </header>
  );
}
