import {Logout} from '@mui/icons-material'
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

export default function SidebarFooter({
                                          isLoggedIn,
                                          onLogout,
                                          onClose,
                                          desktop,
                                      }) {
    const {t} = useTranslation()

    return (
        <List sx={{p: 1}}>
            {isLoggedIn ? (
                <ListItemButton onClick={onLogout} sx={{borderRadius: 2}}>
                    <ListItemIcon sx={{minWidth: 36}}>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={t('logout')}
                        primarytypographyprops={{variant: 'body2'}}
                    />
                </ListItemButton>
            ) : (
                <ListItemButton
                    component={RouterLink}
                    to="/login"
                    onClick={desktop ? undefined : onClose}
                    sx={{borderRadius: 2}}
                >
                    <ListItemIcon sx={{minWidth: 36}}>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={t('login')}
                        primarytypographyprops={{variant: 'body2'}}
                    />
                </ListItemButton>
            )}
        </List>
    )
}