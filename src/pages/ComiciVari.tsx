import Header from '../components/Header';
import Booking from '../components/Booking';

export default function ComiciVari() {
  return (
    <>
      <Header />
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">I nostri Comici</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/Massimo%20Spata.jpeg" alt="Massimo Spata" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Massimo Spata</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Attore e cabarettista siciliano: comicità brillante legata alle tradizioni isolane.
                Popolare in TV con &quot;La sai l’ultima?&quot; e numerosi spettacoli di cabaret.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/Giovanni%20Cacioppo.jpeg" alt="Giovanni Cacioppo" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Giovanni Cacioppo</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Volto di &quot;Mai dire...&quot; e &quot;Zelig&quot;. Monologhi che raccontano con
                ironia la vita quotidiana e le contraddizioni della società.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/gene%20gnocchi.jpeg" alt="Gene Gnocchi" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Gene Gnocchi</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Satira pungente e intelligente tra sport, politica e costume. Popolare con
                &quot;Zelig&quot; e &quot;Quelli che il calcio&quot;.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded h-full flex flex-col">
              <div className="w-full h-80 flex items-center justify-center mb-6">
                <img src="/Dado.jpeg" alt="Dado" className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Dado</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Gabriele Pellegrini: comico, musicista e cabarettista. Satira e musica con brani
                ironici su vizi e manie della quotidianità. Da &quot;Zelig&quot; ai teatri.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Booking
        title="Richiedi disponibilità Comici & Vari"
        subtitle="Compila il modulo e contattaci per proposte personalizzate"
        backgroundImage="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
    </>
  );
}
