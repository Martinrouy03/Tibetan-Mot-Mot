export interface Word {
  tibetan: string;
  phonetics: string;
  translation: string;
}

export type PhraseType = 'normal' | 'mantra' | 'mantra-main' | 'instructions' | 'colophon' | 'image' | 'image-row' | 'repeat-btn';

export interface Phrase {
  id: string;
  type: PhraseType;
  tibetan: string;
  phonetics: string;
  translation: string;
  words: Word[];
  src?: string;
  srcs?: string[];
  targetId?: string;
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
  tibetanOnly?: boolean;
}

export type DisplayMode = 'tibetan' | 'phonetics';
export type InteractionMode = 'click' | 'fixed' | 'scroll';
