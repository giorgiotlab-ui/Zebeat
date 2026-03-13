import Header from '../components/Header';
import Booking from '../components/Booking';

export default function Band() {
  return (
    <>
      <Header />
      <Booking
        title="Richiedi disponibilità Band"
        subtitle="Compila il modulo e contattaci per proposte personalizzate"
        backgroundImage="/band.jpg"
      />
    </>
  );
}
