import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import {Logout} from '@mui/icons-material'
import {NavLink, Link as RouterLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {navigationItems} from './navigation.js'

export default function AppSidebar({
                                       open,
                                       onClose,
                                       isLoggedIn,
                                       onLogout,
                                       desktop = false,
                                   }) {
    const {t} = useTranslation()

    return (
        <Drawer
            variant={desktop ? 'permanent' : 'temporary'}
            anchor="left"
            open={desktop || open}
            onClose={onClose}
            sx={{
                width: desktop ? 240 : undefined,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: desktop ? 240 : 'min(280px, 85vw)',
                    boxSizing: 'border-box',
                    bgcolor: 'background.paper',
                    borderRight: 1,
                    borderColor: 'divider',
                },
            }}
        >
            <Box sx={{p: 2.5}}>
                <Typography variant="h6" fontWeight={700}>
                    {t('appName')}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {t('overview')}
                </Typography>
            </Box>

            <Divider/>

            <List sx={{p: 1.5}}>
                {navigationItems.map(({labelKey, path, icon: Icon}) => (
                    <ListItemButton
                        key={path}
                        component={NavLink}
                        to={path}
                        end={path === '/'}
                        onClick={desktop ? undefined : onClose}
                        sx={{
                            borderRadius: 2,
                            mb: 0.5,
                            color: 'text.secondary',
                            '& .MuiListItemIcon-root': {
                                color: 'inherit',
                                minWidth: 40,
                            },
                            '&.active': {
                                bgcolor: 'action.selected',
                                color: 'primary.main',
                                fontWeight: 600,
                            },
                            '&.active .MuiListItemText-primary': {
                                fontWeight: 600,
                            },
                        }}
                    >
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>

                        <ListItemText primary={t(labelKey)}/>
                    </ListItemButton>
                ))}
            </List>

            <Box sx={{flexGrow: 1}}/>

            <Divider/>

            <List sx={{p: 1.5}}>
                {isLoggedIn ? (
                    <ListItemButton
                        onClick={onLogout}
                        sx={{borderRadius: 2}}
                    >
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>

                        <ListItemText primary={t('logout')}/>
                    </ListItemButton>
                ) : (
                    <ListItemButton
                        component={RouterLink}
                        to="/login"
                        onClick={desktop ? undefined : onClose}
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
    )
}
