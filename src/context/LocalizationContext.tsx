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
  console.log('🌍 [LocalizationContext] Fetching country from IP API...');

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
      console.log(`🔄 [LocalizationContext] Trying ${api.name}...`);

      // Create timeout controller for better browser compatibility
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch(api.url, {
        method: 'GET',
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(`⚠️ [LocalizationContext] ${api.name} request failed:`, response.status);
        continue; // Try next API
      }

      const data = await response.json();
      console.log(`📍 [LocalizationContext] ${api.name} response:`, data);

      const countryCode = api.extract(data);

      if (countryCode) {
        console.log(`🏳️ [LocalizationContext] Detected country code from ${api.name}:`, countryCode);
        return countryCode;
      } else {
        console.warn(`⚠️ [LocalizationContext] ${api.name} returned no country code`);
        continue; // Try next API
      }
    } catch (error) {
      console.warn(`⚠️ [LocalizationContext] ${api.name} error:`, error);
      // Continue to next API
    }
  }

  console.error('❌ [LocalizationContext] All IP APIs failed');
  return null;
}

// Function to get language by user's location (IP-based)
function getLanguageByLocation(countryCode: string | null): Language {
  console.log('🗺️ [LocalizationContext] Mapping country to language:', countryCode);

  if (!countryCode) {
    console.log('⚠️ [LocalizationContext] No country code, defaulting to English');
    return 'en';
  }

  const countryUpper = countryCode.toUpperCase();

  // Poland → Polish
  if (countryUpper === 'PL') {
    console.log('🇵🇱 [LocalizationContext] Poland detected → Polish language');
    return 'pl';
  }

  // Russia, Belarus, Ukraine → Russian
  if (countryUpper === 'RU' || countryUpper === 'BY' || countryUpper === 'UA') {
    console.log('🇷🇺 [LocalizationContext] Russian-speaking country detected → Russian language');
    return 'ru';
  }

  // All other countries → English
  console.log('🌐 [LocalizationContext] Other country → English language');
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
  console.log('🚀 [LocalizationContext] Getting initial language...');
  checkAndClearOldStorage();

  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;
  console.log('💾 [LocalizationContext] localStorage state:', { mode, savedLanguage });

  // If user manually selected a language, use it immediately
  if (mode === 'manual' && savedLanguage && isValidLanguage(savedLanguage)) {
    console.log('👤 [LocalizationContext] Using manually selected language:', savedLanguage);
    return savedLanguage;
  }

  // For 'auto' mode: use cached language if available (will be verified by IP API)
  if (mode === 'auto' && savedLanguage && isValidLanguage(savedLanguage)) {
    console.log('🔄 [LocalizationContext] Using cached auto language (will verify with IP):', savedLanguage);
    return savedLanguage;
  }

  // First visit: Try to detect from browser language as temporary fallback
  try {
    const browserLang = navigator.language.slice(0, 2);
    if (isValidLanguage(browserLang)) {
      console.log('🌐 [LocalizationContext] Using browser language:', browserLang);
      return browserLang as Language;
    }
  } catch (error) {
    console.log('⚠️ [LocalizationContext] Could not detect browser language');
  }

  // Final fallback: English
  console.log('🔙 [LocalizationContext] Falling back to English');
  return 'en';
}

// Function to detect user's preferred language based on location (async)
async function detectUserLanguage(): Promise<Language> {
  console.log('🔍 [LocalizationContext] Starting async language detection...');
  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;

  // If user manually selected a language, don't override it
  if (mode === 'manual' && savedLanguage && isValidLanguage(savedLanguage)) {
    console.log('🔒 [LocalizationContext] Language is manually selected, skipping IP detection');
    return savedLanguage;
  }

  // Get language based on user's location (IP)
  const countryCode = await getCountryByIP();
  const locationLang = getLanguageByLocation(countryCode);
  console.log('✅ [LocalizationContext] Final detected language:', locationLang);

  // Only update if not manually selected
  if (mode !== 'manual') {
    console.log('💾 [LocalizationContext] Saving language to localStorage:', locationLang);
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
    console.log('⚙️ [LocalizationContext] useEffect: Starting IP detection process...');
    const mode = localStorage.getItem(STORAGE_KEY_MODE);
    console.log('📋 [LocalizationContext] Current mode:', mode);

    // If language was manually selected, skip IP detection
    if (mode === 'manual') {
      console.log('🚫 [LocalizationContext] Manual mode - skipping IP detection');
      setIsLanguageLoaded(true);
      return;
    }

    console.log('🌐 [LocalizationContext] Auto mode - starting IP detection...');
    // ALWAYS detect from IP for 'auto' mode to ensure accurate location-based language
    detectUserLanguage().then(detectedLang => {
      console.log('📥 [LocalizationContext] Received detected language:', detectedLang);
      console.log('📊 [LocalizationContext] Current language state:', language);
      // Always update language from IP API (even if it's the same)
      // This ensures we're using the most accurate location-based language
      setLanguageState(detectedLang);
      console.log('✅ [LocalizationContext] Language state updated to:', detectedLang);
      setIsLanguageLoaded(true);
    }).catch((error) => {
      console.error('❌ [LocalizationContext] IP detection failed:', error);
      // If IP detection fails, keep the current language and mark as loaded
      setIsLanguageLoaded(true);
    });
  }, []);

  // Update body class when language changes
  useEffect(() => {
    console.log('🎨 [LocalizationContext] Updating body class for language:', language);
    // Remove all language classes
    document.body.classList.remove('lang-en', 'lang-ru', 'lang-pl');
    // Add current language class
    document.body.classList.add(`lang-${language}`);
    console.log('✅ [LocalizationContext] Body classes updated:', document.body.className);
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
    console.log('🔄 [DEBUG] Resetting language to auto mode...');
    localStorage.removeItem(STORAGE_KEY_MODE);
    localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    console.log('✅ [DEBUG] localStorage cleared, reloading page...');
    location.reload();
  };

  (window as any).debugLanguage = () => {
    console.log('🔍 [DEBUG] Current language state:');
    console.log('  - mode:', localStorage.getItem(STORAGE_KEY_MODE));
    console.log('  - savedLanguage:', localStorage.getItem(STORAGE_KEY_LANGUAGE));
    console.log('  - version:', localStorage.getItem(STORAGE_KEY_VERSION));
    console.log('  - body classes:', document.body.className);
    console.log('  - navigator.language:', navigator.language);
  };

  (window as any).forceLanguage = (lang: string) => {
    console.log('🔧 [DEBUG] Force setting language to:', lang);
    localStorage.setItem(STORAGE_KEY_MODE, 'manual');
    localStorage.setItem(STORAGE_KEY_LANGUAGE, lang);
    console.log('✅ [DEBUG] Language set, reloading page...');
    location.reload();
  };
}
