<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="img-active" v-if="isActive"></slot>
    <slot name="img" v-else></slot>
    <div :style="Color">
      <slot name="text" ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return{
      }
    },
    props: {
      path: String,
      fontColor: {
        type: String,
        default: '#d81e06',
      }
    },
    methods: {
      itemClick(){
        if(this.$route.path==this.path){
          return
        }
        this.$router.push(this.path)
      },
    },
    computed: {
      Color(){
        return this.$route.path.indexOf(this.path) !== -1 ? {color:this.fontColor} : {}
      },
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
</style>