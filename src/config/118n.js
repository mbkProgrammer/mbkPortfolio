import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from '../language/en.json';
import persian from '../language/fa.json';

i18next.use(LanguageDetector).use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: english,
      },
      fa: {
        translation: persian,
      },
    },
  });

export default i18next;
