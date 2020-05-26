<template>
  <div>
    <nav-bar fontColor="white">
      <div slot="center">购物街</div>
    </nav-bar>
    <cart-swiper :banners="banners" :recommends="recommends"></cart-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartSwiper from "./chirldComponents/CartSwiper";
  import RecommendView from "./chirldComponents/RecommendView";

  import {getHomeMultidata} from "network/cart";

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartSwiper,
      RecommendView,
    },
    data(){
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>

</style>