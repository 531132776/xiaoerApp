// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
// import axios from 'axios'
import api from './http/axios.js'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'
import 'muse-ui-message/dist/muse-ui-message.css'
import 'swiper/dist/css/swiper.css'

import Message from 'muse-ui-message'
import Toast from 'muse-ui-toast'

import '@common/common.css'
import '@static/font/iconfont.css'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

// let bus = new Vue()
// Vue.prototype.bus = bus
let Hub = new Vue(); //创建事件中心
var options={
  fullscreenEl:false //关闭全屏按钮
}
Vue.use(preview, options)
// Vue.prototype.$http = api
Vue.use(api)
Vue.use(Message);//Message 弹框
Vue.use(Toast);//消息提示

FastClick.attach(document.body)
Vue.use(MuseUI)
Vue.config.productionTip = false
//路由跳转页面定位从顶部显示
// router.afterEach((to,from) => {/*在跳转之后判断*/
//   window.scrollTo(0,0);
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})