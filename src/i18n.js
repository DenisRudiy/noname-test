import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
//     debug: true,
//     fallbackLng: "en",
//     returnObjects: true,
// });


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          services: 'Services',
          cases: 'Cases',
          feedback: 'Feedback',
          contacts: 'Contacts',
          switcher: 'Language',
        },
      },
      uk: {
        translation: {
          home: 'Головна',
          services: 'Послуги',
          cases: 'Портфоліо',
          feedback: 'Відгуки',
          contacts: 'Контакти',
          switcher: 'Мова',
        },
      },
    },
  });

export default i18n;