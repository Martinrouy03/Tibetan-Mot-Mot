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
            className={`text-card${(text.thumbnail || text.thumbnails) ? ' text-card-with-thumbnail' : ''}`}
            onClick={() => navigate(`/text/${text.id}`)}
            disabled={text.sections.length === 0}
          >
            {text.thumbnail && (
              <div className="text-card-thumbnail-wrapper">
                <img src={text.thumbnail} alt="" className="text-card-thumbnail" />
                {text.thumbnailLogo && (
                  <img src={text.thumbnailLogo} alt="" className="text-card-thumbnail-logo" />
                )}
              </div>
            )}
            {text.thumbnails && (
              <div className="text-card-thumbnails">
                {text.thumbnails.map((src, i) => (
                  <img key={i} src={src} alt="" className="text-card-thumbnail-stacked" />
                ))}
              </div>
            )}
            <div className="text-card-content">
              <span className="text-card-tibetan tibetan">{text.tibetanTitle}</span>
              <span className="text-card-title">{text.title}</span>
              {text.sections.length === 0 && (
                <span className="text-card-badge">Bientôt disponible</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
