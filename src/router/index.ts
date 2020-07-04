import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Spotify from '@/views/auth/Spotify.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: Home,
        children: []
    },
    {
        name: 'login',
        path: '/auth/login',
        component: Login
    },
    {
        name: 'spotify',
        path: '/auth/spotify',
        component: Spotify
    }
];

export default new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes });