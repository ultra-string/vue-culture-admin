import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
/* 手艺网用户系统 */
import UserCenter from '@/views/am-structure/UserCenter'
/* 手艺网目录结构 */
import Structure from '@/views/am-structure/TreeStructure'
/* 手艺网浮窗配置 */
import FloatingWindow from '@/views/am-structure/FloatingWindow'
/* 手艺网banner */
import Branner from '@/views/am-structure/Banner'
/* 手艺网二维码 */ 
import QRcode from '@/views/am-structure/QRcode'
/* 手艺网二维码 */ 
import NewMedia from '@/views/am-structure/NewMedia'
/* 手艺网头条 */ 
import Headline from '@/views/am-content/Headline'
/* 手艺专题策划 */ 
import Thematic from '@/views/am-content/Thematic'
/* 手艺网广告 */ 
import Advertisement from '@/views/am-content/Advertisement'
/* 手艺网官方信息 */ 
import Information from '@/views/am-content/Information'
/* 手艺网文件管理系统 */ 
import ImageCenter from '@/views/am-images/ImageCenter'
/* 手艺网用户管理系统 */ 
import UserInfo from '@/views/am-user/UserInfo'
/* 手艺网富文本编辑器 */
import Ueditor from '@/views/am-content/addver'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  /* 手艺网添加的路由 */
  {
    path: '',
    component: Layout,
    redirect: 'userCenter',
    children: [{
      path: 'userCenter',
      component: UserCenter,
      name: 'userCenter',
      meta: {
        title: '用户管理',
        icon: 'excel'
      }
    }]
  }, 
  /* 手艺网添加的路由 */
  // {
  //   path: '/userInfo',
  //   component: Layout,
  //   redirect: '/userInfo/index',
  //   children: [{
  //     path: 'index',
  //     component: UserInfo,
  //     name: 'userInfo',
  //     meta: {
  //       title: '用户管理系统',
  //       icon: 'excel'
  //     }
  //   }]
  // }, 
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: 'dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     component: _import('dashboard/index'),
  //     name: 'dashboard',
  //     meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
  //   }]
  // },
  // 手艺网添加的路由
  // 目录结构
  {
    path: '/structure',
    component: Layout,
    redirect: '/structure/index',
    children: [{
      path: 'index',
      component: Structure,
      name: 'structure',
      meta: {
        title: '目录结构',
        icon: 'excel'
      }
    }]
  },
  //  浮窗配置 FloatingWindow
  {
      path: '/floatingWindow',
      component: Layout,
      redirect: '/floatingWindow/index',
      children: [{
        path: 'index',
        component: FloatingWindow,
        name: 'floatingWindow',
        meta: {
          title: '浮窗配置',
          icon: 'excel'
        }
      }]
  },
  // banner
  {
      path: '/banner',
      component: Layout,
      redirect: '/banner/index',
      children: [{
        path: 'index',
        component: Branner,
        name: 'banner',
        meta: {
          title: 'banner',
          icon: 'excel'
        }
      }]
  },
  // 二维码 QRcode
  {
    path: '/QRcode',
    component: Layout,
    redirect: '/QRcode/index',
    children: [{
      path: 'index',
      component: QRcode,
      name: 'QRcode',
      meta: {
        title: '二维码',
        icon: 'excel'
      }
    }]
  },
  // 新媒体
  {
    path: '/newMedia',
    component: Layout,
    redirect: '/newMedia/index',
    children: [{
      path: 'index',
      component: NewMedia,
      name: 'newMedia',
      meta: {
        title: '新媒体',
        icon: 'excel'
      }
    }]
  }, 
  // 头条  Headline
  {
    path: '/headline',
    component: Layout,
    redirect: '/headline/index',
    children: [{
      path: 'index',
      component: Headline,
      name: 'headline',
      meta: {
        title: '头条',
        icon: 'excel'
      }
    }]
  }, 
  // 专题策划
  {
    path: '/thematic',
    component: Layout,
    redirect: '/thematic/index',
    children: [{
      path: 'index',
      component: Thematic,
      name: 'thematic',
      meta: {
        title: '专题策划',
        icon: 'excel'
      }
    }]
  },
  // 广告 Advertisement
  {
    path: '/advertisement',
    component: Layout,
    redirect: '/advertisement/index',
    children: [{
      path: 'index',
      component: Advertisement,
      name: 'advertisement',
      meta: {
        title: '广告',
        icon: 'excel'
      }
    }]
  },
  // 官方信息 information
  {
    path: '/information',
    component: Layout,
    redirect: '/information/index',
    children: [{
      path: 'index',
      component: Information,
      name: 'information',
      meta: {
        title: '广告',
        icon: 'excel'
      }
    }]
  },
  // 文件管理系统 ImageCenter
  {
    path: '/imageCenter',
    component: Layout,
    redirect: '/imageCenter/index',
    children: [{
      path: 'index',
      component: ImageCenter,
      name: 'imageCenter',
      meta: {
        title: '图片/视频',
        icon: 'excel'
      }
    }]
  },
  // 个人信息页面
  {
    path: '/userInfo',
    component: Layout,
    redirect: '/userInfo/index',
    children: [{
      path: 'index',
      component: UserInfo,
      name: 'userInfo',
      meta: {
        title: '基本资料',
        icon: 'excel'
      }
    }]
  },
  // 富文本编辑器 Ueditor
  {
      path: '/addver',
      component: Layout,
      redirect: '/addver/index',
      children: [{
        path: 'index',
        component: Ueditor,
        name: 'ueditor',
        meta: {
          title: '富文本编辑器',
          icon: 'excel'
        }
      }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router =  new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// export const asyncRouterMap = [
// ]

// 判断登陆的导航钩子
router.beforeEach((to, from, next) => {
  // 页面刷新时，重新赋值token
  // if (window.sessionStorage.getItem("token")) {
  //   store.dispatch("storeToken", window.sessionStorage.getItem("token"));
  // }
  if (to.meta.requireAuth) {
    store.dispatch("FROM_PATH", from.fullPath);
    store.dispatch("TO_PATH", to.fullPath);
    if (store.state.common.token != "" && store.state.common.token != null) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});


export default router;