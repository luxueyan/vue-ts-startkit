// /// <reference path="../../node_modules/@types/webpack-env/index.d.ts" />

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
    path: '/',
    name: 'Hello',
    component: resolve => require(['@/components/Hello.vue'], resolve)
  }, {
    path: '/demo',
    name: 'Demo',
    component: resolve => require(['@/components/demo/index'], modules => resolve(modules.default)) // ts 文件返回来的不是VueComponent而是modules
  }]
})
