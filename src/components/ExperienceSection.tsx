import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Part-time Associate Software Engineer',
      company: 'Clancode Labs',
      website: 'clancodelabs.org',
      duration: 'Aug 2025 – Present',
      location: 'Remote',
      description: [
        'Contributing to backend and frontend development of client projects using React.js, Node.js, and Express.js',
        'Assisting in building scalable web applications with MongoDB and RESTful APIs',
        'Collaborating with senior engineers on code reviews, bug fixing, and deployment pipelines',
        'Engaging in Agile development workflows, improving project delivery and team collaboration'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
      current: true
    },
    {
      id: 2,
      title: 'Full Stack Software Engineer (Part-time)',
      company: 'SnapWerks, KINIT (Pvt) Ltd',
      website: 'snapwerks.lk',
      duration: 'Aug 2025 – Present',
      location: 'Sri Lanka, Netherlands, GCC, Singapore',
      description: [
        'Promoted from intern to part-time engineer after successful 6-month internship performance',
        'Spearheading development of SnapWerks, a multilingual, modular job & service marketplace spanning 9 countries',
        'Building backend services with Symfony, Twig, and Doctrine; enforcing multi-tenant isolation and localization',
        'Developing mobile apps (Android & iOS) with Hotwire Native, integrating native views with Turbo Streams and Frames',
        'Engineering dynamic UIs using Stimulus.js, Tailwind CSS, and Turbo, enabling reactive, no-JS SPAs'
      ],
      technologies: ['Symfony', 'Twig', 'Doctrine', 'Hotwire Native', 'Stimulus.js', 'Tailwind CSS'],
      current: true
    },
    {
      id: 3,
      title: 'Full Stack Software Engineering Intern',
      company: 'SnapWerks, KINIT (Pvt) Ltd',
      website: 'snapwerks.lk',
      duration: 'Feb 2025 – Jul 2025',
      location: 'Sri Lanka',
      description: [
        'Assisted in developing core modules for SnapWerks using Symfony, Twig, and PostgreSQL',
        'Contributed to frontend features with Stimulus.js and Tailwind CSS, improving UI responsiveness',
        'Supported AI-driven job-service matcher by preparing training datasets and refining NLP pipelines',
        'Collaborated with senior engineers on end-to-end testing workflows using Cypress'
      ],
      technologies: ['Symfony', 'Twig', 'PostgreSQL', 'Stimulus.js', 'Cypress', 'NLP'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building scalable web applications and AI-driven solutions across multiple technologies and industries.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="tech-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Icon & Status */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      {experience.current && (
                        <div className="mt-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-tech-emerald rounded-full animate-pulse"></div>
                          <span className="text-xs text-tech-emerald font-medium">Current</span>
                        </div>
                      )}
                    </div>

                    {/* Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-tech-emerald">
                            <span className="font-semibold">{experience.company}</span>
                            <span className="hidden sm:block">•</span>
                            <span className="text-sm">{experience.website}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 mb-6">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-tech-teal rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-tech-emerald/10 text-tech-emerald rounded-full border border-tech-emerald/20"
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

        {/* Career Timeline Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-primary/10 rounded-full border border-primary/20">
            <Briefcase className="w-5 h-5 text-tech-emerald" />
            <span className="text-sm font-medium text-foreground">
              {experiences.filter(exp => exp.current).length} Active Positions • {experiences.length} Total Experiences
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;