import Vue from 'vue' // 指令封装

// 指令
Vue.directive('top', {

  unbind () { // 指令消亡周期，目的是只让他在这一个页面有用
    window.onscroll = null
  },
  inserted (el) {
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 60) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
})
