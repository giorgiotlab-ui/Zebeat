import { ArrowRight } from 'lucide-react';

const requirements = [
  'Materiale live professionale',
  'Identità chiara',
  'Serietà organizzativa'
];

export default function ForArtists() {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          Cerchi rappresentanza?
        </h2>

        <p className="text-xl text-black/70 mb-12">
          Valutiamo nuovi progetti con:
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {requirements.map((req, index) => (
            <div key={index}>
              <div className="w-3 h-3 bg-magenta-600 mx-auto mb-4"></div>
              <p className="text-lg font-medium">{req}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 border-2 border-black hover:bg-black hover:text-white px-10 py-5 text-lg font-medium transition-all duration-300 group"
        >
          Invia la tua candidatura
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}