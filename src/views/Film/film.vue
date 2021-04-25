<template >
  <div>
    <film-swiper>
      <div class="swiper-slide" v-for="item in looplist" :key="item.id">
        <div :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>
      </div>
    </film-swiper>

    <filem-nav></filem-nav>
     <nowplaying></nowplaying>
  </div>
</template>

<script>
import filmSwiper from '../../components/Swiper/swiper.vue'
import filemNav from '@/views/Filemnav/filemnav'
import nowplaying from '@/views/Nowplaying/nowplaying.vue'
export default {
  components: {
    filmSwiper,
    nowplaying, // 局部引入
    filemNav
  },
  data () {
    return {
      looplist: [
        {
          id: '111',
          imgUrl: 'https://pic.maizuo.com/usr/movie/7cdc1831fb22cf2f9d2bef30d6010f14.jpg?x-oss-process=image/quality,Q_70'
        },
        {
          id: '222',
          imgUrl: 'https://pic.maizuo.com/usr/movie/12e7b5e16993db815f598d56c57b5125.jpg?x-oss-process=image/quality,Q_70'
        },
        {
          id: '333',
          imgUrl: 'https://pic.maizuo.com/usr/movie/4c82f21cc3469374941a59fe32fd05c9.jpg?x-oss-process=image/quality,Q_70'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide div {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }
</style>
