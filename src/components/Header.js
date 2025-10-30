
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import logo1 from '../assets/images/logo1.png';
import '../styles/Header.css';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [userInitials, setUserInitials] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const homeDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  const t = (key) => getTranslation(language, key);

  // Check if user is logged in and get their initials
  useEffect(() => {
    const checkUserLogin = () => {
      const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
      const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
      
      if (isAdminLoggedIn) {
        setUserInitials('A');
        setIsLoggedIn(true);
      } else if (isUserLoggedIn) {
        const userName = localStorage.getItem('userName');
        if (userName) {
          // Get initials from full name
          const nameParts = userName.trim().split(' ');
          const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
          setUserInitials(initials.substring(0, 2)); // Maximum 2 letters
        } else {
          setUserInitials('U');
        }
        setIsLoggedIn(true);
      } else {
        setUserInitials('');
        setIsLoggedIn(false);
      }
    };

    checkUserLogin();
    
    // Listen for storage changes (when user logs in/out)
    window.addEventListener('storage', checkUserLogin);
    
    return () => {
      window.removeEventListener('storage', checkUserLogin);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
    setIsServicesDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsHomeDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsHomeDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) {
        setIsHomeDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo1} alt="STACKLY Logo" className="logo-image" />
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item-dropdown" ref={homeDropdownRef}>
              <a href="#home" className="dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleHomeDropdown(); }}>
                {t('home')} <span className="dropdown-arrow">▼</span>
              </a>
              {isHomeDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" onClick={() => { toggleMenu(); setIsHomeDropdownOpen(false); }}>{t('home1')}</Link>
                  </li>
                  <li>
                    <Link to="/home2" onClick={() => { toggleMenu(); setIsHomeDropdownOpen(false); }}>{t('home2')}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>{t('about')}</Link>
            </li>
            <li className="nav-item-dropdown" ref={servicesDropdownRef}>
              <a href="#services" className="dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleServicesDropdown(); }}>
                {t('services')} <span className="dropdown-arrow">▼</span>
              </a>
              {isServicesDropdownOpen && (
                <ul className="dropdown-menu services-dropdown">
                  <li>
                    <Link to="/services/architectural-design" onClick={() => { toggleMenu(); setIsServicesDropdownOpen(false); }}>
                      <span className="dropdown-icon">🏗️</span>
                      <div className="dropdown-text">
                        <strong>{t('architecturalDesign')}</strong>
                        <small>{t('architecturalDesignDesc')}</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/residential-construction" onClick={() => { toggleMenu(); setIsServicesDropdownOpen(false); }}>
                      <span className="dropdown-icon">🏠</span>
                      <div className="dropdown-text">
                        <strong>{t('residentialConstruction')}</strong>
                        <small>{t('residentialConstructionDesc')}</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/commercial-buildings" onClick={() => { toggleMenu(); setIsServicesDropdownOpen(false); }}>
                      <span className="dropdown-icon">🏢</span>
                      <div className="dropdown-text">
                        <strong>{t('commercialBuildings')}</strong>
                        <small>{t('commercialBuildingsDesc')}</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/interior-design" onClick={() => { toggleMenu(); setIsServicesDropdownOpen(false); }}>
                      <span className="dropdown-icon">🎨</span>
                      <div className="dropdown-text">
                        <strong>{t('interiorDesign')}</strong>
                        <small>{t('interiorDesignDesc')}</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/renovation-remodeling" onClick={() => { toggleMenu(); setIsServicesDropdownOpen(false); }}>
                      <span className="dropdown-icon">🔨</span>
                      <div className="dropdown-text">
                        <strong>{t('renovationRemodeling')}</strong>
                        <small>{t('renovationRemodelingDesc')}</small>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/project-management" onClick={() => { toggleMenu(); setIsServicesDropdownOpen(false); }}>
                      <span className="dropdown-icon">📊</span>
                      <div className="dropdown-text">
                        <strong>{t('projectManagement')}</strong>
                        <small>{t('projectManagementDesc')}</small>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>{t('blog')}</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>{t('contact')}</Link>
            </li>
            
          </ul>

          <div className="header-actions">
            <div className="language-menu" ref={languageDropdownRef}>
              <button className="icon-btn globe-btn" aria-label="Language" onClick={toggleLanguageDropdown}>
                🌐
              </button>
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  <ul className="language-list">
                    <li className={language === 'en' ? 'active' : ''}>
                      <button onClick={() => handleLanguageChange('en')}>
                        <span className="flag-code">US</span>
                        <span className="language-name">{t('english')}</span>
                        {language === 'en' && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                    <li className={language === 'ar' ? 'active' : ''}>
                      <button onClick={() => handleLanguageChange('ar')}>
                        <span className="flag-code">SA</span>
                        <span className="language-name">{t('arabic')}</span>
                        {language === 'ar' && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                    <li className={language === 'he' ? 'active' : ''}>
                      <button onClick={() => handleLanguageChange('he')}>
                        <span className="flag-code">IL</span>
                        <span className="language-name">{t('hebrew')}</span>
                        {language === 'he' && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button className="icon-btn theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            {isLoggedIn && userInitials && (
              <button className="icon-btn user-avatar" aria-label="User account">
                {userInitials}
              </button>
            )}
            <Link to="/login">
              <button className="btn-signin">{t('signIn')}</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
