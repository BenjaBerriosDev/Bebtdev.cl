import { Header } from "./components/Header";
import { SectionNav } from "./components/SectionNav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { navLinks } from "./data/portfolio";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

function App() {
  return (
    <ActiveSectionProvider sectionIds={sectionIds}>
      <Header />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ActiveSectionProvider>
  );
}

export default App;
