import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
    en: {
        translation: {
            appName: 'DemoDash',
            dashboard: 'Dashboard',
            overview: 'Overview',
            login: 'Login',
            logout: 'Logout',
            settings: 'Settings',
            appearance: 'Appearance',
            darkMode: 'Dark mode',
            language: 'Language',
            welcome: 'Welcome back',
            dashboardDescription: 'Here is an overview of your workspace.',
            totalProjects: 'Total projects',
            activeTasks: 'Active tasks',
            teamMembers: 'Team members',
            completed: 'Completed',
            recentActivity: 'Recent activity',
            activityPlaceholder: 'Your recent activity will appear here.',
            loginTitle: 'Sign in',
            loginDescription: 'Authentication will be connected in a later step.',
            backToDashboard: 'Back to dashboard',
        },
    },
    el: {
        translation: {
            appName: 'DemoDash',
            dashboard: 'Πίνακας ελέγχου',
            overview: 'Επισκόπηση',
            login: 'Σύνδεση',
            logout: 'Αποσύνδεση',
            settings: 'Ρυθμίσεις',
            appearance: 'Εμφάνιση',
            darkMode: 'Σκούρο θέμα',
            language: 'Γλώσσα',
            welcome: 'Καλώς ήρθατε',
            dashboardDescription: 'Επισκόπηση του χώρου εργασίας σας.',
            totalProjects: 'Σύνολο έργων',
            activeTasks: 'Ενεργές εργασίες',
            teamMembers: 'Μέλη ομάδας',
            completed: 'Ολοκληρωμένα',
            recentActivity: 'Πρόσφατη δραστηριότητα',
            activityPlaceholder: 'Η πρόσφατη δραστηριότητά σας θα εμφανίζεται εδώ.',
            loginTitle: 'Σύνδεση',
            loginDescription: 'Η λειτουργία σύνδεσης θα προστεθεί σε επόμενο βήμα.',
            backToDashboard: 'Επιστροφή στον πίνακα ελέγχου',
        },
    },
    nl: {
        translation: {
            appName: 'DemoDash',
            dashboard: 'Dashboard',
            overview: 'Overzicht',
            login: 'Inloggen',
            logout: 'Uitloggen',
            settings: 'Instellingen',
            appearance: 'Weergave',
            darkMode: 'Donkere modus',
            language: 'Taal',
            welcome: 'Welkom terug',
            dashboardDescription: 'Hier is een overzicht van je werkruimte.',
            totalProjects: 'Totaal projecten',
            activeTasks: 'Actieve taken',
            teamMembers: 'Teamleden',
            completed: 'Voltooid',
            recentActivity: 'Recente activiteit',
            activityPlaceholder: 'Je recente activiteit verschijnt hier.',
            loginTitle: 'Inloggen',
            loginDescription: 'Authenticatie wordt in een volgende stap toegevoegd.',
            backToDashboard: 'Terug naar dashboard',
        },
    },
}

function getInitialLanguage() {
    try {
        const savedLanguage = localStorage.getItem('language')

        return ['en', 'el', 'nl'].includes(savedLanguage)
            ? savedLanguage
            : 'en'
    } catch {
        return 'en'
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
