import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const base = 'px-3 py-2 rounded-md transition-colors duration-200';
  const active = 'bg-magenta-600 text-white hover:bg-magenta-700 shadow-sm';
  const inactive = 'text-white hover:bg-magenta-600 hover:text-white';
  const cls = (path: string) => `${base} ${location.pathname === path ? active : inactive}`;
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <header className="sticky top-0 z-20 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          ZENBEAT
        </Link>
        <nav className="hidden md:flex items-center gap-2.5 md:gap-3 text-sm md:text-base">
          <Link to="/" className={cls('/')}>
            Home
          </Link>
          <Link to="/dj" className={cls('/dj')}>
            DJ
          </Link>
          <Link to="/radio-disco" className={cls('/radio-disco')}>
            Radio & Disco
          </Link>
          <Link to="/comici-vari" className={cls('/comici-vari')}>
            Comici & Vari
          </Link>
          <Link to="/band" className={cls('/band')}>
            Band
          </Link>
          <Link to="/contatti" className={cls('/contatti')}>
            Contatti
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Apri menu"
          aria-expanded={open}
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`md:hidden border-t border-white/10 bg-black/80 backdrop-blur transform transition-all duration-300 origin-top ${
          open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-base">
          <Link to="/" className={cls('/')}>
            Home
          </Link>
          <Link to="/dj" className={cls('/dj')}>
            DJ
          </Link>
          <Link to="/radio-disco" className={cls('/radio-disco')}>
            Radio & Disco
          </Link>
          <Link to="/comici-vari" className={cls('/comici-vari')}>
            Comici & Vari
          </Link>
          <Link to="/band" className={cls('/band')}>
            Band
          </Link>
          <Link to="/contatti" className={cls('/contatti')}>
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
