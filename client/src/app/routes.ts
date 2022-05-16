import { lazy } from 'react'

const Home = lazy(() => import("./pages/home"));
const ProductDetail = lazy(() => import("./pages/product-detail"));
const ProductList = lazy(() => import("./pages/products-list"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));
const Cart = lazy(() => import("./pages/card"));
const Success = lazy(() => import("./pages/success"));
const DetailNft = lazy(() => import("./pages/detail-nft"));

const Test = lazy(() => import("./pages/product-list"))

const routes = [
    {
        path: '/',
        exact: true,
        public: true,
        component: Home
    },
    {
        path: '/products/:category',
        exact: true,
        public: true,
        component: ProductList
    },
    {
        path: '/products',
        exact: true,
        public: true,
        component: ProductList
    },
    {
        path: '/product/:id',
        exact: true,
        public: true,
        component: ProductDetail
    },
    {
        path: '/cart/:id',
        exact: true,
        public: true,
        component: Cart
    },
    {
        path: '/success',
        exact: true,
        public: true,
        component: Success
    },
    {
        path: '/login',
        exact: true,
        public: true,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        public: true,
        component: Register
    },
    {
        path: '/detail-nft',
        exact: true,
        public: true,
        component: DetailNft
    }
]

export default routes
