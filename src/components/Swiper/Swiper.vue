<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">          </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&amp;quality=75&amp;thumbnail=750x0">          </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default{
    mounted(){
      //轮播图
      const mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus">

  .swiper-container
    width 100%
    height 400px
    swiper-slide
      width 100%
      height 400px
      img
        width 100%
        height 400px
</style>

