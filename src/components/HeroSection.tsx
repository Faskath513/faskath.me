import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/photo-output.jpg';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mohamed Faskath - Software Engineer"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.h2 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-tech-cyan font-medium"
                >
                  Hello, I'm
                </motion.h2>
                <motion.h1 
                  variants={itemVariants}
                  className="hero-text leading-tight"
                >
                  Mohamed Faskath
                </motion.h1>
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl md:text-4xl font-semibold text-foreground"
                >
                  Full-Stack Software Engineer
                </motion.h3>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="hero-subtitle max-w-2xl mx-auto lg:mx-0"
              >
                Self-motivated engineer passionate about building scalable web and AI-driven solutions. 
                Currently contributing to innovative projects at Clancode Labs and SnapWerks, 
                with expertise in React, Node.js, PHP, and modern development practices.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 glow-primary"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                  asChild
                >
                  <a href="/Faskath_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for freelance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                  <span>Based in Sri Lanka</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              variants={itemVariants}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-96">
                {/* Tech Stack Cards */}
                <motion.div 
                  className="absolute top-4 right-4 tech-card w-32 floating"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚛️</div>
                    <div className="text-sm font-medium">React</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-16 left-8 tech-card w-32 floating-delayed"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-sm font-medium">Node.js</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute top-20 left-12 tech-card w-32 floating"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🐘</div>
                    <div className="text-sm font-medium">PHP</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-4 right-16 tech-card w-32 floating-delayed"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="text-sm font-medium">AI/ML</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground cursor-pointer"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;