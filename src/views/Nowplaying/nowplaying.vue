<template>
  <div>
    <van-list  @load="onKerwinLoad"
        v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="我是有底线的"

    >
      <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster"/>
        <div style="font-size:20px;">{{data.name}}</div>
        <div v-show="data.grade">观众评分:{{data.grade}}</div>
        <div class="action">主演：{{data.actors | actionFilter}}</div>
        <div>{{data.nation}} | {{data.runtime}}分钟</div>

      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { List ,Cell} from 'vant';
import http from '@/views/Util/http'
Vue.use(List).use(Cell)

// 过滤器
Vue.filter("actionFilter", (actors) => {
            if (Array.isArray(actors)) {
                let arr = actors.map(item => { return item.name })
                return arr && arr.join("")
            } else {
                return '暂无'
            }
        })
export default {
  data () {
    return {
      datalist: [],
      loading:false,
      finished:false,
      current:1, //记录当前页数
      total:0
    }
  },
  mounted(){
    http({
      url:"/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5275130",
      // method:"post"
      headers:{
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data)
      this.datalist = res.data.data.films

      //总长度
      this.total = res.data.data.total
    })
  },
  methods: {
    onKerwinLoad(){
      console.log("到底了",this.datalist.length,this.total)
      if(this.datalist.length===0){
        this.loading = false
        return ;
      }
      if(this.datalist.length=== this.total){
        this.finished = true//请求结束，禁用懒加载
        return
      }

      this.current++
      http({
        url:`/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=5275130`,
        // method:"post"
        headers:{
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        // console.log(res.data)
        // setTimeout(()=>{

        // },100)

        this.datalist = [...this.datalist,...res.data.data.films]

          //loading改会false
        this.loading = false
      })

    },
    handleClick (id) {
      // 编程式导航
      // location.href="#/center"

      console.log(this.$router)
      this.$router.push(`/detail/${id}`) //detail ,传参， detail 接收参数，请求数据，

      // this.$router.push({
      //   name: 'KerwinDetail',
      //   params: {
      //     myid: id
      //   }
      // })
    }
  }
}
</script>
<style lang="scss" scoped>

  .van-cell{
    overflow: hidden;
    padding:10px;
    img{
      float:left;
      width: 100px;
    }
  }

  .action{
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

