import {
    AppBar,
    Box,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material'
import {
    Brightness6,
    ContactsOutlined,
    FavoriteBorder,
    History,
    Menu as MenuIcon,
    NotificationsNone,
    Search,
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
            <Toolbar sx={{gap: 1.5, minWidth: 0}}>
                <IconButton
                    aria-label={t('openMenu')}
                    onClick={onMenuClick}
                    sx={{display: {xs: 'inline-flex', md: 'none'}}}
                >
                    <MenuIcon/>
                </IconButton>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: {xs: 0.5, sm: 1},
                        flexShrink: 0,
                        ml: {xs: 0, md: '240px'},
                    }}
                >
                    <IconButton aria-label={t('contacts')} color="inherit">
                        <ContactsOutlined/>
                    </IconButton>

                    <IconButton aria-label={t('favorites')} color="inherit">
                        <FavoriteBorder/>
                    </IconButton>

                    <Typography
                        variant="body2"
                        color="text.disabled"
                        sx={{ml: {xs: 0.5, sm: 1}}}
                    >
                        {t('dashboards')}
                    </Typography>

                    <Typography
                        variant="body2"
                        fontWeight={600}
                        color="text.primary"
                        component={RouterLink}
                        to="/"
                        sx={{
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {t('defaultDashboard')}
                    </Typography>
                </Box>

                <Box sx={{flexGrow: 1}}/>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: {xs: 0.25, sm: 1},
                        minWidth: 0,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            width: {xs: 120, sm: 180, md: 220},
                            px: 1.5,
                            py: 0.5,
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 10,
                            bgcolor: 'background.default',
                        }}
                    >
                        <Search
                            fontSize="small"
                            color="action"
                        />

                        <InputBase
                            placeholder={t('search')}
                            inputProps={{'aria-label': t('search')}}
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                fontSize: '0.875rem',
                            }}
                        />
                    </Box>

                    <IconButton
                        aria-label={t('brightness')}
                        color="inherit"
                    >
                        <Brightness6/>
                    </IconButton>

                    <IconButton
                        aria-label={t('history')}
                        color="inherit"
                    >
                        <History/>
                    </IconButton>

                    <IconButton
                        aria-label={t('notifications')}
                        color="inherit"
                    >
                        <NotificationsNone/>
                    </IconButton>

                    <IconButton
                        aria-label={t('settings')}
                        onClick={onSettingsClick}
                        color="primary"
                    >
                        <Settings/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}