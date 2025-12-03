import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations, Language } from '../locales';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const STORAGE_VERSION = '1.1'; // Increased to clear old storage
const STORAGE_KEY_VERSION = 'languageStorageVersion';
const STORAGE_KEY_MODE = 'languageSelectionMode'; // 'manual' or 'auto'
const STORAGE_KEY_LANGUAGE = 'selectedLanguage';

// Function to get browser language
function getBrowserLanguage(): Language {
  const browserLanguage = navigator.language || (navigator as any).userLanguage;
  const languageCode = browserLanguage.toLowerCase();

  console.log('🌍 Browser language detected:', browserLanguage);

  // Check for Russian-speaking countries: Russia, Belarus, Ukraine
  if (languageCode.startsWith('ru')) {
    console.log('✅ Matched Russian (Russia)');
    return 'ru';
  }

  if (languageCode.startsWith('be')) {
    console.log('✅ Matched Belarusian → using Russian');
    return 'ru';
  }

  if (languageCode.startsWith('uk')) {
    console.log('✅ Matched Ukrainian → using Russian');
    return 'ru';
  }

  // Check for Polish
  if (languageCode.startsWith('pl')) {
    console.log('✅ Matched Polish');
    return 'pl';
  }

  // Check for English explicitly
  if (languageCode.startsWith('en')) {
    console.log('✅ Matched English');
    return 'en';
  }

  // Fallback to English for all other languages
  // (German, French, Spanish, Chinese, Japanese, Arabic, etc.)
  console.log('⚠️ Unsupported language detected, falling back to English');
  console.log('   Language code:', languageCode);
  return 'en';
}

// Function to clear old storage if version changed
function checkAndClearOldStorage() {
  const storedVersion = localStorage.getItem(STORAGE_KEY_VERSION);
  if (storedVersion !== STORAGE_VERSION) {
    console.log('🔄 Clearing old language storage (version mismatch)');
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

// Function to detect user's preferred language
function detectUserLanguage(): Language {
  checkAndClearOldStorage();

  const mode = localStorage.getItem(STORAGE_KEY_MODE);
  const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;
  const browserLang = getBrowserLanguage();

  console.log('📋 Language detection:', { mode, savedLanguage, browserLang });

  // If user manually selected a language, validate and use it
  if (mode === 'manual' && savedLanguage) {
    if (isValidLanguage(savedLanguage)) {
      console.log('👤 Using manually selected language:', savedLanguage);
      return savedLanguage;
    } else {
      console.log('⚠️ Invalid saved language, resetting to browser language');
      localStorage.removeItem(STORAGE_KEY_MODE);
      localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    }
  }

  // Otherwise, always use browser language (auto mode)
  console.log('🤖 Using auto-detected language:', browserLang);
  localStorage.setItem(STORAGE_KEY_MODE, 'auto');
  localStorage.setItem(STORAGE_KEY_LANGUAGE, browserLang);
  return browserLang;
}

export function LocalizationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectUserLanguage());

  // Update body class when language changes
  useEffect(() => {
    // Remove all language classes
    document.body.classList.remove('lang-en', 'lang-ru', 'lang-pl');
    // Add current language class
    document.body.classList.add(`lang-${language}`);
    console.log('🌐 Language class updated:', `lang-${language}`);
  }, [language]);

  // Wrapper for setLanguage that marks the language as manually selected
  const setLanguage = (lang: Language) => {
    console.log('🖱️ User manually selected language:', lang);

    // Validate language before saving
    if (!isValidLanguage(lang)) {
      console.error('❌ Invalid language:', lang, '- using English as fallback');
      lang = 'en';
    }

    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY_MODE, 'manual');
    localStorage.setItem(STORAGE_KEY_LANGUAGE, lang);
  };

  // Check periodically if browser language changed (for auto mode only)
  useEffect(() => {
    const checkBrowserLanguageChange = () => {
      const mode = localStorage.getItem(STORAGE_KEY_MODE);

      // Only auto-update if in auto mode
      if (mode !== 'manual') {
        const currentBrowserLang = getBrowserLanguage();
        const savedLanguage = localStorage.getItem(STORAGE_KEY_LANGUAGE) as Language;

        // Validate current browser language
        if (!isValidLanguage(currentBrowserLang)) {
          console.error('❌ Browser language invalid, using English fallback');
          // This should not happen as getBrowserLanguage always returns valid language
        }

        if (currentBrowserLang !== savedLanguage) {
          console.log('🔄 Browser language changed, updating:', currentBrowserLang);
          localStorage.setItem(STORAGE_KEY_LANGUAGE, currentBrowserLang);
          setLanguageState(currentBrowserLang);
        }
      }
    };

    // Check immediately on mount
    checkBrowserLanguageChange();

    // Check every 3 seconds for browser language changes
    const interval = setInterval(checkBrowserLanguageChange, 3000);

    return () => clearInterval(interval);
  }, []);

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
    console.log('🔧 Resetting language to auto mode...');
    localStorage.removeItem(STORAGE_KEY_MODE);
    localStorage.removeItem(STORAGE_KEY_LANGUAGE);
    console.log('✅ Language reset! Reload the page to apply changes.');
    console.log('💡 Use: location.reload()');
  };

  (window as any).checkLanguageStatus = () => {
    const mode = localStorage.getItem(STORAGE_KEY_MODE);
    const lang = localStorage.getItem(STORAGE_KEY_LANGUAGE);
    const browserLang = getBrowserLanguage();

    console.log('📊 Language Status:');
    console.log('  Mode:', mode || 'not set');
    console.log('  Saved Language:', lang || 'not set');
    console.log('  Browser Language:', browserLang);
    console.log('  Browser Navigator:', navigator.language);
    console.log('  Supported Languages:', SUPPORTED_LANGUAGES.join(', '));
    console.log('');
    console.log('📝 Language Mapping:');
    console.log('  ru → Russian');
    console.log('  be → Russian (Belarus)');
    console.log('  uk → Russian (Ukraine)');
    console.log('  pl → Polish');
    console.log('  en → English');
    console.log('  * → English (fallback for all others)');
  };

  console.log('💡 Language debug tools available:');
  console.log('  - window.resetLanguageToAuto() - Reset to auto-detect mode');
  console.log('  - window.checkLanguageStatus() - Check current language settings');
}
