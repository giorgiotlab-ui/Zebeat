export default function Positioning() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          Il ritmo giusto tra<br />arte e organizzazione
        </h2>

        <p className="text-xl md:text-2xl font-light text-white/80 mb-12 leading-relaxed">
          ZENBEAT nasce per portare equilibrio nel mondo dello spettacolo live.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-magenta-500">
              Creatività senza caos
            </h3>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 text-magenta-500">
              Organizzazione senza rigidità
            </h3>
          </div>
        </div>

        <p className="text-xl font-light text-white/70 mt-20 leading-relaxed">
          Gestiamo artisti e produzioni con un approccio strutturato, chiaro e professionale,<br />
          garantendo a promoter e venue un partner affidabile.
        </p>
      </div>
    </section>
  );
}