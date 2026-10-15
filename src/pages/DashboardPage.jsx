import {
    Box,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'
import DashboardStats from '../components/dashboard/DashboardStats.jsx'

export default function DashboardPage() {
    const {t} = useTranslation()

    return (
        <Stack spacing={3}>
            <Box>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontSize: {xs: '1.65rem', sm: '2.125rem'},
                        fontWeight: 700,
                    }}
                >
                    {t('welcome')}
                </Typography>

                <Typography color="text.secondary" sx={{mt: 1}}>
                    {t('dashboardDescription')}
                </Typography>
            </Box>

            <DashboardStats/>

            <Paper
                variant="outlined"
                sx={{
                    p: {xs: 2.5, sm: 3},
                    minHeight: 180,
                    borderRadius: 3,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    {t('recentActivity')}
                </Typography>

                <Typography color="text.secondary" sx={{mt: 2}}>
                    {t('activityPlaceholder')}
                </Typography>
            </Paper>
        </Stack>
    )
}
