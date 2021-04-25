<template>
  <div class="swiper-container kerwin">
          <div class="swiper-wrapper">
              <slot></slot>
          </div>
         <div class="swiper-pagination"></div>    <!-- 轮播小白点 -->
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'// swiper总包
import 'swiper/swiper-bundle.css'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  // 每次更新都会重新执行
  mounted () {
    new Swiper('.swiper-container', {
      loop: this.loop,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-pagination{
      margin-left: 150px;
  }
</style>
