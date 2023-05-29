import {createRouter, createWebHistory} from 'vue-router';


import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import TypePage from './pages/TypePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';
import PageNotFound from './pages/PageNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: PageNotFound 
        }
    ]
});

export { router };