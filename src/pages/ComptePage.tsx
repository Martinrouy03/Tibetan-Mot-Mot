import { useState, useRef, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import './ComptePage.css';

const LANGUAGES = [
  { code: 'fr', label: 'Français', fi: 'fr' },
  { code: 'en', label: 'English', fi: 'gb' },
  { code: 'es', label: 'Español', fi: 'es' },
  { code: 'de', label: 'Deutsch', fi: 'de' },
];

const PLANS = [
  {
    id: 'soutien',
    name: 'Soutien',
    price: 10,
    textPrice: '14,99 €',
    description: 'Accès aux textes à prix réduit',
    color: '#c9a84c',
  },
  {
    id: 'djinda',
    name: 'Djinda',
    price: 30,
    textPrice: '9,99 €',
    description: 'Accès aux textes à prix réduit+',
    color: '#9b7fd4',
  },
  {
    id: 'mecene',
    name: 'Mécène',
    price: 60,
    textPrice: 'quasi-gratuit',
    description: 'Soutenez la diffusion des enseignements',
    color: '#4caf50',
  },
];

export default function ComptePage() {
  const [lang, setLang] = useState('fr');
  const [langOpen, setLangOpen] = useState(false);
  const [subscription, setSubscription] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find(l => l.code === lang)!;
  const currentPlan = PLANS.find(p => p.id === subscription);

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
      <div className="compte-col-left">
        <div className="compte-avatar">
          <img src="/id_martin.jpg" alt="Martin Rouy" className="compte-avatar-img" />
        </div>
        <h2 className="compte-name">Martin Rouy</h2>
        <p className="compte-email">martin.rouy@email.com</p>

        <div className="compte-section">
          <h3 className="compte-section-title">Mon abonnement</h3>
          <div className="compte-info-row">
            <span>Statut</span>
            <span className="compte-badge" style={currentPlan ? { color: currentPlan.color, borderColor: currentPlan.color } : {}}>
              {currentPlan ? currentPlan.name : 'Sans abonnement'}
            </span>
          </div>
          {currentPlan && (
            <div className="compte-info-row">
              <span>Prix par texte</span>
              <span className="compte-value">{currentPlan.textPrice}</span>
            </div>
          )}
          {!subscription ? (
            <button className="compte-btn-cta" onClick={() => setModalOpen(true)}>
              S'abonner
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </button>
          ) : (
            <div className="compte-sub-actions">
              <button className="compte-btn" onClick={() => setModalOpen(true)}>Changer d'abonnement</button>
              <button className="compte-btn compte-btn-danger" onClick={() => setSubscription(null)}>Résilier</button>
            </div>
          )}
        </div>

      </div>

      <div className="compte-col-right">
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

      {modalOpen && (
        <div className="sub-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="sub-modal" onClick={e => e.stopPropagation()}>
            <button className="sub-modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <h2 className="sub-modal-title">Choisir un abonnement</h2>
            <p className="sub-modal-subtitle">Sans abonnement : 24,99 € par texte</p>
            <div className="sub-plans">
              {PLANS.map(plan => (
                <button
                  key={plan.id}
                  className={`sub-plan${subscription === plan.id ? ' active' : ''}`}
                  style={{ '--plan-color': plan.color } as React.CSSProperties}
                  onClick={() => { setSubscription(plan.id); setModalOpen(false); }}
                >
                  <div className="sub-plan-header">
                    <span className="sub-plan-name">{plan.name}</span>
                    <span className="sub-plan-price">{plan.price} € <span className="sub-plan-period">/mois</span></span>
                  </div>
                  <div className="sub-plan-body">
                    <span className="sub-plan-desc">{plan.description}</span>
                    <span className="sub-plan-text-price">Textes : {plan.textPrice}</span>
                  </div>
                  {subscription === plan.id && (
                    <span className="sub-plan-current">Actuel</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
