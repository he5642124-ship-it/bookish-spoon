import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <AnimatedSection>
            <h1 className="hero-title">
              Accelerate Your Digital Transformation
            </h1>
            <p className="hero-subtitle">
              We help businesses boost their digital presence through cutting-edge website development, 
              mobile applications, and innovative software solutions that drive growth and success.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn btn-primary">
                Explore Services
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection delay={200}>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to accelerate your business growth
            </p>
          </AnimatedSection>
          
          <div className="services-grid">
            <AnimatedSection delay={100} className="stagger-1">
              <div className="service-card">
                <div className="service-icon">🌐</div>
                <h3>Web Development</h3>
                <p>
                  Custom websites and web applications built with modern technologies 
                  for optimal performance and user experience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="stagger-2">
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Mobile Applications</h3>
                <p>
                  Native and cross-platform mobile apps that engage users and 
                  drive business growth across all devices.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="stagger-3">
              <div className="service-card">
                <div className="service-icon">☁️</div>
                <h3>Cloud Solutions</h3>
                <p>
                  Scalable cloud infrastructure and migration services to optimize 
                  your operations and reduce costs.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="stagger-4">
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>
                  User-centered design solutions that create intuitive and 
                  engaging digital experiences for your customers.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div className="service-card">
                <div className="service-icon">🚀</div>
                <h3>Digital Strategy</h3>
                <p>
                  Strategic consulting to help you navigate digital transformation 
                  and achieve your business objectives.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Maintenance & Support</h3>
                <p>
                  Ongoing support and maintenance services to keep your digital 
                  assets running smoothly and securely.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful project delivery
            </p>
          </AnimatedSection>
          
          <div className="grid grid-3">
            <AnimatedSection delay={100}>
              <div className="process-step">
                <div className="process-number">1</div>
                <h3>Discovery & Planning</h3>
                <p>
                  We start by understanding your business goals, target audience, 
                  and technical requirements to create a comprehensive project roadmap.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="process-step">
                <div className="process-number">2</div>
                <h3>Design & Development</h3>
                <p>
                  Our expert team designs and develops your solution using the latest 
                  technologies and best practices for optimal performance.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="process-step">
                <div className="process-number">3</div>
                <h3>Testing & Launch</h3>
                <p>
                  Rigorous testing ensures quality and reliability before we launch 
                  your solution and provide ongoing support.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by businesses worldwide to accelerate their digital growth
            </p>
          </AnimatedSection>
          
          <div className="grid grid-3">
            <AnimatedSection delay={100}>
              <div className="testimonial">
                <p className="testimonial-text">
                  "SoftwareAccel transformed our online presence completely. Their team delivered 
                  a stunning website that increased our conversions by 300%."
                </p>
                <div className="testimonial-author">Sarah Johnson</div>
                <div className="testimonial-role">CEO, TechStart Inc.</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="testimonial">
                <p className="testimonial-text">
                  "The mobile app they developed for us has been a game-changer. 
                  User engagement is up 250% and our revenue has doubled."
                </p>
                <div className="testimonial-author">Michael Chen</div>
                <div className="testimonial-role">Founder, RetailPro</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="testimonial">
                <p className="testimonial-text">
                  "Professional, reliable, and innovative. They understood our vision 
                  and delivered beyond our expectations."
                </p>
                <div className="testimonial-author">Emily Rodriguez</div>
                <div className="testimonial-role">CTO, FinanceFlow</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-section">
              <h2>Ready to Accelerate Your Business?</h2>
              <p>
                Let's discuss how we can help transform your digital presence and drive growth. 
                Get a free consultation today.
              </p>
              <Link to="/contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--color-accent)' }}>
                Start Your Project
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to start your project? Send us a message and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? <span className="loading"></span> : 'Send Message'}
                }
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;