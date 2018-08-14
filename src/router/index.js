import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Header from '@/components/Header'
import Sider from '@/components/Sider'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: Header,
    children: [
      {
        path: '/index',
        component: HelloWorld
      }
    ]
  },
  {
    path: '/header',
    name: 'header',
    component: Header,
    children: [
      {
        path: '/rsc',
        name: 'rsc',
        component: Sider,
        children: [
          {
            path: '/data_center',
            component: HelloWorld
          },
          {
            path: '/cpu',
            component: HelloWorld
          },
          {
            path: '/cabinet',
            component: HelloWorld
          }
        ]
      }
    ]
  }
]

const RouterConfig = {
  mode: 'history',
  routes: routes
}
export default new Router(RouterConfig)
