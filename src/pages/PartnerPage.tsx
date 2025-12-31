import { useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import './PartnerPage.css';
import AOS from 'aos';

// Hero Section with Form
function HeroWithForm() {
  const { t } = useLocalization();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted! We will contact you soon.');
  };

  return (
    <section className="partner-hero">
      <div className="partner-hero-container">
        <div className="partner-hero-content">
          <p className="partner-hero-badge">{t.partnerPage.hero.badge}</p>
          <h1 className="partner-hero-title">{t.partnerPage.hero.title}</h1>
          <p className="partner-hero-subtitle">{t.partnerPage.hero.subtitle}</p>
        </div>
      </div>
    </section>
  );
}

// CTA Section with Form
function CTASection() {
  const { t } = useLocalization();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted! We will contact you soon.');
  };

  return (
    <section className="partner-cta" id="partner-form">
      <div className="partner-cta-container">
        <div className="partner-cta-header" data-aos="fade-up">
          <p className="partner-cta-badge">{t.partnerPage.cta.badge}</p>
          <h2 className="partner-cta-title">{t.partnerPage.cta.title}</h2>
          <p className="partner-cta-subtitle">{t.partnerPage.cta.subtitle}</p>
        </div>

        <div className="partner-form-container" data-aos="fade-up">
          <form className="partner-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="partner-form-input"
              placeholder={t.partnerPage.cta.form.name}
              required
            />
            <input
              type="email"
              className="partner-form-input"
              placeholder={t.partnerPage.cta.form.email}
              required
            />
            <input
              type="text"
              className="partner-form-input"
              placeholder={t.partnerPage.cta.form.company}
              required
            />
            <input
              type="tel"
              className="partner-form-input"
              placeholder={t.partnerPage.cta.form.phone}
            />
            <textarea
              className="partner-form-textarea"
              placeholder={t.partnerPage.cta.form.message}
              rows={4}
            ></textarea>
            <button type="submit" className="partner-form-submit">
              {t.partnerPage.cta.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Main Partner Page Component
export default function PartnerPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partner-page">
      <HeroWithForm />
      <CTASection />
    </div>
  );
}
