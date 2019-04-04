<template>
  <div id="ItemController" >
    <HeaderSlot>
      <div class="search" slot="search" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共22487款好物</span>
      </div>
    </HeaderSlot>

    <section >
      <div class="left">
        <ul class="leftUl">
          <li :class="{active:currentIndex === index}"
          v-for="(item,index) in category.categoryL1List" :key="index"
          @click="handleclick(index)">{{item.name}}</li>
        </ul>
      </div>

      <div class="right" v-if="category.categoryL1List">
        <div class="scroll">
          <img class="rightImg" :src="category.categoryL1List[currentIndex].wapBannerUrl" alt="">
          <ul class="rightUl">
            <li v-for="(item,index) in category.categoryL1List[currentIndex].subCateList" :key="index">
              <a href="javascript:;">
                <img :src="item.bannerUrl" alt="">
                <span>{{item.name}}</span>
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
      this.$store.dispatch('getCategory',() => {
        this.$nextTick(()=>{
          new BScroll('.right',{
            click:true,
            scrollY:true
          })
          new BScroll('.left',{
            click:true,
            scrollY:true
          })
        })
      })
    },

    computed:{
      ...mapState({
        category: state=>state.category.category
      })
    },


    methods:{
      handleclick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  #ItemController
    background #fff
    .search
      width 690px
      height 56px
      line-height 50px
      background #ededed
      border-radius 5px
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
        height 1148px
        .scroll
          padding 30px 30px 21px 30px
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

