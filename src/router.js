import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // About
    {
      path: '/about/:slug',
      props: true,
      component: () => import('./views/about/About.vue')
    },
    {
      path: '/legal-notice',
      component: () => import('./views/about/LegalNotice.vue')
    },
    {
      path: '/site-map',
      component: () => import('./views/about/SiteMap.vue')
    },
    // Contact
    {
      path: '/contact-us',
      component: () => import('./views/contact/Contact.vue')
    },
    {
      path: '/newsletter',
      component: () => import('./views/contact/Newsletter.vue')
    },
    {
      path: '/message',
      component: () => import('./views/contact/Message.vue')
    },
    // Practice Areas
    {
      path: '/practice-areas/:slug',
      props: true,
      component: () => import('./views/practices/Practice.vue')
    },
    // Presences
    {
      path: '/presence/:slug',
      props: true,
      component: () => import('./views/presences/Presence.vue')
    },
    // Services
    {
      path: '/services/:slug',
      props: true,
      component: () => import('./views/services/Service.vue')
    },
    {
      path: '/alerts',
      component: () => import('./views/newsPublications/Alerts.vue')
    },
    {
      path: '/events',
      component: () => import('./views/newsPublications/Events.vue')
    },
    {
      path: '/multimedia',
      component: () => import('./views/newsPublications/Multimedia.vue')
    },
    {
      path: '/news',
      component: () => import('./views/newsPublications/News.vue')
    },
    {
      path: '/publications',
      component: () => import('./views/newsPublications/Publications.vue')
    },
    {
      path: '/publication/:id',
      props: true,
      component: () => import('./views/publications/Publication.vue')
    },
    {
      path: '/webinars',
      component: () => import('./views/newsPublications/Webinars.vue')
    },
    // Profile
    {
      path: '/profile/:slug',
      props: true,
      component: () => import('./views/profile/Profile.vue')
    },
    {
      path: '**',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
