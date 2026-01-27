import type {RouteRecordRaw} from 'vue-router';
import OverviewPage from './pages/OverviewPage.vue';

export const routes: RouteRecordRaw[] = [{path: '/overview', component: OverviewPage, name: 'inventory.overview'}];
