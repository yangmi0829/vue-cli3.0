import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/layout/Home.vue'
const Test = () => import(/* webpackChunkName: "about" */ './views/test/Test.vue')
const Test2 = () => import(/* webpackChunkName: "about" */ './views/test/Test2.vue')
const TableTemplate = () => import(/* webpackChunkName: "about" */ './components/TableLayout.vue')

Vue.use(Router)

export default new Router({
  routes: [
    //@ts-ignore
    { path: '/404', hidden: true , component: () => import('./views/error/404.vue')},
    { path: '*', hidden: true , redirect: '/404' },
    { path: '/', hidden: true , redirect: '/demo/test' },
    {
      path: '/demo',
      name: 'home',
      component: Home,
      meta:{title:'菜单1'},
      children:[
        {
          path: 'test',
          name: 'test',
          meta:{title:'1-1'},
          component: Test
        },
        {
          path: 'test2',
          name: 'test2',
          meta:{title:'1-2'},
          component: Test2
        },
        {
          path: 'tableTemplate',
          name: 'tableTemplate',
          meta:{title:'tableTemplate'},
          component: TableTemplate
        }
      ]
    },
    {
      path: '/demo2',
      name: 'home',
      component: Home,
      meta:{title:'菜单2'},
      children:[
        {
          path: 'test',
          name: 'test',
          meta:{title:'2-1'},
          component: Test
        },
        {
          path: 'test2',
          name: 'test2',
          meta:{title:'2-2'},
          component: Test2
        }
      ]
    },

  ]
})
