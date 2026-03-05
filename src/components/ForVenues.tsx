import { ArrowRight } from 'lucide-react';

const venueTypes = [
  'Club live',
  'Festival',
  'Comuni ed enti pubblici',
  'Eventi privati',
  'Aziende'
];

const offerings = [
  'Headliner',
  'Opening act',
  'Format tematici',
  'Serate complete curate in ogni dettaglio'
];

export default function ForVenues() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          Sei un organizzatore<br />o una venue?
        </h2>

        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-magenta-500">
              Collaboriamo con:
            </h3>
            <ul className="space-y-4 text-xl font-light">
              {venueTypes.map((type, index) => (
                <li key={index} className="text-white/80">{type}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-magenta-500">
              Possiamo proporre:
            </h3>
            <ul className="space-y-4 text-xl font-light">
              {offerings.map((offering, index) => (
                <li key={index} className="text-white/80">{offering}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-magenta-600 hover:bg-magenta-700 text-white px-10 py-5 text-lg font-medium transition-all duration-300 group"
          >
            Contattaci per proposte personalizzate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}