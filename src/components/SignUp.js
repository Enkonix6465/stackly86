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
        <div className="signup-box">
          <div className="signup-box-inner">
            <div className="signup-logo-section">
              <img src={logo1} alt="STACKLY Logo" className="signup-logo-img" />
            </div>

            <div className="signup-welcome">
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
                <span>{t('signupSignUpButton')}</span>
                <span className="btn-arrow">→</span>
              </button>

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
