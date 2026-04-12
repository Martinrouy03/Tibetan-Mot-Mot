import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayMode, InteractionMode } from '../types';

interface UiState {
  displayMode: DisplayMode;
  interactionMode: InteractionMode;
  showTranslation: boolean;
  selectedPhraseId: string | null;
  tibetanFontSize: number;
  currentAudioSrc: string | null;
  audioPlayerVisible: boolean;
  seekToTimestamp: number | null;
  breakdownTranslationAbove: boolean;
  lightMode: boolean;
}

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}

const initialState: UiState = {
  displayMode: loadFromStorage<DisplayMode>('ui.displayMode', 'tibetan'),
  interactionMode: loadFromStorage<InteractionMode>('ui.interactionMode', 'click'),
  showTranslation: loadFromStorage('ui.showTranslation', true),
  selectedPhraseId: null,
  tibetanFontSize: loadFromStorage('ui.tibetanFontSize', 21),
  currentAudioSrc: null,
  audioPlayerVisible: false,
  seekToTimestamp: null,
  breakdownTranslationAbove: loadFromStorage('ui.breakdownTranslationAbove', true),
  lightMode: loadFromStorage('ui.lightMode', false),
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDisplayMode(state, action: PayloadAction<DisplayMode>) {
      state.displayMode = action.payload;
    },
    setInteractionMode(state, action: PayloadAction<InteractionMode>) {
      state.interactionMode = action.payload;
      state.selectedPhraseId = null;
    },
    toggleTranslation(state) {
      state.showTranslation = !state.showTranslation;
    },
    setSelectedPhrase(state, action: PayloadAction<string | null>) {
      state.selectedPhraseId = action.payload;
    },
    changeFontSize(state, action: PayloadAction<number>) {
      state.tibetanFontSize = Math.max(12, Math.min(32, state.tibetanFontSize + action.payload));
    },
    setCurrentAudioSrc(state, action: PayloadAction<string | null>) {
      state.currentAudioSrc = action.payload;
      if (!action.payload) state.audioPlayerVisible = false;
    },
    toggleAudioPlayer(state) {
      state.audioPlayerVisible = !state.audioPlayerVisible;
    },
    setSeekToTimestamp(state, action: PayloadAction<number | null>) {
      state.seekToTimestamp = action.payload;
    },
    toggleBreakdownPosition(state) {
      state.breakdownTranslationAbove = !state.breakdownTranslationAbove;
    },
    toggleLightMode(state) {
      state.lightMode = !state.lightMode;
    },
  },
});

export const { setDisplayMode, setInteractionMode, toggleTranslation, setSelectedPhrase, changeFontSize, setCurrentAudioSrc, toggleAudioPlayer, setSeekToTimestamp, toggleBreakdownPosition, toggleLightMode } = uiSlice.actions;
export default uiSlice.reducer;
