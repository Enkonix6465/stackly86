import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useTheme } from '../context/ThemeContext';
import logo1 from '../assets/images/logo1.png';

function SignUp() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = (key) => getTranslation(language, key);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    // Check if user already exists
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExists = registeredUsers.find(u => u.email === formData.email);
    
    if (userExists) {
      setError('Email already registered. Please login.');
      return;
    }
    
    // Register new user
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      registeredAt: new Date().toISOString()
    };
    
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    setSuccess('Account created successfully! Redirecting to login...');
    
    // Redirect to login after 2 seconds
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="signup-page">
      {/* Header */}
      <header className="signup-header">
        <div className="container">
          <div className="signup-header-content">
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

      <div className="signup-container">
        <div className="signup-left">
          <div className="signup-branding">
             {/* Add logo above the sign in box */}
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                          <img src={logo1} alt="Project Logo" style={{ height: '60px', width: 'auto' }} />
                        </div>
            <h2>{t('signupWelcomeTitle')}</h2>
            <p>{t('signupWelcomeDesc')}</p>
            <div className="signup-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('signupFeature1')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('signupFeature2')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('signupFeature3')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('signupFeature4')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="signup-right">
          <div className="signup-form-container">
            <div className="signup-header">
              <h2>{t('signupFormTitle')}</h2>
              <p>{t('signupFormSubtitle')}</p>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              {success && (
                <div className="success-message">
                  {success}
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">{t('signupFirstNameLabel')}</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder={t('signupFirstNamePlaceholder')}
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">{t('signupLastNameLabel')}</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder={t('signupLastNamePlaceholder')}
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('signupEmailLabel')}</label>
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('signupEmailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">{t('signupPasswordLabel')}</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder={t('signupPasswordPlaceholder')}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">{t('signupConfirmPasswordLabel')}</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder={t('signupConfirmPasswordPlaceholder')}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div className="terms-agreement">
                <label className="terms-checkbox">
                  <input type="checkbox" required />
                  <span>{t('signupTermsAgree')} <a href="/terms">{t('signupTermsLink')}</a> {t('signupTermsAnd')} <a href="/privacy">{t('signupPrivacyLink')}</a></span>
                </label>
              </div>

              <button type="submit" className="btn-signup">
                {t('signupSignUpButton')}
              </button>

              <div className="divider">
                <span>{t('signupOrContinue')}</span>
              </div>

              <div className="social-signup">
                <button type="button" className="social-btn google">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill="#4285F4" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
                    <path fill="#34A853" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
                    <path fill="#FBBC05" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
                    <path fill="#EA4335" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
                  </svg>
                  {t('signupGoogleButton')}
                </button>
                <button type="button" className="social-btn facebook">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
                    <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                  </svg>
                  {t('signupFacebookButton')}
                </button>
              </div>

              <div className="signin-link">
                {t('signupHaveAccount')} <Link to="/login">{t('signupSignInLink')}</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
