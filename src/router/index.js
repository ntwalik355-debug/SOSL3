import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Place from '../views/place.vue'
import Service from '@/views/service.vue'
import Destination from '@/views/destination.vue'
import Gallery from '@/views/gallery.vue'
import Kigali from '@/views/kigali.vue'
import Northern from '@/views/northern.vue'
import Southern from '@/views/southern.vue'
import Eastern from '@/views/eastern.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/services',
    name: 'Service',
    component: Service,
  },
  {
    path: '/place',
    name: 'Place',
    component: Place,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
  },
  {
    path: '/kigali',
    name: 'Kigali',
    component: Kigali,
  },
  {
    path: '/northern',
    name: 'Northern',
    component: Northern,
  },
  {
    path: '/southern',
    name: 'Southern',
    component: Southern,
  },
  {
    path: '/eastern',
    name: 'Eastern',
    component: Eastern,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router


