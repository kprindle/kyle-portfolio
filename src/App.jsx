import { ReadingModeProvider } from './context/ReadingModeContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { useActiveSection } from './hooks/useActiveSection.js';
import { useRevealFallback } from './hooks/useRevealFallback.js';
import { navItems } from './data/navigation.js';
import SiteHeader from './components/layout/SiteHeader.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import LookingFor from './sections/LookingFor.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  const activeId = useActiveSection(navItems.map((item) => item.id));
  useRevealFallback();

  return (
    <ThemeProvider>
      <ReadingModeProvider>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader activeId={activeId} />
        <main id="main">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <LookingFor />
          <Contact />
        </main>
        <Footer />
      </ReadingModeProvider>
    </ThemeProvider>
  );
}
