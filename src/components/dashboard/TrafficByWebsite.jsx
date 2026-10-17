import {Box, Paper, Stack, Typography} from '@mui/material'
import {BarChart} from '@mui/x-charts/BarChart'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const trafficSources = [
    {label: 'Google', value: 4800},
    {label: 'YouTube', value: 3200},
    {label: 'Instagram', value: 2500},
    {label: 'Facebook', value: 1800},
    {label: 'Other', value: 1100},
]

export default function TrafficByWebsite() {
    const {t} = useTranslation()
    const theme = useTheme()

    return (
        <Paper
            variant="outlined"
            sx={{
                p: {xs: 2, sm: 3},
                minWidth: 0,
                borderRadius: 3,
                height: '100%',
            }}
        >
            <Stack spacing={0.5} sx={{mb: 2}}>
                <Typography variant="h6" fontWeight={600}>
                    {t('trafficByWebsite')}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {t('trafficByWebsiteDescription')}
                </Typography>
            </Stack>

            <Box sx={{width: '100%', minWidth: 0}}>
                <BarChart
                    height={280}
                    layout="horizontal"
                    yAxis={[
                        {
                            scaleType: 'band',
                            data: trafficSources.map((source) => source.label),
                            width: 90,
                        },
                    ]}
                    xAxis={[
                        {
                            min: 0,
                            valueFormatter: (value) =>
                                new Intl.NumberFormat(undefined, {
                                    notation: 'compact',
                                }).format(value),
                        },
                    ]}
                    series={[
                        {
                            data: trafficSources.map((source) => source.value),
                            label: t('visits'),
                            color: theme.palette.primary.main,
                            valueFormatter: (value) =>
                                value == null ? '' : value.toLocaleString(),
                        },
                    ]}
                    grid={{vertical: true}}
                    margin={{left: 4, right: 16, top: 12, bottom: 28}}
                    borderRadius={6}
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
