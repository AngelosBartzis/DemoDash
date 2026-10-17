import {Paper, Stack, Typography} from '@mui/material'
import {LineChart} from '@mui/x-charts/LineChart'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const marketingData = [
    {month: 'Jan', traffic: 2400, conversions: 180},
    {month: 'Feb', traffic: 2800, conversions: 220},
    {month: 'Mar', traffic: 2600, conversions: 205},
    {month: 'Apr', traffic: 3400, conversions: 270},
    {month: 'May', traffic: 3200, conversions: 250},
    {month: 'Jun', traffic: 3900, conversions: 310},
    {month: 'Jul', traffic: 4300, conversions: 350},
    {month: 'Aug', traffic: 4000, conversions: 330},
    {month: 'Sep', traffic: 4700, conversions: 390},
    {month: 'Oct', traffic: 5200, conversions: 430},
    {month: 'Nov', traffic: 4900, conversions: 410},
    {month: 'Dec', traffic: 5800, conversions: 480},
]

export default function MarketingSeo() {
    const {t} = useTranslation()
    const theme = useTheme()

    return (
        <Paper
            variant="outlined"
            sx={{
                p: {xs: 2.5, sm: 3},
                minWidth: 0,
                minHeight: 280,
                borderRadius: 3,
                boxSizing: 'border-box',
            }}
        >
            <Stack spacing={0.5} sx={{mb: 2}}>
                <Typography variant="h6" fontWeight={600}>
                    {t('marketingSeo')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t('organicTrafficAndConversions')}
                </Typography>
            </Stack>

            <LineChart
                height={220}
                dataset={marketingData}
                xAxis={[
                    {
                        scaleType: 'point',
                        dataKey: 'month',
                    },
                ]}
                yAxis={[
                    {
                        id: 'traffic',
                        scaleType: 'linear',
                        width: 48,
                        valueFormatter: (value) =>
                            new Intl.NumberFormat(undefined, {
                                notation: 'compact',
                            }).format(value),
                    },
                    {
                        id: 'conversions',
                        scaleType: 'linear',
                        position: 'right',
                        width: 42,
                        valueFormatter: (value) =>
                            new Intl.NumberFormat().format(value),
                    },
                ]}
                series={[
                    {
                        dataKey: 'traffic',
                        label: t('organicTraffic'),
                        yAxisId: 'traffic',
                        color: theme.palette.primary.main,
                        showMark: false,
                        curve: 'monotoneX',
                    },
                    {
                        dataKey: 'conversions',
                        label: t('conversions'),
                        yAxisId: 'conversions',
                        color: theme.palette.secondary.main,
                        showMark: false,
                        curve: 'monotoneX',
                    },
                ]}
                grid={{horizontal: true}}
                margin={{left: 4, right: 4, top: 10, bottom: 24}}
                slotProps={{
                    legend: {
                        direction: 'row',
                        position: {
                            vertical: 'bottom',
                            horizontal: 'center',
                        },
                    },
                }}
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
        </Paper>
    )
}