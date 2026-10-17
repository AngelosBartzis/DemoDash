import {useState} from 'react'
import {
    Avatar,
    Box,
    Collapse,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import {
    AccountCircle,
    ChevronRight,
    ExpandMore,
    Logout,
    StarBorder,
} from '@mui/icons-material'
import {NavLink, Link as RouterLink, useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {
    navigationItems,
    dashboardItems,
    pageGroups,
} from './navigation.js'

export default function AppSidebar({
                                       open,
                                       onClose,
                                       isLoggedIn,
                                       onLogout,
                                       desktop = false,
                                   }) {
    const {t} = useTranslation()
    const location = useLocation()

    const [activeTab, setActiveTab] = useState('favorites')
    const [expandedGroups, setExpandedGroups] = useState({
        userProfile: true,
    })

    if (!isLoggedIn) {
        return null
    }

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

    const renderGroup = (group, index) => {
        const key = group.labelKey
        const Icon = group.icon
        const expanded = Boolean(expandedGroups[key])
        const hasChildren = group.children.length > 0
        const childActive = group.children.some((child) =>
            isPathActive(child.path),
        )

        return (
            <Box key={key}>
                <ListItemButton
                    onClick={() => {
                        if (hasChildren) {
                            toggleGroup(key)
                        }
                    }}
                    sx={{
                        minHeight: 40,
                        px: 1.5,
                        mb: 0.5,
                        borderRadius: 2,
                        color: childActive ? 'primary.main' : 'text.secondary',
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

                {hasChildren && (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {group.children.map((child) => renderLink(child, true))}
                        </List>
                    </Collapse>
                )}
            </Box>
        )
    }

    return (
        <Drawer
            variant={desktop ? 'permanent' : 'temporary'}
            anchor="left"
            open={desktop || open}
            onClose={onClose}
            sx={{
                width: desktop ? 240 : undefined,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: desktop ? 240 : 'min(280px, 85vw)',
                    boxSizing: 'border-box',
                    bgcolor: 'background.paper',
                    borderRight: 1,
                    borderColor: 'divider',
                },
            }}
        >
            <Box sx={{p: 2, display: 'flex', alignItems: 'center', gap: 1.5}}>
                <Avatar sx={{width: 36, height: 36}}>
                    <AccountCircle/>
                </Avatar>

                <Box sx={{minWidth: 0}}>
                    <Typography variant="body1" fontWeight={700} noWrap>
                        {isLoggedIn ? t('userName') : t('appName')}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display: 'flex', gap: 1, px: 1.5, py: 1}}>
                <ListItemButton
                    selected={activeTab === 'favorites'}
                    onClick={() => setActiveTab('favorites')}
                    sx={{minWidth: 0, borderRadius: 2, px: 1}}
                >
                    <StarBorder fontSize="small" sx={{mr: 0.75}}/>
                    <Typography variant="caption" fontWeight={600}>
                        {t('favorites')}
                    </Typography>
                </ListItemButton>

                <ListItemButton
                    selected={activeTab === 'recently'}
                    onClick={() => setActiveTab('recently')}
                    sx={{minWidth: 0, borderRadius: 2, px: 1}}
                >
                    <Typography variant="caption" fontWeight={600}>
                        {t('recently')}
                    </Typography>
                </ListItemButton>
            </Box>

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
                    {dashboardItems.map((item, index) =>
                        item.children?.length ? (
                            renderGroup(item, index)
                        ) : item.expandable ? (
                            <ListItemButton
                                key={item.path}
                                onClick={() => toggleGroup(item.labelKey)}
                                sx={{minHeight: 40, px: 1.5, borderRadius: 2, mb: 0.5}}
                            >
                                <ListItemIcon sx={{minWidth: 28}}>
                                    {expandedGroups[item.labelKey] ? (
                                        <ExpandMore fontSize="small"/>
                                    ) : (
                                        <ChevronRight fontSize="small"/>
                                    )}
                                </ListItemIcon>
                                <ListItemIcon sx={{minWidth: 36}}>
                                    <item.icon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={t(item.labelKey)}
                                    primarytypographyprops={{variant: 'body2'}}
                                />
                            </ListItemButton>
                        ) : (
                            renderLink(item)
                        ),
                    )}
                </List>

                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{display: 'block', px: 1.5, mt: 2.5, mb: 1}}
                >
                    {t('pagesSection')}
                </Typography>

                <List disablePadding>
                    {pageGroups.map((group, index) => renderGroup(group, index))}
                </List>
            </Box>

            <Divider/>

            <List sx={{p: 1}}>
                {isLoggedIn ? (
                    <ListItemButton onClick={onLogout} sx={{borderRadius: 2}}>
                        <ListItemIcon sx={{minWidth: 36}}>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText
                            primary={t('logout')}
                            primarytypographyprops={{variant: 'body2'}}
                        />
                    </ListItemButton>
                ) : (
                    <ListItemButton
                        component={RouterLink}
                        to="/login"
                        onClick={desktop ? undefined : onClose}
                        sx={{borderRadius: 2}}
                    >
                        <ListItemIcon sx={{minWidth: 36}}>
                            <Logout fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText
                            primary={t('login')}
                            primarytypographyprops={{variant: 'body2'}}
                        />
                    </ListItemButton>
                )}
            </List>
        </Drawer>
    )
}
