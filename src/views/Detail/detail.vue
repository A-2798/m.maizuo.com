<template>
  <div v-if="info">

     <data-header v-top :title="info.name"></data-header> <!-- 指令 -->

    <div :style="{
      backgroundImage:'url('+ info.poster+')'
    }" class="deta"></div>
    <!-- 基本信息 -->
    <div>
       <div>{{info.name}} {{info.item.name}}</div>
       <div>{{info.category}}</div>
       <div>{{info.premiereAt | dateFilter}}上映</div>
       <div>{{info.nation}} | {{info.runtime}}分钟</div>
    </div>
    <!-- 详细信息 -->
     <div>
      <div :class=" isHidden?'xinxi':''  " >
        {{info.synopsis}}
      </div>
      <div style="text-align:center;">
        <i class="iconfont" :class=" isHidden?'icon-moreunfold':'icon-less'" @click="isHidden=!isHidden"></i>
      </div>
    </div>
    <!-- 演员人员 -->
    <div>
      <div>演员</div>
      <detail-swiper :perview='3' title="actors">
        <div class="swiper-slide" v-for="(item,index) in info.actors" :key="index">
          <img :src="item.avatarAddress" alt="">
          <div style="text-align:center;">{{item.name}}</div>
          <div style="text-align:center;">{{item.role}}</div>
        </div>
      </detail-swiper>
    </div>
    <!-- 剧照 -->
    <div>
      <div>剧照</div>
      <detail-swiper :perview='2' title="photo" >
        <div class="swiper-slide" v-for="(item,index) in info.photos" :key="index">
          <div :style="{backgroundImage:'url('+item+')'}" class="poto" @click="preview(index)"></div>
        </div>
      </detail-swiper>
    </div>
  </div>
</template>
<script>
import http from '@/views/Util/http'
import Vue from 'vue'
import moment from 'moment'
import '@/views/Util/top.js'
import detailSwiper from '@/views/Dataswiper/dataswiper.vue'
import dataHeader from '@/views/Dataheader/dataheader.vue'
import { ImagePreview } from 'vant'
// 时间过滤器
Vue.filter('dateFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
// 指令

export default {
  data () {
    return {
      info: null,
      isHidden: true
    }
  },
  components: {
    detailSwiper,
    dataHeader
  },
  methods: {
    preview (index) {   //图片放大预览功能
      ImagePreview({
        images: this.info.photos,
        startPosition: 1 // vant组件库表示循环
      })
    }
  },
  mounted () {
    console.log('利用id获取后端数据', this.$route.params.myid)
    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=1807430`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res)
      this.info = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
.deta{
  background-position: center;
  height: 200px;
  background-size: cover;
}
.poto{
 background-position: center;
  height:200px;
  background-size: cover;
}
.xinxi{
  overflow: hidden;
  height: 55px;
}

img{
  width: 100%;
}
</style>
