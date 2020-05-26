<template>
  <div class="recommendView">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      },
    }
  }
</script>

<style scoped>
  .recommendView{
    display: flex;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommends-item{
    flex: 1;
  }
  .recommends-item img{
    width: 80px;
    height: 80px;
  }
</style>