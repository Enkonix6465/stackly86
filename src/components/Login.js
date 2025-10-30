import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useTheme } from '../context/ThemeContext';
import logo1 from '../assets/images/logo1.png';

function Login() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = (key) => getTranslation(language, key);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const navigate = useNavigate();

  // Load saved credentials on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    
    console.log('Loading credentials:', { savedEmail, savedPassword }); // Debug log
    
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
    
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Check admin credentials
    if (email === 'admin@gmail.com' && password === 'admin@123') {
      // Store admin session
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminEmail', email);
      
      // Save credentials if remember me is checked
      if (rememberMe) {
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedPassword', password);
        console.log('Credentials saved:', { email, password }); // Debug log
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
        console.log('Credentials removed'); // Debug log
      }
      
      // Navigate to admin dashboard
      navigate('/admin/dashboard');
    } else {
      // Check if user is registered
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const user = registeredUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        // User exists and credentials match
        localStorage.setItem('isUserLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', user.firstName + ' ' + user.lastName);
        
        // Save login history for admin dashboard - Only save first login
        const loginHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]');
        
        // Check if user already exists in login history
        const userExistsInHistory = loginHistory.some(record => record.email === email);
        
        // Only add to login history if it's the user's first login
        if (!userExistsInHistory) {
          const loginRecord = {
            id: Date.now(),
            name: user.firstName + ' ' + user.lastName,
            email: email,
            loginDate: new Date().toLocaleDateString(),
            loginTime: new Date().toLocaleTimeString(),
            loginDateTime: new Date().toISOString()
          };
          loginHistory.unshift(loginRecord); // Add to beginning of array
          localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
        }
        
        // Save credentials if remember me is checked
        if (rememberMe) {
          localStorage.setItem('savedEmail', email);
          localStorage.setItem('savedPassword', password);
          console.log('Credentials saved:', { email, password }); // Debug log
        } else {
          localStorage.removeItem('savedEmail');
          localStorage.removeItem('savedPassword');
          console.log('Credentials removed'); // Debug log
        }
        
        navigate('/');
      } else {
        // Check if email exists but password is wrong
        const emailExists = registeredUsers.find(u => u.email === email);
        if (emailExists) {
          setError('Invalid password');
        } else {
          setError('User not found. Please sign up first.');
        }
      }
    }
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="container">
          <div className="login-header-content">
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

      <div className="login-container">
        <div className="login-left">
          <div className="login-branding">
             {/* Add logo above the sign in box */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <img src={logo1} alt="Project Logo" style={{ height: '60px', width: 'auto' }} />
            </div>
            <h2>{t('loginWelcomeTitle')}</h2>
            <p>{t('loginWelcomeDesc')}</p>
            <div className="login-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('loginFeature1')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('loginFeature2')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{t('loginFeature3')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2>{t('loginFormTitle')}</h2>
              <p>{t('loginFormSubtitle')}</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="email">{t('loginEmailLabel')}</label>
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('loginEmailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">{t('loginPasswordLabel')}</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder={t('loginPasswordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="form-options">
                <label className="remember-me">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>{t('loginRememberMe')}</span>
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  {t('loginForgotPassword')}
                </Link>
              </div>

              <button type="submit" className="btn-login">
                {t('loginSignInButton')}
              </button>

              <div className="divider">
                <span>{t('loginOrContinue')}</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill="#4285F4" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
                    <path fill="#34A853" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
                    <path fill="#FBBC05" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
                    <path fill="#EA4335" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
                  </svg>
                  {t('loginGoogleButton')}
                </button>
                <button type="button" className="social-btn facebook">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#1877F2">
                    <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                  </svg>
                  {t('loginFacebookButton')}
                </button>
              </div>

              <div className="signup-link">
                {t('loginNoAccount')} <Link to="/signup">{t('loginSignUpLink')}</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
