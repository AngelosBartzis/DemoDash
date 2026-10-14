import {useState} from 'react'
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem, Stack,
    Switch,
    Toolbar,
    Typography,
} from '@mui/material'
import {
    Dashboard,
    Language,
    Logout,
    Menu as MenuIcon,
    Settings,
} from '@mui/icons-material'
import {
    Link as RouterLink,
    Outlet,
    useNavigate,
} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import i18n from '../i18n/index.js'
import {useColorMode} from '../theme/ColorModeContext.js'

const languages = [
    {code: 'en', label: 'English'},
    {code: 'el', label: 'Ελληνικά'},
]

export default function AppLayout({
                                      isLoggedIn,
                                      setIsLoggedIn,
                                  }) {
    const {t} = useTranslation()
    const {mode, toggleColorMode} = useColorMode()
    const navigate = useNavigate()

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [settingsAnchor, setSettingsAnchor] = useState(null)

    const closeDrawer = () => setDrawerOpen(false)

    const handleLogout = () => {
        setIsLoggedIn(false)
        closeDrawer()
        navigate('/login')
    }

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language)

        try {
            localStorage.setItem('language', language)
        } catch {
            // Language selection still works without browser storage.
        }

        setSettingsAnchor(null)
    }

    return (
        <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
            <AppBar
                position="sticky"
                color="default"
                elevation={0}
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }}
            >
                <Toolbar sx={{gap: 1}}>
                    <IconButton
                        aria-label="Open navigation"
                        edge="start"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Dashboard color="primary"/>

                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            color: 'text.primary',
                            textDecoration: 'none',
                            fontWeight: 700,
                        }}
                    >
                        {t('appName')}
                    </Typography>

                    <IconButton
                        aria-label={t('settings')}
                        onClick={(event) => setSettingsAnchor(event.currentTarget)}
                        color="primary"
                    >
                        <Settings/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={closeDrawer}
                slotProps={{
                    paper: {
                        sx: {
                            width: {xs: 'min(280px, 85vw)', sm: 300},
                            bgcolor: 'background.paper',
                        },
                    },
                }}
            >
                <Box sx={{p: 2}}>
                    <Typography variant="h6" fontWeight={700}>
                        {t('appName')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {t('overview')}
                    </Typography>
                </Box>

                <Divider/>

                <List sx={{p: 1}}>
                    <ListItemButton
                        component={RouterLink}
                        to="/"
                        onClick={closeDrawer}
                        sx={{borderRadius: 2}}
                    >
                        <ListItemIcon>
                            <Dashboard/>
                        </ListItemIcon>
                        <ListItemText primary={t('dashboard')}/>
                    </ListItemButton>
                </List>

                <Box sx={{flexGrow: 1}}/>

                <Divider/>

                <List sx={{p: 1}}>
                    {isLoggedIn ? (
                        <ListItemButton onClick={handleLogout} sx={{borderRadius: 2}}>
                            <ListItemIcon>
                                <Logout/>
                            </ListItemIcon>
                            <ListItemText primary={t('logout')}/>
                        </ListItemButton>
                    ) : (
                        <ListItemButton
                            component={RouterLink}
                            to="/login"
                            onClick={closeDrawer}
                            sx={{borderRadius: 2}}
                        >
                            <ListItemIcon>
                                <Logout/>
                            </ListItemIcon>
                            <ListItemText primary={t('login')}/>
                        </ListItemButton>
                    )}
                </List>
            </Drawer>

            <Menu
                anchorEl={settingsAnchor}
                open={Boolean(settingsAnchor)}
                onClose={() => setSettingsAnchor(null)}
                slotProps={{
                    paper: {
                        sx: {
                            width: 260,
                            p: 1,
                            mt: 1,
                            bgcolor: 'background.paper',
                        },
                    },
                }}
            >
                <Box sx={{px: 1.5, py: 1}}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {t('appearance')}
                    </Typography>


                    <Stack
                        direction="row"
                        sx={{
                            mt: 1,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="body2">
                            {t('darkMode')}
                        </Typography>

                        <Switch
                            checked={mode === 'dark'}
                            onChange={toggleColorMode}
                            color="primary"
                        />
                    </Stack>


                </Box>

                <Divider sx={{my: 1}}/>

                <Box sx={{px: 1.5, py: 0.5}}>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{display: 'flex', alignItems: 'center', gap: 1}}
                    >
                        <Language fontSize="small"/>
                        {t('language')}
                    </Typography>
                </Box>

                {languages.map((language) => (
                    <MenuItem
                        key={language.code}
                        selected={i18n.language.startsWith(language.code)}
                        onClick={() => handleLanguageChange(language.code)}
                    >
                        {language.label}
                    </MenuItem>
                ))}
            </Menu>

            <Box
                component="main"
                sx={{
                    width: '100%',
                    maxWidth: 1440,
                    mx: 'auto',
                    p: {xs: 2, sm: 3, md: 4},
                }}
            >
                <Outlet context={{isLoggedIn, setIsLoggedIn}}/>
            </Box>
        </Box>
    )
}
