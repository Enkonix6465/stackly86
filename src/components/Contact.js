import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import '../styles/Contact.css';

function Contact() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const [counters, setCounters] = useState({
    projects: 1,
    satisfaction: 5,
    support: 1,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

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
      { threshold: 0.3 }
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

  const animateCounters = () => {
    const duration = 7000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    const targets = {
      projects: 500,
      satisfaction: 98,
      support: 24,
      experience: 15
    };

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        projects: Math.round(easeOutQuart * targets.projects),
        satisfaction: Math.round(easeOutQuart * targets.satisfaction),
        support: Math.round(easeOutQuart * targets.support),
        experience: Math.round(easeOutQuart * targets.experience)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
        setCounters(targets);
      }
    }, frameRate);
  };
  return (
    <div className="contact-page">
      {/* Section 1: Contact Hero with Background Image */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-badge">{t('contactBadge')}</span>
            <h1>{t('contactHeroTitle')}</h1>
            <p>{t('contactHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form & Info */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>{t('contactFormTitle')}</h2>
              <p className="form-description">{t('contactFormDesc')}</p>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contactFirstName')}</label>
                    <input type="text" placeholder={t('contactFirstNamePH')} required />
                  </div>
                  <div className="form-group">
                    <label>{t('contactLastName')}</label>
                    <input type="text" placeholder={t('contactLastNamePH')} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('contactEmail')}</label>
                  <input type="email" placeholder={t('contactEmailPH')} required />
                </div>
                <div className="form-group">
                  <label>{t('contactPhone')}</label>
                  <input type="tel" placeholder={t('contactPhonePH')} />
                </div>
                <div className="form-group">
                  <label>{t('contactProjectType')}</label>
                  <select required>
                    <option value="">{t('contactSelectService')}</option>
                    <option value="residential">{t('contactResidential')}</option>
                    <option value="commercial">{t('contactCommercial')}</option>
                    <option value="renovation">{t('contactRenovation')}</option>
                    <option value="design">{t('contactDesign')}</option>
                    <option value="consultation">{t('contactConsultation')}</option>
                    <option value="other">{t('contactOther')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('contactMessage')}</label>
                  <textarea rows="5" placeholder={t('contactMessagePH')} required></textarea>
                </div>
                <button type="submit" className="submit-btn">{t('contactSendBtn')}</button>
              </form>
            </div>

            <div className="contact-info-container">
              <div className="contact-info-card">
                <div className="info-icon">📍</div>
                <h3>{t('contactVisitTitle')}</h3>
                <p>{t('contactAddress').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📞</div>
                <h3>{t('contactCallTitle')}</h3>
                <p>{t('contactPhoneInfo').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">✉️</div>
                <h3>{t('contactEmailTitle')}</h3>
                <p>{t('contactEmailInfo').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">🕐</div>
                <h3>{t('contactHoursTitle')}</h3>
                <p>{t('contactHoursInfo').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Map Location */}
      <section className="contact-map">
        <div className="container">
          <div className="section-header">
            <h2>{t('contactMapTitle')}</h2>
            <p>{t('contactMapDesc')}</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635180000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="BuildPro Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 4: Office Locations */}
      <section className="office-locations">
        <div className="container">
          <div className="section-header">
            <h2>{t('contactLocationsTitle')}</h2>
            <p>{t('contactLocationsDesc')}</p>
          </div>
          <div className="locations-grid">
            <div className="location-card">
              <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop" alt="New York Office" />
              <div className="location-content">
                <h3>{t('contactOffice1Name')}</h3>
                <p className="location-address">{t('contactOffice1Address').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
                <p className="location-phone">{t('contactOffice1Phone')}</p>
                <button className="location-btn">{t('contactDirectionsBtn')}</button>
              </div>
            </div>

            <div className="location-card">
              <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop" alt="Los Angeles Office" />
              <div className="location-content">
                <h3>{t('contactOffice2Name')}</h3>
                <p className="location-address">{t('contactOffice2Address').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
                <p className="location-phone">{t('contactOffice2Phone')}</p>
                <button className="location-btn">{t('contactDirectionsBtn')}</button>
              </div>
            </div>

            <div className="location-card">
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop" alt="Chicago Office" />
              <div className="location-content">
                <h3>{t('contactOffice3Name')}</h3>
                <p className="location-address">{t('contactOffice3Address').split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
                <p className="location-phone">{t('contactOffice3Phone')}</p>
                <button className="location-btn">{t('contactDirectionsBtn')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="contact-faq">
        <div className="container">
          <div className="section-header">
            <h2>{t('contactFaqTitle')}</h2>
            <p>{t('contactFaqDesc')}</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t('contactFaq1Q')}</h3>
              <p>{t('contactFaq1A')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactFaq2Q')}</h3>
              <p>{t('contactFaq2A')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactFaq3Q')}</h3>
              <p>{t('contactFaq3A')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactFaq4Q')}</h3>
              <p>{t('contactFaq4A')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactFaq5Q')}</h3>
              <p>{t('contactFaq5A')}</p>
            </div>

            <div className="faq-item">
              <h3>{t('contactFaq6Q')}</h3>
              <p>{t('contactFaq6A')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('contactCtaTitle')}</h2>
            <p>{t('contactCtaDesc')}</p>
            <div className="cta-stats" ref={statsRef}>
              <div className="stat-item">
                <h3>{counters.projects}+</h3>
                <p>{t('contactCtaStat1')}</p>
              </div>
              <div className="stat-item">
                <h3>{counters.satisfaction}%</h3>
                <p>{t('contactCtaStat2')}</p>
              </div>
              <div className="stat-item">
                <h3>{counters.support}/7</h3>
                <p>{t('contactCtaStat3')}</p>
              </div>
              <div className="stat-item">
                <h3>{counters.experience}+</h3>
                <p>{t('contactCtaStat4')}</p>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="cta-primary">{t('contactCtaBtn1')}</button>
              <button className="cta-secondary">{t('contactCtaBtn2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;