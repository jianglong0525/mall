<template>
  <div>
    <swiper :options="swiperOption" v-if="banners.length>0">
      <swiper-slide v-for="(item,index) in banners" :key="index">
        <a :href="item.link" >
          <img class="swiper-img" :src="item.image" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'



  export default {
    name: "CartSwiper",
    components: {
      swiperSlide,
      swiper,
    },
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      },
      recommends: {
        type: Array,
        default(){
          return []
        }
      },
    },
    data() {
      return {
        swiperOption: {
          // init:false,
          loop: true,// 是否循环轮播
          speed: 1000,
          autoplay: {
            disableOnInteraction: false,
            delay: 1000
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        }
      }
    },
  }
</script>

<style scoped>
  .swiper-img{
    width: 100%;
  }
</style>