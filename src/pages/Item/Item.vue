<template>
  <div id="ItemController">
    <header class="header"></header>
    <section>
      <div class="left">
        <ul class="leftUl">
          <li
          v-for="(item,index) in category.categoryL1List" :key="index"
          @click="handleclick(index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="scroll">
          <img class="rightImg" src="https://yanxuan.nosdn.127.net/d574677c2dede0bf7a8376cc07fa5f64.jpg?imageView&thumbnail=0x196&quality=75" alt="">
          <ul class="rightUl">
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span>9.9元最高抵399</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        currentIndex : 0
      }
    },
    mounted(){
      //滚动
      new BScroll('.left',{
        click:true
      })

    },
    computed:{
      ...mapState({
        category: state=>state.category
      })
    },

    methods:{
      handleclick(index){
        console.log(11)
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  #ItemController
    background #fff
    .header
      height 80px
      background #fff
    section
      display flex
      top-border-1px(#ccc)
      .left
        box-sizing border-box
        height 1148px
        .leftUl
          display flex
          flex-direction column
          align-items center
          box-sizing border-box
          li
            margin-top 40px
            width 162px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            &.active
              color #ab2b2b
              border-left 8px solid #ab2b2b
      .right
        box-sizing border-box
        padding 30px 30px 21px 30px
        height 1148px
        .rightImg
          width 528px
          height 192px
          margin-bottom 32px
        .rightUl
          display flex
          flex-wrap wrap
          li
            margin-right 34px
            &:nth-child(3n)
              margin-right 0
            a
              display flex
              flex-direction column
              justify-content center
              align-items center
              img
                width 144px
                height 144px
              span
                color #333
                width 144px
</style>

