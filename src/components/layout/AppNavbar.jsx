import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material'
import {
    Dashboard,
    Menu as MenuIcon,
    Settings,
} from '@mui/icons-material'
import {Link as RouterLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

export default function AppNavbar({
                                      onMenuClick,
                                      onSettingsClick,
                                  }) {
    const {t} = useTranslation()

    return (
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
                    aria-label={t('dashboard')}
                    edge="start"
                    onClick={onMenuClick}
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
                    onClick={onSettingsClick}
                    color="primary"
                >
                    <Settings/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
