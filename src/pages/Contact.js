import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours with a detailed proposal.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
      timeline: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* Contact Hero */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              Ready to accelerate your digital transformation? Let's discuss your project 
              and create a custom solution that drives results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <AnimatedSection delay={100}>
              <div className="card text-center">
                <div className="feature-icon">📧</div>
                <h3>Email Us</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  Send us an email and we'll respond within 24 hours
                </p>
                <a href="mailto:hello@softwareaccel.com" style={{ color: 'var(--color-accent)' }}>
                  hello@softwareaccel.com
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card text-center">
                <div className="feature-icon">📞</div>
                <h3>Call Us</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  Speak directly with our team about your project
                </p>
                <a href="tel:+1-555-123-4567" style={{ color: 'var(--color-accent)' }}>
                  +1 (555) 123-4567
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="card text-center">
                <div className="feature-icon">💬</div>
                <h3>Live Chat</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  Chat with us in real-time for immediate assistance
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => alert('Live chat feature would be integrated here')}
                >
                  Start Chat
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
            <AnimatedSection delay={100}>
              <div>
                <h2 style={{ marginBottom: '1rem' }}>Let's Start Your Project</h2>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                  Fill out the form below and we'll get back to you with a detailed proposal 
                  and timeline for your project. The more details you provide, the better 
                  we can tailor our solution to your needs.
                </p>
                
                <div className="card">
                  <h3 style={{ marginBottom: '1rem' }}>Why Choose SoftwareAccel?</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '0.75rem',
                      marginLeft: 0,
                      color: 'var(--color-text-secondary)'
                    }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>✓</span>
                      Free consultation and project estimation
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '0.75rem',
                      marginLeft: 0,
                      color: 'var(--color-text-secondary)'
                    }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>✓</span>
                      Agile development methodology
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '0.75rem',
                      marginLeft: 0,
                      color: 'var(--color-text-secondary)'
                    }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>✓</span>
                      Regular progress updates and demos
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '0.75rem',
                      marginLeft: 0,
                      color: 'var(--color-text-secondary)'
                    }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>✓</span>
                      Post-launch support and maintenance
                    </li>
                    <li style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginLeft: 0,
                      color: 'var(--color-text-secondary)'
                    }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>✓</span>
                      100% satisfaction guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-2">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-2">
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--color-border-primary)',
                        borderRadius: 'var(--radius-8)',
                        background: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'inherit'
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-strategy">Digital Strategy</option>
                      <option value="maintenance-support">Maintenance & Support</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--color-border-primary)',
                        borderRadius: 'var(--radius-8)',
                        background: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'inherit'
                      }}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-8)',
                      background: 'var(--color-bg-secondary)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                    required
                    style={{ minHeight: '150px' }}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                  {isSubmitting ? <span className="loading"></span> : 'Send Project Inquiry'}
                </button>
                
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--color-text-tertiary)', 
                  textAlign: 'center',
                  marginTop: '1rem'
                }}>
                  We'll respond within 24 hours with a detailed proposal and next steps.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </AnimatedSection>
          
          <div className="grid grid-2">
            <AnimatedSection delay={100}>
              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>How long does a typical project take?</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Project timelines vary based on complexity and scope. Simple websites typically 
                  take 4-6 weeks, while complex applications can take 3-6 months. We provide 
                  detailed timelines during our initial consultation.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>Do you provide ongoing support?</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Yes! We offer comprehensive maintenance and support packages to keep your 
                  digital assets running smoothly. This includes updates, security patches, 
                  monitoring, and technical support.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>What's included in your pricing?</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Our pricing includes design, development, testing, deployment, and initial 
                  training. We provide transparent pricing with no hidden fees and detailed 
                  project proposals outlining all deliverables.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="card">
                <h3 style={{ marginBottom: '1rem' }}>Can you work with our existing team?</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Absolutely! We can integrate with your existing development team, provide 
                  consulting services, or work as an extension of your team to accelerate 
                  your development process.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;