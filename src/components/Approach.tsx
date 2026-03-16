import { Check } from 'lucide-react';

const principles = [
  'Comunicazione rapida',
  'Preventivi trasparenti',
  'Pianificazione anticipata',
  'Rispetto dei tempi',
  'Coordinamento tecnico preciso'
];

export default function Approach() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          Creative Flow
        </h2>

        <p className="text-xl md:text-2xl font-light text-white/80 mb-16">
          Per noi il "flow" è questo:
        </p>

        <div className="space-y-6 mb-20">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 text-xl"
            >
              <Check className="w-6 h-6 text-magenta-500" strokeWidth={3} />
              <span className="font-light">{principle}</span>
            </div>
          ))}
        </div>

        <p className="text-2xl font-light text-white/90 leading-relaxed">
          Chi organizza eventi deve potersi concentrare sul pubblico.<br />
          <span className="text-magenta-500">Al resto pensiamo noi.</span>
        </p>
      </div>
    </section>
  );
}