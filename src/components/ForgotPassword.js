import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useTheme } from '../context/ThemeContext';
import logo1 from '../assets/images/logo1.png';

function ForgotPassword() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = (key) => getTranslation(language, key);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Check if email exists in registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExists = registeredUsers.find(u => u.email === email);
    
    if (userExists) {
      // Email exists, store it temporarily and navigate to reset password
      sessionStorage.setItem('resetPasswordEmail', email);
      navigate('/reset-password');
    } else {
      // Email doesn't exist, show alert
      setError('This email is not registered. Please sign up first.');
    }
  };

  return (
    <div className="forgot-password-page">
      {/* Header */}
      <header className="forgot-password-header">
        <div className="container">
          <div className="forgot-password-header-content">
            <Link to="/" className="logo">
              <img src={logo1} alt="STACKLY Logo" className="logo-image" />
            </Link>
            
            <div className="header-actions">
              {/* Language Selector */}
              <div className="language-menu">
                <button 
                  className="icon-btn" 
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  aria-label="Change Language"
                >
                  🌐
                </button>
                {showLanguageMenu && (
                  <ul className="language-dropdown">
                    <li className={language === 'en' ? 'active' : ''}>
                      <button onClick={() => { changeLanguage('en'); setShowLanguageMenu(false); }}>
                        <span className="flag-code">EN</span>
                        <span className="language-name">English</span>
                        {language === 'en' && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                    <li className={language === 'ar' ? 'active' : ''}>
                      <button onClick={() => { changeLanguage('ar'); setShowLanguageMenu(false); }}>
                        <span className="flag-code">AR</span>
                        <span className="language-name">العربية</span>
                        {language === 'ar' && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                    <li className={language === 'he' ? 'active' : ''}>
                      <button onClick={() => { changeLanguage('he'); setShowLanguageMenu(false); }}>
                        <span className="flag-code">HE</span>
                        <span className="language-name">עברית</span>
                        {language === 'he' && <span className="checkmark">✓</span>}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              
              {/* Theme Toggle */}
              <button 
                className="icon-btn" 
                onClick={toggleTheme}
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="forgot-password-container">
        <div className="forgot-password-card">
          <div className="forgot-password-header">
            
            <div className="forgot-password-icon">🔑</div>
            <h2>{t('forgotPasswordTitle')}</h2>
            <p>{t('forgotPasswordDesc')}</p>
          </div>

          <form className="forgot-password-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message" style={{
                background: '#fee',
                color: '#c33',
                padding: '0.75rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                border: '1px solid #fcc'
              }}>
                {error}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="email">{t('forgotPasswordEmailLabel')}</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  placeholder={t('forgotPasswordEmailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-continue">
              {t('forgotPasswordContinueButton')}
            </button>

            <div className="back-to-login">
              <Link to="/login">← {t('forgotPasswordBackToLogin')}</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
