import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';
import { useAppSelector } from './store/hooks';

function App() {
  const tibetanFontSize = useAppSelector((state) => state.ui.tibetanFontSize);

  return (
    <div className="app" style={{ '--tibetan-font-size': `${tibetanFontSize}px` } as React.CSSProperties}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text/:textId" element={<TextPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
