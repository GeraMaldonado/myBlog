import PrimerPost from '../components/post/PrimerPost.vue'
import SegundoPost from '../components/post/SegundoPost.vue'
import MejorandoEstilo from '../components/post/MejorandoEstilo.vue'
import ComparandoEstilos from '../components/post/ComparandoEstilos.vue'
import MetasBlog from '../components/post/MetasBlog.vue'

const postsRoutes = [
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
  },
  {
    path: '/post/metasblog',
    name: 'metasblog',
    component: MetasBlog
  },    
]

export default postsRoutes
 
