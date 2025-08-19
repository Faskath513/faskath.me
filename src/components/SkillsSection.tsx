import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Briefcase, Code2, Database, Brain, Wrench, Globe, TestTube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technical Expertise
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning full-stack development, AI/ML technologies, and modern development tools
            </p>
          </div>
          
          <div className="grid gap-8">
            {/* Skills Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="tech-card group h-full border-tech-emerald/20 hover:border-tech-emerald/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Programming</h4>
                        <p className="text-xs text-muted-foreground">Core Languages</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'PHP', level: 95 },
                        { name: 'Python', level: 90 },
                        { name: 'JavaScript', level: 88 },
                        { name: 'Java', level: 85 },
                        { name: 'C', level: 80 }
                      ].map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-xs text-tech-emerald">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <motion.div
                              className="bg-gradient-to-r from-tech-emerald to-tech-teal h-1.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Frameworks & Libraries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="tech-card group h-full border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Wrench className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Frameworks</h4>
                        <p className="text-xs text-muted-foreground">Web & Mobile</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Symfony', 'Django', 'Laravel', 'Flask', 'React', 'Vite', 'Next.js', 'Stimulus.js'].map((framework, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 text-xs font-medium bg-tech-blue/10 text-tech-blue rounded-lg border border-tech-blue/20 hover:border-tech-blue/40 cursor-default transition-all duration-200"
                        >
                          {framework}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Database & AI/ML */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="tech-card group h-full border-tech-teal/20 hover:border-tech-teal/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Data & AI</h4>
                        <p className="text-xs text-muted-foreground">Databases & ML</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-4 h-4 text-tech-teal" />
                          <span className="text-sm font-medium text-foreground">Databases</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['PostgreSQL', 'MongoDB', 'SQLite'].map((db, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                              viewport={{ once: true }}
                              className="px-2 py-1 text-xs bg-tech-teal/10 text-tech-teal rounded border border-tech-teal/20"
                            >
                              {db}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-tech-teal" />
                          <span className="text-sm font-medium text-foreground">Machine Learning</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['TensorFlow', 'NLP', 'OpenCV', 'Supervised Learning'].map((ml, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                              viewport={{ once: true }}
                              className="px-2 py-1 text-xs bg-tech-teal/10 text-tech-teal rounded border border-tech-teal/20"
                            >
                              {ml}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Tools & Languages Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Development Tools */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="tech-card group border-tech-purple/20 hover:border-tech-purple/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-tertiary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TestTube className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Development Tools</h4>
                        <p className="text-xs text-muted-foreground">Testing, Version Control & Project Management</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Cypress', 'Postman', 'Git', 'GitHub', 'GitLab', 'Jira', 'Trello'].map((tool, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-2 text-xs font-medium bg-tech-purple/10 text-tech-purple rounded-lg border border-tech-purple/20 hover:border-tech-purple/40 cursor-default transition-all duration-200 text-center"
                        >
                          {tool}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="tech-card group border-tech-orange/20 hover:border-tech-orange/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-quaternary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Languages</h4>
                        <p className="text-xs text-muted-foreground">Communication Skills</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { lang: 'English', level: 'Fluent', percentage: 95 },
                        { lang: 'Tamil', level: 'Native', percentage: 100 },
                        { lang: 'Sinhala', level: 'Conversational', percentage: 70 }
                      ].map((language, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-foreground">{language.lang}</span>
                            <span className="text-xs text-tech-orange">{language.level}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <motion.div
                              className="bg-gradient-to-r from-tech-orange to-tech-amber h-1.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${language.percentage}%` }}
                              transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Career Timeline Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
        </div>
    </section>
  );
};

export default SkillsSection;