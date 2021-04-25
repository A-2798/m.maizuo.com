<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view> <!--轮播图 -->

  </div>
</template>
<script>
import tabbar from '@/components/Tabbar/tabbar.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    tabbar

  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html，body{
    height: 100%;
  }
  ul{
    list-style: none;
  }

</style>
