import { useState, useRef, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import './ComptePage.css';

const LANGUAGES = [
  { code: 'fr', label: 'Français', fi: 'fr' },
  { code: 'en', label: 'English', fi: 'gb' },
  { code: 'es', label: 'Español', fi: 'es' },
  { code: 'de', label: 'Deutsch', fi: 'de' },
];

export default function ComptePage() {
  const [lang, setLang] = useState('fr');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find(l => l.code === lang)!;

  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [langOpen]);
  return (
    <div className="compte-page">
      <div className="compte-avatar">
        <img src="/id_martin.jpg" alt="Martin Rouy" className="compte-avatar-img" />
      </div>
      <h2 className="compte-name">Martin Rouy</h2>
      <p className="compte-email">martin.rouy@email.com</p>

      <div className="compte-section">
        <h3 className="compte-section-title">Mon abonnement</h3>
        <div className="compte-info-row">
          <span>Statut</span>
          <span className="compte-badge">Sans abonnement</span>
        </div>
      </div>

      <div className="compte-section">
        <h3 className="compte-section-title">Mes achats</h3>
        <div className="compte-info-row">
          <span>Textes achetés</span>
          <span className="compte-value">3</span>
        </div>
      </div>

      <div className="compte-section">
        <h3 className="compte-section-title">Paramètres</h3>
        <button className="compte-btn">Changer de mot de passe</button>
        <div className="compte-btn compte-btn-lang">
          <span>Langue de l'interface</span>
          <div className="compte-lang-dropdown" ref={langRef}>
            <button className="compte-lang-trigger" onClick={() => setLangOpen(!langOpen)}>
              <span className={`fi fi-${current.fi}`} />
              <svg viewBox="0 0 24 24" width="0.8em" height="0.8em" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            {langOpen && (
              <div className="compte-lang-menu">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    className={`compte-lang-option${lang === l.code ? ' active' : ''}`}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                  >
                    <span className={`fi fi-${l.fi}`} />
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="compte-btn compte-btn-danger">Se déconnecter</button>

      </div>
    </div>
  );
}
