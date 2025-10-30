import React from 'react';
import '../styles/ServiceDetail.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function CommercialBuildings() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1920&h=1080&fit=crop')"}}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="service-detail-hero-content">
            <span className="service-badge">{t('commBuildHeroBadge')}</span>
            <h1>{t('commBuildHeroTitle')}</h1>
            <p>{t('commBuildHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <span className="section-subtitle">{t('commBuildOverviewSubtitle')}</span>
              <h2>{t('commBuildOverviewTitle')}</h2>
              <p>{t('commBuildOverviewPara1')}</p>
              <p>{t('commBuildOverviewPara2')}</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=600&h=700&fit=crop" alt={t('commBuildOverviewImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('commBuildFeaturesSubtitle')}</span>
            <h2>{t('commBuildFeaturesTitle')}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">🏗️</div>
              <h3>{t('commBuildFeature1Title')}</h3>
              <p>{t('commBuildFeature1Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">⏱️</div>
              <h3>{t('commBuildFeature2Title')}</h3>
              <p>{t('commBuildFeature2Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">💼</div>
              <h3>{t('commBuildFeature3Title')}</h3>
              <p>{t('commBuildFeature3Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">📈</div>
              <h3>{t('commBuildFeature4Title')}</h3>
              <p>{t('commBuildFeature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('commBuildProcessSubtitle')}</span>
            <h2>{t('commBuildProcessTitle')}</h2>
          </div>
          <div className="process-flow">
            <div className="flow-item">
              <div className="flow-icon"><span>01</span></div>
              <h3>{t('commBuildProcess1Title')}</h3>
              <p>{t('commBuildProcess1Desc')}</p>
            </div>
            <div className="flow-item">
              <div className="flow-icon"><span>02</span></div>
              <h3>{t('commBuildProcess2Title')}</h3>
              <p>{t('commBuildProcess2Desc')}</p>
            </div>
            <div className="flow-item">
              <div className="flow-icon"><span>03</span></div>
              <h3>{t('commBuildProcess3Title')}</h3>
              <p>{t('commBuildProcess3Desc')}</p>
            </div>
            <div className="flow-item">
              <div className="flow-icon"><span>04</span></div>
              <h3>{t('commBuildProcess4Title')}</h3>
              <p>{t('commBuildProcess4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('commBuildGallerySubtitle')}</span>
            <h2>{t('commBuildGalleryTitle')}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop" alt={t('commBuildGalleryProject1Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop" alt={t('commBuildGalleryProject2Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop" alt={t('commBuildGalleryProject3Alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&h=700&fit=crop" alt={t('commBuildBenefitsImageAlt')} />
            </div>
            <div className="benefits-text">
              <span className="section-subtitle">{t('commBuildBenefitsSubtitle')}</span>
              <h2>{t('commBuildBenefitsTitle')}</h2>
              <ul className="benefits-list">
                <li>{t('commBuildBenefit1')}</li>
                <li>{t('commBuildBenefit2')}</li>
                <li>{t('commBuildBenefit3')}</li>
                <li>{t('commBuildBenefit4')}</li>
                <li>{t('commBuildBenefit5')}</li>
                <li>{t('commBuildBenefit6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('commBuildCtaTitle')}</h2>
            <p>{t('commBuildCtaDesc')}</p>
            <div className="cta-buttons">
              <button className="btn-primary">{t('commBuildCtaButton1')}</button>
              <button className="btn-secondary">{t('commBuildCtaButton2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommercialBuildings;
