<template>
  <div>
      <span class="jiantou" @click="black">←</span>
   <header class="header">{{title}}</header>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['title'],
  methods: {
    black () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
  .header{
      width: 100%;
      height: 50px;
      background: white;
      line-height: 50px;
      text-align: center;
      position: fixed;
  }
  .jiantou{
      position: fixed;
      top: 15px;
      left: 10px;
      z-index: 100;
  }
</style>
