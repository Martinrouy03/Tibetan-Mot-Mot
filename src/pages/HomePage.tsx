import { useNavigate } from 'react-router-dom';
import { textesPratique, textesSoutras, textesPrieres } from '../data/texts';
import type { AppLang, PracticeText } from '../types';
import { useAppSelector } from '../store/hooks';
import './HomePage.css';

function filterByLang(texts: PracticeText[], lang: AppLang): PracticeText[] {
  return texts.filter((t) => t.sections.length > 0 && (t.lang === lang || (!t.lang && lang === "fr")));
}

function TextGrid({ texts }: { texts: PracticeText[] }) {
  const navigate = useNavigate();
  const lang = useAppSelector((state) => state.ui.language);
  const filtered = filterByLang(texts, lang);
  if (filtered.length === 0) return null;
  return (
    <div className="text-grid">
      {filtered.map((text) => (
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
            <span className="text-card-tibetan tibetan">{text.shortTibetanTitle ?? text.tibetanTitle}</span>
            <span className="text-card-title">{text.title}</span>
            {text.comingSoon && <span className="text-card-coming-soon-label">bientôt disponible</span>}
          </div>
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  const lang = useAppSelector((state) => state.ui.language);

  return (
    <div className="home-page">
      <h2 className="home-subtitle">{lang === "en" ? "Rituals" : "Rituels"}</h2>
      <TextGrid texts={textesPratique} />
      <h2 className="home-subtitle">{lang === "en" ? "Sutras" : "Soutras"}</h2>
      <TextGrid texts={textesSoutras} />
      <h2 className="home-subtitle">{lang === "en" ? "Prayers and Praises" : "Prières et louanges"}</h2>
      <TextGrid texts={textesPrieres} />
    </div>
  );
}
