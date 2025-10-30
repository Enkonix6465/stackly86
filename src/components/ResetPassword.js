import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ResetPassword.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useTheme } from '../context/ThemeContext';
import logo1 from '../assets/images/logo1.png';

function ResetPassword() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = (key) => getTranslation(language, key);
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if email is stored in sessionStorage
    const resetEmail = sessionStorage.getItem('resetPasswordEmail');
    if (!resetEmail) {
      // If no email found, redirect to forgot password page
      navigate('/forgot-password');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Validate password match
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    // Validate password length
    if (formData.newPassword.length < 8) {
      setError('Password must be at least 8 characters long!');
      return;
    }
    
    // Get the email from sessionStorage
    const resetEmail = sessionStorage.getItem('resetPasswordEmail');
    
    if (!resetEmail) {
      setError('Session expired. Please try again.');
      return;
    }
    
    // Update the password in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = registeredUsers.findIndex(u => u.email === resetEmail);
    
    if (userIndex !== -1) {
      // Update user's password
      registeredUsers[userIndex].password = formData.newPassword;
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      
      // Clear the session storage
      sessionStorage.removeItem('resetPasswordEmail');
      
      // Show success message and navigate to login
      alert('Password reset successful! You can now login with your new password.');
      navigate('/login');
    } else {
      setError('User not found. Please try again.');
    }
  };

  return (
    <div className="reset-password-page">
      {/* Header */}
      <header className="reset-password-header">
        <div className="container">
          <div className="reset-password-header-content">
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

      <div className="reset-password-container">
        <div className="reset-password-card">
          <div className="reset-password-header">
            <div className="reset-password-icon">🔐</div>
            <h2>{t('resetPasswordTitle')}</h2>
            <p>{t('resetPasswordDesc')}</p>
          </div>

          <form className="reset-password-form" onSubmit={handleSubmit}>
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
              <label htmlFor="newPassword">{t('resetPasswordNewPasswordLabel')}</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  placeholder={t('resetPasswordNewPasswordPlaceholder')}
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              <small className="password-hint">{t('resetPasswordHint')}</small>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">{t('resetPasswordConfirmPasswordLabel')}</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t('resetPasswordConfirmPasswordPlaceholder')}
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

            <button type="submit" className="btn-submit">
              {t('resetPasswordSubmitButton')}
            </button>

            <div className="back-to-login">
              <Link to="/login">← {t('resetPasswordBackToLogin')}</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
