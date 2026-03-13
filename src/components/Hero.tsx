import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src="/sfondo.png"
            alt="Sfondo"
            className="w-full max-w-3xl h-auto object-contain"
            loading="eager"
          />
        </div>
        <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight">
          ZENBEAT
        </h1>

        <p className="text-2xl md:text-3xl font-light mb-4 text-white/90">
          Creative Flow for Live Entertainment
        </p>

        <p className="text-xl md:text-2xl font-light mb-16 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Colleghiamo artisti, palchi ed energie.<br />
          Con metodo, visione e ritmo.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="group bg-magenta-600 hover:bg-magenta-700 text-white px-10 py-5 text-lg font-medium transition-all duration-300 flex items-center gap-3"
          >
            Richiedi disponibilità
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#roster"
            className="group border-2 border-white hover:bg-white hover:text-black text-white px-10 py-5 text-lg font-medium transition-all duration-300 flex items-center gap-3"
          >
            Scopri i nostri artisti
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
