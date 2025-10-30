import React from 'react';
import '../styles/ServiceDetail.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function ProjectManagement() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1920&h=1080&fit=crop')"}}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="service-detail-hero-content">
            <span className="service-badge">{t('projectMgmtHeroBadge')}</span>
            <h1>{t('projectMgmtHeroTitle')}</h1>
            <p>{t('projectMgmtHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <span className="section-subtitle">{t('projectMgmtOverviewSubtitle')}</span>
              <h2>{t('projectMgmtOverviewTitle')}</h2>
              <p>{t('projectMgmtOverviewPara1')}</p>
              <p>{t('projectMgmtOverviewPara2')}</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=700&fit=crop" alt={t('projectMgmtOverviewImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('projectMgmtFeaturesSubtitle')}</span>
            <h2>{t('projectMgmtFeaturesTitle')}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">📋</div>
              <h3>{t('projectMgmtFeature1Title')}</h3>
              <p>{t('projectMgmtFeature1Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">💰</div>
              <h3>{t('projectMgmtFeature2Title')}</h3>
              <p>{t('projectMgmtFeature2Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">✅</div>
              <h3>{t('projectMgmtFeature3Title')}</h3>
              <p>{t('projectMgmtFeature3Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">👥</div>
              <h3>{t('projectMgmtFeature4Title')}</h3>
              <p>{t('projectMgmtFeature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('projectMgmtProcessSubtitle')}</span>
            <h2>{t('projectMgmtProcessTitle')}</h2>
          </div>
          <div className="process-zigzag">
            <div className="zigzag-item">
              <div className="zigzag-number">01</div>
              <div className="zigzag-content">
                <h3>{t('projectMgmtProcess1Title')}</h3>
                <p>{t('projectMgmtProcess1Desc')}</p>
              </div>
            </div>
            <div className="zigzag-item">
              <div className="zigzag-number">02</div>
              <div className="zigzag-content">
                <h3>{t('projectMgmtProcess2Title')}</h3>
                <p>{t('projectMgmtProcess2Desc')}</p>
              </div>
            </div>
            <div className="zigzag-item">
              <div className="zigzag-number">03</div>
              <div className="zigzag-content">
                <h3>{t('projectMgmtProcess3Title')}</h3>
                <p>{t('projectMgmtProcess3Desc')}</p>
              </div>
            </div>
            <div className="zigzag-item">
              <div className="zigzag-number">04</div>
              <div className="zigzag-content">
                <h3>{t('projectMgmtProcess4Title')}</h3>
                <p>{t('projectMgmtProcess4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('projectMgmtGallerySubtitle')}</span>
            <h2>{t('projectMgmtGalleryTitle')}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=600&h=400&fit=crop" alt={t('projectMgmtGalleryProject1Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop" alt={t('projectMgmtGalleryProject2Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop" alt={t('projectMgmtGalleryProject3Alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=700&fit=crop" alt={t('projectMgmtBenefitsImageAlt')} />
            </div>
            <div className="benefits-text">
              <span className="section-subtitle">{t('projectMgmtBenefitsSubtitle')}</span>
              <h2>{t('projectMgmtBenefitsTitle')}</h2>
              <ul className="benefits-list">
                <li>{t('projectMgmtBenefit1')}</li>
                <li>{t('projectMgmtBenefit2')}</li>
                <li>{t('projectMgmtBenefit3')}</li>
                <li>{t('projectMgmtBenefit4')}</li>
                <li>{t('projectMgmtBenefit5')}</li>
                <li>{t('projectMgmtBenefit6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('projectMgmtCtaTitle')}</h2>
            <p>{t('projectMgmtCtaDesc')}</p>
            <div className="cta-buttons">
              <button className="btn-primary">{t('projectMgmtCtaButton1')}</button>
              <button className="btn-secondary">{t('projectMgmtCtaButton2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectManagement;
