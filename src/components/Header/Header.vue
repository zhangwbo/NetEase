<template>
  <header>
    <!--头部logo，搜索，登录-->
    <div class="header-top">
      <a href="http://m.you.163.com/" class="logo"></a>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span>搜索商品，共22111款好物</span>
      </div>
      <button class="btn">登录</button>
    </div>

    <!--头部导航-->
    <div class="nav">
      <ul class="navList" v-show="!isShow">
        <li class="active">
          <a href="javascript:;">推荐</a>
        </li>
        <li>
          <a href="javascript:;">居家生活</a>
        </li>
        <li>
          <a href="javascript:;">服饰鞋包</a>
        </li>
        <li>
          <a href="javascript:;">美食酒水</a>
        </li>
        <li>
          <a href="javascript:;">个护清洁</a>
        </li>
        <li>
          <a href="javascript:;">母婴亲子</a>
        </li>
        <li>
          <a href="javascript:;">运动旅行</a>
        </li>
        <li>
          <a href="javascript:;">数码家电</a>
        </li>
        <li>
          <a href="javascript:;">全球特色</a>
        </li>
      </ul>
    </div>
    <div class="taggleWaper" v-if="isShow">
      <span>全部频道</span>
      <div class="mask" @click="isShow = false"></div>
    </div>

    <!--下拉菜单-->
    <div class="menu" @click="handleMenu">
      <div class="menu-icon">
        <i class="iconfont icon-icon-"></i>
      </div>
    </div>
    <div class="switchMenu" v-if="isShow">
      <ul >
        <li class="on"><a href="javascript:;">推荐</a></li>
        <li><a href="javascript:;">居家生活</a></li>
        <li><a href="javascript:;">服饰鞋包</a></li>
        <li><a href="javascript:;">美食酒水</a></li>
        <li><a href="javascript:;">个护清理</a></li>
        <li><a href="javascript:;">母婴亲子</a></li>
        <li><a href="javascript:;">运动旅行</a></li>
        <li><a href="javascript:;">数码家电</a></li>
        <li><a href="javascript:;">全球特色</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default{
    data(){
      return{
        isShow:false // 全部导航列表时候显示
      }
    },
    methods:{
      //点击显示全部导航列表
      handleMenu(){
        this.isShow = !this.isShow
      }
    },
  }
</script>

<style lang="stylus" type="text/stylus">
  header
    width 750px
    height 148px
    background #fff
    overflow hidden
    .header-top
      display flex
      justify-content space-around
      align-items center
      padding 15px 20px
      .logo
        width 138px
        height 40px
        display inline-block
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
      .search
        width 442px
        height 56px
        font-size 28px
        color #666
        background #ededed
        line-height 56px
        text-align center
        border-radius 8px
        .iconfont
          font-size 30px
      .btn
        width 74px
        height 40px
        line-height 40px
        text-align center
        background #fff
        border 1px solid #b4282d
        border-radius 8px
        color #b4282d
        font-size 28px
    .nav
      position relative
      .navList
        position relative
        display flex
        width 1460px
        height 60px
        padding 0 20px
        li
          height 60px
          font-size 30px
          margin-left 15px
          line-height 60px
          text-align center
          padding 0 15px
          box-sizing border-box
          &.active
            border-bottom 5px solid #b4282d
            a
              color #b4282d
    .taggleWaper
      top-border-1px(#000)
      width 100%
      height 60px
      box-sizing border-box
      line-height 60px
      padding 0 20px
      font-size 30px
      .mask
        position absolute
        top 380px
        bottom 0
        left 0
        right 0
        width 100%
        height 1000px
        background rgba(0,0,0,.7)
        z-index 10
    .menu
      position absolute
      top 90px
      right 0
      width 130px
      height 60px
      background white
      .menu-icon
        position absolute
        top 0
        right 30px
        line-height 60px
        .iconfont
          color #7e8c8d
          font-size 40px
    .switchMenu
      position absolute
      top 148px
      left 0
      width 100%
      height 312px
      padding-top 20px
      background #fff
      z-index 10
      ul
        display flex
        flex-wrap wrap
        li
          width 150px
          height 56px
          line-height 56px
          border 1px solid #ccc
          border-radius 5px
          margin 0 0 40px 30px
          text-align center
          &.on
            border 1px solid #b4282d
            a
              color #b4282d
          a
            width 150px
            height 56px
            font-size 30px
            color black
</style>

