<template>
  <div  >
    <div class="header">
      <mt-header fixed title="分类"></mt-header>
    </div>
    <div class="main">
      <div class="left-silde">
        <div class="left-item" v-for="item in categorys"
             :class="{ on: item.active }" @click="handleChange(item.id)">{{item.name}}</div>
      </div>
      <div class="content">
          <ShopList />
      </div>
    </div>
  </div>
</template>

<script>
// import Product from '../../components/product';
import pd from '../../product';
import {mapState,mapActions} from 'vuex'
import ShopList from '../../views/shopList/ShopList'
export default{
      components:{
        ShopList
      },
      computed:{
        ...mapState(['categorys']),
        filterList(){
          return pd.filter(item=>item.type ===this.type);
        }
      },
        data(){
          return{
            productList:pd,

          }
        },
        methods:{
          handleChange(id){
            this.type=id;
            this.$store.dispatch('getShopsByCategoryId',{categoryId:id})
          }
        },
        mounted(){
          this.$store.dispatch('getCategoryList')
        }
    }
</script>

<style scoped>

.left-silde{
  width:20%;
  height:100%;
  position: fixed;
  overflow: auto;
  background: #ffff;

}
  .left-item{
    text-align: center;
    font-size: 16px;
    margin: 6px 0 ;
    padding: 10px 0;
    transition: all .3s ease-in-out;
    border-right: 1px solid transparent;
  }
  .left-item:hover{
    background: #e3e8ee;
  }
  .left-item.on{
    border-right: 2px solid #3399ff;
  }
  .content{
    width:78%;
    margin-left: 4px;
    left:20%;
    position: relative;
    background: #e1e1e1;
  }
</style>
