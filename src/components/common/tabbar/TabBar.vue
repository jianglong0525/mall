<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow:0px -1px 3px #f6f6f6;
  }

</style>