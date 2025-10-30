import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';

function About() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const [counters, setCounters] = useState({
    projects: 1,
    awards: 0,
    years: 0,
    satisfaction: 10
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const currentRef = statsRef.current;
    
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 7000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      projects: 500,
      awards: 50,
      years: 25,
      satisfaction: 98
    };

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targets.projects * progress),
        awards: Math.floor(targets.awards * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };
  return (
    <div className="about-page">
      {/* Section 1: About Hero */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <span className="about-badge">{t('aboutBadge')}</span>
            <h1>{t('aboutHeroTitle')}</h1>
            <p>{t('aboutHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="about-story" id="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-subtitle">{t('aboutOurJourney')}</span>
              <h2>{t('aboutStoryTitle')}</h2>
              <p>{t('aboutStoryPara1')}</p>
              <p>{t('aboutStoryPara2')}</p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <div>
                    <h4>{t('aboutAwardWinning')}</h4>
                    <p>{t('aboutAwardDesc')}</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌟</div>
                  <div>
                    <h4>{t('aboutCertifiedExcellence')}</h4>
                    <p>{t('aboutCertifiedDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=700&fit=crop" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Mission & Vision */}
      <section className="about-mission" id="mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>{t('aboutOurMission')}</h3>
              <p>{t('aboutMissionDesc')}</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>{t('aboutOurVision')}</h3>
              <p>{t('aboutVisionDesc')}</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>{t('aboutOurValues')}</h3>
              <p>{t('aboutValuesDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Team */}
      <section className="about-team" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('aboutLeadershipTeam')}</span>
            <h2>{t('aboutMeetExperts')}</h2>
            <p>{t('aboutTeamDesc')}</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://i.pravatar.cc/400?img=12" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>{t('aboutRichardThompson')}</h3>
                <p className="team-role">{t('aboutCEO')}</p>
                <p className="team-bio">{t('aboutCEOBio')}</p>
                <div className="team-social">
                  <a href="#linkedin">in</a>
                  <a href="#twitter">𝕏</a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://i.pravatar.cc/400?img=47" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>{t('aboutAmandaFoster')}</h3>
                <p className="team-role">{t('aboutChiefArchitect')}</p>
                <p className="team-bio">{t('aboutArchitectBio')}</p>
                <div className="team-social">
                  <a href="#linkedin">in</a>
                  <a href="#twitter">𝕏</a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://i.pravatar.cc/400?img=33" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>{t('aboutDavidChen')}</h3>
                <p className="team-role">{t('aboutDirectorEngineering')}</p>
                <p className="team-bio">{t('aboutEngineeringBio')}</p>
                <div className="team-social">
                  <a href="#linkedin">in</a>
                  <a href="#twitter">𝕏</a>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://i.pravatar.cc/400?img=20" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>{t('aboutLisaMartinez')}</h3>
                <p className="team-role">{t('aboutOperationsDirector')}</p>
                <p className="team-bio">{t('aboutOperationsBio')}</p>
                <div className="team-social">
                  <a href="#linkedin">in</a>
                  <a href="#twitter">𝕏</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Achievements */}
      <section className="about-achievements" id="achievements">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">{t('aboutRecognition')}</span>
            <h2>{t('aboutAwardsTitle')}</h2>
            <p>{t('aboutAwardsDesc')}</p>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-year">2024</div>
              <h3>{t('aboutAward1Title')}</h3>
              <p>{t('aboutAward1Org')}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2023</div>
              <h3>{t('aboutAward2Title')}</h3>
              <p>{t('aboutAward2Org')}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2023</div>
              <h3>{t('aboutAward3Title')}</h3>
              <p>{t('aboutAward3Org')}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2022</div>
              <h3>{t('aboutAward4Title')}</h3>
              <p>{t('aboutAward4Org')}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2022</div>
              <h3>{t('aboutAward5Title')}</h3>
              <p>{t('aboutAward5Org')}</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-year">2021</div>
              <h3>{t('aboutAward6Title')}</h3>
              <p>{t('aboutAward6Org')}</p>
            </div>
          </div>
          <div className="stats-row" ref={statsRef}>
            <div className="stat-box">
              <h3>{counters.projects}+</h3>
              <p>{t('aboutCompletedProjects')}</p>
            </div>
            <div className="stat-box">
              <h3>{counters.awards}+</h3>
              <p>{t('aboutIndustryAwards')}</p>
            </div>
            <div className="stat-box">
              <h3>{counters.years}+</h3>
              <p>{t('aboutYearsExperience')}</p>
            </div>
            <div className="stat-box">
              <h3>{counters.satisfaction}%</h3>
              <p>{t('aboutClientSatisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Join Our Team */}
      <section className="about-careers" id="careers">
        <div className="container">
          <div className="careers-content">
            <div className="careers-text">
              <span className="section-subtitle">{t('aboutCareers')}</span>
              <h2>{t('aboutJoinTeam')}</h2>
              <p>{t('aboutCareersDesc')}</p>
              <div className="careers-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">💼</span>
                  <h4>{t('aboutCompetitiveComp')}</h4>
                  <p>{t('aboutCompetitiveDesc')}</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📚</span>
                  <h4>{t('aboutProfessionalDev')}</h4>
                  <p>{t('aboutProfessionalDesc')}</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🏥</span>
                  <h4>{t('aboutHealthWellness')}</h4>
                  <p>{t('aboutHealthDesc')}</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">⚖️</span>
                  <h4>{t('aboutWorkLifeBalance')}</h4>
                  <p>{t('aboutWorkLifeDesc')}</p>
                </div>
              </div>
              <button className="btn-careers">{t('aboutViewPositions')}</button>
            </div>
            <div className="careers-image">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=700&fit=crop" alt="Team Work" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
