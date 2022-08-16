import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/pages/HomeView/HomeView.vue';
import HealthState from '../views/pages/healthState/healthState.vue';
import PerformanceView from '../views/pages/performanceView/performanceView.vue';
import JsView from '../views/test/js.vue';
import NetworkView from '../views/test/network.vue';
import DangerView from '../views/pages/dangerView/dangerView.vue';
<<<<<<< HEAD
import JkhsfxView from '../views/pages/jkhsfxView/jkhsfxView.vue';
import YmxnfxView from '../views/pages/ymxnfxView/ymxnfxView.vue';
=======
>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // 如果是根目录的话重定向到overview
      redirect:"/overview",
      children:[
        {
          path:"/overview",
          name:"overview",
          component:() => import("../views/pages/overView/overView.vue")
        },
        {
          path:"/healthstate",
          name:"healthstate",
          component: HealthState
        },     
        {
            path:"/performance",
            name:"performance",
            component: PerformanceView
        },      
        {
            path:"/danger",
            name:"danger",
            component: DangerView
        }
      ]
    },
    {
        path: '/test/js',
        name: 'JsView',
        component: JsView
    }, 
    {
        path: '/test/network',
        name: 'NetworkView',
        component: NetworkView
    }, 
<<<<<<< HEAD
    {
      path: '/jkhsfx',
      name: 'jkhsfx',
      component: JkhsfxView
    },  
    {
      path: '/ymxnfx',
      name: 'ymxnfx',
      component: YmxnfxView
    },  
=======

>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router

// const router = createRouter({
//     history: createWebHistory(
//         import.meta.env.BASE_URL),
//     routes: [  {
//             path: '/',
//             name: home,
//             component:HomeView
//             //redirect 是重新定向
//             // redirect: '/test/network'
//         },
//         {
//             path: '/test/js',
//             name: 'JsView',
//             component: JsView
//         }, {
//             path: '/test/network',
//             name: 'NetworkView',
//             component: NetworkView
//         }, 

//     ]
// })

// export default router