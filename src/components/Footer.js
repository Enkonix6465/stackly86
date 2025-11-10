import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import logo1 from '../assets/images/logo1.png';
import '../styles/Footer.css';

function Footer() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src={logo1} alt="STACKLY Logo" className="footer-logo-image" />
            </div>
            <p className="footer-description">
              {t('footerDescription')}
            </p>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#1a2942"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>{t('quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/home">{t('home1')}</Link></li>
              <li><Link to="/home2">{t('home2')}</Link></li>
              <li><Link to="/about">{t('aboutUs')}</Link></li>
              <li><Link to="/services/architectural-design">{t('ourServices')}</Link></li>
              <li><Link to="/blog">{t('blog')}</Link></li>
              <li><Link to="/contact">{t('contactUs')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('ourServices')}</h4>
            <ul className="footer-links">
              <li><Link to="/services/architectural-design">{t('architecturalDesign')}</Link></li>
              <li><Link to="/services/residential-construction">{t('residentialConstruction')}</Link></li>
              <li><Link to="/services/commercial-buildings">{t('commercialBuildings')}</Link></li>
              <li><Link to="/services/interior-design">{t('interiorDesign')}</Link></li>
              <li><Link to="/services/renovation-remodeling">{t('renovationRemodeling')}</Link></li>
              <li><Link to="/services/project-management">{t('projectManagement')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('contactUs')}</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@enkonix.in</span>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>123 Enkonix Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Enkonix Solutions. {t('allRightsReserved')}</p>
          <div className="footer-bottom-links">
            <a href="#privacy">{t('privacyPolicy')}</a>
            <a href="#terms">{t('termsOfService')}</a>
            <a href="#cookie">{t('cookiePolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
