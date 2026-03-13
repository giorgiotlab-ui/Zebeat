import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Roster() {
  return (
    <section id="roster" className="py-32 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          I nostri artisti
        </h2>

        <div className="h-8"></div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Link to="/band" className="block">
            <div
              className="aspect-square bg-cover bg-center relative group overflow-hidden"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-2xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Band
                </span>
              </div>
            </div>
          </Link>

          <Link to="/dj" className="block">
            <div
              className="aspect-square bg-cover bg-center relative group overflow-hidden"
              style={{ backgroundImage: 'url(/DJ.jpg)' }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-2xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  DJ
                </span>
              </div>
            </div>
          </Link>

          <Link to="/comici-vari" className="block">
            <div
              className="aspect-square bg-cover bg-center relative group overflow-hidden"
              style={{ backgroundImage: 'url(/gene%20gnocchi.jpeg)' }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-2xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Comici & Vari
                </span>
              </div>
            </div>
          </Link>

          <Link to="/radio-disco" className="block">
            <div
              className="aspect-square bg-cover bg-center relative group overflow-hidden"
              style={{ backgroundImage: 'url(/discoteca%20nazionale.jpeg)' }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-2xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Radio & Disco
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <a
            href="#roster"
            className="inline-flex items-center gap-3 text-xl font-medium text-magenta-600 hover:text-magenta-700 transition-colors group"
          >
            Scopri il roster completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
