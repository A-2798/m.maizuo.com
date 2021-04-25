<template>

    <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
    </ul>

</template>
<script>
export default {
  data () {
    return {

    }
  }

}
</script>
<style lang="scss" scoped>
   ul{
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 100;
    position: sticky; //粘性定位
    top: 0px;
    background-color: white;

    li{
      flex:1
    }
  }
  .active{
    color:red;
  }
</style>
