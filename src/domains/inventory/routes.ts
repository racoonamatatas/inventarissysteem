import type {RouteRecordRaw} from 'vue-router';
import OverviewPage from './pages/OverviewPage.vue';
import AddPage from './pages/AddPage.vue';
import EditPage from './pages/EditPage.vue';

export const routes: RouteRecordRaw[] = [
    {path: '/overview', component: OverviewPage, name: 'inventory.overview'},
    {path: '/add', component: AddPage, name: 'inventory.add'},
    {path: '/edit/:id', component: EditPage, name: 'inventory.edit'},
];
