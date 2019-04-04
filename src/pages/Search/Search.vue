<template>
  <div id="SearchControl">
    <header class="SearchHeader" v-if="searchContent.defaultKeyword">
      <div class="search-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" :placeholder="searchContent.defaultKeyword.keyword"
               v-model="searchKeyWord" @keydown="search" />
      </div>

      <span @click="goto">取消</span>
    </header>

    <div class="searchData" v-if="searchKeyWord">
      <ul class="list">
        <li v-for="(item,index) in this.searchData" :key="index">
          <a href="">{{item}}</a>
        </li>
      </ul>
    </div>

    <div class="searchTitle" v-else>
      <div class="keyWord">热门搜索</div>
      <ul class="list" v-if="searchContent">
        <li v-for="(item,index) in searchContent.hotKeywordVOList" :key="index"
        :class="{on:item.highlight === 1 }">
          <a href="javascript:;">{{item.keyword}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqSearch,reqSearchData} from '../../api'
  export default{
    data(){
      return{
        searchKeyWord:'',
        searchData:[]
      }
    },

    watch:{
      async searchKeyWord(newSearchKeyWord,oldSearchKeyWord){
        if( newSearchKeyWord !== oldSearchKeyWord){
          let result = await reqSearch('/xhr/search/searchAutoComplete.json?keywordPrefix='+this.searchKeyWord)
          if(result.code === '200'){
            this.searchData = result.data
          }
        }
      }
    },

    mounted(){
      this.$store.dispatch('getSearchContent')
    },

    computed:{
      ...mapState({
        searchContent:state=>state.search.searchContent
      })
    },

    methods:{
      goto(){
        this.$router.replace('/home')
      },

      search(event){
        if(event.keyCode===13)
        window.location.href='http://m.you.163.com/search?keywordPrefix='+this.searchKeyWord
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '../../common/stylus/mixins.styl'
  #SearchControl
    .SearchHeader
      bottom-border-1px(#ccc)
      display flex
      align-items center
      justify-content space-around
      height 88px
      box-sizing border-box
      padding 0 10px
      background #fff
      .search-input
        display flex
        align-items center
        width 604px
        height 56px
        background #f4f4f4
        border-radius 5px
        box-sizing border-box
        padding 0 20px
        font-size 28px
        .iconfont
          font-size 30px
          margin-right 16px
        input
          width 520px
          height 39px
          background #f4f4f4
          outline none
      span
        font-size 28px

    .searchData
      background #fff
      .list
        box-sizing border-box
        padding-left 30px
        li
          bottom-border-1px(#ccc)
          width 720px
          height 104px
          line-height 104px
          a
            font-size 28px
            color #333
    .searchTitle
      background #fff
      height 562px
      width 100%
      box-sizing border-box
      padding 0 30px 30px 30px
      .keyWord
        width 690px
        height 90px
        line-height 90px
        font-size 28px
        color #999
      .list
        display flex
        flex-wrap wrap
        li
          height 47px
          line-height 47px
          box-sizing border-box
          padding 0 15px
          margin 0 32px 32px 0
          border 1px solid #999
          a
            color #333
          &.on
            border 1px solid #b4282d
            a
              color #b4282d


</style>

