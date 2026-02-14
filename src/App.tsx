import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';

function App() {
  return (
    <div className="app">
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
