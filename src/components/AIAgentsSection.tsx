import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, Zap, FileText, MessageSquare, ChevronDown } from 'lucide-react';

const agentNodes = [
  { id: 'ceo', label: 'CEO Agent', sublabel: 'Strategic Decision Maker', icon: Brain, color: 'tech-blue', delay: 0 },
  { id: 'planning', label: 'Planning Agent', sublabel: 'Task Orchestrator', icon: FileText, color: 'tech-purple', delay: 0.1 },
  { id: 'research', label: 'Research Agent', sublabel: 'Data Gatherer', icon: Search, color: 'tech-cyan', delay: 0.2 },
  { id: 'execution', label: 'Execution Agent', sublabel: 'Action Performer', icon: Zap, color: 'tech-orange', delay: 0.3 },
  { id: 'reporting', label: 'Reporting Agent', sublabel: 'Insight Generator', icon: FileText, color: 'tech-emerald', delay: 0.4 },
  { id: 'communication', label: 'Communication Agent', sublabel: 'Multi-channel Dispatcher', icon: MessageSquare, color: 'tech-pink', delay: 0.5 },
];

const outputs = [
  { label: 'WhatsApp', color: 'tech-emerald' },
  { label: 'Email', color: 'tech-blue' },
  { label: 'ERP', color: 'tech-orange' },
];

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  'tech-blue': { text: 'text-tech-blue', bg: 'bg-tech-blue/10', border: 'border-tech-blue/30', glow: 'shadow-[0_0_20px_hsl(213_100%_60%/0.3)]' },
  'tech-purple': { text: 'text-tech-purple', bg: 'bg-tech-purple/10', border: 'border-tech-purple/30', glow: 'shadow-[0_0_20px_hsl(263_70%_65%/0.3)]' },
  'tech-cyan': { text: 'text-tech-cyan', bg: 'bg-tech-cyan/10', border: 'border-tech-cyan/30', glow: 'shadow-[0_0_20px_hsl(187_100%_55%/0.3)]' },
  'tech-orange': { text: 'text-tech-orange', bg: 'bg-tech-orange/10', border: 'border-tech-orange/30', glow: 'shadow-[0_0_20px_hsl(25_95%_60%/0.3)]' },
  'tech-emerald': { text: 'text-tech-emerald', bg: 'bg-tech-emerald/10', border: 'border-tech-emerald/30', glow: 'shadow-[0_0_20px_hsl(160_84%_45%/0.3)]' },
  'tech-pink': { text: 'text-tech-pink', bg: 'bg-tech-pink/10', border: 'border-tech-pink/30', glow: 'shadow-[0_0_20px_hsl(330_80%_65%/0.3)]' },
};

const AIAgentsSection = () => {
  return (
    <section id="agents" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Architecture</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Autonomous{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Agent Pipelines</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hierarchical multi-agent systems where specialized AI agents collaborate, delegate, and execute
            tasks across the entire enterprise stack
          </p>
        </motion.div>

        {/* Agent pipeline */}
        <div className="flex flex-col items-center gap-0">
          {agentNodes.map((node, index) => {
            const c = colorMap[node.color] ?? colorMap['tech-blue'];
            return (
              <React.Fragment key={node.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: node.delay }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-full max-w-sm rounded-xl border ${c.border} ${c.bg} backdrop-blur-sm p-4 flex items-center gap-4 cursor-default agent-pulse ${c.glow}`}
                >
                  {/* Node number */}
                  <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <span className={`text-xs font-bold ${c.text}`}>{index + 1}</span>
                  </div>

                  <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <node.icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm text-foreground`}>{node.label}</div>
                    <div className="text-xs text-muted-foreground">{node.sublabel}</div>
                  </div>

                  {/* Pulse ring */}
                  <div className={`absolute inset-0 rounded-xl border ${c.border} opacity-0 group-hover:opacity-100`} />
                </motion.div>

                {/* Arrow connector */}
                {index < agentNodes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3, delay: node.delay + 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center my-1"
                  >
                    <div className="w-px h-5 bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/20" />
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-muted-foreground/50" />
                    </motion.div>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}

          {/* Final arrow to outputs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center my-1"
          >
            <div className="w-px h-5 bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/20" />
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground/50" />
          </motion.div>

          {/* Output channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-3 flex-wrap justify-center"
          >
            {outputs.map(output => {
              const c = colorMap[output.color] ?? colorMap['tech-blue'];
              return (
                <div
                  key={output.label}
                  className={`px-5 py-2.5 rounded-lg border ${c.border} ${c.bg} ${c.text} text-sm font-semibold`}
                >
                  {output.label}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-5"
        >
          {[
            { label: 'Frameworks Used', value: 'LangGraph · CrewAI · AgentZero · AutoGen', icon: Brain, color: 'text-tech-blue' },
            { label: 'Protocols', value: 'MCP · Tool Use · Function Calling · RAG', icon: Zap, color: 'text-tech-cyan' },
            { label: 'Outputs', value: 'WhatsApp · Email · ERP · Slack · Reports', icon: MessageSquare, color: 'text-tech-emerald' },
          ].map(item => (
            <div key={item.label} className="glass-card p-4 flex items-start gap-3">
              <item.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${item.color}`} />
              <div>
                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                <div className="text-xs font-medium text-foreground">{item.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AIAgentsSection;
