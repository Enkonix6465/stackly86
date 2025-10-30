import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import '../styles/ServiceDetail.css';

function ArchitecturalDesign() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop')"}}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="service-detail-hero-content">
            <span className="service-badge">📐 {t('archDesignHeroBadge')}</span>
            <h1>{t('archDesignHeroTitle')}</h1>
            <p>{t('archDesignHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <span className="section-subtitle">{t('archDesignOverviewSubtitle')}</span>
              <h2>{t('archDesignOverviewTitle')}</h2>
              <p>{t('archDesignOverviewPara1')}</p>
              <p>{t('archDesignOverviewPara2')}</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop" alt={t('archDesignOverviewImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('archDesignFeaturesSubtitle')}</span>
            <h2>{t('archDesignFeaturesTitle')}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">🎨</div>
              <h3>{t('archDesignFeature1Title')}</h3>
              <p>{t('archDesignFeature1Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">♻️</div>
              <h3>{t('archDesignFeature2Title')}</h3>
              <p>{t('archDesignFeature2Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">📋</div>
              <h3>{t('archDesignFeature3Title')}</h3>
              <p>{t('archDesignFeature3Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🤝</div>
              <h3>{t('archDesignFeature4Title')}</h3>
              <p>{t('archDesignFeature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('archDesignProcessSubtitle')}</span>
            <h2>{t('archDesignProcessTitle')}</h2>
          </div>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>{t('archDesignProcess1Title')}</h3>
                <p>{t('archDesignProcess1Desc')}</p>
              </div>
              <div className="timeline-number">01</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>{t('archDesignProcess2Title')}</h3>
                <p>{t('archDesignProcess2Desc')}</p>
              </div>
              <div className="timeline-number">02</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>{t('archDesignProcess3Title')}</h3>
                <p>{t('archDesignProcess3Desc')}</p>
              </div>
              <div className="timeline-number">03</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>{t('archDesignProcess4Title')}</h3>
                <p>{t('archDesignProcess4Desc')}</p>
              </div>
              <div className="timeline-number">04</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('archDesignGallerySubtitle')}</span>
            <h2>{t('archDesignGalleryTitle')}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop" alt={t('archDesignGalleryProject1Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop" alt={t('archDesignGalleryProject2Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop" alt={t('archDesignGalleryProject3Alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=700&fit=crop" alt={t('archDesignBenefitsImageAlt')} />
            </div>
            <div className="benefits-text">
              <span className="section-subtitle">{t('archDesignBenefitsSubtitle')}</span>
              <h2>{t('archDesignBenefitsTitle')}</h2>
              <ul className="benefits-list">
                <li>{t('archDesignBenefit1')}</li>
                <li>{t('archDesignBenefit2')}</li>
                <li>{t('archDesignBenefit3')}</li>
                <li>{t('archDesignBenefit4')}</li>
                <li>{t('archDesignBenefit5')}</li>
                <li>{t('archDesignBenefit6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('archDesignCtaTitle')}</h2>
            <p>{t('archDesignCtaDesc')}</p>
            <div className="cta-buttons">
              <button className="btn-primary">{t('archDesignCtaButton1')}</button>
              <button className="btn-secondary">{t('archDesignCtaButton2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArchitecturalDesign;
