//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import router from './router.js'

import app from './app.vue'

var vm = new Vue({
  el: "#app",
  data: {

  },
  methods: {

  },
  router,
  render: c => c(app)
})