import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Download, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImageDesktop from '@/assets/photo-output.jpg';
import heroImageMobile from '@/assets/hero1.jpg';

const roles = [
  'AI Systems Architect',
  'AI Automation Consultant',
  'Enterprise Solutions Architect',
  'Founder & Product Builder',
];

const metrics = [
  { value: 50, label: 'AI Agents Built', suffix: '+' },
  { value: 500, label: 'Automated Workflows', suffix: '+' },
  { value: 10, label: 'Enterprise Systems', suffix: '+' },
  { value: 1, label: 'Tasks Automated', suffix: 'M+' },
  { value: 20, label: 'AI Integrations', suffix: '+' },
  { value: 5, label: 'AI Products Launched', suffix: '+' },
];

const useCounter = (target: number, inView: boolean, duration = 1800) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setValue(start);
      if (start >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return value;
};

const MetricCard = ({ metric, inView }: { metric: (typeof metrics)[0]; inView: boolean }) => {
  const count = useCounter(metric.value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass-card p-4 text-center group hover:border-tech-blue/40 transition-all duration-300"
    >
      <div className="text-2xl md:text-3xl font-bold text-tech-blue metric-counter">
        {count}{metric.suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 leading-tight">{metric.label}</div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [heroImage, setHeroImage] = useState(heroImageDesktop);
  const [roleIndex, setRoleIndex] = useState(0);
  const [metricsInView, setMetricsInView] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const rawBgY = useTransform(scrollY, [0, 700], ['0%', '22%']);
  const bgY = useSpring(rawBgY, { stiffness: 80, damping: 20 });
  const bgOpacity = useTransform(scrollY, [0, 500], [0.8, 0.3]);

  useEffect(() => {
    const handleResize = () => {
      setHeroImage(window.innerWidth < 768 ? heroImageMobile : heroImageDesktop);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setMetricsInView(true); },
      { threshold: 0.3 }
    );
    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Mohamed Faskath - AI Systems Architect"
          className="w-full h-[115%] object-cover"
          style={{ y: bgY, opacity: bgOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated ambient orbs */}
      <motion.div
        animate={{ y: [0, -28, 0], scale: [1, 1.18, 1], opacity: [0.05, 0.14, 0.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 22, 0], scale: [1, 1.12, 1], opacity: [0.04, 0.11, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-2/3 left-1/4 w-64 h-64 bg-tech-cyan/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:max-w-3xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tech-emerald/30 bg-tech-emerald/10 text-tech-emerald text-sm font-medium">
              <span className="w-2 h-2 bg-tech-emerald rounded-full animate-pulse" />
              Available for AI Consulting 
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p variants={itemVariants} className="text-tech-blue font-medium text-lg mb-3 tracking-wide">
            Mohamed Faskath
          </motion.p>

          {/* Animated role title */}
          <motion.div variants={itemVariants} className="h-10 md:h-12 overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-xl md:text-2xl font-semibold text-tech-cyan"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
          >
            Building Enterprise{' '}
            <span className="shimmer-text">AI Systems</span>
            <br />
            That Think, Decide,{' '}
            <br className="hidden md:block" />
            and Execute
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="hero-subtitle max-w-2xl mb-8">
            I architect AI-powered operating systems, autonomous agent ecosystems, enterprise automation
            platforms, and intelligent business infrastructures using modern LLMs, multi-agent frameworks,
            and AI orchestration technologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 glow-primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-tech-cyan/50 text-tech-cyan hover:bg-tech-cyan/10 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book AI Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:border-primary/50 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              asChild
            >
              <a href="/Mohamed Faskath -AI.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Metrics grid */}
          <motion.div ref={metricsRef} variants={itemVariants}>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-tech-blue" />
              Impact by the numbers
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} metric={metric} inView={metricsInView} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center cursor-pointer group"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-9 h-9 border border-tech-blue/40 rounded-full flex items-center justify-center mb-2 group-hover:border-tech-blue group-hover:bg-tech-blue/10 transition-all duration-300">
            <ArrowDown size={16} className="text-tech-blue" />
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
