<template>
  <div>
    <div class="header">
      <mt-header fixed title="首页"></mt-header>
    </div>
    <div class="cart-banner" v-show="isbanner">
      <mt-swipe :auto="4000"  >
        <mt-swipe-item class="item-img"  v-for="(img,index) in images"  :key="index">
          <router-link :to="{path:img.path}" ><img :src="img.url"/></router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <Product v-for="item in productList" :info="item" :key="item.id"></Product>
  </div>
</template>
<script>
import Product from '../components/product'
import $ from '../common/httputil.js'
import { Toast } from 'mint-ui';
import pd from '../product.js'
  export default {
  components:{
    Product
  },
    data(){
      return {
        productList:[],
        index:'index',
        isbanner:true,
        images:[{
          path:'/product/1',
          url:  require("../assets/banner/5bf3af1eNe92b0a7d.jpg")
        },{
          path:'/product/2',
          url: require("../assets/banner/5bf3c526Ne4b04f4e.jpg")
        },{
          path:'/product/3',
          url: require("../assets/banner/5bf39f31Nb95bbfd1.jpg")
        }]
      }
    },
    computed:{
      cartList(){
        return this.$store.state.cartList
      }
    },
    mounted(){
      this.$store.commit('changeNavigationShow',true);
      let result= $.get('/index/list',{},(message)=>{
        Toast({
          message: '请求错误'+message,
          position: 'bottom',
          duration: 3000
        });
      });
      if(! result instanceof Promise){
        if(result.data['code']===0){

        this.productList= result.data;
        }else{
          const errorMsg= result.data.msg;
          Toast({
            message:errorMsg,
            position: 'bottom',
            duration: 2000
          })
        }
      }
      this.productList=pd
    }
  }
</script>
<style scoped>
  .cart-banner{
    margin: 8px auto;
    width:95%;
    height:200px;
  }
  .item-img  img{
    width: 100%;
    height:100%;
  }
</style>
