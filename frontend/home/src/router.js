import Vue from 'vue';
import Router from 'vue-router';

import About from './components/About.vue'
import Blog from './components/Blog.vue'
import Places from './components/Places.vue'
// Asynchronously import components
// const Places = () => import('./components/Places.vue')

// import NotFound from './components/NotFound.vue'
const NotFound = () => import('./components/NotFound.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: ':year/:month/:day/:title',
        }
      ]
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
