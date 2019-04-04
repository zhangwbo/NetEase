<template>
  <div id="personalController">
    <HeaderSlot>
      <div slot="left" @click="togoHome">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div slot="netease" @click="togoHome">
        <a href="javascript:;">网易严选</a>
      </div>
      <div slot="right">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </HeaderSlot>

    <div class="login">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <div class="loginMethods">

        <a class="phone" href="javascript:;" @click="$router.replace('/phonelogin')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </a>

        <a class="mail" href="javascript:;" @click="$router.replace('/maillogin')">
          <i class="iconfont icon-youjian"></i>
          <span>邮箱账号登录</span>
        </a>

        <a class="register" href="javascript:;">手机号快捷注册></a>
      </div>
      <div class="OtherMethods">
        <ul class="list">
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-qq"></i>
              <span>QQ</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      togoHome(){
        this.$router.replace('/home')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  #personalController
    .login
      .logo
        display flex
        justify-content center
        height 410px
        box-sizing border-box
        padding 160px 0
        img
          width 268px
          height 90px
      .loginMethods
        display flex
        flex-direction column
        align-items center
        margin-bottom 353px
        a
          width 670px
          height 94px
          border 1px solid #b4282d
          text-align center
          line-height 94px
          border-radius  2px
          margin-bottom 32px
          font-size 30px
          &:last-child
            border none
            color #333
            font-size 28px
          .iconfont
            font-size 30px
        .phone
          color #fff
          background #b4282d
        .mail
          color #b4282d

      .OtherMethods
        .list
          display flex
          justify-content center
          li
            border-right 5px solid #7e8c8d
            padding 0 40px
            &:last-child
              border none
            a
              .iconfont
                font-size 30px
              span
                font-size 30px
</style>

