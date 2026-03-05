import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          Il ritmo giusto per il tuo evento.
        </h2>

        <h3 className="text-6xl md:text-7xl font-bold mb-20">
          ZENBEAT
        </h3>

        <p className="text-2xl font-light text-magenta-500 mb-16">
          Creative Flow
        </p>

        <div className="space-y-6 text-xl">
          <a
            href="mailto:booking@zenbeat.it"
            className="flex items-center justify-center gap-3 hover:text-magenta-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
            booking@zenbeat.it
          </a>

          <div className="flex items-center justify-center gap-3">
            <Phone className="w-6 h-6" />
            <span>+39 3780024027</span>
          </div>

          <a
            href="#"
            className="flex items-center justify-center gap-3 hover:text-magenta-500 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp diretto
          </a>
        </div>

        <div className="mt-20 pt-12 border-t border-white/20">
          <p className="text-sm text-white/50">
            © 2024 ZENBEAT. Creative Flow for Live Entertainment.
          </p>
        </div>
      </div>
    </footer>
  );
}
