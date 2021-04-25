<template>
  <div class="swiper-container" :class="title">
          <div class="swiper-wrapper">
              <slot></slot>
          </div>

  </div>
</template>
<script>
import Swiper from 'swiper/bundle'// swiper总包
import 'swiper/swiper-bundle.css'
export default {
  props: {
    perview: {
      type: Number
    },
    loop: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    }
  },
  // 每次更新都会重新执行
  mounted () {
    new Swiper('.' + this.title, {
      loop: this.loop,
      slidesPerView: this.perview,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
