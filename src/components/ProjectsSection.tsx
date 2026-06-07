import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const aiProjects = [
  {
    id: 'qorvenz',
    title: 'QorvenzAI',
    tagline: 'AI-Powered Construction Operating System',
    description: 'A next-generation Construction OS built to transform construction companies through AI-powered planning, forecasting, procurement, project management, and decision intelligence.',
    modules: ['BOQ Intelligence', 'Cost Estimation', 'Project Planning', 'Procurement', 'Vendor Management', 'Workforce Management', 'Equipment Tracking', 'Site Monitoring', 'Risk Analysis', 'Reporting'],
    aiFeatures: ['Construction AI Copilot', 'Multi-Agent Planning System', 'BOQ Analysis Agent', 'Cost Forecast Agent', 'Procurement Agent', 'Risk Assessment Agent', 'Executive Reporting Agent'],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'n8n', 'LangGraph', 'OpenAI', 'Claude', 'Gemini', 'RAG', 'Docker'],
    link: 'https://www.qorvenzai.com',
    category: 'Construction AI',
    accent: 'tech-orange',
    gradient: 'from-tech-orange/20 to-tech-amber/5',
  },
  {
    id: 'arwa',
    title: 'Arwa Hub Fashion ERP',
    tagline: 'AI-Powered Fashion Manufacturing ERP',
    description: 'A complete digital transformation platform for fashion manufacturing and retail businesses, combining PLM, manufacturing, inventory, procurement, HR, CRM, sales, and accounting in one AI-powered platform.',
    modules: ['PLM', 'Manufacturing', 'Inventory', 'Procurement', 'HR', 'CRM', 'Sales', 'Accounting'],
    aiFeatures: ['Fashion Design Assistant', 'Product Generation AI', 'OCR Invoice Processing', 'Procurement Intelligence', 'Manufacturing Forecasting', 'Trend Prediction'],
    technologies: ['Directus', 'Next.js', 'n8n', 'Gemini', 'OCR', 'PostgreSQL', 'Redis'],
    link: 'https://wystem.arwashawl.com',
    category: 'Manufacturing AI',
    accent: 'tech-pink',
    gradient: 'from-tech-pink/15 to-tech-purple/5',
  },
  {
    id: 'snapwerks',
    title: 'SnapWerks AI Marketplace',
    tagline: 'AI-Powered Service Marketplace & Workforce Platform',
    description: 'A large-scale marketplace platform connecting homeowners with service professionals across Sri Lanka and Europe, powered by embedding-based recommendations, RAG search, and intelligent job matching engines.',
    modules: ['Service Marketplace', 'Job Posting System', 'Provider Matching', 'AI Recommendations', 'Smart Search', 'Location Intelligence', 'Workforce Planning', 'Resume Analysis', 'Semantic Search', 'SEO Automation'],
    aiFeatures: ['Embedding-Based Recommendations', 'RAG Search System', 'AI Matching Engine', 'Intelligent Ranking Algorithms', 'NLP-Based Classification', 'Automated Content Generation'],
    technologies: ['Symfony', 'PostgreSQL', 'Redis', 'AI Embeddings', 'RAG', 'OpenAI', 'Docker', 'GitHub Actions'],
    link: 'https://www.snapwerks.lk',
    secondLink: 'https://www.snapwerks.nl',
    category: 'Marketplace AI',
    accent: 'tech-cyan',
    gradient: 'from-tech-cyan/15 to-tech-blue/5',
  },
  {
    id: 'sriai',
    title: 'SriAI Platform',
    tagline: 'Making Advanced AI Accessible to Sri Lanka',
    description: 'A localized AI platform providing affordable, accessible access to Claude, OpenAI, and Gemini for Sri Lankan users and businesses — with a credit-based system, free trial onboarding, and full multilingual support in English, Sinhala, and Tamil.',
    modules: ['Claude Integration', 'OpenAI Integration', 'Gemini Integration', 'Credit-Based Usage', 'Free Trial Onboarding', 'AI Chat Platform', 'Multilingual Support', 'Usage Analytics', 'Secure User Management'],
    aiFeatures: ['Multi-model Routing', 'Usage Intelligence', 'Localized AI Experience', 'Credit Analytics'],
    technologies: ['Next.js', 'Symfony', 'PostgreSQL', 'Redis', 'OpenAI', 'Claude', 'Gemini', 'Docker'],
    link: 'https://sriai.app',
    category: 'AI Platform',
    accent: 'tech-purple',
    gradient: 'from-tech-purple/15 to-tech-indigo/5',
  },
  {
    id: 'agentix',
    title: 'Agentix AI Labs',
    tagline: 'Enterprise SaaS POS & Business Platform',
    description: 'A comprehensive enterprise SaaS platform combining POS, inventory, CRM, accounting, HRM, and analytics — powered by AI prediction and intelligence engines.',
    modules: ['POS', 'Inventory', 'CRM', 'Accounting', 'HRM', 'Analytics'],
    aiFeatures: ['Sales Prediction', 'Inventory Intelligence', 'AI Business Assistant', 'AI Reporting'],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'OpenAI', 'LangChain', 'Docker'],
    link: 'https://www.agentixailabs.com',
    category: 'Enterprise SaaS',
    accent: 'tech-blue',
    gradient: 'from-tech-blue/15 to-tech-cyan/5',
  },
  {
    id: 'twin',
    title: 'Twin Rentals',
    tagline: 'AI-Powered Rental Management Platform',
    description: 'A modern rental management platform featuring automated communication, booking management, customer management, and AI agents handling end-to-end customer journeys via WhatsApp.',
    modules: ['Rental Listings', 'Booking Management', 'Customer Management', 'Automated Communication', 'Analytics'],
    aiFeatures: ['WhatsApp Agent', 'Booking Assistant', 'Customer Support Agent'],
    technologies: ['Next.js', 'Directus', 'n8n', 'WhatsApp MCP', 'OpenAI', 'PostgreSQL'],
    link: 'https://twinsrentals.agentixailabs.com',
    category: 'PropTech AI',
    accent: 'tech-emerald',
    gradient: 'from-tech-emerald/15 to-tech-teal/5',
  },
];

const earlierProjects = [
  {
    title: 'RevX - Employee Performance System',
    description: 'MERN stack application featuring role-based authentication, secure session management, and real-time dashboards for performance tracking.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'NextAuth'],
    link: null,
    github: 'https://github.com/Faskath513/RevX-MERN.git',
    category: 'Web Application',
  },
  {
    title: 'Service Prompt AI',
    description: 'AI tool to classify service prompts and generate natural language descriptions using DistilBERT and GPT-based models.',
    technologies: ['Flask', 'Gradio', 'HuggingFace', 'Transformers', 'Threading'],
    link: null,
    github: 'https://github.com/Faskath513/Service_prompt.git',
    category: 'AI/ML',
  },
  {
    title: 'Job Resume Analyzer',
    description: 'Smart matching system that analyzes resumes and job posts to extract keywords and score compatibility using semantic analysis.',
    technologies: ['Django', 'Machine Learning', 'NLP', 'PDF Parsing', 'Semantic Analysis'],
    link: null,
    github: 'https://github.com/Faskath513/JobResumeAnalyzer.git',
    category: 'AI/ML',
  },
  {
    title: 'Fareed Motors POS System',
    description: 'Comprehensive POS system for vehicle dealership with inventory tracking, invoice generation, and secure multi-user authentication.',
    technologies: ['Laravel', 'Blade', 'Livewire', 'PostgreSQL'],
    link: null,
    github: null,
    category: 'Enterprise Software',
  },
];

const accentClasses: Record<string, { border: string; badge: string; text: string; dot: string }> = {
  'tech-orange': { border: 'border-tech-orange/30 hover:border-tech-orange/60', badge: 'bg-tech-orange/10 text-tech-orange border-tech-orange/20', text: 'text-tech-orange', dot: 'bg-tech-orange' },
  'tech-pink': { border: 'border-tech-pink/30 hover:border-tech-pink/60', badge: 'bg-tech-pink/10 text-tech-pink border-tech-pink/20', text: 'text-tech-pink', dot: 'bg-tech-pink' },
  'tech-blue': { border: 'border-tech-blue/30 hover:border-tech-blue/60', badge: 'bg-tech-blue/10 text-tech-blue border-tech-blue/20', text: 'text-tech-blue', dot: 'bg-tech-blue' },
  'tech-cyan': { border: 'border-tech-cyan/30 hover:border-tech-cyan/60', badge: 'bg-tech-cyan/10 text-tech-cyan border-tech-cyan/20', text: 'text-tech-cyan', dot: 'bg-tech-cyan' },
  'tech-emerald': { border: 'border-tech-emerald/30 hover:border-tech-emerald/60', badge: 'bg-tech-emerald/10 text-tech-emerald border-tech-emerald/20', text: 'text-tech-emerald', dot: 'bg-tech-emerald' },
  'tech-purple': { border: 'border-tech-purple/30 hover:border-tech-purple/60', badge: 'bg-tech-purple/10 text-tech-purple border-tech-purple/20', text: 'text-tech-purple', dot: 'bg-tech-purple' },
};

const ProjectsSection = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise AI systems, intelligent platforms, and automation ecosystems built for the real world
          </p>
        </motion.div>

        {/* AI Enterprise Projects */}
        <div className="space-y-8 mb-16">
          {aiProjects.map((project, index) => {
            const accent = accentClasses[project.accent] ?? accentClasses['tech-blue'];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className={`tech-card overflow-hidden border ${accent.border} transition-all duration-300`}>
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${project.gradient} p-7`}>
                      {/* Top row */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className={`text-2xl font-bold text-foreground`}>{project.title}</h3>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${accent.badge}`}>
                              {project.category}
                            </span>
                          </div>
                          <p className={`text-sm font-medium ${accent.text}`}>{project.tagline}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {project.link && (
                            <Button
                              size="sm"
                              variant="outline"
                              className={`border-current/30 ${accent.text} hover:bg-current/10 gap-2`}
                              asChild
                            >
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5" />
                                {('secondLink' in project) ? '.lk' : 'Visit'}
                              </a>
                            </Button>
                          )}
                          {('secondLink' in project) && (project as { secondLink?: string }).secondLink && (
                            <Button
                              size="sm"
                              variant="outline"
                              className={`border-current/30 ${accent.text} hover:bg-current/10 gap-2`}
                              asChild
                            >
                              <a href={(project as { secondLink?: string }).secondLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5" />
                                .nl
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                      <div className="grid md:grid-cols-3 gap-5">
                        {/* Modules */}
                        <div>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2.5">Modules</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.modules.map(m => (
                              <span key={m} className="px-2 py-0.5 text-xs bg-card/50 text-muted-foreground rounded border border-border/60">{m}</span>
                            ))}
                          </div>
                        </div>

                        {/* AI Features */}
                        <div>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2.5">AI Agents & Features</p>
                          <div className="space-y-1.5">
                            {project.aiFeatures.map(f => (
                              <div key={f} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                                <span className="text-xs text-foreground/80">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2.5">Tech Stack</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map(t => (
                              <span key={t} className={`px-2 py-0.5 text-xs rounded border ${accent.badge}`}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Earlier Projects toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowEarlier(v => !v)}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl border border-border/60 hover:border-tech-blue/30 text-muted-foreground hover:text-foreground transition-all duration-300 mb-6 group"
          >
            <span className="text-sm font-medium">Earlier Projects & Open Source</span>
            <motion.div animate={{ rotate: showEarlier ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showEarlier && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {earlierProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Card className="tech-card h-full group">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <CardTitle className="text-base text-foreground group-hover:text-tech-blue transition-colors duration-300 mb-1">
                                {project.title}
                              </CardTitle>
                              <Badge variant="outline" className="text-xs border-tech-cyan/30 text-tech-cyan">
                                {project.category}
                              </Badge>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {project.github && (
                                <Button variant="ghost" size="sm" asChild className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-3.5 h-3.5" />
                                  </a>
                                </Button>
                              )}
                              {project.link && (
                                <Button variant="ghost" size="sm" asChild className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground">
                                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-3">
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map(tech => (
                              <span key={tech} className="px-2 py-0.5 text-xs bg-secondary/50 text-muted-foreground rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {(project.link || project.github) && (
                            <div className="pt-1">
                              {project.link && (
                                <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white h-8 text-xs" asChild>
                                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Live <ArrowRight className="ml-1.5 w-3 h-3" />
                                  </a>
                                </Button>
                              )}
                              {project.github && !project.link && (
                                <Button size="sm" variant="outline" className="border-tech-blue/30 text-tech-blue h-8 text-xs" asChild>
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-1.5 w-3 h-3" />
                                    Source Code
                                  </a>
                                </Button>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button variant="outline" size="lg" asChild className="border-tech-blue/30 text-tech-blue hover:bg-tech-blue/10">
                    <a href="https://github.com/Faskath513" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      View More on GitHub
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
