import type { Phrase, DisplayMode } from '../types';
import './PhraseBreakdown.css';

interface Props {
  phrase: Phrase;
  displayMode: DisplayMode;
  showTranslation: boolean;
  prefix?: string;
  translationAbove?: boolean;
}

export default function PhraseBreakdown({ phrase, displayMode, showTranslation, prefix, translationAbove = true }: Props) {
  return (
    <div className="breakdown">
      {prefix && <span className="breakdown-prefix">{prefix}</span>}
      <div className={`breakdown-words${!translationAbove ? ' breakdown-words-bottom' : ''}`}>
        {phrase.words.map((word, index) => (
          <div key={index} className="word-card">
            {translationAbove && <span className="word-translation">{word.translation}</span>}
            <span className={`word-original ${displayMode === 'tibetan' ? 'tibetan' : ''}`}>
              {displayMode === 'tibetan' ? word.tibetan : word.phonetics}
            </span>
            {!translationAbove && <span className="word-translation word-translation-below">{word.translation}</span>}
          </div>
        ))}
      </div>
      {showTranslation && (
        <div className="breakdown-translation" dangerouslySetInnerHTML={{ __html: phrase.translation.replace(/ \([^)]*\)/g, '') }} />
      )}
    </div>
  );
}
