<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/cart_empty.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/cart_empty_active.svg" alt="" slot="img-active">
        <p slot="text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/renew">
        <img src="~assets/img/tabbar/renew.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/renew_active.svg" alt="" slot="img-active">
        <p slot="text">排序</p>
      </tab-bar-item>
      <tab-bar-item path="/setting">
        <img src="~assets/img/tabbar/setting.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/setting_active.svg" alt="" slot="img-active">
        <p slot="text">搜索</p>
      </tab-bar-item>
      <tab-bar-item path="/time">
        <img src="~assets/img/tabbar/time.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/time_active.svg" alt="" slot="img-active">
        <p slot="text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: 'mainTabbar',
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style>
  @import "~assets/css/base.css";

</style>
