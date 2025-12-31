import { useEffect } from 'react';
import './LegalPage.css';
import AOS from 'aos';
import { useLocalization } from '../context/LocalizationContext';

export default function PrivacyPolicyPage() {
  const { t } = useLocalization();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-container">
          <p className="legal-hero-badge">{t.privacyPage.badge}</p>
          <h1 className="legal-hero-title">{t.privacyPage.title}</h1>
          <p className="legal-hero-date">{t.privacyPage.lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="legal-content-container">
          {/* Table of Contents */}
          <div className="legal-toc" data-aos="fade-up">
            <h2 className="legal-toc-title">{t.privacyPage.toc.title}</h2>
            <ul className="legal-toc-list">
              {t.privacyPage.toc.items.map((item, index) => (
                <li key={index} className="legal-toc-item">
                  <a href={`#${item.id}`} className="legal-toc-link">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Introduction */}
          <div id="introduction" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.introduction.title}</h2>
            {t.privacyPage.sections.introduction.content.map((paragraph, index) => (
              <p key={index} className="legal-text">{paragraph}</p>
            ))}
          </div>

          <div className="legal-divider"></div>

          {/* Information We Collect */}
          <div id="information-we-collect" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.informationWeCollect.title}</h2>
            {t.privacyPage.sections.informationWeCollect.subsections.map((subsection, index) => (
              <div key={index}>
                <h3 className="legal-section-subtitle">{subsection.title}</h3>
                <p className="legal-text">{subsection.text}</p>
                <ul className="legal-list">
                  {subsection.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="legal-list-item" dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="legal-divider"></div>

          {/* How We Use Your Information */}
          <div id="how-we-use" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.howWeUse.title}</h2>
            <p className="legal-text">{t.privacyPage.sections.howWeUse.text}</p>
            <ul className="legal-list">
              {t.privacyPage.sections.howWeUse.list.map((item, index) => (
                <li key={index} className="legal-list-item" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <div className="legal-highlight">
              <p className="legal-text" style={{marginBottom: 0}} dangerouslySetInnerHTML={{ __html: t.privacyPage.sections.howWeUse.highlight }} />
            </div>
          </div>

          <div className="legal-divider"></div>

          {/* Data Sharing */}
          <div id="data-sharing" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.dataSharing.title}</h2>
            <p className="legal-text">{t.privacyPage.sections.dataSharing.text}</p>
            <ul className="legal-list">
              {t.privacyPage.sections.dataSharing.list.map((item, index) => (
                <li key={index} className="legal-list-item" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="legal-text">{t.privacyPage.sections.dataSharing.footer}</p>
          </div>

          <div className="legal-divider"></div>

          {/* Data Security */}
          <div id="data-security" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.dataSecurity.title}</h2>
            <p className="legal-text">{t.privacyPage.sections.dataSecurity.text}</p>
            <ul className="legal-list">
              {t.privacyPage.sections.dataSecurity.list.map((item, index) => (
                <li key={index} className="legal-list-item">{item}</li>
              ))}
            </ul>
            <p className="legal-text">{t.privacyPage.sections.dataSecurity.footer}</p>
          </div>

          <div className="legal-divider"></div>

          {/* Your Rights */}
          <div id="your-rights" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.yourRights.title}</h2>
            <p className="legal-text">{t.privacyPage.sections.yourRights.text}</p>
            <ul className="legal-list">
              {t.privacyPage.sections.yourRights.list.map((item, index) => (
                <li key={index} className="legal-list-item" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="legal-text" dangerouslySetInnerHTML={{ __html: t.privacyPage.sections.yourRights.footer }} />
          </div>

          <div className="legal-divider"></div>

          {/* Cookies */}
          <div id="cookies" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.cookies.title}</h2>
            <p className="legal-text">{t.privacyPage.sections.cookies.text}</p>
            <ul className="legal-list">
              {t.privacyPage.sections.cookies.list.map((item, index) => (
                <li key={index} className="legal-list-item" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p className="legal-text">{t.privacyPage.sections.cookies.footer}</p>
          </div>

          <div className="legal-divider"></div>

          {/* Changes to This Policy */}
          <div id="contact" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.privacyPage.sections.changes.title}</h2>
            {t.privacyPage.sections.changes.content.map((paragraph, index) => (
              <p key={index} className="legal-text">{paragraph}</p>
            ))}
          </div>

          {/* Contact Section */}
          <div className="legal-contact" data-aos="fade-up">
            <h3 className="legal-contact-title">{t.privacyPage.contact.title}</h3>
            <p className="legal-contact-text">{t.privacyPage.contact.text}</p>
            <a href="mailto:info@f-suite.com" className="legal-contact-email">info@f-suite.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
