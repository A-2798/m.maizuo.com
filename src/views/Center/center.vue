<template>
  <div>
    <!-- 把ref="mynavbar"写在van-nav-bar中就可以动态获取屏幕nav的高度 -->
   <van-nav-bar     
      title="影院"
      @click-left="onClickLeft()"
      @click-right="onClickRight()"
    >
    <template #left>
      上海
        <van-icon name="arrow-down"  size="18"/>
     </template>
      <template #right>
        <van-icon name="fire-o" color="#ee0a24" badge="9" size="18" />
      </template>
    </van-nav-bar>

    <div class="gundongtiao" :style="{ height: height }">
      <!-- //npm i --save better-scroll -->
      <ul>
        <li
          v-for="data in cinemas"
          :key="data.cinemaId"
          @click="handleclick(data.cinemaId)"
        >
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
import http from "@/views/Util/http.js";
import Vue from "vue";
import { NavBar, Icon } from "vant";
Vue.use(NavBar).use(Icon);
export default {
  data() {
    return {
      cinemas: [],
      height: "0px",
    };
  },

  mounted() {
    // 动态计算 屏幕高度减去导航栏 这样就整个页面正好
    this.height = document.documentElement.clientHeight - 50 + "px";  //- this.$refs.mynavbar.$el.clientHeight + 'px'这个是动态减去导航栏的高度
    http({
      url: "/gateway?cityId=310100&ticketFlag=1&k=5014430",
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data);
      this.cinemas = res.data.data.cinemas;

      // 异步操作
      this.$nextTick(() => {
        new BetterScroll(".gundongtiao", {
          scrollbar: {
            fade: true, // 如果改成false不滚动的时候滚动条会一直在
          },
          click: true, // 用了betterScroll后默认不支持点击需要加上这段话才能可以点击页面实现点击传值
        });
      });
    });
  },
  methods: {
    handleclick(id) {
      console.log(id);
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  padding: 10px;
  .address {
    color: violet;
    font-size: 12px;
  }
}
.gundongtiao {
  position: relative; //为了保证到每一页的滚动条到页面最底部
  overflow: hidden;
}
</style>
