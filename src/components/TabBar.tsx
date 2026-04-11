import { useNavigate, useLocation } from 'react-router-dom';
import './TabBar.css';

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isTextPage = path.startsWith('/text/');

  return (
    <nav className="tab-bar">
      <button
        className={`tab-bar-btn${path === '/bibliotheque' || isTextPage ? ' active' : ''}`}
        onClick={() => navigate('/bibliotheque')}
      >
        <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="currentColor">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
        </svg>
        <span>Bibliothèque</span>
      </button>
      <button
        className={`tab-bar-btn${path === '/' ? ' active' : ''}`}
        onClick={() => navigate('/')}
      >
        <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
        <span>Catalogue</span>
      </button>
      <button
        className={`tab-bar-btn${path === '/compte' ? ' active' : ''}`}
        onClick={() => navigate('/compte')}
      >
        <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <span>Compte</span>
      </button>
    </nav>
  );
}
