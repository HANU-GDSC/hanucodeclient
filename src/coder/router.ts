export default [
    // example:
    {
        path: '/login',
        name: 'Login',
        component: () => import("./AuthLogin.vue"), //paste the component needed
        meta: {
            type: 'auth'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component:  () => import("./AuthRegister.vue"), //paste the component needed
        meta: {
            type: 'auth'
        }
    },
    {
        path: '/userProfile',
        name: 'Profile',
        component:  () => import("./userProfile.vue"), //paste the component needed
        meta: {
            type: 'protected'
        }
    },
    {
        path: '/admin',
        name: 'AdminLogin',
        component:  () => import("./AdminLogin.vue"), //paste the component needed
        meta: {
            type: 'public'
        }
    },{
        path: '/AdminDashboard',
        name: 'AdminDashboard',
        component:  () => import("./AdminDashboard.vue"), //paste the component needed
        meta: {
            type: 'public'
        }
    }
]
