import Vue from 'vue';
import Router from 'vue-router';

import route from './const/route';

import Home from './components/home';
import AevitasPrivacyPolicy from './components/aevitas-privacy-policy';
import LabaPOSPrivacyPolicy from './components/labapos-privacy-policy';
import OctalianaPrivacyPolicy from './components/octaliana-privacy-policy';
import SuburPlastWarehouseSystemPrivacyPolicy from './components/subur-plast-warehouse-system-privacy-policy';

import PageNotFound from './components/404';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: route.home,
            component: Home,
            meta: {
                title: 'Welcome to ATOM Tech Indonesia',
            },
        },
        {
            path: route.aevitasPrivacyPolicy,
            component: AevitasPrivacyPolicy,
            meta: {
                title: 'Privacy Policy',
            },
        },
        {
            path: route.labaposPrivacyPolicy,
            component: LabaPOSPrivacyPolicy,
            meta: {
                title: 'Privacy Policy',
            },
        },
        {
            path: route.octalianaPrivacyPolicy,
            component: OctalianaPrivacyPolicy,
            meta: {
                title: 'Privacy Policy',
            },
        },
        {
            path: route.suburPlastWarehouseSystemPrivacyPolicy,
            component: SuburPlastWarehouseSystemPrivacyPolicy,
            meta: {
                title: 'Privacy Policy',
            },
        },
        {
            path: '**',
            component: PageNotFound,
            meta: {
                title: 'Page not found',
            },
        },
    ],
});

export default router;
