import {Box, Paper, Stack, Typography} from '@mui/material'
import {BarChart} from '@mui/x-charts/BarChart'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const deviceData = [
    {labelKey: 'desktop', value: 5400},
    {labelKey: 'mobile', value: 3800},
    {labelKey: 'tablet', value: 800},
]

export default function TrafficByDevice() {
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
                    {t('trafficByDevice')}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {t('trafficByDeviceDescription')}
                </Typography>
            </Stack>

            <Box sx={{width: '100%', minWidth: 0}}>
                <BarChart
                    height={280}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: deviceData.map((device) => t(device.labelKey)),
                        },
                    ]}
                    yAxis={[
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
                            data: deviceData.map((device) => device.value),
                            label: t('visits'),
                            color: theme.palette.primary.main,
                            valueFormatter: (value) =>
                                value == null ? '' : value.toLocaleString(),
                        },
                    ]}
                    grid={{horizontal: true}}
                    margin={{left: 12, right: 12, top: 16, bottom: 32}}
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
