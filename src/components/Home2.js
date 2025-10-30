import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home2.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function Home2() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const [heroCounters, setHeroCounters] = useState({
    projects: 0,
    countries: 1,
    quality: 50
  });
  const [testimonialCounters, setTestimonialCounters] = useState({
    rating: 2.5,
    clients: 3,
    repeat: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasTestimonialAnimated, setHasTestimonialAnimated] = useState(false);
  const heroStatsRef = useRef(null);
  const testimonialStatsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateHeroCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentHeroStatsRef = heroStatsRef.current;

    if (currentHeroStatsRef) {
      observer.observe(currentHeroStatsRef);
    }

    return () => {
      if (currentHeroStatsRef) {
        observer.unobserve(currentHeroStatsRef);
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
      { threshold: 0.3 }
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

  const animateHeroCounters = () => {
    const duration = 6000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const targets = {
      projects: 1000,
      countries: 30,
      quality: 100
    };

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setHeroCounters({
        projects: Math.round(easeOutQuart * targets.projects),
        countries: Math.round(easeOutQuart * targets.countries),
        quality: Math.round(easeOutQuart * targets.quality)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
        setHeroCounters(targets);
      }
    }, frameRate);
  };

  const animateTestimonialCounters = () => {
    const duration = 6000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const targets = {
      rating: 4.9,
      clients: 850,
      repeat: 99
    };

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setTestimonialCounters({
        rating: (easeOutQuart * targets.rating).toFixed(1),
        clients: Math.round(easeOutQuart * targets.clients),
        repeat: Math.round(easeOutQuart * targets.repeat)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
        setTestimonialCounters(targets);
      }
    }, frameRate);
  };

  return (
    <div className="home2-page">
      {/* Section 1: Hero - Different approach with video background style */}
      <section className="home2-hero" id="home">
        <div className="container">
          <div className="home2-hero-content">
            <span className="home2-badge">{t('home2Badge')}</span>
            <h1>{t('home2HeroTitle')}</h1>
            <p>{t('home2HeroDesc')}</p>
            <div className="home2-hero-buttons">
              <button className="btn-primary-outline">{t('home2StartProject')}</button>
              <button className="btn-secondary-outline">{t('home2ViewPortfolio')}</button>
            </div>
            <div className="home2-hero-stats" ref={heroStatsRef}>
              <div className="hero-stat">
                <h3>{heroCounters.projects}+</h3>
                <p>{t('home2ProjectsDelivered')}</p>
              </div>
              <div className="hero-stat">
                <h3>{heroCounters.countries}+</h3>
                <p>{t('home2Countries')}</p>
              </div>
              <div className="hero-stat">
                <h3>{heroCounters.quality}%</h3>
                <p>{t('home2QualityAssured')}</p>
              </div>
            </div>
          </div>
          <div className="home2-hero-image">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="Modern Skyscraper" />
          </div>
        </div>
      </section>

      {/* Section 2: Our Expertise - Core competencies */}
      <section className="home2-expertise" id="expertise">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('home2WhatWeDoBest')}</span>
            <h2 className="section-title">{t('home2CoreExpertise')}</h2>
            <p className="section-description">{t('home2ExpertiseDesc')}</p>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" alt="Commercial Construction" />
              </div>
              <div className="expertise-content">
                <h3>{t('home2CommercialBuildings')}</h3>
                <p>{t('home2CommercialDesc')}</p>
                <ul>
                  <li>✓ {t('home2OfficeTowers')}</li>
                  <li>✓ {t('home2RetailSpaces')}</li>
                  <li>✓ {t('home2MixedUseDev')}</li>
                </ul>
              </div>
            </div>
            <div className="expertise-card">
              <div className="expertise-image">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop" alt="Luxury Homes" />
              </div>
              <div className="expertise-content">
                <h3>{t('home2LuxuryResidences')}</h3>
                <p>{t('home2LuxuryDesc')}</p>
                <ul>
                  <li>✓ {t('home2CustomVillas')}</li>
                  <li>✓ {t('home2LuxuryApartments')}</li>
                  <li>✓ {t('home2GatedCommunities')}</li>
                </ul>
              </div>
            </div>
            <div className="expertise-card">
              <div className="expertise-image">
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop" alt="Infrastructure" />
              </div>
              <div className="expertise-content">
                <h3>{t('home2InfraProjects')}</h3>
                <p>{t('home2InfraDesc')}</p>
                <ul>
                  <li>✓ {t('home2BridgesHighways')}</li>
                  <li>✓ {t('home2PublicFacilities')}</li>
                  <li>✓ {t('home2UrbanDevelopment')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Innovation & Technology */}
      <section className="home2-innovation" id="innovation">
        <div className="container">
          <div className="innovation-content">
            <div className="innovation-text">
              <span className="section-subtitle">{t('home2FutureReady')}</span>
              <h2>{t('home2InnovationTitle')}</h2>
              <p>{t('home2InnovationDesc')}</p>
              <div className="innovation-features">
                <div className="innovation-item">
                  <div className="innovation-icon">🔬</div>
                  <div>
                    <h4>{t('home2BimTech')}</h4>
                    <p>{t('home2BimDesc')}</p>
                  </div>
                </div>
                <div className="innovation-item">
                  <div className="innovation-icon">♻️</div>
                  <div>
                    <h4>{t('home2GreenBuilding')}</h4>
                    <p>{t('home2GreenDesc')}</p>
                  </div>
                </div>
                <div className="innovation-item">
                  <div className="innovation-icon">🤖</div>
                  <div>
                    <h4>{t('home2SmartAuto')}</h4>
                    <p>{t('home2SmartDesc')}</p>
                  </div>
                </div>
                <div className="innovation-item">
                  <div className="innovation-icon">⚡</div>
                  <div>
                    <h4>{t('home2EnergyEff')}</h4>
                    <p>{t('home2EnergyDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="innovation-image">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop" alt="Innovation in Construction" />
              <div className="innovation-badge">
                <span>ISO 9001</span>
                <span>{t('home2IsoCertified')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Projects Gallery */}
      <section className="home2-gallery" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('home2OurWork')}</span>
            <h2 className="section-title">{t('home2FeaturedProjects')}</h2>
            <p className="section-description">{t('home2GalleryDesc')}</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Skyline Tower" />
              <div className="gallery-overlay">
                <h3>{t('home2SkylineTower')}</h3>
                <p>{t('home2CommercialNY')}</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Ocean View Residence" />
              <div className="gallery-overlay">
                <h3>{t('home2OceanView')}</h3>
                <p>{t('home2ResidentialMiami')}</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" alt="Modern Villa" />
              <div className="gallery-overlay">
                <h3>{t('home2ModernVilla')}</h3>
                <p>{t('home2ResidentialCA')}</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?auto=format&fit=crop&w=600&q=80" alt="Urban Complex" />
              <div className="gallery-overlay">
                <h3>{t('home2UrbanComplex')}</h3>
                <p>{t('home2MixedUseChicago')}</p>
              </div>
            </div>
            <div className="gallery-item gallery-wide">
              <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80" alt="Business Park" />
              <div className="gallery-overlay">
                <h3>{t('home2BusinessPark')}</h3>
                <p>{t('home2CommercialTexas')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Client Success Stories */}
      <section className="home2-testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('home2ClientStories')}</span>
            <h2 className="section-title">{t('home2WhatClientsSay')}</h2>
            <p className="section-description">{t('home2TestimonialsDesc')}</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{t('home2Testimonial1')}"</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/80?img=12" alt="Client" />
                <div>
                  <h4>{t('home2Client1Name')}</h4>
                  <p>{t('home2Client1Role')}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{t('home2Testimonial2')}"</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/80?img=47" alt="Client" />
                <div>
                  <h4>{t('home2Client2Name')}</h4>
                  <p>{t('home2Client2Role')}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{t('home2Testimonial3')}"</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/80?img=33" alt="Client" />
                <div>
                  <h4>{t('home2Client3Name')}</h4>
                  <p>{t('home2Client3Role')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-stats" ref={testimonialStatsRef}>
            <div className="tstat-item">
              <h3>{testimonialCounters.rating}/5.0</h3>
              <p>{t('home2AverageRating')}</p>
            </div>
            <div className="tstat-item">
              <h3>{testimonialCounters.clients}+</h3>
              <p>{t('home2HappyClients')}</p>
            </div>
            <div className="tstat-item">
              <h3>{testimonialCounters.repeat}%</h3>
              <p>{t('home2RepeatBusiness')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact & CTA */}
      <section className="home2-contact" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-subtitle">{t('home2GetInTouch')}</span>
              <h2>{t('home2BuildTogether')}</h2>
              <p>{t('home2ContactDesc')}</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>{t('home2VisitUs')}</h4>
                    <p>{t('home2Address')}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>{t('home2CallUs')}</h4>
                    <p>{t('home2Phone')}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>{t('home2EmailUs')}</h4>
                    <p>{t('home2Email')}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <h4>{t('home2WorkingHours')}</h4>
                    <p>{t('home2Hours')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder={t('home2YourName')} required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={t('home2YourEmail')} required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder={t('home2PhoneNumber')} />
                </div>
                <div className="form-group">
                  <select>
                    <option>{t('home2SelectService')}</option>
                    <option>{t('home2CommercialConst')}</option>
                    <option>{t('home2ResidentialConst')}</option>
                    <option>{t('home2Renovation')}</option>
                    <option>{t('home2Consultation')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea rows="4" placeholder={t('home2TellProject')}></textarea>
                </div>
                <button type="submit" className="btn-submit">{t('home2SendMessage')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2;
