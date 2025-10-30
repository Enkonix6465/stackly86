import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import './styles/App.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Home2 from './components/Home2';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AdminDashboard from './components/AdminDashboard';
import ArchitecturalDesign from './components/ArchitecturalDesign';
import ResidentialConstruction from './components/ResidentialConstruction';
import CommercialBuildings from './components/CommercialBuildings';
import InteriorDesign from './components/InteriorDesign';
import RenovationRemodeling from './components/RenovationRemodeling';
import ProjectManagement from './components/ProjectManagement';

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || 
                          location.pathname === '/signup' || 
                          location.pathname === '/forgot-password' || 
                          location.pathname === '/reset-password' ||
                          location.pathname === '/admin/dashboard';

  return (
    <div className="App">
      <ScrollToTop />
      {!hideHeaderFooter && <Header />}
      <Routes>
        {/* Home 1 - Main Homepage with sections */}
        <Route path="/" element={
          <>
            {/* Section 1: Hero - Main Landing */}
            <Hero />
            
            {/* Section 2: Services - What We Offer */}
            <Services />
          </>
        } />
        
        {/* Home 2 - Alternative Homepage */}
        <Route path="/home2" element={<Home2 />} />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Forgot Password Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Reset Password Page */}
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* Service Pages */}
        <Route path="/services/architectural-design" element={<ArchitecturalDesign />} />
        <Route path="/services/residential-construction" element={<ResidentialConstruction />} />
        <Route path="/services/commercial-buildings" element={<CommercialBuildings />} />
        <Route path="/services/interior-design" element={<InteriorDesign />} />
        <Route path="/services/renovation-remodeling" element={<RenovationRemodeling />} />
        <Route path="/services/project-management" element={<ProjectManagement />} />
        
        {/* Blog Page */}
        <Route path="/blog" element={<Blog />} />
        
        {/* Blog Detail Page */}
        <Route path="/blog/:slug" element={<BlogDetail />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
