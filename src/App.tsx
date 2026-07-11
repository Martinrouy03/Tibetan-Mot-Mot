import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';
import AudioPlayer from './components/AudioPlayer';
import { useAppSelector } from './store/hooks';

function App() {
  const tibetanFontSize = useAppSelector((state) => state.ui.tibetanFontSize);
  const currentAudioSrc = useAppSelector((state) => state.ui.currentAudioSrc);
  const audioPlayerVisible = useAppSelector((state) => state.ui.audioPlayerVisible);
  const lightMode = useAppSelector((state) => state.ui.lightMode);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode);
  }, [lightMode]);

  useEffect(() => {
    let el = document.getElementById('bg-logo');
    if (isHomePage) {
      if (!el) {
        el = document.createElement('div');
        el.id = 'bg-logo';
        document.body.insertBefore(el, document.body.firstChild);
      }
      Object.assign(el.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: 'url("/logo_dkl.png") center center / min(400px, 50vw) auto no-repeat',
        opacity: '0.5',
        pointerEvents: 'none',
        zIndex: '-1',
      });
    } else {
      el?.remove();
    }
  }, [isHomePage]);

  return (
    <div className="app">
      <Header />
      <main style={{ '--tibetan-font-size': `${tibetanFontSize}px`, '--ui-font-size': `${tibetanFontSize / 20}rem` } as React.CSSProperties}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text/:textId" element={<TextPage />} />
        </Routes>
      </main>
      {currentAudioSrc && (
        <footer className="audio-footer" style={{ display: audioPlayerVisible ? 'block' : 'none' }}>
          <AudioPlayer src={currentAudioSrc} />
        </footer>
      )}
    </div>
  );
}

export default App;
