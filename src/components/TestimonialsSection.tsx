import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Farzath Mohamed Hassan',
    role: 'Procurement Engineer',
    company: 'Suhail Industrial Holding Group',
    location: 'Doha, Qatar',
    quote: "Mohamed built us a complete AI-powered construction OS that transformed how we handle BOQ analysis, procurement, and project forecasting. What used to take our team a week now happens in hours with better accuracy than ever before.",
    rating: 5,
    highlight: 'Construction AI OS',
    avatar: 'RM',
    color: 'tech-orange',
  },
  {
    name: 'Adhlan Nazeemudeen',
    role: 'Director of ArwaShawl',
    company: 'Arwa Shawl Manufacturing',
    location: 'Sri Lanka',
    quote: "The Fashion ERP Mohamed architected with AI-powered design generation, OCR invoice processing, and demand forecasting has completely modernized our manufacturing operations. Truly enterprise-grade work.",
    rating: 5,
    highlight: 'Fashion ERP AI',
    avatar: 'PN',
    color: 'tech-pink',
  },
  {
    name: 'Nawahiru Mohamed',
    role: 'Founder',
    company: 'Agentix Business Solutions',
    location: 'Colombo, Sri Lanka',
    quote: "From zero to a fully functional AI-powered SaaS with POS, CRM, inventory, and analytics — Mohamed delivered a platform that rivals international products, built specifically for the Sri Lankan market.",
    rating: 5,
    highlight: 'Enterprise SaaS',
    avatar: 'DP',
    color: 'tech-blue',
  },
  {
    name: 'Mohamed Fawas',
    role: 'Managing Director',
    company: 'Twin Properties & Rentals',
    location: 'Sri Lanka',
    quote: "The AI WhatsApp agent Mohamed built for our rental business handles customer inquiries, bookings, and follow-ups 24/7 without any human intervention. Our conversion rate increased by over 40% within the first month.",
    rating: 5,
    highlight: 'AI WhatsApp Agent',
    avatar: 'FI',
    color: 'tech-emerald',
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; badge: string; avatarBg: string }> = {
  'tech-orange': { text: 'text-tech-orange', bg: 'bg-tech-orange/5', border: 'border-tech-orange/20', badge: 'bg-tech-orange/10 text-tech-orange border-tech-orange/20', avatarBg: 'bg-gradient-to-br from-tech-orange to-tech-amber' },
  'tech-pink': { text: 'text-tech-pink', bg: 'bg-tech-pink/5', border: 'border-tech-pink/20', badge: 'bg-tech-pink/10 text-tech-pink border-tech-pink/20', avatarBg: 'bg-gradient-to-br from-tech-pink to-tech-purple' },
  'tech-blue': { text: 'text-tech-blue', bg: 'bg-tech-blue/5', border: 'border-tech-blue/20', badge: 'bg-tech-blue/10 text-tech-blue border-tech-blue/20', avatarBg: 'bg-gradient-to-br from-tech-blue to-tech-cyan' },
  'tech-emerald': { text: 'text-tech-emerald', bg: 'bg-tech-emerald/5', border: 'border-tech-emerald/20', badge: 'bg-tech-emerald/10 text-tech-emerald border-tech-emerald/20', avatarBg: 'bg-gradient-to-br from-tech-emerald to-tech-teal' },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-tech-blue text-sm font-medium uppercase tracking-widest mb-3">Social Proof</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Client{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by enterprise leaders, founders, and industry directors across construction,
            manufacturing, and technology sectors
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => {
            const c = colorMap[t.color] ?? colorMap['tech-blue'];
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className={`tech-card h-full border ${c.border} ${c.bg}`}>
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <Quote className={`w-6 h-6 ${c.text} mb-4 opacity-60`} />

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-tech-amber text-tech-amber" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${c.avatarBg} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-xs font-bold text-white">{t.avatar}</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                          <div className="text-xs text-muted-foreground/70">{t.location}</div>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${c.badge} flex-shrink-0 text-right`}>
                        {t.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
