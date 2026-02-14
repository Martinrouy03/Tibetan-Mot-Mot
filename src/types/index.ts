export interface Word {
  tibetan: string;
  phonetics: string;
  translation: string;
}

export interface Phrase {
  id: string;
  tibetan: string;
  phonetics: string;
  translation: string;
  words: Word[];
}

export interface Section {
  id: string;
  title: string;
  phrases: Phrase[];
}

export interface PracticeText {
  id: string;
  title: string;
  tibetanTitle: string;
  sections: Section[];
}

export type DisplayMode = 'tibetan' | 'phonetics';
export type InteractionMode = 'click' | 'scroll';
