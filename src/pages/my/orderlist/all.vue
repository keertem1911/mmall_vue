<template>
    <div>
      <order-item v-for="(item,index) in list" :key="index" :orderItem="item" />
    </div>
</template>

<script>
  import {reqOrderList} from "@/api";
  import OrderItem from './item'
    export default {
        name: "all",
      components:{
          OrderItem
      },
      data(){
        return{
          list:[]
        }
      },
      async  mounted(){
           const result= await reqOrderList(0);
          if(result.code===0){
            this.list= result.data;
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
