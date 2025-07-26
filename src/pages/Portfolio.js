import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      description: 'HIPAA-compliant mobile application for patient management and telemedicine.',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Healthcare'],
      image: '🏥'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics dashboard with advanced reporting capabilities.',
      category: 'web',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
      image: '📊'
    },
    {
      id: 4,
      title: 'Logistics Management System',
      description: 'Comprehensive logistics platform for supply chain optimization.',
      category: 'web',
      tags: ['Angular', 'Java', 'MySQL', 'AWS'],
      image: '🚚'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Cross-platform social networking application with real-time messaging.',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'WebSocket', 'Social'],
      image: '📱'
    },
    {
      id: 6,
      title: 'Cloud Migration Project',
      description: 'Complete cloud migration and infrastructure modernization for enterprise client.',
      category: 'cloud',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '☁️'
    },
    {
      id: 7,
      title: 'EdTech Learning Platform',
      description: 'Interactive online learning platform with video streaming and assessments.',
      category: 'web',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Video Streaming'],
      image: '🎓'
    },
    {
      id: 8,
      title: 'IoT Dashboard',
      description: 'Real-time IoT device monitoring and control dashboard for smart buildings.',
      category: 'web',
      tags: ['React', 'Python', 'InfluxDB', 'MQTT'],
      image: '🏢'
    },
    {
      id: 9,
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness tracking application with wearable device integration.',
      category: 'mobile',
      tags: ['React Native', 'HealthKit', 'Firebase', 'Fitness'],
      image: '💪'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'cloud', label: 'Cloud Solutions' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Portfolio Hero */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Our Portfolio</h1>
            <p className="section-subtitle">
              Explore our successful projects and see how we've helped businesses 
              accelerate their digital transformation across various industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Buttons */}
      <section>
        <div className="container">
          <AnimatedSection delay={100}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`btn ${filter === category.key ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    {project.image}
                  </div>
                  <div className="portfolio-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real results from our portfolio projects
            </p>
          </AnimatedSection>
          
          <div className="grid grid-3">
            <AnimatedSection delay={100}>
              <div className="card text-center">
                <div className="stat-number" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>300%</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Conversion Increase</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  E-commerce platform saw 300% increase in conversions after our redesign and optimization.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card text-center">
                <div className="stat-number" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>50%</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Cost Reduction</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Cloud migration project reduced infrastructure costs by 50% while improving performance.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="card text-center">
                <div className="stat-number" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>1M+</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Active Users</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Mobile applications we've developed have reached over 1 million active users.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">What Our Clients Say</h2>
          </AnimatedSection>
          
          <div className="grid grid-2">
            <AnimatedSection delay={100}>
              <div className="testimonial">
                <p className="testimonial-text">
                  "The e-commerce platform SoftwareAccel built for us exceeded all expectations. 
                  Our online sales have tripled since launch."
                </p>
                <div className="testimonial-author">Jennifer Walsh</div>
                <div className="testimonial-role">CEO, Fashion Forward</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="testimonial">
                <p className="testimonial-text">
                  "Their cloud migration expertise saved us thousands in infrastructure costs 
                  while improving our system performance significantly."
                </p>
                <div className="testimonial-author">Robert Chen</div>
                <div className="testimonial-role">CTO, DataFlow Systems</div>
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
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's discuss how we can help you achieve similar success with your digital transformation.
              </p>
              <a href="/contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--color-accent)' }}>
                Get Started Today
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;