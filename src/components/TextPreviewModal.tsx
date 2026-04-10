import type { PracticeText } from '../types';
import './TextPreviewModal.css';

function getPrice(text: PracticeText): number {
  let price = 15;
  if (text.audioSrc) price += 10;
  const imageCount = text.sections
    .flatMap(s => s.phrases)
    .filter(p => p.type === 'image' || p.type === 'image-row').length;
  if (imageCount > 5) price += 5;
  return price;
}

interface Props {
  text: PracticeText;
  onClose: () => void;
  onPreview: () => void;
  onBuy: () => void;
}

export default function TextPreviewModal({ text, onClose, onPreview, onBuy }: Props) {
  const price = getPrice(text);
  const hasAudio = !!text.audioSrc;
  const imageCount = text.sections
    .flatMap(s => s.phrases)
    .filter(p => p.type === 'image' || p.type === 'image-row').length;
  const hasImages = imageCount > 0;
  const hasVideo = false;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          {text.thumbnail && (
            <img src={text.thumbnail} alt="" className="modal-thumbnail" />
          )}
          <div>
            <p className="modal-tibetan tibetan">{text.tibetanTitle}</p>
            <h2 className="modal-title">{text.title}</h2>
          </div>
        </div>

        <div className="modal-features">
          <div className={`modal-feature ${hasAudio ? 'feature-yes' : 'feature-no'}`}>
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
            <span>Audio</span>
            <span className="feature-value">{hasAudio ? 'Oui' : 'Non'}</span>
          </div>
          <div className={`modal-feature ${hasImages ? 'feature-yes' : 'feature-no'}`}>
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <span>Images</span>
            <span className="feature-value">{hasImages ? `Oui (${imageCount})` : 'Non'}</span>
          </div>
          <div className="modal-feature feature-no">
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            <span>Vidéo</span>
            <span className="feature-value">{hasVideo ? 'Oui' : 'Non'}</span>
          </div>
        </div>

        <div className="modal-price">{price} €</div>

        <div className="modal-actions">
          <button className="modal-btn-preview" onClick={onPreview}>Aperçu</button>
          <button className="modal-btn-buy" onClick={onBuy}>Acheter</button>
        </div>
      </div>
    </div>
  );
}
