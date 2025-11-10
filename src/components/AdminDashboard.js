 import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { getTranslation } from '../translations/translations';
import logo1 from '../assets/images/logo1.png';

function AdminDashboard() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = (key) => getTranslation(language, key);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [loginHistory, setLoginHistory] = useState([]);
 
 
  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
    
     
    
    // Load login history
    const history = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    setLoginHistory(history);
  }, [navigate]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    if (showLanguageDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageDropdown]);

  const clearLoginHistory = () => {
    if (window.confirm(t('adminConfirmClearHistory'))) {
      localStorage.setItem('loginHistory', JSON.stringify([]));
      setLoginHistory([]);
    }
  };

  const deleteLoginEntry = (entryId) => {
    // Find the login entry to get the user's email
    const loginEntry = loginHistory.find(login => login.id === entryId);
    
    if (loginEntry) {
      // Remove from login history
      const updatedHistory = loginHistory.filter(login => login.id !== entryId);
      localStorage.setItem('loginHistory', JSON.stringify(updatedHistory));
      setLoginHistory(updatedHistory);
      
      // Also remove the user from registered users
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const updatedUsers = registeredUsers.filter(user => user.email !== loginEntry.email);
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      
      // Clear saved credentials if they match the deleted user
      const savedEmail = localStorage.getItem('savedEmail');
      if (savedEmail === loginEntry.email) {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminEmail');
    navigate('/login');
  };

  // Helper function to get translated status
  const getStatusTranslation = (status) => {
    const statusMap = {
      'In Progress': t('adminStatusInProgress'),
      'Planning': t('adminStatusPlanning'),
      'Completed': t('adminStatusCompleted')
    };
    return statusMap[status] || status;
  };

  // Sample data for the dashboard - localized based on language
  const getSampleProjects = () => {
    if (language === 'ar') {
      return [
        { id: 1, name: 'برج سكاي لاين', client: 'شركة ABC', status: 'In Progress', progress: 65, budget: '$850,000' },
        { id: 2, name: 'منازل الوادي الأخضر', client: 'مطورو XYZ', status: 'In Progress', progress: 40, budget: '$1,200,000' },
        { id: 3, name: 'مول وسط المدينة', client: 'مجموعة التجزئة', status: 'Planning', progress: 15, budget: '$3,500,000' },
        { id: 4, name: 'شقق ريفرسايد', client: 'شركة الإسكان', status: 'In Progress', progress: 80, budget: '$2,100,000' },
        { id: 5, name: 'حرم التكنولوجيا', client: 'حلول التقنية', status: 'Completed', progress: 100, budget: '$5,000,000' }
      ];
    } else if (language === 'he') {
      return [
        { id: 1, name: 'מגדל סקייליין', client: 'חברת ABC', status: 'In Progress', progress: 65, budget: '$850,000' },
        { id: 2, name: 'בתי עמק ירוק', client: 'מפתחי XYZ', status: 'In Progress', progress: 40, budget: '$1,200,000' },
        { id: 3, name: 'קניון מרכז העיר', client: 'קבוצת קמעונאות', status: 'Planning', progress: 15, budget: '$3,500,000' },
        { id: 4, name: 'דירות ריברסייד', client: 'חברת דיור', status: 'In Progress', progress: 80, budget: '$2,100,000' },
        { id: 5, name: 'קמפוס טכנולוגיה', client: 'פתרונות טכנולוגיה', status: 'Completed', progress: 100, budget: '$5,000,000' }
      ];
    } else {
      return [
        { id: 1, name: 'Skyline Tower', client: 'ABC Corp', status: 'In Progress', progress: 65, budget: '$850,000' },
        { id: 2, name: 'Green Valley Homes', client: 'XYZ Developers', status: 'In Progress', progress: 40, budget: '$1,200,000' },
        { id: 3, name: 'Downtown Mall', client: 'Retail Group', status: 'Planning', progress: 15, budget: '$3,500,000' },
        { id: 4, name: 'Riverside Apartments', client: 'Housing Inc', status: 'In Progress', progress: 80, budget: '$2,100,000' },
        { id: 5, name: 'Tech Campus', client: 'Tech Solutions', status: 'Completed', progress: 100, budget: '$5,000,000' }
      ];
    }
  };

  const getSampleClients = () => {
    if (language === 'ar') {
      return [
        { id: 1, name: 'جون سميث', company: 'شركة ABC', email: 'john@abc.com', phone: '+1 234-567-8900', projects: 3 },
        { id: 2, name: 'سارة جونسون', company: 'مطورو XYZ', email: 'sarah@xyz.com', phone: '+1 234-567-8901', projects: 2 },
        { id: 3, name: 'مايك ويلسون', company: 'مجموعة التجزئة', email: 'mike@retail.com', phone: '+1 234-567-8902', projects: 1 },
        { id: 4, name: 'إميلي ديفيس', company: 'شركة الإسكان', email: 'emily@housing.com', phone: '+1 234-567-8903', projects: 4 },
      ];
    } else if (language === 'he') {
      return [
        { id: 1, name: 'ג\'ון סמית', company: 'חברת ABC', email: 'john@abc.com', phone: '+1 234-567-8900', projects: 3 },
        { id: 2, name: 'שרה ג\'ונסון', company: 'מפתחי XYZ', email: 'sarah@xyz.com', phone: '+1 234-567-8901', projects: 2 },
        { id: 3, name: 'מייק ווילסון', company: 'קבוצת קמעונאות', email: 'mike@retail.com', phone: '+1 234-567-8902', projects: 1 },
        { id: 4, name: 'אמילי דייויס', company: 'חברת דיור', email: 'emily@housing.com', phone: '+1 234-567-8903', projects: 4 },
      ];
    } else {
      return [
        { id: 1, name: 'John Smith', company: 'ABC Corp', email: 'john@abc.com', phone: '+1 234-567-8900', projects: 3 },
        { id: 2, name: 'Sarah Johnson', company: 'XYZ Developers', email: 'sarah@xyz.com', phone: '+1 234-567-8901', projects: 2 },
        { id: 3, name: 'Mike Wilson', company: 'Retail Group', email: 'mike@retail.com', phone: '+1 234-567-8902', projects: 1 },
        { id: 4, name: 'Emily Davis', company: 'Housing Inc', email: 'emily@housing.com', phone: '+1 234-567-8903', projects: 4 },
      ];
    }
  };

  const getSampleRequests = () => {
    if (language === 'ar') {
      return [
        { id: 1, type: 'طلب عرض سعر', client: 'روبرت براون', service: 'البناء السكني', date: '2025-10-25' },
        { id: 2, type: 'استشارة', client: 'ليزا أندرسون', service: 'التصميم الداخلي', date: '2025-10-24' },
        { id: 3, type: 'مقترح مشروع', client: 'ديفيد لي', service: 'مبنى تجاري', date: '2025-10-23' },
        { id: 4, type: 'طلب عرض سعر', client: 'آنا مارتينيز', service: 'التجديد', date: '2025-10-22' },
      ];
    } else if (language === 'he') {
      return [
        { id: 1, type: 'בקשת הצעת מחיר', client: 'רוברט בראון', service: 'בנייה למגורים', date: '2025-10-25' },
        { id: 2, type: 'ייעוץ', client: 'ליסה אנדרסון', service: 'עיצוב פנים', date: '2025-10-24' },
        { id: 3, type: 'הצעת פרויקט', client: 'דיוויד לי', service: 'בניין מסחרי', date: '2025-10-23' },
        { id: 4, type: 'בקשת הצעת מחיר', client: 'אנה מרטינז', service: 'שיפוץ', date: '2025-10-22' },
      ];
    } else {
      return [
        { id: 1, type: 'Quote Request', client: 'Robert Brown', service: 'Residential Construction', date: '2025-10-25' },
        { id: 2, type: 'Consultation', client: 'Lisa Anderson', service: 'Interior Design', date: '2025-10-24' },
        { id: 3, type: 'Project Proposal', client: 'David Lee', service: 'Commercial Building', date: '2025-10-23' },
        { id: 4, type: 'Quote Request', client: 'Anna Martinez', service: 'Renovation', date: '2025-10-22' },
      ];
    }
  };

  const stats = {
    totalProjects: 24,
    activeProjects: 12,
    completedProjects: 10,
    totalClients: 45,
    revenue: '$2,450,000',
    pendingRequests: 8
  };

  const recentProjects = getSampleProjects();
  const recentClients = getSampleClients();
  const pendingRequests = getSampleRequests();

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="admin-logo">
            <img src={logo1} alt="Logo" className="admin-logo-img" />
          </div>
          <p className="admin-role">{t('adminPanelTitle')}</p>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            <span>{t('adminNavOverview')}</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span className="nav-icon">🏗️</span>
            <span>{t('adminNavProjects')}</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'clients' ? 'active' : ''}`}
            onClick={() => setActiveTab('clients')}
          >
            <span className="nav-icon">👥</span>
            <span>{t('adminNavClients')}</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'requests' ? 'active' : ''}`}
            onClick={() => setActiveTab('requests')}
          >
            <span className="nav-icon">📧</span>
            <span>{t('adminNavRequests')}</span>
            <span className="badge">{stats.pendingRequests}</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'userlogins' ? 'active' : ''}`}
            onClick={() => setActiveTab('userlogins')}
          >
            <span className="nav-icon">🔐</span>
            <span>{t('adminNavUserLogins')}</span>
            <span className="badge">{loginHistory.length}</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <span className="nav-icon">⚙️</span>
            <span>{t('adminNavServices')}</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span className="nav-icon">🔧</span>
            <span>{t('adminNavSettings')}</span>
          </button>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          <span>{t('adminNavLogout')}</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <h1>{t('adminDashboardTitle')}</h1>
          <div className="admin-user">
            <span>{t('adminWelcome')}</span>
            
            {/* Language Dropdown */}
            <div className="language-selector" ref={languageDropdownRef}>
              <button 
                className="language-btn"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                🌐 {language === 'en' ? 'EN' : language === 'ar' ? 'AR' : 'HE'}
              </button>
              {showLanguageDropdown && (
                <div className="language-dropdown">
                  <button onClick={() => { changeLanguage('en'); setShowLanguageDropdown(false); }}>
                    English
                  </button>
                  <button onClick={() => { changeLanguage('ar'); setShowLanguageDropdown(false); }}>
                    العربية
                  </button>
                  <button onClick={() => { changeLanguage('he'); setShowLanguageDropdown(false); }}>
                    עברית
                  </button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="admin-content">
          {activeTab === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>🏗️</div>
                  <div className="stat-info">
                    <h3>{t('adminStatTotalProjects')}</h3>
                    <p className="stat-number">{stats.totalProjects}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>⚡</div>
                  <div className="stat-info">
                    <h3>{t('adminStatActiveProjects')}</h3>
                    <p className="stat-number">{stats.activeProjects}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>✅</div>
                  <div className="stat-info">
                    <h3>{t('adminStatCompleted')}</h3>
                    <p className="stat-number">{stats.completedProjects}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>👥</div>
                  <div className="stat-info">
                    <h3>{t('adminStatTotalClients')}</h3>
                    <p className="stat-number">{stats.totalClients}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>💰</div>
                  <div className="stat-info">
                    <h3>{t('adminStatTotalRevenue')}</h3>
                    <p className="stat-number">{stats.revenue}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'}}>📧</div>
                  <div className="stat-info">
                    <h3>{t('adminStatPendingRequests')}</h3>
                    <p className="stat-number">{stats.pendingRequests}</p>
                  </div>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="dashboard-section">
                <h2>{t('adminRecentProjects')}</h2>
                <div className="table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>{t('adminTableProjectName')}</th>
                        <th>{t('adminTableClient')}</th>
                        <th>{t('adminTableStatus')}</th>
                        <th>{t('adminTableProgress')}</th>
                        <th>{t('adminTableBudget')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentProjects.map(project => (
                        <tr key={project.id}>
                          <td>{project.name}</td>
                          <td>{project.client}</td>
                          <td>
                            <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                              {getStatusTranslation(project.status)}
                            </span>
                          </td>
                          <td>
                            <div className="progress-bar">
                              <div className="progress-fill" style={{width: `${project.progress}%`}}></div>
                              <span className="progress-text">{project.progress}%</span>
                            </div>
                          </td>
                          <td>{project.budget}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'projects' && (
            <div className="dashboard-section">
              <h2>{t('adminAllProjects')}</h2>
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t('adminTableID')}</th>
                      <th>{t('adminTableProjectName')}</th>
                      <th>{t('adminTableClient')}</th>
                      <th>{t('adminTableStatus')}</th>
                      <th>{t('adminTableProgress')}</th>
                      <th>{t('adminTableBudget')}</th>
                      <th>{t('adminTableActions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProjects.map(project => (
                      <tr key={project.id}>
                        <td>#{project.id}</td>
                        <td>{project.name}</td>
                        <td>{project.client}</td>
                        <td>
                          <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                            {getStatusTranslation(project.status)}
                          </span>
                        </td>
                        <td>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: `${project.progress}%`}}></div>
                            <span className="progress-text">{project.progress}%</span>
                          </div>
                        </td>
                        <td>{project.budget}</td>
                        <td>
                          <button className="action-btn">{t('adminBtnView')}</button>
                          <button className="action-btn">{t('adminBtnEdit')}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="dashboard-section">
              <h2>{t('adminClientManagement')}</h2>
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t('adminTableName')}</th>
                      <th>{t('adminTableCompany')}</th>
                      <th>{t('adminTableEmail')}</th>
                      <th>{t('adminTablePhone')}</th>
                      <th>{t('adminTableProjects')}</th>
                      <th>{t('adminTableActions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentClients.map(client => (
                      <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.company}</td>
                        <td>{client.email}</td>
                        <td>{client.phone}</td>
                        <td>{client.projects}</td>
                        <td>
                          <button className="action-btn">{t('adminBtnView')}</button>
                          <button className="action-btn">{t('adminBtnContact')}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="dashboard-section">
              <h2>{t('adminPendingRequests')}</h2>
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t('adminTableType')}</th>
                      <th>{t('adminTableClient')}</th>
                      <th>{t('adminTableService')}</th>
                      <th>{t('adminTableDate')}</th>
                      <th>{t('adminTableActions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingRequests.map(request => (
                      <tr key={request.id}>
                        <td><span className="status-badge planning">{request.type}</span></td>
                        <td>{request.client}</td>
                        <td>{request.service}</td>
                        <td>{request.date}</td>
                        <td>
                          <button className="action-btn">{t('adminBtnApprove')}</button>
                          <button className="action-btn">{t('adminBtnDecline')}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="dashboard-section">
              <h2>{t('adminServicesManagement')}</h2>
              <div className="services-grid">
                <div className="service-item">
                  <h3>🏗️ {t('architecturalDesign')}</h3>
                  <p>{t('adminActiveProjects')}: 5</p>
                  <button className="action-btn">{t('adminBtnManage')}</button>
                </div>
                <div className="service-item">
                  <h3>🏠 {t('residentialConstruction')}</h3>
                  <p>{t('adminActiveProjects')}: 8</p>
                  <button className="action-btn">{t('adminBtnManage')}</button>
                </div>
                <div className="service-item">
                  <h3>🏢 {t('commercialBuildings')}</h3>
                  <p>{t('adminActiveProjects')}: 3</p>
                  <button className="action-btn">{t('adminBtnManage')}</button>
                </div>
                <div className="service-item">
                  <h3>🎨 {t('interiorDesign')}</h3>
                  <p>{t('adminActiveProjects')}: 6</p>
                  <button className="action-btn">{t('adminBtnManage')}</button>
                </div>
                <div className="service-item">
                  <h3>🔨 {t('renovationRemodeling')}</h3>
                  <p>{t('adminActiveProjects')}: 4</p>
                  <button className="action-btn">{t('adminBtnManage')}</button>
                </div>
                <div className="service-item">
                  <h3>📊 {t('projectManagement')}</h3>
                  <p>{t('adminActiveProjects')}: 7</p>
                  <button className="action-btn">{t('adminBtnManage')}</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'userlogins' && (
            <div className="dashboard-section">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <h2>{t('adminUserLoginHistory')}</h2>
                {loginHistory.length > 0 && (
                  <button 
                    className="action-btn" 
                    onClick={clearLoginHistory}
                    style={{background: '#ff6b6b', color: 'white'}}
                  >
                    {t('adminClearAllHistory')}
                  </button>
                )}
              </div>
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t('adminTableID')}</th>
                      <th>{t('adminTableName')}</th>
                      <th>{t('adminTableEmail')}</th>
                      <th>{t('adminTableLoginDate')}</th>
                      <th>{t('adminTableLoginTime')}</th>
                      <th>{t('adminTableActions')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loginHistory.length > 0 ? (
                      loginHistory.map((login, index) => (
                        <tr key={login.id}>
                          <td>#{index + 1}</td>
                          <td>{login.name}</td>
                          <td>{login.email}</td>
                          <td>{login.loginDate}</td>
                          <td>{login.loginTime}</td>
                          <td>
                            <button 
                              className="action-btn" 
                              onClick={() => deleteLoginEntry(login.id)}
                              style={{background: '#ff6b6b', color: 'white', padding: '0.3rem 0.8rem'}}
                            >
                              {t('adminBtnDelete')}
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" style={{textAlign: 'center', padding: '2rem', color: '#999'}}>
                          {t('adminNoUserLogins')}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="dashboard-section">
              <h2>{t('adminNavSettings')}</h2>
              <div className="settings-content">
                <div className="setting-group">
                  <h3>{t('adminAccountSettings')}</h3>
                  <div className="setting-item">
                    <label>{t('adminTableEmail')}</label>
                    <input type="email" value="admin@gmail.com" disabled />
                  </div>
                  <div className="setting-item">
                    <label>{t('adminChangePassword')}</label>
                    <button className="action-btn">{t('adminUpdatePassword')}</button>
                  </div>
                </div>
                <div className="setting-group">
                  <h3>{t('adminNotificationSettings')}</h3>
                  <div className="setting-item">
                    <label>
                      <input type="checkbox" defaultChecked />
                      {t('adminEmailNotifications')}
                    </label>
                  </div>
                  <div className="setting-item">
                    <label>
                      <input type="checkbox" defaultChecked />
                      {t('adminProjectUpdates')}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
