'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SystemArchitecture from './components/ExperienceSection';
import TechStack from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <HeroSection />
      <AboutSection />   
      <EducationSection />
      <SystemArchitecture />
      <TechStack />
      <Projects />
      <ContactForm />
    </main>
  );
}
