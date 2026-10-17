import {useState} from 'react'
import {
    ChevronRight,
    ExpandMore,
} from '@mui/icons-material'
import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import {NavLink, useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {
    navigationItems,
    dashboardItems,
    pageGroups,
} from './navigation.js'

export default function SidebarNavigation({desktop, onClose}) {
    const {t} = useTranslation()
    const location = useLocation()

    const [expandedGroups, setExpandedGroups] = useState({
        userProfile: true,
    })

    const toggleGroup = (key) => {
        setExpandedGroups((current) => ({
            ...current,
            [key]: !current[key],
        }))
    }

    const isPathActive = (path) =>
        path === '/'
            ? location.pathname === '/'
            : location.pathname === path ||
            location.pathname.startsWith(`${path}/`)

    const renderLink = ({labelKey, path, icon: Icon}, nested = false) => (
        <ListItemButton
            key={path}
            component={NavLink}
            to={path}
            end={path === '/'}
            onClick={desktop ? undefined : onClose}
            sx={{
                minHeight: 40,
                pl: nested ? 5 : 1.5,
                pr: 1.5,
                mb: 0.5,
                borderRadius: 2,
                color: 'text.secondary',
                '& .MuiListItemIcon-root': {
                    color: 'inherit',
                    minWidth: 36,
                },
                '&.active': {
                    bgcolor: 'action.selected',
                    color: 'primary.main',
                },
                '&.active .MuiListItemText-primary': {
                    fontWeight: 600,
                },
            }}
        >
            {Icon && (
                <ListItemIcon>
                    <Icon fontSize="small"/>
                </ListItemIcon>
            )}

            <ListItemText
                primary={t(labelKey)}
                primarytypographyprops={{variant: 'body2'}}
            />
        </ListItemButton>
    )

    const renderGroup = (group) => {
        const key = group.labelKey
        const Icon = group.icon
        const children = group.children ?? []
        const expanded = Boolean(expandedGroups[key])
        const childActive = children.some((child) =>
            isPathActive(child.path),
        )

        return (
            <Box key={key}>
                <ListItemButton
                    onClick={() => toggleGroup(key)}
                    sx={{
                        minHeight: 40,
                        px: 1.5,
                        mb: 0.5,
                        borderRadius: 2,
                        color: childActive
                            ? 'primary.main'
                            : 'text.secondary',
                    }}
                >
                    <ListItemIcon sx={{color: 'inherit', minWidth: 28}}>
                        {expanded ? (
                            <ExpandMore fontSize="small"/>
                        ) : (
                            <ChevronRight fontSize="small"/>
                        )}
                    </ListItemIcon>

                    <ListItemIcon sx={{color: 'inherit', minWidth: 36}}>
                        <Icon fontSize="small"/>
                    </ListItemIcon>

                    <ListItemText
                        primary={t(key)}
                        primarytypographyprops={{variant: 'body2'}}
                    />
                </ListItemButton>

                {children.length > 0 && (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {children.map((child) => renderLink(child, true))}
                        </List>
                    </Collapse>
                )}
            </Box>
        )
    }

    return (
        <Box sx={{flex: 1, overflowY: 'auto', px: 1, pb: 1}}>
            <List disablePadding>
                {navigationItems.map((item) => renderLink(item))}
            </List>

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{display: 'block', px: 1.5, mt: 2.5, mb: 1}}
            >
                {t('dashboardsSection')}
            </Typography>

            <List disablePadding>
                {dashboardItems.map((item) => {
                    if (item.children?.length) {
                        return renderGroup(item)
                    }

                    if (item.expandable) {
                        const Icon = item.icon
                        const expanded = Boolean(expandedGroups[item.labelKey])

                        return (
                            <ListItemButton
                                key={item.path}
                                onClick={() => toggleGroup(item.labelKey)}
                                sx={{
                                    minHeight: 40,
                                    px: 1.5,
                                    borderRadius: 2,
                                    mb: 0.5,
                                }}
                            >
                                <ListItemIcon sx={{minWidth: 28}}>
                                    {expanded ? (
                                        <ExpandMore fontSize="small"/>
                                    ) : (
                                        <ChevronRight fontSize="small"/>
                                    )}
                                </ListItemIcon>

                                <ListItemIcon sx={{minWidth: 36}}>
                                    <Icon fontSize="small"/>
                                </ListItemIcon>

                                <ListItemText
                                    primary={t(item.labelKey)}
                                    primarytypographyprops={{variant: 'body2'}}
                                />
                            </ListItemButton>
                        )
                    }

                    return renderLink(item)
                })}
            </List>

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{display: 'block', px: 1.5, mt: 2.5, mb: 1}}
            >
                {t('pagesSection')}
            </Typography>

            <List disablePadding>
                {pageGroups.map((group) => renderGroup(group))}
            </List>
        </Box>
    )
}