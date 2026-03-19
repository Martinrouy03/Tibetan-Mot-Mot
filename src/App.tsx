import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';
import AudioPlayer from './components/AudioPlayer';
import { useAppSelector } from './store/hooks';

function App() {
  const tibetanFontSize = useAppSelector((state) => state.ui.tibetanFontSize);
  const currentAudioSrc = useAppSelector((state) => state.ui.currentAudioSrc);
  const audioPlayerVisible = useAppSelector((state) => state.ui.audioPlayerVisible);

  return (
    <div className="app">
      <Header />
      <main style={{ '--tibetan-font-size': `${tibetanFontSize}px`, '--ui-font-size': `${tibetanFontSize / 20}rem` } as React.CSSProperties}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text/:textId" element={<TextPage />} />
        </Routes>
      </main>
      {audioPlayerVisible && currentAudioSrc && (
        <footer className="audio-footer">
          <AudioPlayer src={currentAudioSrc} />
        </footer>
      )}
    </div>
  );
}

export default App;
