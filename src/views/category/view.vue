<template>
  <div  >
    <div class="header">
      <mt-header fixed title="分类"></mt-header>
    </div>
    <div class="main">
      <div class="left-silde">
        <div class="left-item" v-for="item in items"
             :class="{ on: type === item.id }" @click="handleChange(item.id)">{{item.name}}</div>
      </div>
      <div class="content">
        <Product v-for="item in filterList" :info="item" :key="item.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../../components/product';
import pd from '../../product';
export default{
      components:{
        Product
      },
  computed:{
    filterList(){
      return pd.filter(item=>item.type ===this.type);
    }
  },
        data(){
          return{
            productList:pd,
            type:1,
            items:[
              {
                id:1,
                name:'补水品'
              },{
                id:2,
                name:'护肤品'
              }
            ]
          }
        },
        methods:{
          handleChange(id){
            this.type=id;
            this.productList =this.$store.state.productList.filter(item=>item.type === id);
            console.log(id)
          }
        },
        mounted(){
          this.type=1;
          this.$store.commit('changeNavigationShow',true);
          this.productList =this.$store.state.productList;//.filter(item=>item.type === this.type);
          console.log(this.productList)
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
