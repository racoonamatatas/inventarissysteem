import {routes} from '../domains/inventory/routes';
import {createRouter, createWebHistory, type Router} from 'vue-router';

export const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});
