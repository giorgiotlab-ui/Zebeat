import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type BookingProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
};

export default function Booking({ title, subtitle, backgroundImage }: BookingProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    eventType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        location: '',
        eventType: '',
        message: '',
      });
      setTimeout(() => navigate('/'), 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-white/80">{subtitle}</p>
        </div>
      </div>

      <div className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-magenta-600/20 border border-magenta-600 p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Grazie per la richiesta!</h2>
              <p className="text-white/80">
                Ti contatteremo al più presto per discutere i dettagli del tuo evento.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-magenta-600 transition-colors"
                    placeholder="Marco Rossi"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-magenta-600 transition-colors"
                    placeholder="marco@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-magenta-600 transition-colors"
                    placeholder="+39 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                    Data evento *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-magenta-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Città/Venue *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-magenta-600 transition-colors"
                  placeholder="Milano - Circolo Magnolia"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                  Tipo evento *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-white/20 px-4 py-3 text-black focus:outline-none focus:border-magenta-600 transition-colors"
                >
                  <option value="">Seleziona un tipo di evento</option>
                  <option value="club">Club privato</option>
                  <option value="festival">Festival</option>
                  <option value="pubblico">Evento pubblico</option>
                  <option value="aziendale">Evento aziendale</option>
                  <option value="matrimonio">Matrimonio/Privato</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Messaggio aggiuntivo
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-magenta-600 transition-colors resize-none"
                  placeholder="Descrivi il tuo evento, lo stile di musica che desideri, esigenze particolari..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-magenta-600 hover:bg-magenta-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Invia richiesta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 text-lg font-medium transition-all duration-300"
                >
                  Indietro
                </button>
              </div>

              <p className="text-xs text-white/50 text-center">
                I campi con * sono obbligatori. Ti contatteremo al più presto.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
