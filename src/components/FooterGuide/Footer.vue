<template>
  <div id="footer">
    <nav class="navlist">
      <a class="navItem" href="javascript:;" @click="goto('/home')" :class="{on:$route.path==='/home'}">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </a>
      <a class="navItem" href="javascript:;" @click="goto('/item')" :class="{on:$route.path==='/item'}">
        <i class="iconfont icon-guizi"></i>
        <span>分类</span>
      </a>
      <a class="navItem" href="javascript:;" @click="goto('/topic')" :class="{on:$route.path==='/topic'}">
        <i class="iconfont icon-tupian"></i>
        <span>识物</span>
      </a>
      <a class="navItem" href="javascript:;" @click="goto('/cart')" :class="{on:$route.path==='/cart'}">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </a>
      <a class="navItem" href="javascript:;" @click="goto('/personal')" :class="{on:$route.path==='/personal'}">
        <i class="iconfont icon-geren"></i>
        <span>个人</span>
      </a>
    </nav>
  </div>
</template>

<script>
  export default{
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  #footer
    top-border-1px(#eee)
    position fixed
    bottom 0
    left 0
    width 100%
    height 98px
    display flex
    .navlist
      display flex
      width 100%
      height 98px
      .navItem
        display flex
        flex 1
        flex-direction column
        justify-content  center
        align-items center
        width 20%
        height 98px
        font-size 26px
        &.on
          color #b4282d
        .iconfont
          font-size 40px
</style>

