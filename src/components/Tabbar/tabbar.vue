<template>
  <div>
    <footer>
      <ul>
        <!-- 声明式导航 -->
        <router-link to="/film" tag="li" active-class="kerwin">
          <i class="iconfont icon-index"></i>
          <span>film</span>
        </router-link>
        <router-link to="/center" tag="li" active-class="kerwin">
          <i class="iconfont icon-shangpin"></i>
          <span>center</span>
        </router-link>
        <router-link to="/cinema" tag="li" active-class="kerwin">
          <i class="iconfont icon-wode"></i>
          <span>cinema</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<script>
import '@/assets/fonst/iconfont.css'
export default {
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>
<style lang="scss">
.kerwin {
  color: red;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 52px;
  line-height: 25px;
  z-index: 100;
  text-align: center;
  background: white;
  ul {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      flex: 1;
    i{
     font-size: 20px;
    }
    span{
      font-size: 12px;
    }
    }
  }
}

</style>
