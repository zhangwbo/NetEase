<template>
  <header id="top">

    <div class="leftSlot">
      <slot name="left"></slot>
      <slot name="cart"></slot>
    </div>

    <div class="center">
      <slot name="netease"></slot>
      <slot name="search"></slot>
      <slot name="topic"></slot>
    </div>


    <div class="rightSlot">
      <slot name="right"></slot>
      <slot name="cartRight"></slot>
    </div>

  </header>
</template>

<script>
  export default{}
</script>

<style lang="stylus" type="text/stylus">
  #top
    position relative
    box-sizing border-box
    height 88px
    background #fff
    display flex
    justify-content space-between
    align-items center
    padding 0 20px 0 30px
    z-index 10
    .leftSlot
      font-size 35px
      .iconfont
        font-size 50px
    .center
      display flex
      align-items center
      text-align center
      font-size 40px
      .iconfont
        font-size 30px
      span
        font-size 28px
      a
        font-size 35px
        margin-left 30px
        &.active
          font-size 40px
          font-weight 700
          color #b4282d
    .rightSlot
      font-size 30px
      .iconfont
        margin-left 15px
        font-size 45px
      span
        color #B4282D
        margin-right 50px

</style>

