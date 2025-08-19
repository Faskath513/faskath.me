import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'SnapWerks',
      description: 'Multi-tenant scalable platform for Sri Lanka, Netherlands, and GCC. Features multilingual UI, localized payments, and AI-driven job-service matching.',
      technologies: ['Symfony', 'Twig', 'Stimulus.js', 'Hotwire Native', 'PostgreSQL', 'Docker', 'AI'],
      links: {
        live: 'https://snapwerks.lk',
        demo: 'https://snapwerks.nl'
      },
      category: 'Full-Stack Platform',
      featured: true
    },
    {
      title: 'RevX - Employee Performance System',
      description: 'MERN stack application featuring role-based authentication, secure session management, and real-time dashboards for performance tracking.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'NextAuth'],
      links: {
        github: 'https://github.com/Faskath513/RevX-MERN.git'
      },
      category: 'Web Application'
    },
    {
      title: 'Service Prompt AI',
      description: 'AI tool to classify service prompts and generate natural language descriptions using DistilBERT and GPT-based models.',
      technologies: ['Flask', 'Gradio', 'HuggingFace', 'Transformers', 'Threading'],
      links: {
        github: 'https://github.com/Faskath513/Service_prompt.git'
      },
      category: 'AI/ML'
    },
    {
      title: 'Job Resume Analyzer',
      description: 'Smart matching system that analyzes resumes and job posts to extract keywords and score compatibility using semantic analysis.',
      technologies: ['Django', 'Machine Learning', 'NLP', 'PDF Parsing', 'Semantic Analysis'],
      links: {
        github: 'https://github.com/Faskath513/JobResumeAnalyzer.git'
      },
      category: 'AI/ML'
    },
    {
      title: 'Fareed Motors POS System',
      description: 'Comprehensive POS system for vehicle dealership with inventory tracking, invoice generation, and secure multi-user authentication.',
      technologies: ['Laravel', 'Blade', 'Livewire', 'PostgreSQL'],
      links: {},
      category: 'Enterprise Software',
      status: 'Ongoing'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in full-stack development, AI/ML, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`tech-card group overflow-hidden ${project.featured ? 'border-primary/50 glow-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge className="bg-gradient-primary text-white">Featured</Badge>
                        )}
                        {project.status && (
                          <Badge variant="secondary">{project.status}</Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-tech-cyan border-tech-cyan">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.links.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-muted-foreground hover:text-primary"
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                      {project.links.live && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-muted-foreground hover:text-primary"
                        >
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-muted-foreground hover:text-primary"
                        >
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {(project.links.live || project.links.demo || project.links.github) && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.links.live && (
                        <Button
                          asChild
                          className="bg-gradient-primary hover:opacity-90 text-white"
                        >
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            View Live <ArrowRight className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.demo && !project.links.live && (
                        <Button
                          asChild
                          className="bg-gradient-secondary hover:opacity-90 text-white"
                        >
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            View Demo <ArrowRight className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button
                          variant="outline"
                          asChild
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 w-4 h-4" />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <a href="https://github.com/Faskath513" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;