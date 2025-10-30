import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import '../styles/BlogDetail.css';

// Article data
const articlesData = {
  'safety-protocols': {
    category: 'Safety',
    title: 'Essential Safety Protocols for Construction Sites',
    description: 'Learn about the critical safety measures and best practices that protect workers and ensure project success.',
    author: 'Sarah Johnson',
    authorTitle: 'Safety Engineer',
    authorBio: 'Expert in construction safety protocols with 12+ years of experience ensuring workplace safety compliance.',
    authorImage: 'https://i.pravatar.cc/150?img=47',
    date: 'Oct 22, 2025',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop',
    contentImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&h=500&fit=crop',
    intro1: 'Construction sites are dynamic environments where safety must be the top priority. Every year, thousands of workers are injured on construction sites, making it crucial to implement and maintain robust safety protocols. This comprehensive guide will walk you through the essential safety measures that every construction site should have in place.',
    intro2: 'From personal protective equipment (PPE) to site-specific hazard assessments, understanding and implementing these protocols can mean the difference between a safe worksite and a dangerous one. Let\'s explore the critical elements of construction site safety.',
    sections: [
      { title: 'Personal Protective Equipment (PPE)', content: 'Personal protective equipment is the first line of defense against workplace injuries. All workers must be equipped with appropriate PPE, including hard hats, safety glasses, high-visibility vests, steel-toed boots, and gloves. Regular inspections ensure that equipment is in good condition and properly fitted.' },
      { title: 'Fall Protection Systems', content: 'Falls remain one of the leading causes of construction-related fatalities. Implementing comprehensive fall protection systems is non-negotiable. This includes guardrails, safety nets, and personal fall arrest systems for work at heights. Regular training on proper harness use and anchor point selection is essential.' },
      { title: 'Hazard Communication', content: 'Clear communication about potential hazards is vital. Safety data sheets (SDS) must be readily accessible, and all workers should understand the risks associated with materials they handle. Regular safety meetings and toolbox talks keep safety top of mind.' },
      { title: 'Equipment Safety and Maintenance', content: 'Regular inspection and maintenance of equipment prevent accidents and ensure operational efficiency. Operators must be properly trained and certified for the machinery they use. Pre-shift inspections should be mandatory, and any defective equipment must be tagged out immediately.' }
    ],
    quote: '"Safety doesn\'t happen by accident. It\'s a result of careful planning, proper training, and unwavering commitment to protecting every worker on site."',
    lists: ['Maintain up-to-date safety data sheets for all chemicals', 'Conduct daily safety briefings before work begins', 'Use clear signage to mark hazardous areas', 'Implement a buddy system for high-risk tasks', 'Establish emergency response procedures'],
    tags: ['Construction Safety', 'PPE', 'Fall Protection', 'Workplace Safety', 'OSHA Compliance'],
    takeaways: [
      { icon: '🛡️', title: 'PPE is Essential', description: 'Proper protective equipment must be worn at all times on construction sites to prevent injuries.' },
      { icon: '⚠️', title: 'Fall Protection', description: 'Comprehensive fall protection systems save lives and are required for all elevated work.' },
      { icon: '📋', title: 'Regular Training', description: 'Ongoing safety training keeps workers informed about best practices and new regulations.' },
      { icon: '🔧', title: 'Equipment Maintenance', description: 'Regular inspections and maintenance prevent equipment-related accidents and downtime.' }
    ],
    stats: [
      { number: '65%', label: 'Reduction in accidents with proper safety protocols' },
      { number: '1,008', label: 'Fatal work injuries in construction (2020)' },
      { number: '$1.2B', label: 'Annual cost savings from workplace safety programs' },
      { number: '4x', label: 'Higher productivity with strong safety culture' }
    ]
  },
  'smart-buildings': {
    category: 'Innovation',
    title: 'Smart Buildings: The Integration of IoT',
    description: 'Explore how Internet of Things technology is transforming buildings into intelligent, efficient spaces.',
    author: 'Michael Chen',
    authorTitle: 'Tech Innovator',
    authorBio: 'Focused on integrating cutting-edge technology into modern construction practices with 10+ years of experience.',
    authorImage: 'https://i.pravatar.cc/150?img=68',
    date: 'Oct 19, 2025',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&h=600&fit=crop',
    contentImage: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=1000&h=500&fit=crop',
    intro1: 'The Internet of Things (IoT) is revolutionizing how we design, construct, and manage buildings. Smart buildings use interconnected sensors, devices, and systems to optimize energy use, improve occupant comfort, and reduce operational costs. This technology integration is transforming the construction industry.',
    intro2: 'From automated climate control to predictive maintenance systems, IoT technology is making buildings more responsive to occupant needs while reducing environmental impact. Let\'s explore how this technology is reshaping modern construction.',
    sections: [
      { title: 'Energy Management Systems', content: 'IoT-enabled energy management systems monitor and optimize power consumption in real-time. Smart thermostats, automated lighting, and HVAC systems adjust based on occupancy patterns and environmental conditions, reducing energy waste by up to 30%.' },
      { title: 'Predictive Maintenance', content: 'Sensors embedded throughout buildings can detect potential equipment failures before they occur. This predictive approach to maintenance reduces downtime, extends equipment life, and significantly lowers repair costs.' },
      { title: 'Occupant Comfort and Productivity', content: 'Smart buildings adapt to occupant preferences, adjusting lighting, temperature, and air quality automatically. Studies show that optimized environments can improve productivity by 15% and reduce sick days.' },
      { title: 'Security and Access Control', content: 'IoT-based security systems provide enhanced monitoring and control. Smart locks, surveillance cameras, and visitor management systems work together to create safer, more secure building environments.' }
    ],
    quote: '"Smart buildings aren\'t just about technology—they\'re about creating spaces that respond intelligently to human needs while protecting our environment."',
    lists: ['Install networked sensors for real-time monitoring', 'Implement centralized building management systems', 'Use data analytics for optimization insights', 'Integrate renewable energy sources', 'Deploy mobile apps for occupant control'],
    tags: ['IoT', 'Smart Buildings', 'Technology', 'Energy Efficiency', 'Automation'],
    takeaways: [
      { icon: '💡', title: 'Energy Savings', description: 'IoT systems can reduce energy consumption by up to 30% through intelligent automation.' },
      { icon: '🔧', title: 'Predictive Maintenance', description: 'Sensors detect issues early, preventing costly breakdowns and extending equipment life.' },
      { icon: '👥', title: 'Enhanced Comfort', description: 'Smart systems adapt to occupant needs, improving satisfaction and productivity.' },
      { icon: '🔒', title: 'Better Security', description: 'Integrated security systems provide comprehensive monitoring and access control.' }
    ],
    stats: [
      { number: '30%', label: 'Average energy savings with smart systems' },
      { number: '15%', label: 'Productivity improvement in smart buildings' },
      { number: '$0.50', label: 'Cost savings per square foot annually' },
      { number: '25%', label: 'Reduction in maintenance costs' }
    ]
  },
  'budget-management': {
    category: 'Project Management',
    title: 'Effective Budget Management for Large Projects',
    description: 'Master the art of keeping construction projects on budget with these proven strategies and techniques.',
    author: 'David Park',
    authorTitle: 'Project Manager',
    authorBio: 'Experienced in managing multi-million dollar construction projects from start to finish with 15+ years of expertise.',
    authorImage: 'https://i.pravatar.cc/150?img=52',
    date: 'Oct 17, 2025',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    contentImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=500&fit=crop',
    intro1: 'Budget overruns are one of the biggest challenges in construction project management. Successful project managers know that effective budget management requires careful planning, continuous monitoring, and proactive problem-solving. This guide will show you how to keep your projects financially on track.',
    intro2: 'From initial cost estimation to final accounting, every phase of a construction project presents opportunities for cost control. Understanding and implementing proven budget management strategies can mean the difference between project success and financial disaster.',
    sections: [
      { title: 'Accurate Cost Estimation', content: 'The foundation of budget management is accurate cost estimation. Use historical data, consult with specialists, and include contingency funds. Detailed quantity takeoffs and market research ensure realistic budget projections from the start.' },
      { title: 'Change Order Management', content: 'Change orders are inevitable but must be carefully controlled. Establish clear approval processes, document all changes thoroughly, and communicate cost impacts immediately. Uncontrolled changes are the primary cause of budget overruns.' },
      { title: 'Resource Optimization', content: 'Optimize labor, materials, and equipment usage to maximize value. Just-in-time material delivery reduces storage costs, while efficient crew scheduling minimizes overtime expenses. Strategic procurement can yield significant savings.' },
      { title: 'Regular Financial Monitoring', content: 'Implement weekly budget reviews and variance analysis. Early detection of cost overruns allows for corrective action before problems escalate. Use project management software for real-time financial tracking.' }
    ],
    quote: '"Successful budget management isn\'t about cutting corners—it\'s about making informed decisions and controlling costs at every stage of the project."',
    lists: ['Create detailed initial budgets with contingencies', 'Track all expenses in real-time', 'Implement strict change order processes', 'Conduct regular budget variance analyses', 'Communicate financial status to stakeholders'],
    tags: ['Budget Management', 'Cost Control', 'Project Management', 'Financial Planning', 'Construction'],
    takeaways: [
      { icon: '📊', title: 'Accurate Estimation', description: 'Detailed cost estimates with contingencies prevent budget surprises later.' },
      { icon: '📝', title: 'Change Control', description: 'Rigorous change order management prevents uncontrolled cost increases.' },
      { icon: '⚙️', title: 'Resource Optimization', description: 'Strategic resource management maximizes value and minimizes waste.' },
      { icon: '📈', title: 'Continuous Monitoring', description: 'Regular financial reviews enable early problem detection and correction.' }
    ],
    stats: [
      { number: '85%', label: 'Of projects with budget tracking stay on budget' },
      { number: '20%', label: 'Average cost overrun on poorly managed projects' },
      { number: '$500K', label: 'Average savings through effective procurement' },
      { number: '95%', label: 'Client satisfaction with on-budget delivery' }
    ]
  }
};

function BlogDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const article = articlesData[slug] || articlesData['safety-protocols']; // Default to safety article if slug not found

  // Helper function to translate category names
  const translateCategory = (category) => {
    const categoryMap = {
      'Safety': 'blogDetailCatSafety',
      'Innovation': 'blogDetailCatInnovation',
      'Technology': 'blogDetailCatTechnology',
      'Design': 'blogDetailCatDesign',
      'Sustainability': 'blogDetailCatSustainability',
      'Construction': 'blogDetailCatConstruction',
      'Project Management': 'blogDetailCatProjectMgmt'
    };
    return t(categoryMap[category] || 'blogDetailCatSafety');
  };

  // Helper function to get translated article metadata
  const getArticleTranslations = (slug) => {
    const translationMap = {
      'safety-protocols': {
        title: 'articleSafetyTitle',
        description: 'articleSafetyDesc',
        author: 'articleSafetyAuthor',
        authorTitle: 'articleSafetyAuthorTitle',
        readTime: 'articleSafetyReadTime',
        authorBio: 'articleSafetyAuthorBio'
      },
      'smart-buildings': {
        title: 'articleSmartTitle',
        description: 'articleSmartDesc',
        author: 'articleSmartAuthor',
        authorTitle: 'articleSmartAuthorTitle',
        readTime: 'articleSmartReadTime',
        authorBio: 'articleSmartAuthorBio'
      },
      'budget-management': {
        title: 'articleBudgetTitle',
        description: 'articleBudgetDesc',
        author: 'articleBudgetAuthor',
        authorTitle: 'articleBudgetAuthorTitle',
        readTime: 'articleBudgetReadTime',
        authorBio: 'articleBudgetAuthorBio'
      }
    };

    const keys = translationMap[slug] || translationMap['safety-protocols'];
    return {
      title: t(keys.title),
      description: t(keys.description),
      author: t(keys.author),
      authorTitle: t(keys.authorTitle),
      readTime: t(keys.readTime),
      authorBio: t(keys.authorBio)
    };
  };

  // Helper function to get translated article content
  const getArticleContent = (slug) => {
    const contentMap = {
      'safety-protocols': {
        intro1: 'safetyIntro1',
        intro2: 'safetyIntro2',
        sections: [
          { title: 'safetySection1Title', content: 'safetySection1Content' },
          { title: 'safetySection2Title', content: 'safetySection2Content' },
          { title: 'safetySection3Title', content: 'safetySection3Content' },
          { title: 'safetySection4Title', content: 'safetySection4Content' }
        ],
        quote: 'safetyQuote',
        lists: ['safetyList1', 'safetyList2', 'safetyList3', 'safetyList4', 'safetyList5'],
        takeaways: [
          { icon: '🛡️', title: 'safetyTakeaway1Title', description: 'safetyTakeaway1Desc' },
          { icon: '⚠️', title: 'safetyTakeaway2Title', description: 'safetyTakeaway2Desc' },
          { icon: '📋', title: 'safetyTakeaway3Title', description: 'safetyTakeaway3Desc' },
          { icon: '🔧', title: 'safetyTakeaway4Title', description: 'safetyTakeaway4Desc' }
        ],
        stats: [
          { number: 'safetyStat1Number', label: 'safetyStat1Label' },
          { number: 'safetyStat2Number', label: 'safetyStat2Label' },
          { number: 'safetyStat3Number', label: 'safetyStat3Label' },
          { number: 'safetyStat4Number', label: 'safetyStat4Label' }
        ]
      },
      'smart-buildings': {
        intro1: 'smartIntro1',
        intro2: 'smartIntro2',
        sections: [
          { title: 'smartSection1Title', content: 'smartSection1Content' },
          { title: 'smartSection2Title', content: 'smartSection2Content' },
          { title: 'smartSection3Title', content: 'smartSection3Content' },
          { title: 'smartSection4Title', content: 'smartSection4Content' }
        ],
        quote: 'smartQuote',
        lists: ['smartList1', 'smartList2', 'smartList3', 'smartList4', 'smartList5'],
        takeaways: [
          { icon: '💡', title: 'smartTakeaway1Title', description: 'smartTakeaway1Desc' },
          { icon: '🔧', title: 'smartTakeaway2Title', description: 'smartTakeaway2Desc' },
          { icon: '👥', title: 'smartTakeaway3Title', description: 'smartTakeaway3Desc' },
          { icon: '🔒', title: 'smartTakeaway4Title', description: 'smartTakeaway4Desc' }
        ],
        stats: [
          { number: 'smartStat1Number', label: 'smartStat1Label' },
          { number: 'smartStat2Number', label: 'smartStat2Label' },
          { number: 'smartStat3Number', label: 'smartStat3Label' },
          { number: 'smartStat4Number', label: 'smartStat4Label' }
        ]
      },
      'budget-management': {
        intro1: 'budgetIntro1',
        intro2: 'budgetIntro2',
        sections: [
          { title: 'budgetSection1Title', content: 'budgetSection1Content' },
          { title: 'budgetSection2Title', content: 'budgetSection2Content' },
          { title: 'budgetSection3Title', content: 'budgetSection3Content' },
          { title: 'budgetSection4Title', content: 'budgetSection4Content' }
        ],
        quote: 'budgetQuote',
        lists: ['budgetList1', 'budgetList2', 'budgetList3', 'budgetList4', 'budgetList5'],
        takeaways: [
          { icon: '📊', title: 'budgetTakeaway1Title', description: 'budgetTakeaway1Desc' },
          { icon: '📝', title: 'budgetTakeaway2Title', description: 'budgetTakeaway2Desc' },
          { icon: '⚙️', title: 'budgetTakeaway3Title', description: 'budgetTakeaway3Desc' },
          { icon: '📈', title: 'budgetTakeaway4Title', description: 'budgetTakeaway4Desc' }
        ],
        stats: [
          { number: 'budgetStat1Number', label: 'budgetStat1Label' },
          { number: 'budgetStat2Number', label: 'budgetStat2Label' },
          { number: 'budgetStat3Number', label: 'budgetStat3Label' },
          { number: 'budgetStat4Number', label: 'budgetStat4Label' }
        ]
      }
    };

    const keys = contentMap[slug] || contentMap['safety-protocols'];
    return {
      intro1: t(keys.intro1),
      intro2: t(keys.intro2),
      sections: keys.sections.map(s => ({ title: t(s.title), content: t(s.content) })),
      quote: t(keys.quote),
      lists: keys.lists.map(l => t(l)),
      takeaways: keys.takeaways ? keys.takeaways.map(ta => ({ 
        icon: ta.icon, 
        title: t(ta.title), 
        description: t(ta.description) 
      })) : article.takeaways,
      stats: keys.stats ? keys.stats.map(st => ({ 
        number: t(st.number), 
        label: t(st.label) 
      })) : article.stats
    };
  };

  const translatedArticle = getArticleTranslations(slug);
  const articleContent = getArticleContent(slug);

  // Helper function to translate tags
  const translateTag = (tag) => {
    const tagMap = {
      'Construction Safety': 'tagConstructionSafety',
      'PPE': 'tagPPE',
      'Fall Protection': 'tagFallProtection',
      'Workplace Safety': 'tagWorkplaceSafety',
      'OSHA Compliance': 'tagOSHACompliance',
      'IoT': 'tagIoT',
      'Smart Buildings': 'tagSmartBuildings',
      'Technology': 'tagTechnology',
      'Energy Efficiency': 'tagEnergyEfficiency',
      'Automation': 'tagAutomation',
      'Budget Management': 'tagBudgetManagement',
      'Cost Control': 'tagCostControl',
      'Project Management': 'tagProjectManagement',
      'Financial Planning': 'tagFinancialPlanning',
      'Construction': 'tagConstruction'
    };
    return t(tagMap[tag] || tag);
  };


  // State for animated counters
  const [counters, setCounters] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Extract numeric values from stat numbers
  const getNumericValue = (statNumber) => {
    // Remove all non-numeric characters except decimal point
    const cleanedNumber = statNumber.replace(/[^0-9.]/g, '');
    return parseFloat(cleanedNumber) || 0;
  };

  // Get the suffix/prefix from the stat number
  const getFormatting = (statNumber) => {
    const hasPercent = statNumber.includes('%');
    const hasDollar = statNumber.includes('$');
    const hasB = statNumber.includes('B');
    const hasM = statNumber.includes('M');
    const hasK = statNumber.includes('K');
    const hasX = statNumber.includes('x');
    const hasComma = statNumber.includes(',');
    
    return { hasPercent, hasDollar, hasB, hasM, hasK, hasX, hasComma };
  };

  // Intersection Observer for animation trigger
  useEffect(() => {
    // Animate counters function
    const animateCounters = () => {
      const stats = article.stats;
      const durations = [6000, 4500, 4000, 3500]; // Different durations for variety
      
      stats.forEach((stat, index) => {
        const targetValue = getNumericValue(stat.number);
        const duration = durations[index];
        const startTime = performance.now();
        const statKey = `stat${index + 1}`;

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuart(progress);
          const currentValue = easedProgress * targetValue;

          setCounters(prev => ({
            ...prev,
            [statKey]: currentValue
          }));

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, [hasAnimated, article.stats]);

  // Format counter value for display
  const formatCounterValue = (value, statNumber) => {
    const formatting = getFormatting(statNumber);
    let formattedValue = '';

    if (formatting.hasDollar) {
      formattedValue = '$';
    }

    if (formatting.hasComma && value >= 1000) {
      formattedValue += Math.floor(value).toLocaleString();
    } else if (formatting.hasB || formatting.hasM || formatting.hasK) {
      formattedValue += value.toFixed(1);
    } else if (formatting.hasPercent) {
      formattedValue += Math.floor(value);
    } else {
      formattedValue += Math.floor(value);
    }

    if (formatting.hasB) formattedValue += 'B';
    if (formatting.hasM) formattedValue += 'M';
    if (formatting.hasK) formattedValue += 'K';
    if (formatting.hasPercent) formattedValue += '%';
    if (formatting.hasX) formattedValue += 'x';

    return formattedValue;
  };

  return (
    <div className="blog-detail-page">
      {/* Section 1: Article Hero with Background Image */}
      <section className="article-hero">
        <div className="article-hero-bg" style={{ backgroundImage: `url(${article.heroImage})` }}></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="article-hero-content">
            <span className="article-category-badge">{translateCategory(article.category)}</span>
            <h1>{translatedArticle.title}</h1>
            <div className="article-meta">
              <span className="author">{t('blogDetailBy')} {translatedArticle.author}</span>
              <span className="date">{article.date}</span>
              <span className="read-time">{translatedArticle.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <img src={article.featuredImage} alt={article.title} className="featured-image" />
              
              <div className="article-body">
                <h2>{t('blogDetailIntro')}</h2>
                <p>{articleContent.intro1}</p>
                <p>{articleContent.intro2}</p>

                {articleContent.sections.map((section, index) => (
                  <div key={index}>
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                    {index === 1 && <img src={article.contentImage} alt={section.title} className="content-image" />}
                  </div>
                ))}

                <blockquote>
                  {articleContent.quote} - {translatedArticle.author}, {translatedArticle.authorTitle}
                </blockquote>

                <h2>{t('blogDetailKeyActions')}</h2>
                <ul className="article-list">
                  {articleContent.lists.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h2>{t('blogDetailConclusion')}</h2>
                <p>{t('blogDetailConclusionText')} {translateCategory(article.category).toLowerCase()} {t('blogDetailConclusionText2')}</p>
              </div>

              <div className="article-tags">
                <h3>{t('blogDetailTags')}</h3>
                <div className="tags-list">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="tag">{translateTag(tag)}</span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="sidebar">
              <div className="author-box">
                <img src={article.authorImage} alt={translatedArticle.author} />
                <h3>{translatedArticle.author}</h3>
                <p className="author-title">{translatedArticle.authorTitle}</p>
                <p className="author-bio">{translatedArticle.authorBio}</p>
                <div className="social-links">
                  <a href="#linkedin">{t('blogDetailSocialLinkedIn')}</a>
                  <a href="#twitter">{t('blogDetailSocialTwitter')}</a>
                  <a href="#email">{t('blogDetailSocialEmail')}</a>
                </div>
              </div>

              <div className="share-box">
                <h3>{t('blogDetailShareArticle')}</h3>
                <div className="share-buttons">
                  <button className="share-btn facebook">{t('blogDetailFacebook')}</button>
                  <button className="share-btn twitter">{t('blogDetailTwitter')}</button>
                  <button className="share-btn linkedin">{t('blogDetailLinkedIn')}</button>
                  <button className="share-btn email">{t('blogDetailEmail')}</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Section 3: Key Takeaways */}
      <section className="key-takeaways">
        <div className="container">
          <h2>{t('blogDetailKeyTakeaways')}</h2>
          <div className="takeaways-grid">
            {articleContent.takeaways.map((takeaway, index) => (
              <div key={index} className="takeaway-card">
                <div className="takeaway-icon">{takeaway.icon}</div>
                <h3>{takeaway.title}</h3>
                <p>{takeaway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Related Statistics */}
      <section className="article-statistics" ref={statsRef}>
        <div className="container">
          <h2>{translateCategory(article.category)} {t('blogDetailByNumbers')}</h2>
          <div className="stats-grid">
            {articleContent.stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <h3>{formatCounterValue(counters[`stat${index + 1}`], stat.number)}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Related Articles */}
      <section className="related-articles">
        <div className="container">
          <h2>{t('blogDetailRelatedArticles')}</h2>
          <div className="related-grid">
            {Object.entries(articlesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedArticle]) => {
                const relatedTranslations = getArticleTranslations(key);
                return (
                  <article key={key} className="related-card">
                    <img src={relatedArticle.featuredImage} alt={relatedTranslations.title} />
                    <div className="related-content">
                      <span className="related-category">{translateCategory(relatedArticle.category)}</span>
                      <h3>{relatedTranslations.title}</h3>
                      <p>{relatedTranslations.description}</p>
                      <a href={`/blog/${key}`} className="read-more-link">{t('blogDetailReadArticle')}</a>
                    </div>
                  </article>
                );
              })
            }
          </div>
        </div>
      </section>

      {/* Section 6: Comments & Newsletter */}
      <section className="comments-newsletter">
        <div className="container">
          <div className="comments-newsletter-grid">
            <div className="comments-section">
              <h2>{t('blogDetailLeaveComment')}</h2>
              <form className="comment-form">
                <div className="form-row">
                  <input type="text" placeholder={t('blogDetailYourName')} required />
                  <input type="email" placeholder={t('blogDetailYourEmail')} required />
                </div>
                <textarea rows="5" placeholder={t('blogDetailYourComment')} required></textarea>
                <button type="submit" className="submit-comment-btn">{t('blogDetailPostComment')}</button>
              </form>
            </div>

            <div className="newsletter-section">
              <h2>{t('blogDetailSubscribeNewsletter')}</h2>
              <p>{t('blogDetailNewsletterDesc')}</p>
              <form className="newsletter-form">
                <input type="email" placeholder={t('blogDetailEnterEmail')} required />
                <button type="submit" className="subscribe-btn">{t('blogDetailSubscribeBtn')}</button>
              </form>
              <div className="newsletter-benefits">
                <p>✓ {t('blogDetailNewsletterBenefit1')}</p>
                <p>✓ {t('blogDetailNewsletterBenefit2')}</p>
                <p>✓ {t('blogDetailNewsletterBenefit3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
