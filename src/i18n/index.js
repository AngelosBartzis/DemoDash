import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import en from './locales/en/translation.json'
import el from './locales/el/translation.json'

function getInitialLanguage() {
    try {
        const savedLanguage = localStorage.getItem('language')

        if (savedLanguage === 'en' || savedLanguage === 'el') {
            return savedLanguage
        }
    } catch {
        // Use English if browser storage is unavailable.
    }

    return 'en'
}

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        el: {translation: el},
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: ['en', 'el'],
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
