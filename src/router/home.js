import Main from 'components/common/main/Index'
const Home = () => import('views/home/Index')

export default [
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    title: '主页',
                    icon: 'md-home'
                }
            }
        ]
    },

]
