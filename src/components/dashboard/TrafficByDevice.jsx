import {Box, Paper, Stack, Typography} from '@mui/material'
import {BarChart} from '@mui/x-charts/BarChart'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const deviceData = [
    {labelKey: 'linux', value: 18000, color: '#607D8B'},
    {labelKey: 'mac', value: 28000, color: '#40C4B4'},
    {labelKey: 'ios', value: 20000, color: '#212121'},
    {labelKey: 'windows', value: 30000, color: '#64B5F6'},
    {labelKey: 'android', value: 10000, color: '#9575CD'},
    {labelKey: 'other', value: 25000, color: '#66BB6A'},
]

export default function TrafficByDevice() {
    const {t} = useTranslation()
    const theme = useTheme()

    return (
        <Paper
            variant="outlined"
            sx={{
                p: {xs: 1.5, sm: 2},
                minWidth: 0,
                borderRadius: 3,
                minHeight: 260,
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            <Stack spacing={0} sx={{mb: 0}}>
                <Typography variant="h6" fontWeight={600}>
                    {t('trafficByDevice')}
                </Typography>
            </Stack>

            <Box
                sx={{
                    width: '100%',
                    minWidth: 0,
                    flex: 1,
                    minHeight: 0,
                }}
            >
                <BarChart
                    height={180}
                    categorygapratio={0.3}
                    margin={{left: 8, right: 8, top: 18, bottom: 0}}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: deviceData.map((device) => t(device.labelKey)),
                        },
                    ]}
                    yAxis={[
                        {
                            min: 0,
                            max: 30000,
                            tickNumber: 3,
                            valueFormatter: (value) =>
                                new Intl.NumberFormat(undefined, {
                                    notation: 'compact',
                                }).format(value),
                        },
                    ]}
                    series={[
                        {
                            data: deviceData.map((device) => device.value),
                            colorGetter: (barItem) => deviceData[barItem.dataIndex].color,
                            barWidth: 14,
                            valueFormatter: (value) =>
                                value == null ? '' : value.toLocaleString(),
                        },
                    ]}
                    grid={{horizontal: true}}
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
