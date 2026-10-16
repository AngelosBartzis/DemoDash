import {
    AccountBox,
    Article,
    BarChart,
    Chat,
    Folder,
    FolderOpen,
    Dashboard,
    FolderSpecial,
    People,
    Person,
} from '@mui/icons-material'


export const languages = [
    {code: 'en', label: 'English'},
    {code: 'el', label: 'Ελληνικά'},
]

export const navigationItems = [
    {
        labelKey: 'overview',
        path: '/',
        icon: Dashboard,
    },
    {
        labelKey: 'projects',
        path: '/projects',
        icon: FolderSpecial,
    },
]

export const dashboardItems = [
    {
        labelKey: 'overview',
        path: '/',
        icon: BarChart,
    },
    {
        labelKey: 'folderOne',
        path: '/dashboards/folder-one',
        icon: Folder,
        expandable: true,
        children: [],
    },
    {
        labelKey: 'folderTwo',
        path: '/dashboards/folder-two',
        icon: FolderOpen,
        expandable: true,
        children: [],
    },
]

export const pageGroups = [
    {
        labelKey: 'userProfile',
        icon: Person,
        children: [
            {labelKey: 'overview', path: '/profile/overview'},
            {labelKey: 'projects', path: '/profile/projects'},
            {labelKey: 'campaigns', path: '/profile/campaigns'},
            {labelKey: 'documents', path: '/profile/documents'},
            {labelKey: 'followers', path: '/profile/followers'},
        ],
    },
    {
        labelKey: 'account',
        icon: AccountBox,
        children: [],
    },
    {
        labelKey: 'corporate',
        icon: People,
        children: [],
    },
    {
        labelKey: 'blog',
        icon: Article,
        children: [],
    },
    {
        labelKey: 'social',
        icon: Chat,
        children: [],
    },
]
