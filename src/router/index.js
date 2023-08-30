import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PrimerPost from '../components/post/PrimerPost.vue'
import SegundoPost from '../components/post/SegundoPost.vue'
import MejorandoEstilo from '../components/post/MejorandoEstilo.vue'
import ComparandoEstilos from '../components/post/ComparandoEstilos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
      component: PostsView  
  },
  {
    path: '/posts/primerpost',
    name: 'primerpost',
    component: PrimerPost
  },
  {
    path: '/posts/segundopost',
    name: 'segundopost',
    component: SegundoPost
  },
  {
    path: '/posts/mejorandoestilo',
    name: 'mejorandoestilo',
    component: MejorandoEstilo
  },
  {
    path: '/posts/comparandoestilos',
    name: 'comparandoestilos',
    component: ComparandoEstilos
  }
//  {
//    path: '/about',
//    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //  }    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
 
