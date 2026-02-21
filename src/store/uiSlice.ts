import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayMode, InteractionMode } from '../types';

interface UiState {
  displayMode: DisplayMode;
  interactionMode: InteractionMode;
  showTranslation: boolean;
  selectedPhraseId: string | null;
  tibetanFontSize: number;
}

const initialState: UiState = {
  displayMode: 'tibetan',
  interactionMode: 'fixed',
  showTranslation: false,
  selectedPhraseId: null,
  tibetanFontSize: 20,
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
  },
});

export const { setDisplayMode, setInteractionMode, toggleTranslation, setSelectedPhrase, changeFontSize } = uiSlice.actions;
export default uiSlice.reducer;
