import Header from '../components/Header';
import Booking from '../components/Booking';

export default function RadioDisco() {
  return (
    <>
      <Header />
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Radio & Disco</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/discoteca%20nazionale.jpeg" alt="Discoteca Nazionale RTL 102.5" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Discoteca Nazionale RTL 102.5</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Il format musicale più famoso direttamente dalla radio più ascoltata d’Italia:
                DJ set coinvolgente con hit dance, pop e revival per una vera notte in discoteca.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/holi%20party.jpeg" alt="Holi Party" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Holi Party</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Un’esplosione di musica, colori e divertimento. DJ set travolgente tra gadget
                e polveri colorate per un’atmosfera unica e spettacolare.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/viva%20l%27italia.jpeg" alt="Viva l'Italia" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Viva l&apos;Italia</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Un viaggio tra i successi che hanno fatto cantare generazioni: ritmo, emozione
                ed energia tricolore per un format coinvolgente.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/Live%2090.jpeg" alt="LIVE 90&apos;" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">LIVE 90&apos;</h3>
              <p className="text-white/80 text-base leading-relaxed">
                DJ set dedicato ai più grandi successi degli anni ’90 con ospiti iconici live:
                show travolgente tra nostalgia, energia e grandi ricordi.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/radio%20live.jpeg" alt="Radio Live" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Radio Live</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Format radiofonico creato per raccontare e animare l’evento: studio temporaneo,
                dirette, interviste, musica e collegamenti dal cuore della manifestazione.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Booking
        title="Richiedi disponibilità Radio & Disco"
        subtitle="Compila il modulo e contattaci per proposte personalizzate"
        backgroundImage="/sfondo.png"
      />
    </>
  );
}
