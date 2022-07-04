import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart
  } from "@material-ui/icons";

export const dashboard = [
    {
        id: 1,
        name: 'Home',
        type: 'home',
        icon: <LineStyle className="sidebarIcon" />,
        link: '/'
    },
    {
        id: 2,
        name: 'Analytics',
        type: 'analytics',
        icon: <Timeline className="sidebarIcon" />,
        link: '/'
    },
    {
        id: 3,
        name: 'Sales',
        type: 'sales',
        icon: <TrendingUp className="sidebarIcon" />,
        link: '/'
    },
]

export const quickMenu = [
    {
        id: 1,
        name: 'Users',
        type: 'users',
        icon: <PermIdentity className="sidebarIcon" />,
        link: '/users'
    },
    {
        id: 2,
        name: 'Products',
        type: 'products',
        icon: <Storefront className="sidebarIcon" />,
        link: '/products'
    },
    {
        id: 3,
        name: 'Transactions',
        type: 'transactions',
        icon: <AttachMoney className="sidebarIcon" />,
        link: '/'
    },
    {
        id: 4,
        name: 'Reports',
        type: 'reports',
        icon: <BarChart className="sidebarIcon" />,
        link: '/'
    },
] 