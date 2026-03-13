import Header from '../components/Header';
import Booking from '../components/Booking';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contatti() {
  return (
    <>
      <Header />
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contattaci</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:booking@zenbeat.it"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded hover:border-magenta-600/50 transition-colors"
            >
              <div className="shrink-0">
                <Mail className="w-8 h-8 text-magenta-500" />
              </div>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="text-lg font-medium group-hover:text-magenta-500 transition-colors">
                  booking@zenbeat.it
                </p>
              </div>
            </a>
            <a
              href="tel:+393780024027"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded hover:border-magenta-600/50 transition-colors"
            >
              <div className="shrink-0">
                <Phone className="w-8 h-8 text-magenta-500" />
              </div>
              <div>
                <p className="text-sm text-white/60">Telefono</p>
                <p className="text-lg font-medium group-hover:text-magenta-500 transition-colors">
                  +39 3780024027
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/393780024027"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded hover:border-magenta-600/50 transition-colors"
            >
              <div className="shrink-0">
                <MessageCircle className="w-8 h-8 text-magenta-500" />
              </div>
              <div>
                <p className="text-sm text-white/60">WhatsApp diretto</p>
                <p className="text-lg font-medium group-hover:text-magenta-500 transition-colors">
                  Apri chat
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Booking
        title="Contatti"
        subtitle="Per informazioni, disponibilità e booking compila il modulo"
        backgroundImage="/sfondo.png"
      />
    </>
  );
}
