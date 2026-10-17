import {
    Stack,
    Typography,
} from '@mui/material'
import {useTranslation} from 'react-i18next'
import Grid from '@mui/material/Grid'
import DashboardStats from '../components/dashboard/DashboardStats.jsx'
import TotalUsersChart from '../components/dashboard/TotalUsersChart.jsx'
import TrafficByWebsite from '../components/dashboard/TrafficByWebsite.jsx'
import TrafficByDevice from '../components/dashboard/TrafficByDevice.jsx'
import TrafficByLocation from '../components/dashboard/TrafficByLocation.jsx'
import MarketingSeo from "../components/dashboard/MarketingSeo.jsx";

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

            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 8}}>
                    <TotalUsersChart/>
                </Grid>

                <Grid size={{xs: 12, md: 4}}>
                    <TrafficByWebsite/>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <TrafficByDevice/>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <TrafficByLocation/>
                </Grid>
            </Grid>

            <MarketingSeo/>

        </Stack>
    )
}
