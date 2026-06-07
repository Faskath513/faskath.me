import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Cpu, GitBranch, Database, Globe, Server, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const techCategories = [
  {
    icon: Brain,
    title: 'AI & LLMs',
    color: 'text-tech-blue',
    bg: 'bg-tech-blue/10',
    border: 'border-tech-blue/20',
    items: ['Claude', 'OpenAI GPT', 'Gemini', 'DeepSeek', 'Llama', 'Mistral', 'Qwen', 'Grok'],
  },
  {
    icon: Network,
    title: 'Agent Frameworks',
    color: 'text-tech-purple',
    bg: 'bg-tech-purple/10',
    border: 'border-tech-purple/20',
    items: ['AgentZero', 'OpenClaw', 'CrewAI', 'AutoGen', 'LangGraph', 'LangChain', 'PydanticAI', 'DSPy', 'Semantic Kernel'],
  },
  {
    icon: Cpu,
    title: 'MCP & Agent Protocols',
    color: 'text-tech-cyan',
    bg: 'bg-tech-cyan/10',
    border: 'border-tech-cyan/20',
    items: ['WhatsApp MCP', 'Telegram MCP', 'Google Workspace MCP', 'Directus MCP', 'ERP MCP', 'CRM MCP', 'Custom MCP Servers'],
  },
  {
    icon: GitBranch,
    title: 'AI Orchestration',
    color: 'text-tech-orange',
    bg: 'bg-tech-orange/10',
    border: 'border-tech-orange/20',
    items: ['n8n', 'Flowise', 'LangFlow', 'Dify', 'OpenWebUI', 'Trigger.dev', 'ComfyUI'],
  },
  {
    icon: Layers,
    title: 'Enterprise Platforms',
    color: 'text-tech-emerald',
    bg: 'bg-tech-emerald/10',
    border: 'border-tech-emerald/20',
    items: ['Directus', 'ERP Systems', 'CRM Systems', 'HRM Systems', 'POS Systems', 'BI Systems'],
  },
  {
    icon: Globe,
    title: 'Frontend',
    color: 'text-tech-pink',
    bg: 'bg-tech-pink/10',
    border: 'border-tech-pink/20',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'text-tech-amber',
    bg: 'bg-tech-amber/10',
    border: 'border-tech-amber/20',
    items: ['NestJS', 'Symfony', 'FastAPI', 'Node.js', 'Django', 'Laravel', 'Flask'],
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    color: 'text-tech-indigo',
    bg: 'bg-tech-indigo/10',
    border: 'border-tech-indigo/20',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Databases', 'Docker', 'Coolify', 'Linux', 'GitHub Actions'],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Technology</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            AI Architecture{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive stack spanning cutting-edge AI models, agent frameworks, orchestration platforms,
            and enterprise infrastructure
          </p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`tech-card h-full border ${category.border} transition-all duration-300`}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-lg ${category.bg} flex items-center justify-center flex-shrink-0`}>
                      <category.icon className={`w-4.5 h-4.5 ${category.color}`} />
                    </div>
                    <h3 className={`text-sm font-semibold ${category.color}`}>{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map(item => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-1 text-xs rounded-md border ${category.bg} ${category.color} ${category.border} cursor-default font-medium`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages spoken */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="tech-card border-tech-emerald/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <Globe className="w-8 h-8 text-tech-emerald" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Communication Languages</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { lang: 'English', level: 'Fluent', pct: 95, color: 'bg-gradient-to-r from-tech-blue to-tech-cyan' },
                      { lang: 'Tamil', level: 'Native', pct: 100, color: 'bg-gradient-to-r from-tech-emerald to-tech-teal' },
                      { lang: 'Sinhala', level: 'Conversational', pct: 70, color: 'bg-gradient-to-r from-tech-orange to-tech-amber' },
                    ].map(l => (
                      <div key={l.lang}>
                        <div className="flex justify-between mb-1.5 text-xs">
                          <span className="font-medium text-foreground">{l.lang}</span>
                          <span className="text-muted-foreground">{l.level}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <motion.div
                            className={`h-1.5 rounded-full ${l.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${l.pct}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
