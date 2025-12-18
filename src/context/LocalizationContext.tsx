import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations, Language } from '../locales';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isLanguageLoaded: boolean;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const STORAGE_VERSION = '2.0'; // Updated to IP-based language detection
const STORAGE_KEY_VERSION = 'languageStorageVersion';
const STORAGE_KEY_MODE = 'languageSelectionMode'; // 'manual' or 'auto'
const STORAGE_KEY_LANGUAGE = 'selectedLanguage';

// Function to get user's country code by IP with fallback APIs
async function getCountryByIP(): Promise<string | null> {
  // Try multiple APIs in order (fallback system)
  const apis = [
    {
      name: 'ip-api.com',
      url: 'http://ip-api.com/json/?fields=status,message,countryCode',
      extract: (data: any) => data.status === 'success' ? data.countryCode : null
    },
    {
      name: 'ipwhois.app',
      url: 'https://ipwho.is/',
      extract: (data: any) => data.success ? data.country_code : null
    },
    {
      name: 'freeipapi.com',
      url: 'https://freeipapi.com/api/json',
      extract: (data: any) => data.countryCode
    }
  ];

  for (const api of apis) {
    try {
      // Create timeout controller for better browser compatibility
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch(api.url, {
        method: 'GET',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        continue; // Try next API
      }

      const data = await response.json();

      const countryCode = api.extract(data);

      if (countryCode) {
        return countryCode;
      } else {
        continue; // Try next API
      }
    } catch (error) {
      // Continue to next API
    }
  }

  return null;
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

// Function to get initial language synchronously (from cache or browser)
function getInitialLanguage(): Language {
  checkAndClearOldStorage();

  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;

  // If user manually selected a language, use it immediately
  if (mode === 'manual' && savedLanguage && isValidLanguage(savedLanguage)) {
    return savedLanguage;
  }

  // For 'auto' mode: use cached language if available (will be verified by IP API)
  if (mode === 'auto' && savedLanguage && isValidLanguage(savedLanguage)) {
    return savedLanguage;
  }

  // First visit: Try to detect from browser language as temporary fallback
  try {
    const browserLang = navigator.language.slice(0, 2);
    if (isValidLanguage(browserLang)) {
      return browserLang as Language;
    }
  } catch (error) {
    // Could not detect browser language
  }

  // Final fallback: English
  return 'en';
}

// Function to detect user's preferred language based on location (async)
async function detectUserLanguage(): Promise<Language> {
  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;

  // If user manually selected a language, don't override it
  if (mode === 'manual' && savedLanguage && isValidLanguage(savedLanguage)) {
    return savedLanguage;
  }

  // Get language based on user's location (IP)
  const countryCode = await getCountryByIP();
  const locationLang = getLanguageByLocation(countryCode);

  // Only update if not manually selected
  if (mode !== 'manual') {
    localStorage.setItem(STORAGE_KEY_MODE, 'auto');
    localStorage.setItem(STORAGE_KEY_LANGUAGE, locationLang);
  }

  return locationLang;
}

export function LocalizationProvider({ children }: { children: ReactNode }) {
  // Get initial language synchronously (from cache or browser)
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage());
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  // Detect precise language from IP in the background
  useEffect(() => {
    const mode = localStorage.getItem(STORAGE_KEY_MODE);

    // If language was manually selected, skip IP detection
    if (mode === 'manual') {
      setIsLanguageLoaded(true);
      return;
    }

    // ALWAYS detect from IP for 'auto' mode to ensure accurate location-based language
    detectUserLanguage().then(detectedLang => {
      // Always update language from IP API (even if it's the same)
      // This ensures we're using the most accurate location-based language
      setLanguageState(detectedLang);
      setIsLanguageLoaded(true);
    }).catch((error) => {
      // If IP detection fails, keep the current language and mark as loaded
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
    t: translations[language],
    isLanguageLoaded
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

// Debug functions for testing
// Usage in browser console: window.resetLanguageToAuto() or window.debugLanguage()
if (typeof window !== 'undefined') {
  (window as any).resetLanguageToAuto = () => {
    localStorage.removeItem(STORAGE_KEY_MODE);
    localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    location.reload();
  };

  (window as any).debugLanguage = () => {
    return {
      mode: localStorage.getItem(STORAGE_KEY_MODE),
      savedLanguage: localStorage.getItem(STORAGE_KEY_LANGUAGE),
      version: localStorage.getItem(STORAGE_KEY_VERSION),
      bodyClasses: document.body.className,
      navigatorLanguage: navigator.language
    };
  };

  (window as any).forceLanguage = (lang: string) => {
    localStorage.setItem(STORAGE_KEY_MODE, 'manual');
    localStorage.setItem(STORAGE_KEY_LANGUAGE, lang);
    location.reload();
  };
}
