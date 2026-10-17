import {useState} from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Paper,
    Stack,
    Typography,
    useTheme,
} from '@mui/material'
import {LineChart} from '@mui/x-charts/LineChart'
import {useTranslation} from 'react-i18next'

const chartData = {
    '7d': {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        current: [120, 180, 150, 260, 220, 310, 285],
        previous: [90, 140, 170, 190, 160, 220, 200],
    },
    '30d': {
        labels: ['1', '5', '10', '15', '20', '25', '30'],
        current: [180, 220, 195, 300, 260, 350, 390],
        previous: [140, 180, 160, 220, 230, 250, 280],
    },
    '90d': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        current: [150, 190, 230, 210, 300, 360, 420],
        previous: [120, 160, 180, 200, 240, 270, 310],
    },
}

export default function TotalUsersChart() {
    const {t} = useTranslation()
    const theme = useTheme()
    const [range, setRange] = useState('7d')

    const data = chartData[range]

    return (
        <Paper
            variant="outlined"
            sx={{
                p: {xs: 2, sm: 3},
                minWidth: 0,
                borderRadius: 3,
            }}
        >
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={2}
                sx={{
                    alignItems: {xs: 'stretch', sm: 'center'},
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        {t('totalUsers')}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {t('totalUsersDescription')}
                    </Typography>
                </Box>

                <ButtonGroup
                    size="small"
                    variant="outlined"
                    aria-label={t('chartDateRange')}
                    sx={{alignSelf: {xs: 'flex-start', sm: 'auto'}}}
                >
                    {[
                        {value: '7d', label: t('last7Days')},
                        {value: '30d', label: t('last30Days')},
                        {value: '90d', label: t('last90Days')},
                    ].map((option) => (
                        <Button
                            key={option.value}
                            onClick={() => setRange(option.value)}
                            variant={range === option.value ? 'contained' : 'outlined'}
                        >
                            {option.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </Stack>

            <Box sx={{width: '100%', minWidth: 0}}>
                <LineChart
                    height={320}
                    xAxis={[
                        {
                            scaleType: 'point',
                            data: data.labels,
                        },
                    ]}
                    yAxis={[
                        {
                            width: 45,
                        },
                    ]}
                    series={[
                        {
                            data: data.current,
                            label: t('currentPeriod'),
                            curve: 'monotoneX',
                            showMark: false,
                        },
                        {
                            data: data.previous,
                            label: t('previousPeriod'),
                            curve: 'monotoneX',
                            showMark: false,
                        },
                    ]}
                    colors={[
                        theme.palette.primary.main,
                        theme.palette.secondary.main,
                    ]}
                    grid={{horizontal: true}}
                    margin={{left: 8, right: 16, top: 16, bottom: 24}}
                    sx={{
                        '& .MuiChartsAxis-line': {
                            stroke: theme.palette.divider,
                        },
                        '& .MuiChartsAxis-tick': {
                            stroke: theme.palette.divider,
                        },
                        '& .MuiChartsAxis-tickLabel': {
                            fill: theme.palette.text.secondary,
                        },
                        '& .MuiChartsGrid-line': {
                            stroke: theme.palette.divider,
                            strokeDasharray: '4 4',
                        },
                        '& .MuiChartsLegend-label': {
                            fill: theme.palette.text.secondary,
                        },
                    }}
                />
            </Box>
        </Paper>
    )
}
