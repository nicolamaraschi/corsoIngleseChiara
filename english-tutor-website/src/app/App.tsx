import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { LessonDetailsSection } from '../components/sections/LessonDetailsSection';
import { WhatsAppFloatingButton } from '../components/common/WhatsAppButton';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>

      <Header />

      <main id="contenuto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LessonDetailsSection />
      </main>

      <WhatsAppFloatingButton />

      <Footer />
    </>
  );
}
