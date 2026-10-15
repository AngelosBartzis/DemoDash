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
import {Link as RouterLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {navigationItems} from './navigation.js'

export default function AppSidebar({
                                       open,
                                       onClose,
                                       isLoggedIn,
                                       onLogout,
                                   }) {
    const {t} = useTranslation()

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
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
                {navigationItems.map(({labelKey, path, icon: Icon}) => (
                    <ListItemButton
                        key={path}
                        component={RouterLink}
                        to={path}
                        onClick={onClose}
                        sx={{borderRadius: 2}}
                    >
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>

                        <ListItemText primary={t(labelKey)}/>
                    </ListItemButton>
                ))}
            </List>

            <Divider/>

            <List sx={{p: 1}}>
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
                        onClick={onClose}
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
