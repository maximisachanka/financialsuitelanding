import { useEffect } from 'react';
import './LegalPage.css';
import AOS from 'aos';

export default function TermsOfServicePage() {
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
          <h1 className="legal-hero-title">Terms of Service</h1>
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
              <li className="legal-toc-item"><a href="#acceptance" className="legal-toc-link">1. Acceptance of Terms</a></li>
              <li className="legal-toc-item"><a href="#services" className="legal-toc-link">2. Description of Services</a></li>
              <li className="legal-toc-item"><a href="#account" className="legal-toc-link">3. Account Registration</a></li>
              <li className="legal-toc-item"><a href="#usage" className="legal-toc-link">4. Acceptable Use</a></li>
              <li className="legal-toc-item"><a href="#intellectual-property" className="legal-toc-link">5. Intellectual Property</a></li>
              <li className="legal-toc-item"><a href="#payment" className="legal-toc-link">6. Payment Terms</a></li>
              <li className="legal-toc-item"><a href="#termination" className="legal-toc-link">7. Termination</a></li>
              <li className="legal-toc-item"><a href="#disclaimer" className="legal-toc-link">8. Disclaimers</a></li>
              <li className="legal-toc-item"><a href="#limitation" className="legal-toc-link">9. Limitation of Liability</a></li>
              <li className="legal-toc-item"><a href="#contact" className="legal-toc-link">10. Contact Information</a></li>
            </ul>
          </div>

          {/* Acceptance of Terms */}
          <div id="acceptance" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">1. Acceptance of Terms</h2>
            <p className="legal-text">
              By accessing and using Financial Suite ("Service", "Platform", "we", "us", or "our"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
            <p className="legal-text">
              We reserve the right to modify these Terms at any time. Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Description of Services */}
          <div id="services" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">2. Description of Services</h2>
            <p className="legal-text">
              Financial Suite provides an AI-powered financial optimization platform designed to:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Analyze Profit & Loss statements and bank transactions</li>
              <li className="legal-list-item">Identify cost-saving opportunities in fixed expenses</li>
              <li className="legal-list-item">Provide vendor alternatives and recommendations</li>
              <li className="legal-list-item">Generate actionable financial reports and insights</li>
            </ul>
            <div className="legal-highlight">
              <p className="legal-text" style={{marginBottom: 0}}>
                <strong>Service Availability:</strong> We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance.
              </p>
            </div>
          </div>

          <div className="legal-divider"></div>

          {/* Account Registration */}
          <div id="account" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">3. Account Registration and Security</h2>

            <h3 className="legal-section-subtitle">3.1 Account Creation</h3>
            <p className="legal-text">To use our Service, you must:</p>
            <ul className="legal-list">
              <li className="legal-list-item">Provide accurate and complete registration information</li>
              <li className="legal-list-item">Maintain and update your information as needed</li>
              <li className="legal-list-item">Be at least 18 years old or have parental consent</li>
              <li className="legal-list-item">Have the authority to bind your organization (if applicable)</li>
            </ul>

            <h3 className="legal-section-subtitle">3.2 Account Security</h3>
            <p className="legal-text">You are responsible for:</p>
            <ul className="legal-list">
              <li className="legal-list-item">Maintaining the confidentiality of your account credentials</li>
              <li className="legal-list-item">All activities that occur under your account</li>
              <li className="legal-list-item">Notifying us immediately of any unauthorized access</li>
            </ul>
          </div>

          <div className="legal-divider"></div>

          {/* Acceptable Use */}
          <div id="usage" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">4. Acceptable Use Policy</h2>
            <p className="legal-text">You agree NOT to:</p>
            <ul className="legal-list">
              <li className="legal-list-item">Violate any applicable laws or regulations</li>
              <li className="legal-list-item">Infringe on intellectual property rights</li>
              <li className="legal-list-item">Upload malicious code, viruses, or harmful software</li>
              <li className="legal-list-item">Attempt to gain unauthorized access to our systems</li>
              <li className="legal-list-item">Interfere with or disrupt the Service</li>
              <li className="legal-list-item">Use the Service for illegal or fraudulent purposes</li>
              <li className="legal-list-item">Reverse engineer or attempt to extract source code</li>
              <li className="legal-list-item">Share your account with unauthorized users</li>
            </ul>
          </div>

          <div className="legal-divider"></div>

          {/* Intellectual Property */}
          <div id="intellectual-property" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">5. Intellectual Property Rights</h2>

            <h3 className="legal-section-subtitle">5.1 Our Content</h3>
            <p className="legal-text">
              The Service, including all content, features, and functionality (including but not limited to software, text, images, and logos) is owned by Financial Suite and protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="legal-section-subtitle">5.2 Your Content</h3>
            <p className="legal-text">
              You retain ownership of any data and content you upload to the Service ("Your Content"). By uploading Your Content, you grant us a limited license to:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Process and analyze Your Content to provide the Service</li>
              <li className="legal-list-item">Store Your Content on our secure servers</li>
              <li className="legal-list-item">Create aggregated, anonymized data for service improvement</li>
            </ul>
            <p className="legal-text">
              We will never share Your Content with third parties without your explicit consent.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Payment Terms */}
          <div id="payment" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">6. Payment Terms</h2>

            <h3 className="legal-section-subtitle">6.1 Pricing</h3>
            <p className="legal-text">
              Pricing for our Service is based on your company's size and needs. You will receive a custom quote after completing a demo.
            </p>

            <h3 className="legal-section-subtitle">6.2 Billing</h3>
            <ul className="legal-list">
              <li className="legal-list-item">Fees are billed in advance on a subscription basis</li>
              <li className="legal-list-item">All fees are non-refundable unless otherwise stated</li>
              <li className="legal-list-item">Failure to pay may result in service suspension</li>
              <li className="legal-list-item">Price changes will be communicated 30 days in advance</li>
            </ul>
          </div>

          <div className="legal-divider"></div>

          {/* Termination */}
          <div id="termination" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">7. Termination</h2>

            <h3 className="legal-section-subtitle">7.1 By You</h3>
            <p className="legal-text">
              You may terminate your account at any time by contacting us at <a href="mailto:info@f-suite.com" className="legal-link">info@f-suite.com</a>. Upon termination, you will lose access to your account and data.
            </p>

            <h3 className="legal-section-subtitle">7.2 By Us</h3>
            <p className="legal-text">
              We may suspend or terminate your account if you:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Violate these Terms of Service</li>
              <li className="legal-list-item">Fail to pay required fees</li>
              <li className="legal-list-item">Engage in fraudulent or illegal activity</li>
              <li className="legal-list-item">Pose a security risk to our Service</li>
            </ul>
          </div>

          <div className="legal-divider"></div>

          {/* Disclaimers */}
          <div id="disclaimer" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">8. Disclaimers and Warranties</h2>
            <div className="legal-highlight">
              <p className="legal-text">
                <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
              </p>
            </div>
            <p className="legal-text">
              We do not warrant that:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">The Service will be uninterrupted or error-free</li>
              <li className="legal-list-item">The results obtained will be accurate or reliable</li>
              <li className="legal-list-item">All errors will be corrected</li>
            </ul>
            <p className="legal-text">
              Financial recommendations provided by our AI are for informational purposes only and should not be considered as professional financial advice. Always consult with qualified financial advisors before making significant business decisions.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Limitation of Liability */}
          <div id="limitation" className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">9. Limitation of Liability</h2>
            <p className="legal-text">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FINANCIAL SUITE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="legal-list">
              <li className="legal-list-item">Loss of profits, revenue, or data</li>
              <li className="legal-list-item">Business interruption</li>
              <li className="legal-list-item">Loss of goodwill or reputation</li>
              <li className="legal-list-item">Cost of substitute services</li>
            </ul>
            <p className="legal-text">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Governing Law */}
          <div className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">10. Governing Law and Disputes</h2>
            <p className="legal-text">
              These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or the Service shall be resolved through binding arbitration.
            </p>
          </div>

          <div className="legal-divider"></div>

          {/* Changes to Terms */}
          <div className="legal-section" data-aos="fade-up">
            <h2 className="legal-section-title">11. Changes to Terms</h2>
            <p className="legal-text">
              We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through the Service. Your continued use after changes constitutes acceptance.
            </p>
          </div>

          {/* Contact Section */}
          <div className="legal-contact" data-aos="fade-up">
            <h3 className="legal-contact-title">Questions About These Terms?</h3>
            <p className="legal-contact-text">
              If you have any questions or concerns about these Terms of Service, please contact us:
            </p>
            <a href="mailto:info@f-suite.com" className="legal-contact-email">info@f-suite.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
