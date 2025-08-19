import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in React, Node.js, PHP, and modern web technologies'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Experience with TensorFlow, NLP, and AI-driven solutions'
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Building robust, performant applications for multiple countries'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Agile development, code reviews, and cross-team coordination'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Self-motivated full-stack software engineer passionate about building scalable web and AI-driven solutions. 
            I adapt quickly to emerging technologies and thrive in dynamic, fast-paced environments with a strong learning 
            mindset and ability to solve complex problems while collaborating across teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="tech-card h-full text-center group">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Currently Working On
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-tech-cyan rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">SnapWerks Platform</h4>
                  <p className="text-muted-foreground">
                    Building a multilingual, modular job & service marketplace spanning 9 countries 
                    using Symfony, Hotwire Native, and modern web technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-tech-purple rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">AI-Driven Matching</h4>
                  <p className="text-muted-foreground">
                    Developing intelligent job-service matcher using NLP and machine learning 
                    to provide personalized recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-tech-orange rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Mobile Applications</h4>
                  <p className="text-muted-foreground">
                    Creating cross-platform mobile apps with Hotwire Native, integrating 
                    native views with modern web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Education & Background
            </h3>
            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">UM</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      University of Moratuwa, Sri Lanka
                    </h4>
                    <p className="text-tech-cyan font-medium mb-2">
                      B.Sc (Hons) in Information Technology
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Specialized in software engineering, AI, and web technologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">KC</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      Kinniya Central College
                    </h4>
                    <p className="text-tech-cyan font-medium mb-2">
                      GCE Advanced Level - Physical Science
                    </p>
                    <p className="text-muted-foreground text-sm">
                      District Rank: 28
                    </p>
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