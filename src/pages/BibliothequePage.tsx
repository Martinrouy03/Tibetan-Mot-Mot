import { useNavigate } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import './BibliothequePage.css';

const PURCHASED_IDS = ['pratique-chenrezik', 'pratique-chenrezik-thoungma', 'vajrasattva'];

export default function BibliothequePage() {
  const navigate = useNavigate();
  const purchased = practiceTexts.filter(t => PURCHASED_IDS.includes(t.id));

  return (
    <div className="bibliotheque-page">
      <h2 className="bibliotheque-title">Ma bibliothèque</h2>
      {purchased.length === 0 ? (
        <p className="bibliotheque-empty">Vous n'avez pas encore de textes achetés.</p>
      ) : (
        <div className="text-grid">
          {purchased.map((text) => (
            <button
              key={text.id}
              className={`text-card${(text.thumbnail || text.thumbnails) ? ' text-card-with-thumbnail' : ''}`}
              onClick={() => navigate(`/text/${text.id}`)}
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
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
