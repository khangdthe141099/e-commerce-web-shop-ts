import { lazy } from 'react'

//Layout: 
const Layout = lazy(() => import("../layouts"));

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const ProductList = lazy(() => import("./pages/product/product-list"))
const ProductDetail = lazy(() => import("./pages/product/product-detail"))
const ProductNew = lazy(() => import("./pages/product/product-new"))
const UserList = lazy(() => import("./pages/user/user-list"))
const UserDetail = lazy(() => import("./pages/user/user-detail"))
const UserNew = lazy(() => import("./pages/user/new-user"))

const routes = [
    {
        path: '/',
        exact: true,
        public: true,
        component: Home,
        layout: Layout
    },
    {
        path: '/products',
        exact: true,
        public: true,
        component: ProductList,
        layout: Layout
    },
    {
        path: '/product/:productId',
        exact: true,
        public: true,
        component: ProductDetail,
        layout: Layout
    },
    {
        path: '/newproduct',
        exact: true,
        public: true,
        component: ProductNew,
        layout: Layout
    },
    {
        path: '/login',
        exact: true,
        public: true,
        component: Login,
        layout: null
    },
    {
        path: '/users',
        exact: true,
        public: true,
        component: UserList,
        layout: Layout
    },
    {
        path: '/user/:userId',
        exact: true,
        public: true,
        component: UserDetail,
        layout: Layout
    },
    {
        path: '/newUser',
        exact: true,
        public: true,
        component: UserNew,
        layout: Layout
    },
]

export default routes
