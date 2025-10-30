import React from 'react';
import '../styles/ServiceDetail.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function InteriorDesign() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1920&h=1080&fit=crop')"}}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="service-detail-hero-content">
            <span className="service-badge">{t('interiorHeroBadge')}</span>
            <h1>{t('interiorHeroTitle')}</h1>
            <p>{t('interiorHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <span className="section-subtitle">{t('interiorOverviewSubtitle')}</span>
              <h2>{t('interiorOverviewTitle')}</h2>
              <p>{t('interiorOverviewPara1')}</p>
              <p>{t('interiorOverviewPara2')}</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=700&fit=crop" alt={t('interiorOverviewImageAlt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Features */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('interiorFeaturesSubtitle')}</span>
            <h2>{t('interiorFeaturesTitle')}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">🎨</div>
              <h3>{t('interiorFeature1Title')}</h3>
              <p>{t('interiorFeature1Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🛋️</div>
              <h3>{t('interiorFeature2Title')}</h3>
              <p>{t('interiorFeature2Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">💡</div>
              <h3>{t('interiorFeature3Title')}</h3>
              <p>{t('interiorFeature3Desc')}</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🎯</div>
              <h3>{t('interiorFeature4Title')}</h3>
              <p>{t('interiorFeature4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('interiorProcessSubtitle')}</span>
            <h2>{t('interiorProcessTitle')}</h2>
          </div>
          <div className="process-accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                <div className="accordion-num">01</div>
                <div className="accordion-title">
                  <h3>{t('interiorProcess1Title')}</h3>
                </div>
              </div>
              <div className="accordion-content">
                <p>{t('interiorProcess1Desc')}</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                <div className="accordion-num">02</div>
                <div className="accordion-title">
                  <h3>{t('interiorProcess2Title')}</h3>
                </div>
              </div>
              <div className="accordion-content">
                <p>{t('interiorProcess2Desc')}</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                <div className="accordion-num">03</div>
                <div className="accordion-title">
                  <h3>{t('interiorProcess3Title')}</h3>
                </div>
              </div>
              <div className="accordion-content">
                <p>{t('interiorProcess3Desc')}</p>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                <div className="accordion-num">04</div>
                <div className="accordion-title">
                  <h3>{t('interiorProcess4Title')}</h3>
                </div>
              </div>
              <div className="accordion-content">
                <p>{t('interiorProcess4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Design Portfolio */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('interiorGallerySubtitle')}</span>
            <h2>{t('interiorGalleryTitle')}</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&h=400&fit=crop" alt={t('interiorGalleryProject1Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop" alt={t('interiorGalleryProject2Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop" alt={t('interiorGalleryProject3Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop" alt={t('interiorGalleryProject4Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop" alt={t('interiorGalleryProject5Alt')} />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop" alt={t('interiorGalleryProject6Alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-image">
              <img src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&h=700&fit=crop" alt={t('interiorBenefitsImageAlt')} />
            </div>
            <div className="benefits-text">
              <span className="section-subtitle">{t('interiorBenefitsSubtitle')}</span>
              <h2>{t('interiorBenefitsTitle')}</h2>
              <ul className="benefits-list">
                <li>{t('interiorBenefit1')}</li>
                <li>{t('interiorBenefit2')}</li>
                <li>{t('interiorBenefit3')}</li>
                <li>{t('interiorBenefit4')}</li>
                <li>{t('interiorBenefit5')}</li>
                <li>{t('interiorBenefit6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('interiorCtaTitle')}</h2>
            <p>{t('interiorCtaDesc')}</p>
            <div className="cta-buttons">
              <button className="btn-primary">{t('interiorCtaButton1')}</button>
              <button className="btn-secondary">{t('interiorCtaButton2')}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteriorDesign;
