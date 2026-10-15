import {
    Assignment,
    CheckCircle,
    FolderOpen,
    Groups,
} from '@mui/icons-material'
import {Box} from '@mui/material'
import {useTranslation} from 'react-i18next'
import StatCard from './StatCard.jsx'

export default function DashboardStats() {
    const {t} = useTranslation()

    const stats = [
        {label: t('totalProjects'), value: '12', icon: FolderOpen},
        {label: t('activeTasks'), value: '8', icon: Assignment},
        {label: t('teamMembers'), value: '6', icon: Groups},
        {label: t('completed'), value: '24', icon: CheckCircle},
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
