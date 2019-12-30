import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login.vue' // 登录
import welcome from '../views/welcome'  // 欢迎页
import index from '../views/index';  // 首页
import watch from '../views/watch-computed/watch';  // 主体
import page2 from '../views/page2/page2';  // 主体
import ueditor from '../views/editor/ueditor';  // 富文本ueditor
import quill from '../views/editor/quill';  // 富文本quill
import wangeditor from '../views/editor/wangeditor';  // 富文本wangeditor
import animate from '../views/animate/modal';  // animate
import mpoint from '../views/others/mpoint';  // 锚点
import vuex from '../views/vuex/vuex';  // vuex测试页
import father from '../views/components-value/father';  // 动态组件
import echart from '../views/echart/echart';  // echart图表

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'login',component: login},
    {
      path: '/index', component: index, name: 'index',  redirect: {name: 'welcome'}, 
        children: [
            {  path: 'welcome', component: welcome, name: 'welcome'  },
            {  path: 'watch', component: watch, name: 'watch'  },
            {  path: 'page2', component: page2, name: 'page2'  },
            {  path: 'quill', component: quill, name: 'quill'  },
            {  path: 'wangeditor', component: wangeditor, name: 'wangeditor'  },
            {  path: 'ueditor', component: ueditor, name: 'ueditor'  },
            {  path: 'mpoint', component: mpoint, name: 'mpoint'  },
            {  path: 'animate', component: animate, name: 'animate'  },
            {  path: 'vuex', component: vuex, name: 'vuex'  },
            {  path: 'father', component: father, name: 'father'  },
            {  path: 'echart', component: echart, name: 'echart'  },
        ]
    },
  ]
})
