<template>
  <div class="nav-bar" :style="Color">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      color: {
        default: 'pink',
        type: String
      },
      fontColor: {
        type: String,
        default: 'white'
      }
    },
    computed: {
      Color(){
        return {background:this.color,color:this.fontColor}
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>