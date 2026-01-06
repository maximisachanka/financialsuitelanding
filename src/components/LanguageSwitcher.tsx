import { useState, useRef, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Language as LanguageType } from '../locales';
import { en } from '../locales/en';
import { ru } from '../locales/ru';
import { pl } from '../locales/pl';
import './LanguageSwitcher.css';
import { useAlert } from '../context/AlertContext';

interface Language {
  code: LanguageType;
  name: string;
  shortName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', shortName: 'EN' },
  { code: 'ru', name: 'Русский', shortName: 'РУ' },
  { code: 'pl', name: 'Polski', shortName: 'PL' }
];

// SVG флаги
const FlagIcon = ({ code }: { code: string }) => {
  switch (code) {
    case 'en':
      return (
        <svg viewBox="0 0 32 32" className="flag-icon">
          <rect width="32" height="32" fill="#012169"/>
          <path d="M0 0L32 32M32 0L0 32" stroke="#FFF" strokeWidth="4"/>
          <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2.5"/>
          <path d="M16 0V32M0 16H32" stroke="#FFF" strokeWidth="6"/>
          <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="3.5"/>
        </svg>
      );
    case 'ru':
      return (
        <svg viewBox="0 0 32 32" className="flag-icon">
          <rect width="32" height="10.67" fill="#FFF"/>
          <rect y="10.67" width="32" height="10.67" fill="#0039A6"/>
          <rect y="21.33" width="32" height="10.67" fill="#D52B1E"/>
        </svg>
      );
    case 'pl':
      return (
        <svg viewBox="0 0 32 32" className="flag-icon">
          <rect width="32" height="16" fill="#FFF"/>
          <rect y="16" width="32" height="16" fill="#DC143C"/>
        </svg>
      );
    default:
      return null;
  }
};

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLocalization();
  const { showAlert } = useAlert();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    if (lang.code !== language) {
      // Get translation from NEW language directly
      const translations = { en, ru, pl };
      const newLanguageTranslation = translations[lang.code];

      setLanguage(lang.code);
      // Show alert with new language message
      setTimeout(() => {
        showAlert('info', newLanguageTranslation.alerts.languageChanged);
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        title={currentLanguage.name}
      >
        <span className="language-switcher__flag-circle">
          <FlagIcon code={currentLanguage.code} />
        </span>
        <span className="language-switcher__lang-name">{currentLanguage.name}</span>
        <svg
          className={`language-switcher__arrow ${isOpen ? 'language-switcher__arrow--open' : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="language-switcher__dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher__option ${
                currentLanguage.code === lang.code ? 'language-switcher__option--active' : ''
              }`}
              onClick={() => handleLanguageChange(lang)}
            >
              <span className="language-switcher__flag-circle language-switcher__flag-circle--dropdown">
                <FlagIcon code={lang.code} />
              </span>
              <span className="language-switcher__option-name">{lang.name}</span>
              {currentLanguage.code === lang.code && (
                <svg className="language-switcher__check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="#5a7ff8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
