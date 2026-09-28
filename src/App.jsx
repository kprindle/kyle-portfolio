import { ReadingModeProvider } from './context/ReadingModeContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { useActiveSection } from './hooks/useActiveSection.js';
import { navItems } from './data/navigation.js';
import Sidebar from './components/layout/Sidebar.jsx';
import MobileHeader from './components/layout/MobileHeader.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import LookingFor from './sections/LookingFor.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import styles from './App.module.css';

export default function App() {
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <ThemeProvider>
      <ReadingModeProvider>
        <a className="skip-link" href="#main">Skip to content</a>
        <MobileHeader activeId={activeId} />
        <div className={styles.shell}>
          <Sidebar activeId={activeId} />
          <main id="main" className={styles.main}>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <LookingFor />
            <Contact />
            <Footer />
          </main>
        </div>
      </ReadingModeProvider>
    </ThemeProvider>
  );
}
