import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, GitBranch, Layers, Network, Zap, Building2, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const journey = [
  { label: 'Software Engineer', color: 'text-muted-foreground', line: true },
  { label: 'AI Automation Engineer', color: 'text-tech-cyan', line: true },
  { label: 'LLM Engineer', color: 'text-tech-blue', line: true },
  { label: 'AI Systems Architect', color: 'text-tech-purple', line: true },
  { label: 'Enterprise Solutions Architect', color: 'text-tech-pink', line: false },
];

const specializations = [
  { icon: Network, title: 'Autonomous Agents', description: 'Multi-agent architectures that plan, execute, and report autonomously', color: 'text-tech-blue', bg: 'bg-tech-blue/10', border: 'border-tech-blue/20' },
  { icon: Building2, title: 'Enterprise AI', description: 'End-to-end AI transformation for construction, manufacturing & education', color: 'text-tech-purple', bg: 'bg-tech-purple/10', border: 'border-tech-purple/20' },
  { icon: Zap, title: 'Workflow Automation', description: 'n8n, Flowise, Trigger.dev orchestration replacing manual processes', color: 'text-tech-amber', bg: 'bg-tech-amber/10', border: 'border-tech-amber/20' },
  { icon: Brain, title: 'RAG Systems', description: 'Vector-powered knowledge retrieval with domain-specific fine-tuning', color: 'text-tech-cyan', bg: 'bg-tech-cyan/10', border: 'border-tech-cyan/20' },
  { icon: Cpu, title: 'ERP Intelligence', description: 'Directus-based intelligent ERP with AI copilots and decision engines', color: 'text-tech-emerald', bg: 'bg-tech-emerald/10', border: 'border-tech-emerald/20' },
  { icon: GitBranch, title: 'AI Orchestration', description: 'LangGraph, AgentZero, CrewAI pipelines for complex reasoning chains', color: 'text-tech-orange', bg: 'bg-tech-orange/10', border: 'border-tech-orange/20' },
  { icon: Layers, title: 'SaaS Platforms', description: 'Full-stack AI-native SaaS from zero to production-ready', color: 'text-tech-pink', bg: 'bg-tech-pink/10', border: 'border-tech-pink/20' },
  { icon: Network, title: 'MCP Architecture', description: 'Custom MCP servers connecting AI agents to enterprise systems', color: 'text-tech-indigo', bg: 'bg-tech-indigo/10', border: 'border-tech-indigo/20' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">The Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            The AI Architect{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From writing my first line of PHP to designing autonomous enterprise AI ecosystems —
            a continuous evolution driven by curiosity, systems thinking, and a relentless focus on real-world impact.
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Evolution Path</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
            {journey.map((step, index) => (
              <React.Fragment key={step.label}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className={`px-5 py-2.5 rounded-full border backdrop-blur-sm text-sm font-semibold whitespace-nowrap ${step.color} border-current/30 bg-current/5`}>
                    {step.label}
                  </div>
                </motion.div>
                {step.line && (
                  <motion.div
                    initial={{ scaleX: 0, scaleY: 0 }}
                    whileInView={{ scaleX: 1, scaleY: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="hidden md:block w-8 h-px bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/60 mx-1"
                  />
                )}
                {step.line && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="md:hidden w-px h-6 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/60 my-1"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Specializations grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Specializations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className={`tech-card h-full border ${spec.border} hover:${spec.border}`}>
                  <CardContent className="p-5">
                    <div className={`w-10 h-10 rounded-lg ${spec.bg} flex items-center justify-center mb-3`}>
                      <spec.icon className={`w-5 h-5 ${spec.color}`} />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1.5">{spec.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{spec.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Education & Background</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-1">University of Moratuwa</h4>
                    <p className="text-tech-cyan text-sm font-medium mb-1">B.Sc (Hons) in Information Technology</p>
                    <p className="text-muted-foreground text-xs">Specialized in software engineering, AI, and web technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-1">Kinniya Central College</h4>
                    <p className="text-tech-cyan text-sm font-medium mb-1">GCE Advanced Level — Physical Science</p>
                    <p className="text-muted-foreground text-xs">District Rank: 28</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
