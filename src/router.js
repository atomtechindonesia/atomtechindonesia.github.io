import Vue from 'vue';
import Router from 'vue-router';

import route from './const/route';

import Home from './components/home';
import AevitasPrivacyPolicy from './components/aevitas-privacy-policy';
import OctalianaPrivacyPolicy from './components/octaliana-privacy-policy';

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
            path: route.octalianaPrivacyPolicy,
            component: OctalianaPrivacyPolicy,
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
