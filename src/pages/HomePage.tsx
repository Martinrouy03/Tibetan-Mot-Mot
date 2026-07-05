import { useNavigate } from 'react-router-dom';
import { textesPratique, textesSoutras, textesPrieres } from '../data/texts';
import type { PracticeText } from '../types';
import './HomePage.css';

function TextGrid({ texts }: { texts: PracticeText[] }) {
  const navigate = useNavigate();
  return (
    <div className="text-grid">
      {texts.filter((text) => text.sections.length > 0).map((text) => (
        <button
          key={text.id}
          className={`text-card${(text.thumbnail || text.thumbnails) ? ' text-card-with-thumbnail' : ''}${text.comingSoon ? ' text-card-coming-soon' : ''}`}
          onClick={() => !text.comingSoon && navigate(`/text/${text.id}`)}
          disabled={text.comingSoon}
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
            <div className={`text-card-thumbnails${text.thumbnails.length === 4 ? " text-card-thumbnails--2col" : ""}`}>
              {text.thumbnails.map((src, i) => (
                <img key={i} src={src} alt="" className="text-card-thumbnail-stacked" />
              ))}
            </div>
          )}
          <div className="text-card-content">
            <span className="text-card-tibetan tibetan">{text.tibetanTitle}</span>
            <span className="text-card-title">{text.title}</span>
            {text.comingSoon && <span className="text-card-coming-soon-label">bientôt disponible</span>}
          </div>
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <h2 className="home-subtitle">Rituels</h2>
      <TextGrid texts={textesPratique} />
      <h2 className="home-subtitle">Soutras</h2>
      <TextGrid texts={textesSoutras} />
      <h2 className="home-subtitle">Prières et louanges</h2>
      <TextGrid texts={textesPrieres} />
    </div>
  );
}
