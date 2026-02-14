import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDisplayMode, setInteractionMode, toggleTranslation } from '../store/uiSlice';
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

  const handleModeChange = (mode: DisplayMode) => {
    dispatch(setDisplayMode(mode));
  };

  const handleInteractionChange = (mode: InteractionMode) => {
    dispatch(setInteractionMode(mode));
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={() => navigate('/')}>
        མོཊ་ཨ་མོཊ — Mot à Mot
      </h1>
      {location.pathname !== '/' && (
        <div className="header-controls">
          <div className="radio-group">
            <label className={`radio-label ${displayMode === 'tibetan' ? 'active' : ''}`}>
              <input
                type="radio"
                name="displayMode"
                value="tibetan"
                checked={displayMode === 'tibetan'}
                onChange={() => handleModeChange('tibetan')}
              />
              <span>Tibétain</span>
            </label>
            <label className={`radio-label ${displayMode === 'phonetics' ? 'active' : ''}`}>
              <input
                type="radio"
                name="displayMode"
                value="phonetics"
                checked={displayMode === 'phonetics'}
                onChange={() => handleModeChange('phonetics')}
              />
              <span>Phonétique</span>
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
              <span>Clic</span>
            </label>
            <label className={`radio-label ${interactionMode === 'scroll' ? 'active' : ''}`}>
              <input
                type="radio"
                name="interactionMode"
                value="scroll"
                checked={interactionMode === 'scroll'}
                onChange={() => handleInteractionChange('scroll')}
              />
              <span>Défilement</span>
            </label>
          </div>
          <button
            className={`toggle-button ${showTranslation ? 'active' : ''}`}
            onClick={() => dispatch(toggleTranslation())}
          >
            Traduction
          </button>
        </div>
      )}
    </header>
  );
}
