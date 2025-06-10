'use client';
import useActiveSection from '@/hooks/useActiveSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

const Portfolio = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
};

export default Portfolio;

