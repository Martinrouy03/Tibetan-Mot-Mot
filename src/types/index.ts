export interface Word {
  tibetan: string;
  phonetics: string;
  translation: string;
}

export type PhraseType = 'normal' | 'mantra' | 'mantra-main' | 'instructions' | 'colophon' | 'image' | 'image-row' | 'repeat-btn' | 'nav-btn' | 'no-translation';

export interface Phrase {
  id: string;
  type: PhraseType;
  tibetan: string;
  phonetics: string;
  translation: string;
  words: Word[];
  src?: string;
  srcs?: string[];
  stanceNumber?: number;
  targetId?: string;
  audioTimestamp?: number;
  navBack?: boolean;
  showWithThoungma?: boolean;
  hideWithThoungma?: boolean;
  altTargetId?: string;
  altTargetFrom?: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: boolean;
  phrases: Phrase[];
  audioTimestamp?: number;
}

export interface PracticeText {
  id: string;
  title: string;
  longTitle?: string;
  tibetanTitle: string;
  sections: Section[];
  tibetanOnly?: boolean;
  audioSrc?: string;
  thumbnail?: string;
  thumbnailLogo?: string;
  thumbnails?: string[];
}

export type DisplayMode = 'tibetan' | 'phonetics';
export type InteractionMode = 'click' | 'fixed' | 'scroll';
