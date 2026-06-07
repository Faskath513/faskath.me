import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillSection from '@/components/SkillsSection';
import AIAgentsSection from '@/components/AIAgentsSection';
import WorkflowsSection from '@/components/WorkflowsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

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
        <AIAgentsSection />
        <WorkflowsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/40 py-8 bg-background/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Mohamed Faskath · AI Systems Architect · Sri Lanka</p>
            <p className="text-xs opacity-60">Built with React, Three.js, Framer Motion & modern AI tools</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
