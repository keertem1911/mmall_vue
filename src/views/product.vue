<template>
  <div>
    <div class="header">
      <mt-header fixed  title="商品详情">
          <mt-button icon="back" slot="left" @click="backgo">返回</mt-button>
      </mt-header>
    </div>

    <div v-if="product">
        <div class="product">
            <div class="product-image">
                <img :src="product.image">
            </div>
            <div class="product-info">
                <h4 class="product-name">{{ product.name }}</h4>
                <div class="product-cost">¥ {{ product.cost }}</div>
                <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
            </div>
        </div>
        <div class="product-desc">
            <h2>产品介绍</h2>
            <img v-for="m in product.images" :src="m">
        </div>
    </div>
  </div>
</template>

<script>
    import product_data from '../product.js';
    export default {
        data () {
          return {
              id: parseInt(this.$route.params.id),
              product: null
          }
        },
        methods:{
          backgo(){
            this.$router.go(-1);
          },
            getProduct(){
                  setTimeout(() => {

                      this.product = product_data.find(item=>item.id === this.id);
                }, 500);
            },
            handleAddToCart () {
                this.$store.commit('addCart',this.id);
            }
        },
        mounted () {

            this.getProduct();
        }
    }
</script>

<style scoped>
    .product{
        margin: 16px;
        padding: 8px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
        overflow: hidden;
    }
    .product-image{
        width: 100%;
        height: 200px;
        text-align: center;
        display: block;
    }
    .product-image img{
        height: 100%;
    }
    .product-info{
        width: 100%;
        padding: 50px 0 10px;
        height: 150px;
        text-align: center;
    }
    .product-cost{
        color: #f2352e;
        margin: 8px 0;
    }
    .product-add-cart{
        display: inline-block;
        padding: 8px 64px;
        margin: 8px 0;
        background: #2d8cf0;
        color: #fff;
        cursor: pointer;
        border-radius: 4px;
    }
.product-desc{
    background: #fff;
    margin: 8px 16px 16px 16px;
    padding: 8px;
    border: 1px solid #dddee1;
    border-radius: 10px;
    text-align: center;
}
    .product-desc img{
        width:100%;
        margin: 8px auto;
        display: block;
        border-bottom: 1px solid #dddee1;
    }



</style>
