import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    id: 1,
    title: 'AI Automation Engineer',
    company: 'Twixia (Pvt) Ltd',
    website: 'twixia.com',
    duration: '2026 – Present',
    location: 'Sri Lanka',
    description: [
      'Designed and deployed enterprise AI agents powered by Claude, OpenAI, Gemini, and AgentZero for business automation',
      'Built autonomous workflow automation systems using n8n, Directus, MCP, and custom AI orchestration frameworks',
      'Developed AI-powered ERP intelligence modules, enabling real-time decision-making and report analysis at scale',
      'Created stakeholder communication agents, decision-making agents, and executive reporting automation pipelines',
      'Implemented WhatsApp, Telegram, and API-driven business automation with multi-channel AI dispatch',
      'Built scalable multi-agent architectures for enterprise operations, vendor management, and procurement workflows',
      'Managed production deployments using Docker, Coolify, Linux VPS infrastructure, and CI/CD pipelines',
    ],
    technologies: ['Claude', 'OpenAI', 'Gemini', 'AgentZero', 'n8n', 'Directus', 'MCP', 'Docker', 'Coolify', 'Linux', 'CI/CD'],
    current: true,
    category: 'AI Engineering',
  },
  {
    id: 2,
    title: 'Associate Software Engineer',
    company: 'Clancode Labs',
    website: 'clancodelabs.org',
    duration: '3-Month Contract',
    location: 'Remote',
    description: [
      'Contributed to backend and frontend development of client projects using React.js, Node.js, and Express.js',
      'Built scalable web applications with MongoDB and RESTful APIs under Agile workflows',
      'Collaborated on code reviews, bug fixing, and deployment pipeline improvements with senior engineers',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    current: false,
    category: 'Software Engineering',
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'SnapWerks, KINIT (Pvt) Ltd',
    website: 'snapwerks.lk · snapwerks.nl',
    duration: 'Feb 2025 – Present',
    location: 'Sri Lanka & Netherlands',
    description: [
      'Built AI-powered recommendation systems using embeddings and semantic similarity for service discovery',
      'Developed RAG-based intelligent search and localization systems supporting multi-language markets',
      'Designed resume-to-job matching pipelines using NLP and AI for intelligent workforce placement',
      'Architected scalable Symfony and PostgreSQL backend systems with multi-tenant isolation for 9+ countries',
      'Implemented SEO automation, AI-powered content generation, and intelligent categorization systems',
      'Developed workforce and job matching features with AI-driven ranking and scoring algorithms',
    ],
    technologies: ['Symfony', 'PostgreSQL', 'Redis', 'AI Embeddings', 'RAG', 'OpenAI', 'Docker', 'GitHub Actions'],
    current: true,
    category: 'Full-Stack',
  },
  {
    id: 4,
    title: 'Full Stack Software Engineering Intern',
    company: 'SnapWerks, KINIT (Pvt) Ltd',
    website: 'snapwerks.lk',
    duration: 'Feb 2025 – Jul 2025',
    location: 'Sri Lanka',
    description: [
      'Assisted in developing core modules for SnapWerks using Symfony, Twig, and PostgreSQL',
      'Contributed to frontend features with Stimulus.js and Tailwind CSS, improving UI responsiveness',
      'Supported AI-driven job-service matcher by preparing training datasets and refining NLP pipelines',
      'Collaborated with senior engineers on end-to-end testing workflows using Cypress',
    ],
    technologies: ['Symfony', 'Twig', 'PostgreSQL', 'Stimulus.js', 'Cypress', 'NLP'],
    current: false,
    category: 'Internship',
  },
];

const categoryColors: Record<string, string> = {
  'AI Engineering': 'bg-tech-blue/10 text-tech-blue border-tech-blue/20',
  'Software Engineering': 'bg-tech-emerald/10 text-tech-emerald border-tech-emerald/20',
  'Full-Stack': 'bg-tech-purple/10 text-tech-purple border-tech-purple/20',
  'Internship': 'bg-tech-amber/10 text-tech-amber border-tech-amber/20',
};

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 40%'],
  });
  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
    { stiffness: 80, damping: 20 }
  );

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Professional{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From full-stack engineering to AI automation architecture — building systems that matter.
          </p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Animated vertical timeline line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border/20 hidden lg:block overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-tech-blue via-tech-purple to-tech-pink"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <Card className="tech-card group hover:scale-[1.01] transition-all duration-300">
                <CardContent className="p-7">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon + status */}
                    <div className="flex-shrink-0 flex flex-row lg:flex-col items-center lg:items-center gap-3 lg:gap-2">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${index === 0 ? 'bg-gradient-primary' : 'bg-gradient-secondary'}`}>
                        <Building className="w-7 h-7 text-white" />
                      </div>
                      {experience.current && (
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-tech-emerald rounded-full animate-pulse" />
                          <span className="text-xs text-tech-emerald font-medium">Active</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{experience.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-tech-emerald">
                            <span className="font-semibold">{experience.company}</span>
                            <span className="text-muted-foreground/50">·</span>
                            <span className="text-sm text-muted-foreground">{experience.website}</span>
                          </div>
                        </div>
                        <span className={`self-start px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[experience.category] ?? 'bg-muted text-muted-foreground border-border'}`}>
                          {experience.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-tech-blue rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs font-medium bg-tech-blue/10 text-tech-blue rounded-md border border-tech-blue/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-tech-blue/5 rounded-full border border-tech-blue/20">
            <Briefcase className="w-4 h-4 text-tech-blue" />
            <span className="text-sm font-medium text-foreground">
              {experiences.filter(e => e.current).length} Active Positions · {experiences.length} Total Experiences
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
