import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations/translations';
import '../styles/Blog.css';

function Blog() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  return (
    <div className="blog-page">
      {/* Section 1: Blog Hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <span className="blog-badge">{t('blogBadge')}</span>
            <h1>{t('blogHeroTitle')}</h1>
            <p>{t('blogHeroDesc')}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Articles */}
      <section className="featured-articles">
        <div className="container">
          <div className="section-header">
            <h2>{t('blogFeaturedTitle')}</h2>
            <p>{t('blogFeaturedDesc')}</p>
          </div>
          <div className="featured-grid">
            <div className="featured-main">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop" alt="Featured Article" />
              <div className="featured-content">
                <span className="article-category">{t('blogCatSustainability')}</span>
                <h3>{t('blogFeatured1Title')}</h3>
                <p>{t('blogFeatured1Desc')}</p>
                <div className="article-meta">
                  <span className="author">{t('blogAuthorBy')} {t('blogAuthor1')}</span>
                  <span className="date">{t('blogDate1')}</span>
                  <span className="read-time">{t('blogRead1')}</span>
                </div>
              </div>
            </div>
            <div className="featured-side">
              <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" alt="Article" />
                <div className="featured-item-content">
                  <span className="article-category">{t('blogCatTechnology')}</span>
                  <h4>{t('blogFeatured2Title')}</h4>
                  <div className="article-meta">
                    <span className="date">{t('blogDate2')}</span>
                    <span className="read-time">{t('blogRead2')}</span>
                  </div>
                </div>
              </div>
              <div className="featured-item">
                <img src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400&h=300&fit=crop" alt="Article" />
                <div className="featured-item-content">
                  <span className="article-category">{t('blogCatDesign')}</span>
                  <h4>{t('blogFeatured3Title')}</h4>
                  <div className="article-meta">
                    <span className="date">{t('blogDate3')}</span>
                    <span className="read-time">{t('blogRead3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Latest Posts */}
      <section className="latest-posts">
        <div className="container">
          <div className="section-header">
            <h2>{t('blogLatestTitle')}</h2>
            <p>{t('blogLatestDesc')}</p>
          </div>
          <div className="posts-grid">
            <article className="blog-card">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" alt="Blog Post" />
              <div className="blog-card-content">
                <span className="article-category">{t('blogCatSafety')}</span>
                <h3>{t('blogPost1Title')}</h3>
                <p>{t('blogPost1Desc')}</p>
                <div className="article-meta">
                  <span className="author">{t('blogAuthorBy')} {t('blogAuthor2')}</span>
                  <span className="date">{t('blogDate4')}</span>
                </div>
                <Link to="/blog/safety-protocols" className="read-more-btn">{t('blogReadMore')}</Link>
              </div>
            </article>

            <article className="blog-card">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Blog Post" />
              <div className="blog-card-content">
                <span className="article-category">{t('blogCatInnovation')}</span>
                <h3>{t('blogPost2Title')}</h3>
                <p>{t('blogPost2Desc')}</p>
                <div className="article-meta">
                  <span className="author">{t('blogAuthorBy')} {t('blogAuthor3')}</span>
                  <span className="date">{t('blogDate5')}</span>
                </div>
                <Link to="/blog/smart-buildings" className="read-more-btn">{t('blogReadMore')}</Link>
              </div>
            </article>

            <article className="blog-card">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" alt="Blog Post" />
              <div className="blog-card-content">
                <span className="article-category">{t('blogCatProjectMgmt')}</span>
                <h3>{t('blogPost3Title')}</h3>
                <p>{t('blogPost3Desc')}</p>
                <div className="article-meta">
                  <span className="author">{t('blogAuthorBy')} {t('blogAuthor4')}</span>
                  <span className="date">{t('blogDate6')}</span>
                </div>
                <Link to="/blog/budget-management" className="read-more-btn">{t('blogReadMore')}</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 4: Categories */}
      <section className="blog-categories">
        <div className="container">
          <div className="section-header">
            <h2>{t('blogCategoriesTitle')}</h2>
            <p>{t('blogCategoriesDesc')}</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🏗️</div>
              <h3>{t('blogCatConstruction')}</h3>
              <p>{t('blogCatConstructionCount')}</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h3>{t('blogCatArchitecture')}</h3>
              <p>{t('blogCatArchitectureCount')}</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🌱</div>
              <h3>{t('blogCatSustainability')}</h3>
              <p>{t('blogCatSustainabilityCount')}</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💡</div>
              <h3>{t('blogCatInnovation')}</h3>
              <p>{t('blogCatInnovationCount')}</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3>{t('blogCatTechnology')}</h3>
              <p>{t('blogCatTechnologyCount')}</p>
            </div>
            <div className="category-card">
              <div className="category-icon">📊</div>
              <h3>{t('blogCatProjectMgmt')}</h3>
              <p>{t('blogCatProjectMgmtCount')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Expert Contributors */}
      <section className="blog-contributors">
        <div className="container">
          <div className="section-header">
            <h2>{t('blogContributorsTitle')}</h2>
            <p>{t('blogContributorsDesc')}</p>
          </div>
          <div className="contributors-grid">
            <div className="contributor-card">
              <img src="https://i.pravatar.cc/200?img=33" alt="Contributor" />
              <h3>{t('blogContributor1Name')}</h3>
              <p className="contributor-role">{t('blogContributor1Role')}</p>
              <p className="contributor-bio">{t('blogContributor1Bio')}</p>
              <div className="contributor-stats">
                <span>{t('blogContributor1Articles')}</span>
                <span>{t('blogContributor1Reads')}</span>
              </div>
            </div>

            <div className="contributor-card">
              <img src="https://i.pravatar.cc/200?img=47" alt="Contributor" />
              <h3>{t('blogContributor2Name')}</h3>
              <p className="contributor-role">{t('blogContributor2Role')}</p>
              <p className="contributor-bio">{t('blogContributor2Bio')}</p>
              <div className="contributor-stats">
                <span>{t('blogContributor2Articles')}</span>
                <span>{t('blogContributor2Reads')}</span>
              </div>
            </div>

            <div className="contributor-card">
              <img src="https://i.pravatar.cc/200?img=68" alt="Contributor" />
              <h3>{t('blogContributor3Name')}</h3>
              <p className="contributor-role">{t('blogContributor3Role')}</p>
              <p className="contributor-bio">{t('blogContributor3Bio')}</p>
              <div className="contributor-stats">
                <span>{t('blogContributor3Articles')}</span>
                <span>{t('blogContributor3Reads')}</span>
              </div>
            </div>

            <div className="contributor-card">
              <img src="https://i.pravatar.cc/200?img=52" alt="Contributor" />
              <h3>{t('blogContributor4Name')}</h3>
              <p className="contributor-role">{t('blogContributor4Role')}</p>
              <p className="contributor-bio">{t('blogContributor4Bio')}</p>
              <div className="contributor-stats">
                <span>{t('blogContributor4Articles')}</span>
                <span>{t('blogContributor4Reads')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Newsletter Subscription */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>{t('blogNewsletterTitle')}</h2>
              <p>{t('blogNewsletterDesc')}</p>
              <ul className="newsletter-benefits">
                <li>{t('blogNewsBenefit1')}</li>
                <li>{t('blogNewsBenefit2')}</li>
                <li>{t('blogNewsBenefit3')}</li>
                <li>{t('blogNewsBenefit4')}</li>
              </ul>
            </div>
            <div className="newsletter-form">
              <form>
                <input type="text" placeholder={t('blogNewsName')} required />
                <input type="email" placeholder={t('blogNewsEmail')} required />
                <select>
                  <option value="">{t('blogNewsInterest')}</option>
                  <option value="construction">{t('blogNewsConstruction')}</option>
                  <option value="architecture">{t('blogNewsArchitecture')}</option>
                  <option value="sustainability">{t('blogNewsSustainability')}</option>
                  <option value="technology">{t('blogNewsTechnology')}</option>
                  <option value="all">{t('blogNewsAllTopics')}</option>
                </select>
                <button type="submit" className="subscribe-btn">{t('blogNewsSubscribe')}</button>
              </form>
              <p className="privacy-note">{t('blogNewsPrivacy')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
