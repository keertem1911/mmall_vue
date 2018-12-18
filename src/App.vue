<template>
  <div>
    <router-view></router-view>
    <tab-footer style="margin-top: 20px;" v-show="this.$route.meta.showFooter"></tab-footer>
  </div>
</template>
<script>
  import TabFooter from './views/tab/tab'
  import {mapActions} from'vuex'
  export default {
    components:{TabFooter},
  data(){
    return {
      index:'index',
      isbanner:true,
      images:[{
        path:'/product/1',
        url:  require("./assets/banner/5bf3af1eNe92b0a7d.jpg")
      },{
        path:'/product/2',
        url: require("./assets/banner/5bf3c526Ne4b04f4e.jpg")
      },{
        path:'/product/3',
        url: require("./assets/banner/5bf39f31Nb95bbfd1.jpg")
      }]
    }
  },
    computed:{
      cartList(){
        return this.$store.state.cartList
      }
    },
    mounted(){
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getUserInfo'])
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
