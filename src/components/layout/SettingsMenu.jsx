import {
    Box,
    Divider,
    Menu,
    MenuItem,
    Stack,
    Switch,
    Typography,
} from '@mui/material'
import {Language} from '@mui/icons-material'
import {useTranslation} from 'react-i18next'
import i18n from '../../i18n/index.js'
import {useColorMode} from '../../theme/ColorModeContext.js'
import {languages} from '../sidebar/navigation.js'

export default function SettingsMenu({anchorEl, onClose}) {
    const {t} = useTranslation()
    const {mode, toggleColorMode} = useColorMode()

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language)

        try {
            localStorage.setItem('language', language)
        } catch {
            // Language selection still works without browser storage.
        }

        onClose()
    }

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
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
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
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
    )
}
