import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import { supabase } from '@/services/Supabase'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/login', name: 'Login', component: LoginView },
        { path: '/register', name: 'Register', component: RegisterView },
        // {
        //     path: '/dashboard',
        //     name: 'Dashboard',
        //     component: DashboardView,
        //     meta: { requiresAuth: true },
        // },
    ],
})

// router.beforeEach(async (to, from, next) => {
//     const { data } = await supabase.auth.getSession()
//     const user = data?.session?.user

//     if (to.meta.requiresAuth && !user) {
//         next('/login')
//     } else {
//         next()
//     }
// })

export default router
