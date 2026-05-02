import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import CEOMessage from './components/sections/CEOMessage';
import Philosophy from './components/sections/Philosophy';
import VisionMission from './components/sections/VisionMission';
import Services from './components/sections/Services';
import Safeguard from './components/sections/Safeguard';
import Infrastructure from './components/sections/Infrastructure';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CEOMessage />
        <Philosophy />
        <VisionMission />
        <Services />
        <Safeguard />
        <Infrastructure />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;