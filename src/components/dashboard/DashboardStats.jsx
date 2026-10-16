import {Box} from '@mui/material'
import {useTranslation} from 'react-i18next'
import StatCard from './StatCard.jsx'

export default function DashboardStats() {
    const {t} = useTranslation()

    const stats = [
        {
            label: t('views'),
            value: '24,589',
            change: 12.8,
        },
        {
            label: t('visits'),
            value: '8,549',
            change: -3.2,
        },
        {
            label: t('newUsers'),
            value: '1,245',
            change: 8.4,
        },
        {
            label: t('activeUsers'),
            value: '573',
            change: -1.6,
        },
    ]

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    lg: 'repeat(4, minmax(0, 1fr))',
                },
                gap: 2,
            }}
        >
            {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
            ))}
        </Box>
    )
}
