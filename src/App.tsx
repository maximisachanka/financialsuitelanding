import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { SplashScreen } from './components/SplashScreen';
import { useLocalization } from './context/LocalizationContext';
import './components/BurgerMenu.css';
import './components/Header.css';
import HomePage from './pages/HomePage';
import PartnerPage from './pages/PartnerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ScrollToTop from './components/ScrollToTop';
import img128X1281 from "figma:asset/fb623f6b059b888cf4155f7c95166d688f80915a.png";
import svgPaths from "./imports/svg-cogyjin2po";

// Header Component
function Header() {
  const { t } = useLocalization();

  return (
    <header className="w-full px-4 sm:px-8 lg:px-[154px] py-6 lg:py-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-3">
          <img alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" src={img128X1281} />
          <p className="font-bold text-lg sm:text-xl lg:text-2xl text-[#5a7ff8]">FinancialSuite</p>
        </Link>

        {/* Desktop Navigation - controlled by CSS based on language */}
        <nav className="items-center gap-8 lg:gap-14">
          <a href="#why-us" className="font-bold text-sm lg:text-base text-black hover:text-[#5a7ff8] transition-colors">{t.header.nav.whyUs}</a>
          <a href="#how-it-works" className="font-bold text-sm lg:text-base text-black hover:text-[#5a7ff8] transition-colors">{t.header.nav.howItWorks}</a>
          <a href="#faq" className="font-bold text-sm lg:text-base text-black hover:text-[#5a7ff8] transition-colors">{t.header.nav.faq}</a>
          <LanguageSwitcher />
          <a href="#demo-form" className="border-2 border-[#5a7ff8] text-[#5a7ff8] font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm hover:bg-[#5a7ff8] hover:text-white transition-colors">
            {t.header.nav.tryDemo}
          </a>
        </nav>

        {/* Burger Menu for Mobile */}
        <input type="checkbox" id="burger-menu-toggle" className="burger-menu-checkbox" />

        <label htmlFor="burger-menu-toggle" className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <label htmlFor="burger-menu-toggle" className="menu-overlay"></label>

        <div className="mobile-menu">
          <nav>
            <label htmlFor="burger-menu-toggle">
              <a href="#why-us">{t.header.nav.whyUs}</a>
            </label>
            <label htmlFor="burger-menu-toggle">
              <a href="#how-it-works">{t.header.nav.howItWorks}</a>
            </label>
            <label htmlFor="burger-menu-toggle">
              <a href="#faq">{t.header.nav.faq}</a>
            </label>
          </nav>
          <label htmlFor="burger-menu-toggle">
            <a href="#demo-form" className="mobile-menu-button">
              {t.header.nav.tryDemo}
            </a>
          </label>
          <div className="language-switcher-wrapper">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer
function Footer() {
  const { t } = useLocalization();

  return (
    <footer className="w-full px-4 sm:px-8 lg:px-[115px] py-12 sm:py-16 bg-[#f9fafd]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" src={img128X1281} />
              <p className="font-bold text-xl sm:text-2xl text-[#5a7ff8]">FinancialSuite</p>
            </Link>
            <p className="font-medium text-sm sm:text-base lg:text-xl text-[rgba(36,54,94,0.4)]">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 hover:scale-110 transform transition-all duration-300 hover:bg-[#5a7ff8]/10 rounded-full">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48">
                  <path d={svgPaths.paf75a00} stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                  <path d={svgPaths.p3dfecf70} stroke="#5A7FF8" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-80 hover:scale-110 transform transition-all duration-300 hover:bg-[#5a7ff8]/10 rounded-full">
                <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
                  <path clipRule="evenodd" d={svgPaths.p242e9e00} fill="#5A7FF8" fillRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-80 hover:scale-110 transform transition-all duration-300 hover:bg-[#5a7ff8]/10 rounded-full">
                <svg className="w-full h-full" fill="none" viewBox="0 0 36 36">
                  <path d={svgPaths.pef95200} fill="#5A7FF8" />
                  <path d={svgPaths.p2a6c7600} fill="#5A7FF8" />
                  <path d={svgPaths.p10ee8380} fill="#5A7FF8" />
                  <path clipRule="evenodd" d={svgPaths.p33e89940} fill="#5A7FF8" fillRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">{t.footer.legal.title}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e] hover:text-[#5a7ff8] transition-colors">{t.footer.legal.privacy}</Link></li>
              <li><Link to="/terms-of-service" className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e] hover:text-[#5a7ff8] transition-colors">{t.footer.legal.terms}</Link></li>
            </ul>
          </div>

          {/* Partnership */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">{t.footer.partnership.title}</h3>
            <ul className="space-y-2">
              <li><Link to="/partner" className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e] hover:text-[#5a7ff8] transition-colors">{t.footer.partnership.become}</Link></li>
            </ul>

            <div className="pt-6 space-y-3">
              <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">{t.footer.partnership.why}</h4>
              <ul className="space-y-2">
                {t.footer.partnership.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12L10 17L20 7" stroke="#5A7FF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How it works */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">{t.footer.howItWorks.title}</h3>
            <ul className="space-y-3">
              {t.footer.howItWorks.steps.map((step, i) => (
                <li key={i} className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">
                  <span className="font-semibold text-[#5a7ff8]">{step.number}</span>
                  <span className="text-[rgba(36,54,94,0.4)]"> {step.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="font-bold text-xl sm:text-2xl text-black">{t.footer.cta.title}</h3>
              <p className="font-medium text-sm sm:text-base lg:text-xl text-[#24365e]">
                {t.footer.cta.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl sm:text-2xl text-black">{t.footer.cta.joinTitle}</h4>
              <form className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder={t.footer.cta.form.name}
                  className="w-full px-4 py-3 border border-black/40 rounded-2xl text-sm sm:text-base bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60"
                />
                <input
                  type="email"
                  placeholder={t.footer.cta.form.email}
                  className="w-full px-4 py-3 border border-black/40 rounded-2xl text-sm sm:text-base bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60"
                />
                <input
                  type="text"
                  placeholder={t.footer.cta.form.company}
                  className="w-full px-4 py-3 border border-black/40 rounded-2xl text-sm sm:text-base bg-white focus:border-[#5a7ff8] focus:ring-2 focus:ring-[#5a7ff8]/20 focus:outline-none transition-all duration-300 hover:border-[#5a7ff8]/60"
                />
                <button className="bg-[#5a7ff8] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#4968d4] hover:shadow-[0_8px_20px_rgba(90,127,248,0.4)] hover:scale-105 transform transition-all duration-300 shadow-md flex items-center justify-center">
                  {t.footer.cta.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  const { isLanguageLoaded } = useLocalization();
  const [showSplash, setShowSplash] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  // Minimum splash screen time: 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Hide splash screen when both conditions are met:
  // 1. Language is loaded
  // 2. Minimum time (2s) has elapsed
  useEffect(() => {
    if (isLanguageLoaded && minTimeElapsed) {
      // Add a small delay for smooth fade-out animation
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLanguageLoaded, minTimeElapsed]);

  return (
    <>
      {showSplash && <SplashScreen isLoaded={isLanguageLoaded} />}
      <div className="bg-white min-h-screen w-full overflow-x-hidden scroll-smooth">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
