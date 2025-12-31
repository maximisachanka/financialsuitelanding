import { useEffect } from 'react';
import './LegalPage.css';
import AOS from 'aos';
import { useLocalization } from '../context/LocalizationContext';

export default function TermsOfServicePage() {
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

  const renderSubsection = (subsection: any, index: number) => {
    return (
      <div key={index}>
        <h3 className="legal-section-subtitle">{subsection.title}</h3>
        {subsection.text && <p className="legal-text" dangerouslySetInnerHTML={{ __html: subsection.text }} />}
        {subsection.list && (
          <ul className="legal-list">
            {subsection.list.map((item: string, itemIndex: number) => (
              <li key={itemIndex} className="legal-list-item" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        )}
        {subsection.footer && <p className="legal-text" dangerouslySetInnerHTML={{ __html: subsection.footer }} />}
      </div>
    );
  };

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-container">
          <p className="legal-hero-badge">{t.termsPage.badge}</p>
          <h1 className="legal-hero-title">{t.termsPage.title}</h1>
          <p className="legal-hero-date">{t.termsPage.lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="legal-content-container">
          {/* Table of Contents */}
          <div className="legal-toc" data-aos="fade-up">
            <h2 className="legal-toc-title">{t.termsPage.toc.title}</h2>
            <ul className="legal-toc-list">
              {t.termsPage.toc.items.map((item, index) => (
                <li key={index} className="legal-toc-item">
                  <a href={`#${item.id}`} className="legal-toc-link">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Acceptance of Terms */}
          <div id="acceptance" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.acceptance.title}</h2>
            {t.termsPage.sections.acceptance.content.map((paragraph, index) => (
              <p key={index} className="legal-text">{paragraph}</p>
            ))}
          </div>

          <div className="legal-divider"></div>

          {/* Description of Services */}
          <div id="services" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.services.title}</h2>
            <p className="legal-text">{t.termsPage.sections.services.text}</p>
            <ul className="legal-list">
              {t.termsPage.sections.services.list.map((item, index) => (
                <li key={index} className="legal-list-item">{item}</li>
              ))}
            </ul>
            <div className="legal-highlight">
              <p className="legal-text" style={{marginBottom: 0}} dangerouslySetInnerHTML={{ __html: t.termsPage.sections.services.highlight }} />
            </div>
          </div>

          <div className="legal-divider"></div>

          {/* Account Registration */}
          <div id="account" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.account.title}</h2>
            {t.termsPage.sections.account.subsections.map((subsection, index) => renderSubsection(subsection, index))}
          </div>

          <div className="legal-divider"></div>

          {/* Acceptable Use */}
          <div id="usage" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.usage.title}</h2>
            <p className="legal-text">{t.termsPage.sections.usage.text}</p>
            <ul className="legal-list">
              {t.termsPage.sections.usage.list.map((item, index) => (
                <li key={index} className="legal-list-item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="legal-divider"></div>

          {/* Intellectual Property */}
          <div id="intellectual-property" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.intellectualProperty.title}</h2>
            {t.termsPage.sections.intellectualProperty.subsections.map((subsection, index) => renderSubsection(subsection, index))}
          </div>

          <div className="legal-divider"></div>

          {/* Payment Terms */}
          <div id="payment" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.payment.title}</h2>
            {t.termsPage.sections.payment.subsections.map((subsection, index) => renderSubsection(subsection, index))}
          </div>

          <div className="legal-divider"></div>

          {/* Termination */}
          <div id="termination" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.termination.title}</h2>
            {t.termsPage.sections.termination.subsections.map((subsection, index) => renderSubsection(subsection, index))}
          </div>

          <div className="legal-divider"></div>

          {/* Disclaimers */}
          <div id="disclaimer" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.disclaimer.title}</h2>
            <div className="legal-highlight">
              <p className="legal-text" dangerouslySetInnerHTML={{ __html: t.termsPage.sections.disclaimer.highlight }} />
            </div>
            <p className="legal-text">{t.termsPage.sections.disclaimer.text}</p>
            <ul className="legal-list">
              {t.termsPage.sections.disclaimer.list.map((item, index) => (
                <li key={index} className="legal-list-item">{item}</li>
              ))}
            </ul>
            <p className="legal-text">{t.termsPage.sections.disclaimer.footer}</p>
          </div>

          <div className="legal-divider"></div>

          {/* Limitation of Liability */}
          <div id="limitation" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.limitation.title}</h2>
            <p className="legal-text">{t.termsPage.sections.limitation.text}</p>
            <ul className="legal-list">
              {t.termsPage.sections.limitation.list.map((item, index) => (
                <li key={index} className="legal-list-item">{item}</li>
              ))}
            </ul>
            <p className="legal-text">{t.termsPage.sections.limitation.footer}</p>
          </div>

          <div className="legal-divider"></div>

          {/* Governing Law */}
          <div className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.governingLaw.title}</h2>
            {t.termsPage.sections.governingLaw.content.map((paragraph, index) => (
              <p key={index} className="legal-text">{paragraph}</p>
            ))}
          </div>

          <div className="legal-divider"></div>

          {/* Changes to Terms */}
          <div className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">{t.termsPage.sections.changes.title}</h2>
            {t.termsPage.sections.changes.content.map((paragraph, index) => (
              <p key={index} className="legal-text">{paragraph}</p>
            ))}
          </div>

          {/* Contact Section */}
          <div className="legal-contact" data-aos="fade-up">
            <h3 className="legal-contact-title">{t.termsPage.contact.title}</h3>
            <p className="legal-contact-text">{t.termsPage.contact.text}</p>
            <a href="mailto:info@f-suite.com" className="legal-contact-email">info@f-suite.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
