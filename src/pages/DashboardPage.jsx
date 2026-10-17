import {
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'
import DashboardStats from '../components/dashboard/DashboardStats.jsx'
import TotalUsersChart from '../components/dashboard/TotalUsersChart.jsx'

export default function DashboardPage() {
    const {t} = useTranslation()

    return (
        <Stack spacing={3}>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    fontSize: {xs: '1rem', sm: '1.1rem'},
                    fontWeight: 700,
                }}
            >
                {t('overview')}
            </Typography>

            <DashboardStats/>
            <TotalUsersChart/>

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
