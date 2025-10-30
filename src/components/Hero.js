import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import '../styles/Hero.css';

function Hero() {
  const [counters, setCounters] = useState({
    projects: 0,
    years: 3,
    satisfaction: 50,
    awards: 0
  });
  const [testimonialCounters, setTestimonialCounters] = useState({
    rating: 2,
    clients: 0,
    retention: 30
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasTestimonialAnimated, setHasTestimonialAnimated] = useState(false);
  const statsRef = useRef(null);
  const testimonialStatsRef = useRef(null);
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentStatsRef = statsRef.current;

    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTestimonialAnimated) {
            setHasTestimonialAnimated(true);
            animateTestimonialCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentTestimonialStatsRef = testimonialStatsRef.current;

    if (currentTestimonialStatsRef) {
      observer.observe(currentTestimonialStatsRef);
    }

    return () => {
      if (currentTestimonialStatsRef) {
        observer.unobserve(currentTestimonialStatsRef);
      }
    };
  }, [hasTestimonialAnimated]);

  const animateCounters = () => {
    const duration = 7000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);

    const targets = {
      projects: 500,
      years: 25,
      satisfaction: 98,
      awards: 50
    };

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        projects: Math.round(easeOutQuart * targets.projects),
        years: Math.round(easeOutQuart * targets.years),
        satisfaction: Math.round(easeOutQuart * targets.satisfaction),
        awards: Math.round(easeOutQuart * targets.awards)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
        setCounters(targets);
      }
    }, frameRate);
  };

  const animateTestimonialCounters = () => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const targets = {
      rating: 4.9,
      clients: 750,
      retention: 98
    };

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setTestimonialCounters({
        rating: (easeOutQuart * targets.rating).toFixed(1),
        clients: Math.round(easeOutQuart * targets.clients),
        retention: Math.round(easeOutQuart * targets.retention)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
        setTestimonialCounters(targets);
      }
    }, frameRate);
  };
  return (
    <>
      {/* Section 1: Hero Banner */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">{t('heroBadge')}</span>
              <h1 className="hero-title">{t('heroTitle')}</h1>
              <p className="hero-subtitle">
                {t('heroSubtitle')}
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">{t('startProject')}</a>
                <a href="#projects" className="btn btn-secondary">
                  <span className="btn-icon">▶</span>
                  {t('viewWork')}
                </a>
              </div>
              <div className="hero-stats" ref={statsRef}>
                <div className="stat-item">
                  <h3>{counters.projects}+</h3>
                  <p>{t('projectsCompleted')}</p>
                </div>
                <div className="stat-item">
                  <h3>{counters.years}+</h3>
                  <p>{t('yearsExperience')}</p>
                </div>
                <div className="stat-item">
                  <h3>{counters.satisfaction}%</h3>
                  <p>{t('clientSatisfaction')}</p>
                </div>
                <div className="stat-item">
                  <h3>{counters.awards}+</h3>
                  <p>{t('awardsWon')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="hero-features" id="why-choose-us">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('ourAdvantages')}</span>
            <h2>{t('whyChooseTitle')}</h2>
            <p>{t('whyChooseDesc')}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>{t('expertTeam')}</h3>
              <p>{t('expertTeamDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>{t('qualityAssurance')}</h3>
              <p>{t('qualityAssuranceDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>{t('onTimeDelivery')}</h3>
              <p>{t('onTimeDeliveryDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>{t('competitivePricing')}</h3>
              <p>{t('competitivePricingDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>{t('sustainablePractices')}</h3>
              <p>{t('sustainablePracticesDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>{t('clientSupport')}</h3>
              <p>{t('clientSupportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="hero-process" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('howWeWork')}</span>
            <h2>{t('processTitle')}</h2>
            <p>{t('processDesc')}</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>{t('consultationPlanning')}</h3>
              <p>{t('consultationPlanningDesc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>{t('designArchitecture')}</h3>
              <p>{t('designArchitectureDesc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>{t('permitsApprovals')}</h3>
              <p>{t('permitsApprovalsDesc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>{t('constructionPhase')}</h3>
              <p>{t('constructionPhaseDesc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>{t('qualityInspection')}</h3>
              <p>{t('qualityInspectionDesc')}</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>{t('handoverSupport')}</h3>
              <p>{t('handoverSupportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Projects */}
      <section className="hero-projects" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('portfolio')}</span>
            <h2>{t('recentProjectsTitle')}</h2>
            <p>{t('recentProjectsDesc')}</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=500&fit=crop" alt="Office Building" />
                <div className="project-tag">{t('commercial')}</div>
              </div>
              <div className="project-info">
                <h3>{t('project1Title')}</h3>
                <p>{t('project1Desc')}</p>
                <div className="project-meta">
                  <span>📍 New York</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=500&fit=crop" alt="Modern House" />
                <div className="project-tag">{t('residential')}</div>
              </div>
              <div className="project-info">
                <h3>{t('project2Title')}</h3>
                <p>{t('project2Desc')}</p>
                <div className="project-meta">
                  <span>📍 California</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop" alt="Corporate Office" />
                <div className="project-tag">{t('commercial')}</div>
              </div>
              <div className="project-info">
                <h3>{t('project3Title')}</h3>
                <p>{t('project3Desc')}</p>
                <div className="project-meta">
                  <span>📍 Texas</span>
                  <span>📅 2023</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=500&fit=crop" alt="Residential Tower" />
                <div className="project-tag">{t('residential')}</div>
              </div>
              <div className="project-info">
                <h3>{t('project4Title')}</h3>
                <p>{t('project4Desc')}</p>
                <div className="project-meta">
                  <span>📍 Miami</span>
                  <span>📅 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="hero-testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('clientFeedback')}</span>
            <h2>{t('whatClientsSayTitle')}</h2>
            <p>{t('whatClientsSayDesc')}</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">{t('testimonial1Text')}</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/100?img=13" alt="Client" />
                <div>
                  <h4>{t('testimonial1Name')}</h4>
                  <p>{t('testimonial1Role')}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">{t('testimonial2Text')}</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/100?img=45" alt="Client" />
                <div>
                  <h4>{t('testimonial2Name')}</h4>
                  <p>{t('testimonial2Role')}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">{t('testimonial3Text')}</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/100?img=32" alt="Client" />
                <div>
                  <h4>{t('testimonial3Name')}</h4>
                  <p>{t('testimonial3Role')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-stats" ref={testimonialStatsRef}>
            <div className="tstat">
              <h3>{testimonialCounters.rating}/5</h3>
              <p>{t('averageRating')}</p>
            </div>
            <div className="tstat">
              <h3>{testimonialCounters.clients}+</h3>
              <p>{t('happyClients')}</p>
            </div>
            <div className="tstat">
              <h3>{testimonialCounters.retention}%</h3>
              <p>{t('clientRetention')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
