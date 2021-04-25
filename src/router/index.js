import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film/film.vue'
import Cinema from '@/views/Cinema/cinema.vue'
import Center from '@/views/Center/center.vue'
import Nowplaying from '@/views/Nowplaying/nowplaying'
import Comingsoon from '@/views/Comingsoon/comingsoon'
import Search from '@/views/Search/search'
import Detail from '@/views/Detail/detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [ // 嵌套路由是第一页和第二页可以并存的， 二级路由是两个页面可以不相关的
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  { // 嵌套路由是第一页和第二页可以并存的， 二级路由是两个页面可以不相关的
    path: '/cinema/search',
    component: Search
  },
  {
    name: 'kerwin', // 命名路由获取参数
    path: '/detail/:myid', // 动态路由
    component: Detail
  },
  {
    path: '/login',
    component: () => import('@/views/Login/login') // 懒加载写法，防止代码过重
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '*', // 重定向
    redirect: '/film'
  }
]

const router = new VueRouter({
  // mode:'history',
  routes
})

// 全局守卫
// router.beforeEach((to,Film,next)=>{
//   var permission = ['/order','/car','center'];
//   if(permission.includes(to.path)){
//     //是否已经登陆
//     console.log('检查')
//     if(localStorage.getItem('token')){
//       next()
//     }else{
//       next('/login')
//     }
//   }
// })
export default router
