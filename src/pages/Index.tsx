import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SkillSection from '@/components/SkillsSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ThreeBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillSection />
        <ContactSection />
      </main>
      <footer className="bg-background/80 backdrop-blur-md border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Mohamed Faskath. Built with React, Three.js, and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
