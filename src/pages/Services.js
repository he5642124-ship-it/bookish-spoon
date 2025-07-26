import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimization'],
      price: 'Starting at $5,000'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
      price: 'Starting at $8,000'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS/Azure/GCP', 'DevOps Setup', 'Auto-scaling', 'Security & Monitoring'],
      price: 'Starting at $3,000'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that converts visitors into customers',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $2,500'
    },
    {
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Strategic consulting for digital transformation initiatives',
      features: ['Technology Audit', 'Roadmap Planning', 'Process Optimization', 'Training'],
      price: 'Starting at $1,500'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your digital assets running smoothly',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Performance Optimization'],
      price: 'Starting at $500/month'
    }
  ];

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Services Hero */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive digital solutions designed to accelerate your business growth 
              and enhance your competitive advantage in the digital marketplace.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{service.description}</p>
                  
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: '0 0 1.5rem 0',
                    color: 'var(--color-text-secondary)'
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        marginBottom: '0.5rem',
                        marginLeft: 0,
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem'
                  }}>
                    {service.price}
                  </div>
                  
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    Get Started
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful project delivery every time
            </p>
          </AnimatedSection>
          
          <div className="grid grid-2" style={{ gap: '3rem', marginTop: '3rem' }}>
            <AnimatedSection delay={100}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="process-number" style={{ flexShrink: 0 }}>1</div>
                <div>
                  <h3>Discovery & Analysis</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    We begin by understanding your business objectives, target audience, 
                    and technical requirements through comprehensive research and analysis.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="process-number" style={{ flexShrink: 0 }}>2</div>
                <div>
                  <h3>Strategy & Planning</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    We create a detailed project roadmap, define milestones, and establish 
                    clear timelines to ensure smooth project execution.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="process-number" style={{ flexShrink: 0 }}>3</div>
                <div>
                  <h3>Design & Prototyping</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Our design team creates wireframes, mockups, and interactive prototypes 
                    to visualize the final solution before development begins.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="process-number" style={{ flexShrink: 0 }}>4</div>
                <div>
                  <h3>Development & Testing</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    We build your solution using agile methodologies, with continuous 
                    testing and quality assurance throughout the development cycle.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="process-number" style={{ flexShrink: 0 }}>5</div>
                <div>
                  <h3>Deployment & Launch</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    We handle the complete deployment process, ensuring your solution 
                    goes live smoothly with minimal downtime.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div className="process-number" style={{ flexShrink: 0 }}>6</div>
                <div>
                  <h3>Support & Optimization</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Post-launch support includes monitoring, maintenance, updates, and 
                    continuous optimization based on user feedback and analytics.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">
              We leverage cutting-edge technologies to build robust, scalable solutions
            </p>
          </AnimatedSection>
          
          <div className="grid grid-3">
            <AnimatedSection delay={100}>
              <div className="card text-center">
                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Frontend</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="portfolio-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card text-center">
                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Backend</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'].map((tech) => (
                    <span key={tech} className="portfolio-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="card text-center">
                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Cloud & DevOps</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'].map((tech) => (
                    <span key={tech} className="portfolio-tag">{tech}</span>
                  ))}
                </div>
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
              <h2>Ready to Get Started?</h2>
              <p>
                Let's discuss your project requirements and create a custom solution 
                that accelerates your business growth.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--color-accent)' }}>
                  Get Free Consultation
                </Link>
                <Link to="/portfolio" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
                  View Our Work
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;