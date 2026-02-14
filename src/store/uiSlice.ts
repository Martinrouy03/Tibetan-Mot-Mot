import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayMode, InteractionMode } from '../types';

interface UiState {
  displayMode: DisplayMode;
  interactionMode: InteractionMode;
  showTranslation: boolean;
  selectedPhraseId: string | null;
}

const initialState: UiState = {
  displayMode: 'tibetan',
  interactionMode: 'click',
  showTranslation: true,
  selectedPhraseId: null,
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
  },
});

export const { setDisplayMode, setInteractionMode, toggleTranslation, setSelectedPhrase } = uiSlice.actions;
export default uiSlice.reducer;
