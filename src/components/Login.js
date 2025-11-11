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
      
      // Always clear saved credentials after login
      localStorage.removeItem('savedEmail');
      localStorage.removeItem('savedPassword');
      console.log('Credentials cleared after login'); // Debug log
      
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
        
        // Always clear saved credentials after login
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
        console.log('Credentials cleared after login'); // Debug log
        
        navigate('/home');
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
        <div className="login-box">
          <div className="login-box-inner">
            <div className="login-logo-section">
              <img src={logo1} alt="STACKLY Logo" className="login-logo-img" />
            </div>

            <div className="login-welcome">
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
                <span>{t('loginSignInButton')}</span>
                <span className="btn-arrow">→</span>
              </button>

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
