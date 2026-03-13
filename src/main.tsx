import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Band from './pages/Band.tsx';
import DJ from './pages/DJ.tsx';
import ComiciVari from './pages/ComiciVari.tsx';
import Contatti from './pages/Contatti.tsx';
import RadioDisco from './pages/RadioDisco.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/band" element={<Band />} />
        <Route path="/dj" element={<DJ />} />
        <Route path="/comici-vari" element={<ComiciVari />} />
        <Route path="/radio-disco" element={<RadioDisco />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
