import React, { useEffect, useRef } from 'react';
import '../styles/ServiceDetail.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function ResidentialConstruction() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.process-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = processRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1920&h=1080&fit=crop')"}}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="service-detail-hero-content">
            <span className="service-badge">{t('resConHeroBadge')}</span>
            <h1>{t('resConHeroTitle')}</h1>
            <p>{t('resConHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <span className="section-subtitle">{t('resConOverviewSubtitle')}</span>
              <h2>{t('resConOverviewTitle')}</h2>
              <p>{t('resConOverviewPara1')}</p>
              <p>{t('resConOverviewPara2')}</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=700&fit=crop" alt={t('resConOverviewImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('resConFeaturesSubtitle')}</span>
            <h2>{t('resConFeaturesTitle')}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">🏗️</div>
              <h3>{t('resConFeature1Title')}</h3>
              <p>{t('resConFeature1Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">✨</div>
              <h3>{t('resConFeature2Title')}</h3>
              <p>{t('resConFeature2Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">⚡</div>
              <h3>{t('resConFeature3Title')}</h3>
              <p>{t('resConFeature3Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🔒</div>
              <h3>{t('resConFeature4Title')}</h3>
              <p>{t('resConFeature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('resConProcessSubtitle')}</span>
            <h2>{t('resConProcessTitle')}</h2>
          </div>
          <div className="process-cards">
            <div className="process-card float-animation" style={{animationDelay: '0s'}}>
              <div className="card-number">01</div>
              <h3>{t('resConProcess1Title')}</h3>
              <p>{t('resConProcess1Desc')}</p>
            </div>
            <div className="process-card float-animation" style={{animationDelay: '0.2s'}}>
              <div className="card-number">02</div>
              <h3>{t('resConProcess2Title')}</h3>
              <p>{t('resConProcess2Desc')}</p>
            </div>
            <div className="process-card float-animation" style={{animationDelay: '0.4s'}}>
              <div className="card-number">03</div>
              <h3>{t('resConProcess3Title')}</h3>
              <p>{t('resConProcess3Desc')}</p>
            </div>
            <div className="process-card float-animation" style={{animationDelay: '0.6s'}}>
              <div className="card-number">04</div>
              <h3>{t('resConProcess4Title')}</h3>
              <p>{t('resConProcess4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('resConGallerySubtitle')}</span>
            <h2>{t('resConGalleryTitle')}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop" alt={t('resConGalleryHome1Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=400&fit=crop" alt={t('resConGalleryHome2Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" alt={t('resConGalleryHome3Alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=700&fit=crop" alt={t('resConBenefitsImageAlt')} />
            </div>
            <div className="benefits-text">
              <span className="section-subtitle">{t('resConBenefitsSubtitle')}</span>
              <h2>{t('resConBenefitsTitle')}</h2>
              <ul className="benefits-list">
                <li>{t('resConBenefit1')}</li>
                <li>{t('resConBenefit2')}</li>
                <li>{t('resConBenefit3')}</li>
                <li>{t('resConBenefit4')}</li>
                <li>{t('resConBenefit5')}</li>
                <li>{t('resConBenefit6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('resConCtaTitle')}</h2>
            <p>{t('resConCtaDesc')}</p>
            <div className="cta-buttons">
              <button className="btn-primary">{t('resConCtaButton1')}</button>
              <button className="btn-secondary">{t('resConCtaButton2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResidentialConstruction;
