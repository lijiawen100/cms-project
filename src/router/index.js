import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
const constanceRoutes = [
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        meta: {
          title: '首页'
        },
        component: () => import('@/pages/home')
      },
      {
        path: '/activity',
        name: 'activity',
        meta: {
          title: '活动管理'
        },
        component: () => import('@/pages/activity')
      }
    ]
  }
]
export default new Router({
  routes: constanceRoutes
})