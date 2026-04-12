import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

store.subscribe(() => {
  const { ui } = store.getState();
  localStorage.setItem('ui.displayMode', JSON.stringify(ui.displayMode));
  localStorage.setItem('ui.interactionMode', JSON.stringify(ui.interactionMode));
  localStorage.setItem('ui.showTranslation', JSON.stringify(ui.showTranslation));
  localStorage.setItem('ui.tibetanFontSize', JSON.stringify(ui.tibetanFontSize));
  localStorage.setItem('ui.breakdownTranslationAbove', JSON.stringify(ui.breakdownTranslationAbove));
  localStorage.setItem('ui.lightMode', JSON.stringify(ui.lightMode));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
