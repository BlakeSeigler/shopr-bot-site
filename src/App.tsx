import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Mission />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
