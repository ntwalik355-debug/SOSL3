import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Place from '../views/place.vue'
import service from '@/views/service.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/about',
    name: 'About',
    component: About
}, {
    path: '/contact',
    name: 'Contact',
    component: Contact
}, {
    path: '/place',
    name: 'Place',
    component: Place
},



]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router


