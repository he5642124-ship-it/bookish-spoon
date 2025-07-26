import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* About Hero */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h1 className="section-title">About SoftwareAccel</h1>
            <p className="section-subtitle">
              We're a team of passionate developers, designers, and strategists dedicated to 
              accelerating digital transformation for businesses worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <AnimatedSection delay={100}>
              <div className="card">
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Our Mission</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  To empower businesses with innovative software solutions that drive growth, 
                  improve efficiency, and create exceptional user experiences. We believe in 
                  the transformative power of technology to solve real-world problems.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card">
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Our Vision</h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  To be the leading software acceleration partner for businesses seeking 
                  digital transformation. We envision a world where every business can 
                  leverage technology to reach its full potential.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-subtitle">
              Meet the talented professionals who make digital transformation possible
            </p>
          </AnimatedSection>
          
          <div className="grid grid-3">
            <AnimatedSection delay={100}>
              <div className="card text-center">
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--color-accent)', 
                  borderRadius: '50%', 
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  👨‍💻
                </div>
                <h3>Alex Thompson</h3>
                <p style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>CEO & Lead Developer</p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  10+ years of experience in full-stack development and digital strategy.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card text-center">
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--color-accent)', 
                  borderRadius: '50%', 
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  👩‍🎨
                </div>
                <h3>Sarah Martinez</h3>
                <p style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Creative Director</p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Award-winning designer specializing in user experience and interface design.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="card text-center">
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--color-accent)', 
                  borderRadius: '50%', 
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  👨‍💼
                </div>
                <h3>David Kim</h3>
                <p style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Technical Architect</p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Cloud solutions expert with expertise in scalable system architecture.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          
          <div className="grid grid-2">
            <AnimatedSection delay={100}>
              <div className="card">
                <div className="feature-icon">🎯</div>
                <h3>Excellence</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  We strive for excellence in every project, delivering solutions that exceed expectations 
                  and drive measurable results for our clients.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card">
                <div className="feature-icon">🤝</div>
                <h3>Collaboration</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  We believe in close collaboration with our clients, working as an extension 
                  of their team to achieve shared goals.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="card">
                <div className="feature-icon">💡</div>
                <h3>Innovation</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  We stay at the forefront of technology trends, continuously learning and 
                  adopting new tools to deliver cutting-edge solutions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="card">
                <div className="feature-icon">🔒</div>
                <h3>Reliability</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Our clients trust us to deliver on time, within budget, and with the highest 
                  standards of quality and security.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-section">
              <h2>Growing Together Since 2018</h2>
              <p>
                From a small startup to a leading software acceleration company, 
                we've helped hundreds of businesses achieve their digital goals.
              </p>
              <div className="stats-grid" style={{ marginTop: '2rem' }}>
                <div className="stat-item">
                  <span className="stat-number" style={{ color: 'white' }}>6+</span>
                  <span className="stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" style={{ color: 'white' }}>500+</span>
                  <span className="stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" style={{ color: 'white' }}>50+</span>
                  <span className="stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Team Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" style={{ color: 'white' }}>25+</span>
                  <span className="stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Countries Served</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;