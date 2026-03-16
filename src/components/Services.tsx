import { Mic, Film, BarChart3, Handshake } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Booking artistico',
    description: 'Selezioniamo e rappresentiamo progetti musicali di qualità per:',
    items: ['Festival', 'Club', 'Eventi pubblici', 'Eventi aziendali']
  },
  {
    icon: Film,
    title: 'Produzione spettacoli',
    description: 'Coordinamento tecnico, logistico e organizzativo per performance senza imprevisti.',
    items: []
  },
  {
    icon: BarChart3,
    title: 'Consulenza programmazione eventi',
    description: 'Supporto nella costruzione di cartelloni e lineup coerenti con il pubblico target.',
    items: []
  },
  {
    icon: Handshake,
    title: 'Management',
    description: 'Gestione contrattualistica, rider, calendario e relazioni con venue.',
    items: []
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
          I nostri servizi
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="space-y-6">
                <Icon className="w-12 h-12 text-magenta-600" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  {service.description}
                </p>
                {service.items.length > 0 && (
                  <ul className="space-y-2 text-lg">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-black/60">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}