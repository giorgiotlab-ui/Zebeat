import Header from '../components/Header';
import Booking from '../components/Booking';

export default function DJ() {
  return (
    <>
      <Header />
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">I nostri DJ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/Robertoferrari.jpeg" alt="Roberto Ferrari" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Roberto Ferrari</h3>
              <p className="text-white/80 text-base leading-relaxed">
                DJ e conduttore radiofonico italiano, voce storica di Radio Deejay e del format
                &quot;Ciao Belli&quot;. Stile ironico, diretto ed energico: il suo DJ set è un
                viaggio tra successi italiani e internazionali.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/toki.jpeg" alt="Toky" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Toky</h3>
              <p className="text-white/80 text-base leading-relaxed">
                DJ e conduttore tra le voci di Virgin Radio. Appassionato di rock e cultura
                musicale, propone set coinvolgenti che uniscono energia e style rock.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/Frankie%20Hi%20Nrg.jpeg" alt="Frankie Hi Nrg" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Frankie Hi Nrg</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Pioniere dell’hip hop italiano, rapper, autore e DJ. Nei suoi set fonde hip hop,
                funk, elettronica e cultura urban in un viaggio tra groove e contaminazioni.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/fargetta.jpeg" alt="Mario Fargetta (GetFar)" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mario Fargetta (GetFar)</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Icona della scena dance italiana, voce di M2O. Produzioni house e dance che hanno
                segnato club e classifiche: set energici e sempre attuali.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Booking
        title="Richiedi disponibilità DJ"
        subtitle="Compila il modulo e contattaci per proposte personalizzate"
        backgroundImage="/DJ.jpg"
      />
    </>
  );
}
