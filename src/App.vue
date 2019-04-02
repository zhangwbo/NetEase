<template>
  <div id="app">
    <router-view/>

    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/FooterGuide/Footer.vue'
  export default{
    mounted(){
      this.$store.dispatch('getHomeData')
      this.$store.dispatch('getCategory')
    },
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

