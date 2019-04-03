<template>
  <div id="cartController">
    <HeaderSlot>
      <span slot="cart">购物车</span>
      <span slot="cartRight">领劵</span>
    </HeaderSlot>
    <ul class="list">
      <li>
        <i class="iconfont icon-yuandian"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-yuandian"></i>
        <span>48小时快速退款</span>
      </li>
      <li>
        <i class="iconfont icon-yuandian"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="commodity">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <span>去添加点什么吧</span>
      <button @click="togoLogin">登录</button>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      togoLogin(){
        this.$router.replace('/personal')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  #cartController
    .list
      display flex
      justify-content space-between
      color #333
      height 70px
      padding 0 40px
      li
        display flex
        align-items center
        .iconfont
          font-size 10px
          padding-right 5px
    .commodity
      display flex
      flex-direction column
      align-items center
      justify-content center
      margin 300px 0
      img
        width 248px
        height 248px
      span
        color #999
        font-size 28px
        margin-bottom 50px
      button
        width 480px
        height 92px
        line-height 92px
        text-align: center
        background #b4282d
        color #fff
        font-size 30px


</style>

