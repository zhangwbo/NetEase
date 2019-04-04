<template>
  <div id="topicController">
    <HeaderSlot>
      <div slot="left">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div slot="topic">
        <a class="active" href="javascript:;" @click="tab">发现</a>
        <a  href="javascript:;" @click="tab">甄选家</a>
      </div>
      <div slot="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </HeaderSlot>

    <div class="topNav">
      <ul class="navList" v-if="topicNav">
        <li :class="{active:currentIndex === index}"
            v-for="(item,index) in topicNav" :key="index"
          @click="handleNav(index)">
          <a href="javascript:;">{{item.tabName}}</a>
        </li>
      </ul>
    </div>

    <div class="contentScroll">
      <ul class="out">
        <li v-for="(item,index) in topicContent" :key="index">

          <ul class="contentList">
            <li v-for="(user,index) in item.topics" :key="index">
              <a href="javascript:;">

                <div class="user">
                  <img :src="user.avatar" alt="">
                  <span class="id">{{user.nickname}}</span>
                </div>

                <div class="title">
                  <p class="content">{{user.title}}</p>
                  <img :src="user.picUrl" alt="">
                </div>

                <div class="traffic-volume">
                  <i class="iconfont icon-jinlingyingcaiwangtubiao65"></i>
                  <span>{{user.readCount}}k人看过</span>
                </div>

              </a>
            </li>
          </ul>

          <ul class="typeTwo">
            <li v-for="(user,index) in item.topics" :key="index">
              <a href="javascript:;">

                <div class="info">
                  <div class="user">
                    <img :src="user.avatar" alt="">
                    <span class="id">{{user.nickname}}</span>
                  </div>

                  <div class="title ellipsisTwo">{{user.title}}</div>
                  <div class="content ellipsis">{{user.subTitle}}</div>

                  <div class="traffic-volume">
                    <i class="iconfont icon-jinlingyingcaiwangtubiao65"></i>
                    <span>{{user.readCount}}k人看过</span>
                  </div>
                </div>

                <div class="contentRight">
                  <img src="https://yanxuan.nosdn.127.net/999d24d94724016da3a960c636565340.jpg?imageView&quality=65&thumbnail=272y272" alt="">
                </div>
              </a>
            </li>
          </ul>

        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        isShow:true, //true 显示发现 false 显示甄选家
        currentIndex:0
      }
    },

    mounted(){
      this.$store.dispatch('getTopicNav',()=>{
        this.$nextTick(()=>{
          new BScroll('.topNav',{
            scrollX:true,
            click:true
          })
        })
      })

      this.$store.dispatch('getTopicContent',()=>{
        this.$nextTick(()=>{
          new BScroll('.contentScroll',{
            click:true
          })
        })
      })
    },

    methods:{

      tab(){},
      handleNav(index){
        this.currentIndex = index
      }
    },

    computed:{
      ...mapState({
        topicNav: state=>state.topic.topicNav,
        topicContent: state=>state.topic.topicContent
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/stylus/mixins.styl'
  #topicController
    background #fff
    .topNav
      top-border-1px(#999)
      bottom-border-1px(#999)
      width 100%
      height 72px
      background #fff
      z-index 10
      .navList
        display flex
        justify-content space-between
        box-sizing border-box
        width 1500px
        height 100%
        li
          display flex
          align-items center
          margin 0 20px
          padding 0 8px
          height 100%
          font-size 30px
          box-sizing border-box
          color #7F7F7F
          &.active
            color #B4282D
            border-bottom 4px solid #B4282D


    .contentScroll
      width 100%
      height 1000px
      .out
        li
          .contentList
            width 100%
            li
              padding 36px 30px
              box-sizing border-box
              border-bottom 20px solid #f5f5f5
              a
                .user
                  margin-bottom 24px
                  img
                    width 54px
                    height 54px
                    border-radius 50%
                    vertical-align middle
                  .id
                    font-size 30px
                    vertical-align middle
                    margin-left 10px
                    color #333
                .title
                  margin-bottom 20px
                  .content
                    font-size 36px
                    color #333
                    margin-bottom 16px
                  img
                    width 690px
                    height 376px


          .typeTwo
            li
              padding 32px 30px
              box-sizing border-box
              border-bottom 20px solid #f5f5f5
              a
                display flex
                justify-content space-around
                width 100%
                height 272px
                .info
                  .user
                    margin-bottom 24px
                    img
                      width 54px
                      height 54px
                      border-radius 50%
                      vertical-align middle
                    .id
                      font-size 30px
                      vertical-align middle
                      margin-left 10px
                      color #333
                  .title
                    width 400px
                    font-size 36px
                    color #333
                    margin-bottom 20px
                  .content
                    width 400px
                    font-size 28px
                    color #7f7f7f
                    margin-bottom 20px
                  .ellipsisTwo{
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  }
                .contentRight
                  img
                    width 272px
                    height 272px
          .traffic-volume
            color #999
            .iconfont
              font-size 30px
</style>

