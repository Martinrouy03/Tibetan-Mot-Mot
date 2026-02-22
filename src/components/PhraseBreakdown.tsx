import type { Phrase, DisplayMode } from '../types';
import './PhraseBreakdown.css';

interface Props {
  phrase: Phrase;
  displayMode: DisplayMode;
  showTranslation: boolean;
  prefix?: string;
}

export default function PhraseBreakdown({ phrase, displayMode, showTranslation, prefix }: Props) {
  return (
    <div className="breakdown">
      {prefix && <span className="breakdown-prefix">{prefix}</span>}
      <div className="breakdown-words">
        {phrase.words.map((word, index) => (
          <div key={index} className="word-card">
            <span className="word-translation">{word.translation}</span>
            <span className={`word-original ${displayMode === 'tibetan' ? 'tibetan' : ''}`}>
              {displayMode === 'tibetan' ? word.tibetan : word.phonetics}
            </span>
          </div>
        ))}
      </div>
      {showTranslation && (
        <div className="breakdown-translation">
          {phrase.translation.replace(/ \([^)]*\)/g, '')}
        </div>
      )}
    </div>
  );
}
