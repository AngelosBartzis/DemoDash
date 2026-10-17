import {useState} from 'react'
import {
    AccountCircle,
    StarBorder,
} from '@mui/icons-material'
import {
    Avatar,
    Box,
    ListItemButton,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'

export default function SidebarHeader({isLoggedIn}) {
    const {t} = useTranslation()
    const [activeTab, setActiveTab] = useState('favorites')

    return (
        <>
            <Box sx={{p: 2, display: 'flex', alignItems: 'center', gap: 1.5}}>
                <Avatar sx={{width: 36, height: 36}}>
                    <AccountCircle/>
                </Avatar>

                <Box sx={{minWidth: 0}}>
                    <Typography variant="body1" fontWeight={700} noWrap>
                        {isLoggedIn ? t('userName') : t('appName')}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display: 'flex', gap: 1, px: 1.5, py: 1}}>
                <ListItemButton
                    selected={activeTab === 'favorites'}
                    onClick={() => setActiveTab('favorites')}
                    sx={{minWidth: 0, borderRadius: 2, px: 1}}
                >
                    <StarBorder fontSize="small" sx={{mr: 0.75}}/>
                    <Typography variant="caption" fontWeight={600}>
                        {t('favorites')}
                    </Typography>
                </ListItemButton>

                <ListItemButton
                    selected={activeTab === 'recently'}
                    onClick={() => setActiveTab('recently')}
                    sx={{minWidth: 0, borderRadius: 2, px: 1}}
                >
                    <Typography variant="caption" fontWeight={600}>
                        {t('recently')}
                    </Typography>
                </ListItemButton>
            </Box>
        </>
    )
}