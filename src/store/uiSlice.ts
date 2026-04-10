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
  catalogueSearch: string;
}

const initialState: UiState = {
  displayMode: 'tibetan',
  interactionMode: 'click',
  showTranslation: true,
  selectedPhraseId: null,
  tibetanFontSize: 21,
  currentAudioSrc: null,
  audioPlayerVisible: false,
  seekToTimestamp: null,
  catalogueSearch: '',
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
    setCatalogueSearch(state, action: PayloadAction<string>) {
      state.catalogueSearch = action.payload;
    },
  },
});

export const { setDisplayMode, setInteractionMode, toggleTranslation, setSelectedPhrase, changeFontSize, setCurrentAudioSrc, toggleAudioPlayer, setSeekToTimestamp, setCatalogueSearch } = uiSlice.actions;
export default uiSlice.reducer;
