import { useEffect } from 'react';
import './LegalPage.css';
import AOS from 'aos';

export default function PrivacyPolicyPage() {
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
          <p className="legal-hero-badge">Legal</p>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-date">Last updated: December 31, 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="legal-content">
        <div className="legal-content-container">
          {/* Table of Contents */}
          <div className="legal-toc" data-aos="fade-up">
            <h2 className="legal-toc-title">Table of Contents</h2>
            <ul className="legal-toc-list">
              <li className="legal-toc-item"><a href="#introduction" className="legal-toc-link">1. Introduction</a></li>
              <li className="legal-toc-item"><a href="#information-we-collect" className="legal-toc-link">2. Information We Collect</a></li>
              <li className="legal-toc-item"><a href="#how-we-use" className="legal-toc-link">3. How We Use Your Information</a></li>
              <li className="legal-toc-item"><a href="#data-sharing" className="legal-toc-link">4. Data Sharing and Disclosure</a></li>
              <li className="legal-toc-item"><a href="#data-security" className="legal-toc-link">5. Data Security</a></li>
              <li className="legal-toc-item"><a href="#your-rights" className="legal-toc-link">6. Your Rights</a></li>
              <li className="legal-toc-item"><a href="#cookies" className="legal-toc-link">7. Cookies and Tracking</a></li>
              <li className="legal-toc-item"><a href="#contact" className="legal-toc-link">8. Contact Us</a></li>
            </ul>
          </div>

          {/* Introduction */}
          <div id="introduction" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">1. Introduction</h2>
            <p className="legal-text">
              Welcome to Financial Suite ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered financial optimization platform.
            </p>
            <p className="legal-text">
              By using Financial Suite, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Information We Collect */}
          <div id="information-we-collect" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">2. Information We Collect</h2>

            <h3 className="legal-section-subtitle">2.1 Information You Provide</h3>
            <p className="legal-text">We collect information that you voluntarily provide when using our services:</p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Account Information:</strong> Name, email address, company name, and contact details</li>
              <li className="legal-list-item"><strong>Financial Data:</strong> Profit & Loss statements, bank transaction data, and expense reports</li>
              <li className="legal-list-item"><strong>Communication Data:</strong> Messages, feedback, and support requests</li>
            </ul>

            <h3 className="legal-section-subtitle">2.2 Automatically Collected Information</h3>
            <p className="legal-text">We automatically collect certain information when you use our platform:</p>
            <ul className="legal-list">
              <li className="legal-list-item">Device information (browser type, operating system)</li>
              <li className="legal-list-item">Usage data (pages visited, features used, time spent)</li>
              <li className="legal-list-item">IP address and location data</li>
              <li className="legal-list-item">Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className="legal-divider"></div>

          {/* How We Use Your Information */}
          <div id="how-we-use" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">3. How We Use Your Information</h2>
            <p className="legal-text">We use your information for the following purposes:</p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Service Delivery:</strong> To provide, maintain, and improve our AI-powered financial optimization services</li>
              <li className="legal-list-item"><strong>Analysis:</strong> To analyze your financial data and provide cost-saving recommendations</li>
              <li className="legal-list-item"><strong>Communication:</strong> To send you updates, notifications, and respond to your inquiries</li>
              <li className="legal-list-item"><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
              <li className="legal-list-item"><strong>Improvement:</strong> To understand how our services are used and improve user experience</li>
              <li className="legal-list-item"><strong>Compliance:</strong> To comply with legal obligations and protect our rights</li>
            </ul>

            <div className="legal-highlight">
              <p className="legal-text" style={{marginBottom: 0}}>
                <strong>Important:</strong> We use AI and machine learning to analyze your financial data. All processing is done securely, and your data is never shared with third parties for marketing purposes.
              </p>
            </div>
          </div>

          <div className="legal-divider"></div>

          {/* Data Sharing */}
          <div id="data-sharing" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">4. Data Sharing and Disclosure</h2>
            <p className="legal-text">We may share your information in the following circumstances:</p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform (e.g., cloud hosting, analytics)</li>
              <li className="legal-list-item"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li className="legal-list-item"><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li className="legal-list-item"><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
            <p className="legal-text">
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Data Security */}
          <div id="data-security" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">5. Data Security</h2>
            <p className="legal-text">
              We implement enterprise-grade security measures to protect your information:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">End-to-end encryption for data transmission</li>
              <li className="legal-list-item">Encrypted storage on secure servers</li>
              <li className="legal-list-item">Regular security audits and penetration testing</li>
              <li className="legal-list-item">Access controls and authentication mechanisms</li>
              <li className="legal-list-item">Employee training on data protection</li>
            </ul>
            <p className="legal-text">
              While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Your Rights */}
          <div id="your-rights" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">6. Your Rights</h2>
            <p className="legal-text">Depending on your location, you may have the following rights:</p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Access:</strong> Request access to your personal information</li>
              <li className="legal-list-item"><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li className="legal-list-item"><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li className="legal-list-item"><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li className="legal-list-item"><strong>Objection:</strong> Object to processing of your personal information</li>
              <li className="legal-list-item"><strong>Withdrawal:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="legal-text">
              To exercise these rights, please contact us at <a href="mailto:info@f-suite.com" className="legal-link">info@f-suite.com</a>
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Cookies */}
          <div id="cookies" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">7. Cookies and Tracking Technologies</h2>
            <p className="legal-text">
              We use cookies and similar tracking technologies to enhance your experience:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item"><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
              <li className="legal-list-item"><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
              <li className="legal-list-item"><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="legal-text">
              You can control cookies through your browser settings. Note that disabling cookies may affect platform functionality.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Contact */}
          <div id="contact" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">8. Changes to This Policy</h2>
            <p className="legal-text">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
            <p className="legal-text">
              We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact Section */}
          <div className="legal-contact" data-aos="fade-up">
            <h3 className="legal-contact-title">Questions or Concerns?</h3>
            <p className="legal-contact-text">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <a href="mailto:info@f-suite.com" className="legal-contact-email">info@f-suite.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
