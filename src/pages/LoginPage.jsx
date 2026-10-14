import {Box, Button, Paper, Stack, Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {useNavigate, useOutletContext} from 'react-router-dom'

export default function LoginPage() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {setIsLoggedIn} = useOutletContext()

    const handleDemoLogin = () => {
        setIsLoggedIn(true)
        navigate('/')
    }

    return (
        <Box
            sx={{
                minHeight: '60vh',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    width: '100%',
                    maxWidth: 440,
                    p: {xs: 3, sm: 4},
                    borderRadius: 3,
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h4" component="h1" fontWeight={700}>
                        {t('loginTitle')}
                    </Typography>

                    <Typography color="text.secondary">
                        {t('loginDescription')}
                    </Typography>

                    <Button variant="contained" onClick={handleDemoLogin}>
                        {t('login')}
                    </Button>
                </Stack>
            </Paper>
        </Box>
    )
}
