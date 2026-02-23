export interface Word {
  tibetan: string;
  phonetics: string;
  translation: string;
}

export type PhraseType = 'normal' | 'mantra' | 'instructions' | 'colophon' | 'image';

export interface Phrase {
  id: string;
  type: PhraseType;
  tibetan: string;
  phonetics: string;
  translation: string;
  words: Word[];
  src?: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: boolean;
  phrases: Phrase[];
}

export interface PracticeText {
  id: string;
  title: string;
  tibetanTitle: string;
  sections: Section[];
}

export type DisplayMode = 'tibetan' | 'phonetics';
export type InteractionMode = 'click' | 'fixed' | 'scroll';
