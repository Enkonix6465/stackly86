import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import '../styles/Services.css';

function Services() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const services = [
    {
      id: 1,
      titleKey: 'architecturalDesignTitle',
      descriptionKey: 'architecturalDesignDescription',
      icon: '📐',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600'
    },
    {
      id: 2,
      titleKey: 'residentialConstructionTitle',
      descriptionKey: 'residentialConstructionDescription',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600'
    },
    {
      id: 3,
      titleKey: 'commercialBuildingsTitle',
      descriptionKey: 'commercialBuildingsDescription',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600'
    },
    {
      id: 4,
      titleKey: 'interiorDesignTitle',
      descriptionKey: 'interiorDesignDescription',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600'
    },
    {
      id: 5,
      titleKey: 'renovationRemodelingTitle',
      descriptionKey: 'renovationRemodelingDescription',
      icon: '🔨',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600'
    },
    {
      id: 6,
      titleKey: 'projectManagementTitle',
      descriptionKey: 'projectManagementDescription',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('ourServicesSection')}</span>
          <h2 className="section-title">{t('comprehensiveTitle')}</h2>
          <p className="section-subtitle">
            {t('comprehensiveDesc')}
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={t(service.titleKey)} />
                <div className="service-overlay">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descriptionKey)}</p>
                <a href="#contact" className="service-link">
                  {t('learnMore')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
