import { createRouter, createWebHistory } from 'vue-router';
import { authenticatedGuard } from '@/guards/authenticated.guard.js';
import { notAuthenticatedGuard } from '@/guards/not-authenticated.guard.js';
import Home from '@/components/home.vue';
import Login from '@/components/Login.vue';
import Empleado from '@/components/Empleado.vue';
const routes = [
    {
        path: '/',
      
            component:Home
    },
    {
        path: '/login',
        
        component:Login,
        beforeEnter: notAuthenticatedGuard
    },
    {
        path: '/empleados',
        
        component:Empleado,
        beforeEnter: authenticatedGuard
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;