<template>
  <div class="header_personage">
    <HeaderSlot>
      <div slot="left">
        <i class="iconfont icon-shouye"></i>
      </div>

      <div slot="netease">
        <a href="javascript:;">网易严选</a>
      </div>

      <div slot="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </HeaderSlot>
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <label class="input_phone">
        <input type="text" placeholder="请输入邮箱" v-model="e_mail"/>
      </label>
      <label class="input_code">
        <input type="password" placeholder="请输入密码" v-model="pwd"/>
      </label>

      <div class="login_help">
        <span>遇到问题? </span>
        <span>使用密码验证登录</span>
      </div>
      <div class="phone_login active" @click="handelLogin">
        <span>登录</span>
      </div>
      <div class="email_login" @click="$router.push('/personal')">
        <span>其他账号登录</span>
      </div>
      <div class="email_register">快速注册&nbsp;&gt;</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        e_mail:'',
        pwd:''
      }
    },

    computed:{
      isRightEmail(){
        return /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/.test(this.e_mail)
      }
    },

    methods:{
      handelLogin(){
        if(!this.isRightEmail){
          return alert('请输入正确的邮箱地址')
        }else if (!/^[\w_-]{6,16}$/.test(this.pwd)){
          return alert('密码格式为字母加数字或_,-')
        }else{
          return alert('登陆成功')
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .header_personage
    width 100%
    height 100%
    background-color white
    box-sizing border-box
    position relative
    &.is_personal
      background-color #f2f5f4
    .top_login
      width 679px
      height 752px
      color #000000
      margin 0 auto
      .top_img
        width 100%
        height 133px
        display flex
        justify-content center
        align-items center
        margin-bottom 250px
        img
          width 192px
          height 64px
      .input_phone
        position relative
        margin-top 30px
      .login_tips
        position absolute
        left 50%
        top -100%
        width 50%
        transform translateX(-50%)
        color red
        font-size 28px
    .input_phone,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .input_code
      position relative
      .get_phone_code
        position absolute
        right 0
        bottom 0
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
    .phone_login,.email_login
      width 679px
      height 98px
      color #b4282d
      margin 32px 0 0
      text-align center
      line-height 98px
      font-size 28px
      border 1px solid #b4282d
      &.active
        background-color #b4282d
        color white
    .email_register
      text-align center
      font-size 28px
      color #000000
      margin-top 20px
</style>

