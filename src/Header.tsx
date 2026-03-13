import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const base = 'px-3 py-2 rounded-md transition-colors duration-200';
  const active = 'bg-magenta-600 text-white hover:bg-magenta-700 shadow-sm';
  const inactive = 'text-white hover:bg-magenta-600 hover:text-white';
  const cls = (path: string) => `${base} ${location.pathname === path ? active : inactive}`;
  return (
    <header className="sticky top-0 z-20 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          ZENBEAT
        </Link>
        <nav className="flex items-center gap-2.5 md:gap-3 text-sm md:text-base">
          <Link to="/" className={cls('/')}>
            Home
          </Link>
          <Link to="/band" className={cls('/band')}>
            Band
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
          <Link to="/contatti" className={cls('/contatti')}>
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
