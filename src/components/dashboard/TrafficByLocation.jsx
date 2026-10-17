import {Box, Paper, Stack, Typography} from '@mui/material'
import {PieChart} from '@mui/x-charts/PieChart'
import {useTheme} from '@mui/material/styles'
import {useTranslation} from 'react-i18next'

const locationData = [
    {id: 0, labelKey: 'unitedStates', value: 38},
    {id: 1, labelKey: 'germany', value: 24},
    {id: 2, labelKey: 'greece', value: 18},
    {id: 3, labelKey: 'unitedKingdom', value: 12},
    {id: 4, labelKey: 'otherLocations', value: 8},
]

export default function TrafficByLocation() {
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
                    {t('trafficByLocation')}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {t('trafficByLocationDescription')}
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    minWidth: 0,
                }}
            >
                <PieChart
                    height={300}
                    series={[
                        {
                            data: locationData.map((location) => ({
                                id: location.id,
                                label: t(location.labelKey),
                                value: location.value,
                            })),
                            innerRadius: 65,
                            outerRadius: 100,
                            paddingAngle: 3,
                            cornerRadius: 4,
                            highlightScope: {fade: 'global', highlight: 'item'},
                            faded: {
                                innerRadius: 60,
                                additionalRadius: -5,
                                color: theme.palette.action.disabled,
                            },
                        },
                    ]}
                    colors={[
                        theme.palette.primary.main,
                        theme.palette.secondary.main,
                        theme.palette.success.main,
                        theme.palette.info.main,
                        theme.palette.text.disabled,
                    ]}
                    slotProps={{
                        legend: {
                            direction: 'horizontal',
                            position: {vertical: 'bottom', horizontal: 'center'},
                        },
                    }}
                    sx={{
                        '& .MuiChartsLegend-label': {
                            fill: theme.palette.text.secondary,
                        },
                    }}
                />
            </Box>
        </Paper>
    )
}
