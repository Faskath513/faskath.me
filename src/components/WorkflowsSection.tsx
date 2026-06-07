import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText, Brain, CheckCircle, MessageSquare, Users, Building } from 'lucide-react';

const workflows = [
  {
    id: 'invoice',
    title: 'Invoice OCR Automation',
    description: 'End-to-end invoice processing from document upload to ERP posting with AI validation',
    icon: FileText,
    color: 'tech-orange',
    steps: [
      { label: 'Invoice Upload', sublabel: 'PDF / Image input', icon: FileText },
      { label: 'Gemini OCR', sublabel: 'Text extraction & parsing', icon: Brain },
      { label: 'Validation Agent', sublabel: 'Data integrity checks', icon: CheckCircle },
      { label: 'Accounting Agent', sublabel: 'Journal entry creation', icon: FileText },
      { label: 'ERP Update', sublabel: 'Directus / SAP sync', icon: Building },
      { label: 'WhatsApp Notification', sublabel: 'Stakeholder alert', icon: MessageSquare },
    ],
  },
  {
    id: 'hiring',
    title: 'AI Hiring Pipeline',
    description: 'Autonomous CV screening, skill analysis, candidate ranking and interview scheduling',
    icon: Users,
    color: 'tech-blue',
    steps: [
      { label: 'CV Upload', sublabel: 'Bulk resume intake', icon: FileText },
      { label: 'Resume Parser', sublabel: 'Structured data extraction', icon: Brain },
      { label: 'Skill Analysis Agent', sublabel: 'Competency mapping', icon: Brain },
      { label: 'Job Matching Agent', sublabel: 'Fit score calculation', icon: CheckCircle },
      { label: 'Ranking Agent', sublabel: 'Candidate shortlisting', icon: FileText },
      { label: 'Interview Scheduler', sublabel: 'Calendar automation', icon: MessageSquare },
    ],
  },
  {
    id: 'construction',
    title: 'Construction BOQ Intelligence',
    description: 'AI-powered BOQ analysis with cost forecasting, risk assessment, and executive reporting',
    icon: Building,
    color: 'tech-emerald',
    steps: [
      { label: 'Construction BOQ', sublabel: 'Quantity schedule input', icon: FileText },
      { label: 'BOQ Analysis Agent', sublabel: 'Item classification', icon: Brain },
      { label: 'Cost Agent', sublabel: 'Market rate mapping', icon: FileText },
      { label: 'Risk Agent', sublabel: 'Risk probability scoring', icon: CheckCircle },
      { label: 'Planning Agent', sublabel: 'Timeline optimization', icon: Brain },
      { label: 'Executive Report Agent', sublabel: 'C-suite summary generation', icon: MessageSquare },
    ],
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; tab: string }> = {
  'tech-orange': { text: 'text-tech-orange', bg: 'bg-tech-orange/10', border: 'border-tech-orange/30', tab: 'bg-tech-orange/20 border-tech-orange/50 text-tech-orange' },
  'tech-blue': { text: 'text-tech-blue', bg: 'bg-tech-blue/10', border: 'border-tech-blue/30', tab: 'bg-tech-blue/20 border-tech-blue/50 text-tech-blue' },
  'tech-emerald': { text: 'text-tech-emerald', bg: 'bg-tech-emerald/10', border: 'border-tech-emerald/30', tab: 'bg-tech-emerald/20 border-tech-emerald/50 text-tech-emerald' },
};

const WorkflowsSection = () => {
  const [active, setActive] = useState(0);
  const workflow = workflows[active];
  const c = colorMap[workflow.color] ?? colorMap['tech-blue'];

  return (
    <section id="workflows" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Automation</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Enterprise Workflow{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real automation pipelines replacing manual work across construction, manufacturing, and HR
          </p>
        </motion.div>

        {/* Workflow tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
          {workflows.map((w, i) => {
            const wc = colorMap[w.color] ?? colorMap['tech-blue'];
            return (
              <button
                key={w.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? wc.tab
                    : 'border-border/60 text-muted-foreground hover:border-border hover:text-foreground'
                }`}
              >
                <w.icon className="w-4 h-4" />
                {w.title.split(' ').slice(0, 2).join(' ')}
              </button>
            );
          })}
        </div>

        {/* Active workflow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm p-6 md:p-8`}>
              <div className="flex items-start gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                  <workflow.icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{workflow.title}</h3>
                  <p className="text-sm text-muted-foreground">{workflow.description}</p>
                </div>
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-0">
                {workflow.steps.map((step, index) => (
                  <React.Fragment key={step.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.07 }}
                      className="flex items-center gap-4"
                    >
                      {/* Step number */}
                      <div className={`w-7 h-7 rounded-full border ${c.border} ${c.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-xs font-bold ${c.text}`}>{index + 1}</span>
                      </div>

                      {/* Step content */}
                      <div className="flex-1 flex items-center gap-3 py-3 px-4 rounded-lg bg-card/30 border border-border/40">
                        <step.icon className={`w-4 h-4 ${c.text} flex-shrink-0`} />
                        <div>
                          <span className="text-sm font-semibold text-foreground">{step.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">{step.sublabel}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Connector */}
                    {index < workflow.steps.length - 1 && (
                      <div className="flex items-center gap-4 my-0.5">
                        <div className="w-7 flex justify-center">
                          <div className="w-px h-4 bg-gradient-to-b from-border/40 to-border/20" />
                        </div>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                          className="flex-1"
                        >
                          <ChevronRight className={`w-3.5 h-3.5 ${c.text} opacity-60`} />
                        </motion.div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WorkflowsSection;
