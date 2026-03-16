import Hero from './components/Hero';
import Positioning from './components/Positioning';
import Services from './components/Services';
import Approach from './components/Approach';
import Roster from './components/Roster';
import ForVenues from './components/ForVenues';
import ForArtists from './components/ForArtists';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Positioning />
      <Services />
      <Approach />
      <Roster />
      <ForVenues />
      <ForArtists />
      <Footer />
    </div>
  );
}

export default App;
