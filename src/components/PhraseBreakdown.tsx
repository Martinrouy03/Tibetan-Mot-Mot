import type { Phrase, DisplayMode } from '../types';
import './PhraseBreakdown.css';

interface Props {
  phrase: Phrase;
  displayMode: DisplayMode;
  showTranslation: boolean;
}

export default function PhraseBreakdown({ phrase, displayMode, showTranslation }: Props) {
  return (
    <div className="breakdown">
      <div className="breakdown-words">
        {phrase.words.map((word, index) => (
          <div key={index} className="word-card">
            <span className={`word-original ${displayMode === 'tibetan' ? 'tibetan' : ''}`}>
              {displayMode === 'tibetan' ? word.tibetan : word.phonetics}
            </span>
            <span className="word-translation">{word.translation}</span>
          </div>
        ))}
      </div>
      {showTranslation && (
        <div className="breakdown-translation">
          {phrase.translation}
        </div>
      )}
    </div>
  );
}
