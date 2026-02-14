import { useNavigate } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h2 className="home-subtitle">Textes de pratique</h2>
      <div className="text-grid">
        {practiceTexts.map((text) => (
          <button
            key={text.id}
            className="text-card"
            onClick={() => navigate(`/text/${text.id}`)}
            disabled={text.sections.length === 0}
          >
            <span className="text-card-tibetan">{text.tibetanTitle}</span>
            <span className="text-card-title">{text.title}</span>
            {text.sections.length === 0 && (
              <span className="text-card-badge">Bientôt disponible</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
