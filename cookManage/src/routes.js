import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Admin from './components/Admin'
import About from './components/about/About'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


export const routes = [
    {
        path: '/', name: 'homeLink', components: {
            default: Home,
            'orderingGuide': OrderingGuide,
            'delivery': Delivery,
            'history': History
        }
    },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/Login', name: 'loginLink', component: Login },
    {
        path: '/About', name: 'aboutLink', redirect: '/about/contact', component: About, children: [
            {
                path: '/about/contact', name: 'contactLink', redirect: '/personName', component: Contact,
                // 三级路由
                children: [
                    { path: '/phone', name: "phoneNumber", component: Phone },
                    { path: '/personName', name: "personName", component: PersonName },

                ]
            },
            { path: '/about/History', name: 'historyLink', component: History },
            { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide },

        ]
    },
    { path: '/Register', name: 'registerLink', component: Register },
    { path: '/Admin', name: 'adminLink', component: Admin },
    { path: '*', redirect: '/' }
]