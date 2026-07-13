import React from 'react';
import { useNavigate } from 'react-router-dom';
import { textesPratique, textesSoutras, textesPrieres } from '../data/texts';
import type { AppLang, PracticeText } from '../types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setLanguage } from '../store/uiSlice';
import './HomePage.css';

const FLAG_FR = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="24" height="16">
    <rect width="1" height="2" fill="#002395"/>
    <rect x="1" width="1" height="2" fill="#fff"/>
    <rect x="2" width="1" height="2" fill="#ED2939"/>
  </svg>
);
const FLAG_EN = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="16">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);
const FLAG_DE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="16">
    <rect width="5" height="1" fill="#000"/>
    <rect y="1" width="5" height="1" fill="#D00"/>
    <rect y="2" width="5" height="1" fill="#FFCE00"/>
  </svg>
);
const FLAG_ES = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="24" height="16">
    <rect width="3" height="2" fill="#c60b1e"/>
    <rect y="0.5" width="3" height="1" fill="#ffc400"/>
  </svg>
);

const LANGS: { code: AppLang; flag: React.ReactNode }[] = [
  { code: "fr", flag: FLAG_FR },
  { code: "en", flag: FLAG_EN },
  { code: "de", flag: FLAG_DE },
  { code: "es", flag: FLAG_ES },
];

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
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.ui.language);

  return (
    <div className="home-page">
      <div className="lang-selector">
        {LANGS.map(({ code, flag }) => (
          <button
            key={code}
            className={`lang-btn${lang === code ? " active" : ""}`}
            onClick={() => dispatch(setLanguage(code))}
          >
            {flag}
          </button>
        ))}
      </div>
      <h2 className="home-subtitle">Rituels</h2>
      <TextGrid texts={textesPratique} />
      <h2 className="home-subtitle">Soutras</h2>
      <TextGrid texts={textesSoutras} />
      <h2 className="home-subtitle">Prières et louanges</h2>
      <TextGrid texts={textesPrieres} />
    </div>
  );
}
