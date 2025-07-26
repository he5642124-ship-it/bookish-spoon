"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, MoveRight, Smartphone, Rocket, Zap, Wrench, CreditCard, BarChart, Palette, Shield, Clock, Award, Star, ArrowRight, Play, Users, TrendingUp, Globe, Code, Layers, Target, ChevronRight, DollarSign, Briefcase, MessageSquare, Heart, Coffee, Lightbulb, Building, Handshake } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import HeroVisual from '@/components/HeroVisual';
import { useAnimationVariants } from '@/components/lib/utils';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Professional illustration components
const HeroIllustration = () => (
  <div className="relative w-full max-w-2xl mx-auto">
    <svg viewBox="0 0 600 400" className="w-full h-auto">
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#grid)" />
      
      {/* Main elements */}
      <motion.rect
        x="100" y="80" width="400" height="240" rx="12"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      
      {/* Code blocks */}
      <motion.rect
        x="120" y="120" width="120" height="8" rx="4"
        fill="hsl(var(--primary))" opacity="0.8"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.rect
        x="120" y="140" width="80" height="8" rx="4"
        fill="rgba(255,255,255,0.4)"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.rect
        x="120" y="160" width="160" height="8" rx="4"
        fill="rgba(255,255,255,0.3)"
        initial={{ width: 0 }}
        animate={{ width: 160 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />
      
      {/* Floating elements */}
      <motion.circle
        cx="450" cy="150" r="6"
        fill="hsl(var(--primary))"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="460" y="200" width="12" height="12" rx="2"
        fill="rgba(255,255,255,0.6)"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

const ProcessIllustration = () => (
  <div className="relative w-full max-w-4xl mx-auto mb-12">
    <svg viewBox="0 0 800 200" className="w-full h-auto">
      {/* Connection line */}
      <motion.line
        x1="100" y1="100" x2="700" y2="100"
        stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      {/* Process nodes */}
      {[
        { x: 100, icon: "👥", label: "Discovery" },
        { x: 300, icon: "🎨", label: "Design" },
        { x: 500, icon: "⚡", label: "Build" },
        { x: 700, icon: "🚀", label: "Launch" }
      ].map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.x} cy="100" r="30"
            fill="rgba(255,255,255,0.05)" stroke="hsl(var(--primary))" strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          />
          <motion.text
            x={node.x} y="105" textAnchor="middle" fontSize="20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2 + 0.3 }}
          >
            {node.icon}
          </motion.text>
          <motion.text
            x={node.x} y="140" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.7)"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 + 0.5 }}
          >
            {node.label}
          </motion.text>
        </motion.g>
      ))}
    </svg>
  </div>
);

const heroItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + i * 0.32,
    },
  }),
};

// Fix CountUpNumber types
type CountUpNumberProps = { to: number; duration?: number; prefix?: string; start: boolean };
function CountUpNumber({ to, duration = 1.2, prefix = '$', start }: CountUpNumberProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!start || !countRef.current) return;
    let startTime: number | undefined;
    let frame: number;
    function animate(ts: number) {
      if (startTime === undefined) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      if (countRef.current) {
        countRef.current.textContent = `${prefix}${Math.floor(progress * to).toLocaleString()}`;
      }
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        if (countRef.current) {
          countRef.current.textContent = `${prefix}${to.toLocaleString()}`;
        }
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [to, duration, start, prefix]);
  return <span ref={countRef}>{prefix}{0}</span>;
}

const stepVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4 + i * 0.32,
    },
  }),
};

export default function Home() {
  const { fadeInUp, staggerContainer } = useAnimationVariants();
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Logo />
            <span className="text-xl font-bold font-headline">DigitalAccel</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Services', 'Process', 'Results', 'About'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button asChild className="hidden md:flex">
              <a href="mailto:hello@digitalaccel.io">Start Your Project</a>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="text-center text-4xl md:text-7xl font-bold font-headline tracking-tight leading-tight mb-8"
                variants={heroItem}
                custom={0}
              >
                Premium Digital Solutions That Actually Convert
              </motion.h1>
              <motion.p
                className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10"
                variants={heroItem}
                custom={1}
              >
                Professional landing pages, mobile apps, and SEO optimization designed to boost your digital presence and drive sustainable business growth.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
                variants={heroItem}
                custom={2}
              >
                <Button size="lg" className="group">
                  <a href="#" className="flex items-center gap-2">
                    Start Building
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <a href="#" className="flex items-center gap-2">
                    See Timeline <span aria-hidden="true">→</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <HeroVisual />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
              >
                <Rocket className="w-4 h-4" />
                Complete digital solutions
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                Everything you need to
                <br />
                <span className="text-primary">accelerate digitally</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                We provide a complete package to get your digital presence off the ground, 
                fast. From high-converting landing pages to full mobile applications.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Globe,
                  title: "High-Converting Landing Pages",
                  description: "Pixel-perfect, SEO-optimized pages designed to convert visitors into customers.",
                  features: ["Conversion optimization", "SEO ready", "Mobile responsive", "Analytics integrated"]
                },
                {
                  icon: Smartphone,
                  title: "Mobile Applications",
                  description: "Native-quality mobile apps that work seamlessly across all devices and platforms.",
                  features: ["Cross-platform", "App store ready", "Push notifications", "Offline support"]
                },
                {
                  icon: TrendingUp,
                  title: "Digital Presence Boost",
                  description: "Complete digital transformation to establish your brand's online authority.",
                  features: ["Brand identity", "Social media setup", "Content strategy", "Online reputation"]
                },
                {
                  icon: Code,
                  title: "Custom Development",
                  description: "Tailored solutions built with modern technologies for your specific needs.",
                  features: ["Modern tech stack", "Scalable architecture", "API integrations", "Performance optimized"]
                },
                {
                  icon: Layers,
                  title: "Full-Stack Solutions",
                  description: "End-to-end development from database design to user interface.",
                  features: ["Database design", "Backend APIs", "Frontend interfaces", "Cloud deployment"]
                },
                {
                  icon: Shield,
                  title: "Maintenance & Support",
                  description: "Ongoing support and updates to keep your digital assets performing at their best.",
                  features: ["24/7 monitoring", "Regular updates", "Security patches", "Performance optimization"]
                }
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  custom={i}
                  className="group"
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold font-headline group-hover:text-primary transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-1">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-foreground/60">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
              >
                <Target className="w-4 h-4" />
                Our proven process
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                From concept to launch
                <br />
                <span className="text-primary">in just 7 days</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                Our battle-tested methodology ensures we deliver on time, every time. 
                Here's how we accelerate your digital transformation.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    day: "Day 1-2",
                    title: "Discovery & Strategy",
                    description: "Deep dive into your business goals, target audience, and technical requirements.",
                    icon: Users,
                  },
                  {
                    day: "Day 3-4",
                    title: "Design & Development",
                    description: "Create stunning designs and build your solution using modern technologies.",
                    icon: Code,
                  },
                  {
                    day: "Day 5-6",
                    title: "Testing & Optimization",
                    description: "Rigorous testing, performance optimization, and conversion rate improvements.",
                    icon: Zap,
                  },
                  {
                    day: "Day 7",
                    title: "Launch & Support",
                    description: "Deploy your solution and provide comprehensive support for a smooth launch.",
                    icon: Rocket,
                  }
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    variants={stepVariant}
                    custom={i}
                    className="text-center cursor-pointer transition-shadow"
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,120,255,0.18)' }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs font-medium text-primary mb-2">{step.day}</div>
                    <h3 className="text-lg font-semibold font-headline mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
              >
                <TrendingUp className="w-4 h-4" />
                Proven results
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                Built for
                <br />
                <span className="text-primary">modern businesses</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                We're shaped by the practices and principles that distinguish world-class 
                digital teams from the rest: relentless focus, fast execution, and quality craft.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                {
                  title: "Purpose-built for growth",
                  description: "Every solution is crafted with scalability and performance in mind, ensuring your digital presence grows with your business.",
                  icon: TrendingUp,
                  stats: "300% avg. growth"
                },
                {
                  title: "Designed to convert",
                  description: "Our designs aren't just beautiful—they're conversion-focused, turning visitors into customers with proven UX principles.",
                  icon: Target,
                  stats: "85% conversion lift"
                },
                {
                  title: "Crafted to perfection",
                  description: "Attention to detail in every pixel, every interaction, and every line of code. Quality that reflects your brand's excellence.",
                  icon: Award,
                  stats: "100% satisfaction"
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  custom={i}
                  className="group"
                >
                  <Card
                    className="h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-10 rounded-2xl shadow-xl"
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <feature.icon className="w-7 h-7 text-primary" />
                          <h3 className="text-lg font-semibold font-headline group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                        </div>
                        <div className="text-lg font-bold text-primary mb-4">{feature.stats}</div>
                        <p className="text-sm text-foreground/70 leading-relaxed" style={{ lineHeight: 1.8 }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
              >
                <MessageSquare className="w-4 h-4" />
                Client testimonials
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                Trusted by
                <br />
                <span className="text-primary">industry leaders</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                Don't just take our word for it. Here's what our clients say about 
                working with DigitalAccel and the results they've achieved.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  quote: "DigitalAccel transformed our online presence in just one week. The results exceeded our expectations and our conversion rate increased by 200%.",
                  author: "Sarah Chen",
                  role: "CEO, TechStart",
                  rating: 5
                },
                {
                  quote: "The team's attention to detail and speed of delivery is unmatched. They delivered a pixel-perfect mobile app that our users absolutely love.",
                  author: "Marcus Rodriguez",
                  role: "Founder, AppVenture",
                  rating: 5
                },
                {
                  quote: "Working with DigitalAccel was a game-changer. They didn't just build our website, they built our entire digital strategy from the ground up.",
                  author: "Emily Watson",
                  role: "Marketing Director, GrowthCo",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.author}
                  variants={fadeInUp}
                  custom={i}
                  className="group"
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-6">
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-sm text-foreground/80 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-white/10 pt-4">
                        <div className="font-semibold text-sm">{testimonial.author}</div>
                        <div className="text-xs text-foreground/60">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
              >
                <CreditCard className="w-4 h-4" />
                Flat-Rate Pricing
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                Flat-Rate Pricing. No Surprises.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                Choose the package that fits your needs. Get started today.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
            >
              {/* SPRINT */}
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="group"
              >
                <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-10 relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🚀</span>
                        <span className="text-xl font-bold font-headline">SPRINT</span>
                    </div>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">Most popular</span>
                  </div>
                    <div className="text-4xl font-bold text-primary mb-2">$2,500</div>
                    <div className="text-foreground/70 mb-4">7-day delivery for a powerful landing page.</div>
                    <ul className="space-y-2 mb-6 text-left">
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Landing page + basic features</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Payment ready</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />30-day support</li>
                    </ul>
                  </div>
                  <Button size="lg" className="w-full group mt-auto">
                    <a href="#" className="flex items-center gap-2 justify-center">
                      Start Sprint <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </Card>
              </motion.div>

              {/* MARATHON */}
              <motion.div
                variants={fadeInUp}
                custom={1}
                className="group"
              >
                <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-10 relative flex flex-col justify-between">
                    <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🏃‍♂️</span>
                        <span className="text-xl font-bold font-headline">MARATHON</span>
                        </div>
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">Best value</span>
                      </div>
                    <div className="text-4xl font-bold text-primary mb-2">$5,000</div>
                    <div className="text-foreground/70 mb-4">14-day delivery for a full web and mobile app.</div>
                    <ul className="space-y-2 mb-6 text-left">
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Full web app</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Mobile app</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Advanced features</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />90-day support</li>
                    </ul>
                    </div>
                  <Button size="lg" variant="outline" className="w-full group mt-auto">
                    <a href="#" className="flex items-center gap-2 justify-center">
                      Start Marathon <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </Card>
              </motion.div>

              {/* ENTERPRISE */}
              <motion.div
                variants={fadeInUp}
                custom={2}
                className="group"
              >
                <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-10 relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🏢</span>
                        <span className="text-xl font-bold font-headline">ENTERPRISE</span>
                        </div>
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">For agencies</span>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">Custom</div>
                    <div className="text-foreground/70 mb-4">A dedicated solution for agencies and custom needs.</div>
                    <ul className="space-y-2 mb-6 text-left">
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Custom timeline</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />Dedicated team</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />White-label solution</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" />24/7 support</li>
                    </ul>
                  </div>
                  <Button size="lg" variant="outline" className="w-full group mt-auto">
                    <a href="#" className="flex items-center gap-2 justify-center">
                      Contact Us
                      </a>
                    </Button>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Affiliate Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row gap-10 items-start justify-center"
              >
              {/* Left: Headline, list, CTA */}
              <div className="flex-1 min-w-[320px] max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💰</span>
                  <span className="font-bold tracking-widest text-sm">AFFILIATE PROGRAM</span>
                      </div>
                <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 leading-tight">
                  Turn Your Network Into Recurring Revenue
                </h2>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-2 text-lg"><Check className="w-5 h-5 text-primary mt-1" />40% commission on the first project payment.</li>
                  <li className="flex items-start gap-2 text-lg"><Check className="w-5 h-5 text-primary mt-1" />15% recurring revenue share on maintenance plans.</li>
                  <li className="flex items-start gap-2 text-lg"><Check className="w-5 h-5 text-primary mt-1" />$100 bonus for every 5 successful referrals.</li>
                  <li className="flex items-start gap-2 text-lg"><Check className="w-5 h-5 text-primary mt-1" />Real-time tracking dashboard for your referrals.</li>
                </ul>
              <Button size="lg" className="group">
                  <a href="#" className="flex items-center gap-2">
                    Apply to Affiliate Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              </div>
              {/* Right: Example earnings cards */}
              {/* Animate count up only when section is in view */}
              <div className="flex-1 flex flex-col gap-6 min-w-[320px] max-w-xl w-full">
                {(() => {
                  const ref = useRef<HTMLDivElement>(null);
                  const inView = useInView(ref, { once: true, margin: '-100px' });
                  return (
                    <div ref={ref}>
                      <Card className="bg-white/5 border-white/10 p-8">
                        <div className="text-xl font-bold mb-2">Example: Startup Package</div>
                        <div className="text-sm text-foreground/60 mb-1">Customer Price: $2,500</div>
                        <div className="text-3xl font-extrabold text-primary">You Earn: <CountUpNumber to={1000} start={inView} /></div>
                      </Card>
                      <Card className="bg-white/5 border-white/10 p-8">
                        <div className="text-xl font-bold mb-2">Example: Growth Package</div>
                        <div className="text-sm text-foreground/60 mb-1">Customer Price: $5,000</div>
                        <div className="text-3xl font-extrabold text-primary">You Earn: <CountUpNumber to={2000} start={inView} /></div>
                      </Card>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
              >
                <Lightbulb className="w-4 h-4" />
                Frequently asked questions
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                Got questions?
                <br />
                <span className="text-primary">We have answers</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                Everything you need to know about our process, pricing, and what 
                to expect when working with DigitalAccel.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-4"
            >
              {[
                {
                  question: "How can you deliver a complete solution in just 7 days?",
                  answer: "We have a streamlined process and a team of experts who work in parallel. While traditional agencies work sequentially, we handle design, development, and optimization simultaneously. Our proven templates and frameworks allow us to move fast without sacrificing quality."
                },
                {
                  question: "What if I need revisions or changes?",
                  answer: "We include up to 3 rounds of revisions in our standard package. Most clients are happy with the first version, but we're committed to getting it right. Additional revisions beyond the included rounds are available at $297 each."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Yes! Every project includes 30 days of free support after launch. This covers bug fixes, minor content updates, and technical support. After that, we offer monthly maintenance packages starting at $297/month."
                },
                {
                  question: "What technologies do you use?",
                  answer: "We use modern, proven technologies including React, Next.js, Tailwind CSS, and cloud hosting on platforms like Vercel and Netlify. All our solutions are mobile-responsive, SEO-optimized, and built for performance."
                },
                {
                  question: "Can you integrate with my existing tools?",
                  answer: "Absolutely! We can integrate with most popular tools including CRM systems, email marketing platforms, analytics tools, payment processors, and more. Just let us know what you're using and we'll make it work."
                },
                {
                  question: "What if I'm not satisfied with the result?",
                  answer: "We offer a 100% money-back guarantee. If you're not completely satisfied with your project within the first 14 days after delivery, we'll refund your entire investment. No questions asked."
                }
              ].map((faq, i) => (
                <motion.div
                  key={faq.question}
                  variants={fadeInUp}
                  custom={i}
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 p-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold font-headline">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold font-headline mb-4"
              >
                Ready to accelerate
                <br />
                <span className="text-primary">your digital presence?</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-foreground/70 mb-8 leading-relaxed"
              >
                Don't let another month slip by. Your customers are waiting. 
                Let's build your vision and launch it in just 7 days.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="group">
                  <a href="mailto:hello@digitalaccel.io" className="flex items-center gap-2">
                    Start Your Project Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <a href="mailto:hello@digitalaccel.io?subject=Strategy Call" className="flex items-center gap-2">
                    Book Strategy Call
                    <MoveRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-foreground/70"
              >
                {[
                  "✓ Project starts within 24 hours",
                  "✓ Daily progress updates via Slack",
                  "✓ Direct access to development team",
                  "✓ No contracts, no surprises"
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 border-t border-white/10 pt-16 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Logo />
                <span className="text-lg font-bold font-headline">DigitalAccel</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-3">
                Accelerating digital transformation for modern businesses. 
                Ship faster, grow stronger.
              </p>
              <a 
                href="mailto:hello@digitalaccel.io" 
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                hello@digitalaccel.io
              </a>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-headline font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {['Landing Pages', 'Mobile Apps', 'Digital Presence', 'Custom Development'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-headline font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {['About', 'Process', 'Results', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-headline font-semibold mb-4 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-foreground/50">
            <p>&copy; {new Date().getFullYear()} DigitalAccel. All rights reserved.</p>
            <div className="flex gap-4">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} href="#" className="hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}