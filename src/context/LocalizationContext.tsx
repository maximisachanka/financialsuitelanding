import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations, Language } from '../locales';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const STORAGE_VERSION = '2.0'; // Updated to IP-based language detection
const STORAGE_KEY_VERSION = 'languageStorageVersion';
const STORAGE_KEY_MODE = 'languageSelectionMode'; // 'manual' or 'auto'
const STORAGE_KEY_LANGUAGE = 'selectedLanguage';

// Function to get user's country code by IP
async function getCountryByIP(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const countryCode = data.country_code;

    return countryCode;
  } catch (error) {
    return null;
  }
}

// Function to get language by user's location (IP-based)
function getLanguageByLocation(countryCode: string | null): Language {
  if (!countryCode) {
    return 'en';
  }

  const countryUpper = countryCode.toUpperCase();

  // Poland → Polish
  if (countryUpper === 'PL') {
    return 'pl';
  }

  // Russia, Belarus, Ukraine → Russian
  if (countryUpper === 'RU' || countryUpper === 'BY' || countryUpper === 'UA') {
    return 'ru';
  }

  // All other countries → English
  return 'en';
}

// Function to clear old storage if version changed
function checkAndClearOldStorage() {
  const storedVersion = localStorage.getItem(STORAGE_KEY_VERSION);
  if (storedVersion !== STORAGE_VERSION) {
    localStorage.removeItem('preferredLanguage');
    localStorage.removeItem('languageManuallySelected');
    localStorage.removeItem('detectedBrowserLanguage');
    localStorage.removeItem(STORAGE_KEY_MODE);
    localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    localStorage.setItem(STORAGE_KEY_VERSION, STORAGE_VERSION);
  }
}

// Supported languages
const SUPPORTED_LANGUAGES: Language[] = ['en', 'ru', 'pl'];

// Function to validate if language is supported
function isValidLanguage(lang: any): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang);
}

// Function to detect user's preferred language based on location
async function detectUserLanguage(): Promise<Language> {
  checkAndClearOldStorage();

  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;

  // If user manually selected a language, validate and use it
  if (mode === 'manual' && savedLanguage) {
    if (isValidLanguage(savedLanguage)) {
      return savedLanguage;
    } else {
      localStorage.removeItem(STORAGE_KEY_MODE);
      localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    }
  }

  // Get language based on user's location (IP)
  const countryCode = await getCountryByIP();
  const locationLang = getLanguageByLocation(countryCode);

  localStorage.setItem(STORAGE_KEY_MODE, 'auto');
  localStorage.setItem(STORAGE_KEY_LANGUAGE, locationLang);
  return locationLang;
}

export function LocalizationProvider({ children }: { children: ReactNode }) {
  // Start with a default language (will be updated by detectUserLanguage)
  const [language, setLanguageState] = useState<Language>('en');
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  // Detect language on mount
  useEffect(() => {
    detectUserLanguage().then(detectedLang => {
      setLanguageState(detectedLang);
      setIsLanguageLoaded(true);
    });
  }, []);

  // Update body class when language changes
  useEffect(() => {
    // Remove all language classes
    document.body.classList.remove('lang-en', 'lang-ru', 'lang-pl');
    // Add current language class
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  // Wrapper for setLanguage that marks the language as manually selected
  const setLanguage = (lang: Language) => {
    // Validate language before saving
    if (!isValidLanguage(lang)) {
      lang = 'en';
    }

    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY_MODE, 'manual');
    localStorage.setItem(STORAGE_KEY_LANGUAGE, lang);
  };

  const value: LocalizationContextType = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within LocalizationProvider');
  }
  return context;
}

// Debug function to reset language to auto mode
// Usage in browser console: window.resetLanguageToAuto()
if (typeof window !== 'undefined') {
  (window as any).resetLanguageToAuto = () => {
    localStorage.removeItem(STORAGE_KEY_MODE);
    localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    location.reload();
  };
}
