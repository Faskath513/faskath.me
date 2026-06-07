import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Calendar, Bot, Cpu, Layers, Network, Wrench, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const services = [
  { icon: Bot, label: 'AI Agents & Copilots', color: 'text-tech-blue', bg: 'bg-tech-blue/10' },
  { icon: Network, label: 'Multi-Agent Systems', color: 'text-tech-purple', bg: 'bg-tech-purple/10' },
  { icon: Cpu, label: 'Enterprise Automation', color: 'text-tech-orange', bg: 'bg-tech-orange/10' },
  { icon: Building2, label: 'ERP Modernization', color: 'text-tech-emerald', bg: 'bg-tech-emerald/10' },
  { icon: Layers, label: 'SaaS Development', color: 'text-tech-cyan', bg: 'bg-tech-cyan/10' },
  { icon: Wrench, label: 'AI Consulting', color: 'text-tech-pink', bg: 'bg-tech-pink/10' },
];

const contactChannels = [
  { icon: Mail, label: 'Email', value: 'faskath9054@gmail.com', href: 'mailto:faskath9054@gmail.com', color: 'text-tech-blue' },
  { icon: Phone, label: 'Phone', value: '+94 75 750 7441', href: 'tel:+94757507441', color: 'text-tech-emerald' },
  { icon: MapPin, label: 'Location', value: 'Sri Lanka', href: null, color: 'text-tech-orange' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Faskath513', color: 'hover:text-white hover:bg-white/10' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mohamed-faskath-18a585287', color: 'hover:text-blue-400 hover:bg-blue-400/10' },
  { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/94757507441', color: 'hover:text-tech-emerald hover:bg-tech-emerald/10' },
  { icon: Calendar, label: 'Schedule', href: '#contact', color: 'hover:text-tech-cyan hover:bg-tech-cyan/10' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Build Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Operating System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Whether it's an intelligent automation platform,
            an enterprise agent ecosystem, or a complete AI business OS — let's architect it together.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass-card p-4 flex flex-col items-center text-center gap-2 cursor-default"
            >
              <div className={`w-9 h-9 rounded-lg ${service.bg} flex items-center justify-center`}>
                <service.icon className={`w-4.5 h-4.5 ${service.color}`} />
              </div>
              <span className="text-xs font-medium text-foreground/80 leading-tight">{service.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Direct Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Based in Sri Lanka, working with enterprise clients globally.
                Available for AI consulting, system design, and full project delivery.
              </p>
            </div>

            <div className="space-y-3">
              {contactChannels.map(info => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-tech-blue/30 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-tech-blue/10 flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-foreground hover:text-tech-blue transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 rounded-xl bg-card/50 border border-border/60 flex items-center justify-center text-muted-foreground transition-all duration-200 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="tech-card border-tech-blue/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Name</label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} className="bg-background/50 border-border focus:border-tech-blue" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="bg-background/50 border-border focus:border-tech-blue" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Subject</label>
                    <Input id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} className="bg-background/50 border-border focus:border-tech-blue" placeholder="AI Consulting / Enterprise System / Other" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Message</label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} className="bg-background/50 border-border focus:border-tech-blue min-h-[110px]" placeholder="Describe your project or requirements..." />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3">
                    {isSubmitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
