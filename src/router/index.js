import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/index'

const IndexRoute = () => import('@/components/indexRouteView');

Vue.use(Router)

export default new Router({
  routes: [
  	{
  	  path: '/',
      redirect: '/index'
  	},
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: IndexRoute
    }
  ]
})
