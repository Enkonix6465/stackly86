import React from 'react';
import '../styles/ServiceDetail.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function RenovationRemodeling() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1920&h=1080&fit=crop')"}}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="service-detail-hero-content">
            <span className="service-badge">{t('renovationHeroBadge')}</span>
            <h1>{t('renovationHeroTitle')}</h1>
            <p>{t('renovationHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <span className="section-subtitle">{t('renovationOverviewSubtitle')}</span>
              <h2>{t('renovationOverviewTitle')}</h2>
              <p>{t('renovationOverviewPara1')}</p>
              <p>{t('renovationOverviewPara2')}</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=700&fit=crop" alt={t('renovationOverviewImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('renovationFeaturesSubtitle')}</span>
            <h2>{t('renovationFeaturesTitle')}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">🏠</div>
              <h3>{t('renovationFeature1Title')}</h3>
              <p>{t('renovationFeature1Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🚿</div>
              <h3>{t('renovationFeature2Title')}</h3>
              <p>{t('renovationFeature2Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🏛️</div>
              <h3>{t('renovationFeature3Title')}</h3>
              <p>{t('renovationFeature3Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">⚡</div>
              <h3>{t('renovationFeature4Title')}</h3>
              <p>{t('renovationFeature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('renovationProcessSubtitle')}</span>
            <h2>{t('renovationProcessTitle')}</h2>
          </div>
          <div className="process-circular">
            <div className="circular-item">
              <div className="circular-icon">
                <div className="circular-number">01</div>
              </div>
              <h3>{t('renovationProcess1Title')}</h3>
              <p>{t('renovationProcess1Desc')}</p>
            </div>
            <div className="circular-item">
              <div className="circular-icon">
                <div className="circular-number">02</div>
              </div>
              <h3>{t('renovationProcess2Title')}</h3>
              <p>{t('renovationProcess2Desc')}</p>
            </div>
            <div className="circular-item">
              <div className="circular-icon">
                <div className="circular-number">03</div>
              </div>
              <h3>{t('renovationProcess3Title')}</h3>
              <p>{t('renovationProcess3Desc')}</p>
            </div>
            <div className="circular-item">
              <div className="circular-icon">
                <div className="circular-number">04</div>
              </div>
              <h3>{t('renovationProcess4Title')}</h3>
              <p>{t('renovationProcess4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('renovationGallerySubtitle')}</span>
            <h2>{t('renovationGalleryTitle')}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&h=400&fit=crop" alt={t('renovationGalleryProject1Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop" alt={t('renovationGalleryProject2Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=600&h=400&fit=crop" alt={t('renovationGalleryProject3Alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=700&fit=crop" alt={t('renovationBenefitsImageAlt')} />
            </div>
            <div className="benefits-text">
              <span className="section-subtitle">{t('renovationBenefitsSubtitle')}</span>
              <h2>{t('renovationBenefitsTitle')}</h2>
              <ul className="benefits-list">
                <li>{t('renovationBenefit1')}</li>
                <li>{t('renovationBenefit2')}</li>
                <li>{t('renovationBenefit3')}</li>
                <li>{t('renovationBenefit4')}</li>
                <li>{t('renovationBenefit5')}</li>
                <li>{t('renovationBenefit6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('renovationCtaTitle')}</h2>
            <p>{t('renovationCtaDesc')}</p>
            <div className="cta-buttons">
              <button className="btn-primary">{t('renovationCtaButton1')}</button>
              <button className="btn-secondary">{t('renovationCtaButton2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RenovationRemodeling;
