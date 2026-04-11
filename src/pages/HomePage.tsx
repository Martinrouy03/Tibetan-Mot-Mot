import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { practiceTexts } from '../data/texts';
import type { PracticeText } from '../types';
import { useAppSelector } from '../store/hooks';
import TextPreviewModal from '../components/TextPreviewModal';
import './HomePage.css';

const PURCHASED_IDS = ['trois-amoncellements', 'pratique-chenrezik-thoungma', 'vajrasattva'];

function LockBadge() {
  return (
    <span className="lock-badge lock-closed">
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
    </span>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedText, setSelectedText] = useState<PracticeText | null>(null);
  const search = useAppSelector(s => s.ui.catalogueSearch);
  const filtered = practiceTexts.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.tibetanTitle.includes(search)
  );

  const handleCardClick = (text: PracticeText) => {
    if (text.sections.length === 0) return;
    const purchased = PURCHASED_IDS.includes(text.id);
    if (purchased) {
      navigate(`/text/${text.id}`);
    } else {
      setSelectedText(text);
    }
  };

  return (
    <div className="home-page">
      <h2 className="home-subtitle">Catalogue</h2>
      <div className="text-grid catalogue-grid">
        {filtered.map((text) => {
          const purchased = PURCHASED_IDS.includes(text.id);
          return (
            <button
              key={text.id}
              className={`text-card${(text.thumbnail || text.thumbnails) ? ' text-card-with-thumbnail' : ''}`}
              onClick={() => handleCardClick(text)}
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
                {text.sections.length === 0 ? (
                  <span className="text-card-badge">Bientôt disponible</span>
                ) : (
                  <div className="text-card-features">
                    {text.audioSrc && (
                      <span className="text-card-feature-icon">
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-label="Audio">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      </span>
                    )}
                    {text.sections.flatMap(s => s.phrases).filter(p => p.type === 'image' || p.type === 'image-row').length > 5 && (
                      <span className="text-card-feature-icon">
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-label="Images">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                      </span>
                    )}
                    {text.videoSrc && (
                      <span className="text-card-feature-icon">
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-label="Vidéo">
                          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                        </svg>
                      </span>
                    )}
                  </div>
                )}
              </div>
              {purchased ? (
                <span className="lock-badge purchased-badge">
                  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </span>
              ) : (
                <LockBadge />
              )}
            </button>
          );
        })}
      </div>

      {selectedText && (
        <TextPreviewModal
          text={selectedText}
          onClose={() => setSelectedText(null)}
          onPreview={() => { navigate(`/text/${selectedText.id}`); setSelectedText(null); }}
          onBuy={() => { alert('Redirection vers le paiement...'); setSelectedText(null); }}
        />
      )}
    </div>
  );
}
