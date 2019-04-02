<template>
  <div id="app">
    <router-view/>

    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import Footer from './components/FooterGuide/Footer.vue'
  export default{
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  body
    background #f4f4f4
    overflow hidden
  #app
    height 100%

</style>

