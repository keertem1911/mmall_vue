<template>
    <div class="cart">
        <div class="header">
             <mt-header fixed title="购物车清单"></mt-header>
        </div>
        <div class="cart-content">
                <div class="cart-content-main" v-for="(item, index) in cartList">
                    <div class="cart-left">
                        <img :src="productDictList[item.id].image">
                    </div>
                    <div class="cart-right">
                      <div class="cart-top"><h4>{{ productDictList[item.id].name }}</h4>
                        </div>
                          <div class="cart-count">
                        <span class="cart-price">¥ {{productDictList[item.id].cost}}</span>
                          <span class="cart-control-minus"
                                @click="handleCount(index,-1)">-</span>
                            {{ item.count }}
                            <span class="cart-control-add"
                                  @click="handleCount(index,1)">+</span>
                          </div>
                      </div>

                    <div class="cart-delete">
                        <span class="cart-control-delete" @click="handleDelete(index)">删除</span>
                    </div>
                </div>

                <div class="cart-empty" v-if="!cartList.length">购物车为空</div>
        </div>
        <div class="cart-promotion" v-show="false">
            <span>使用优惠码: </span>
            <input type="text" v-model="promotionCode"/>
            <span class="cart-control-promotion"
            @click="handleCheckCode">验证</span>
        </div>
        <div class="cart-footer" v-show="cartList.length">
            <div class="cart-footer-desc">
                共计 <span>{{ countAll}}</span>件商品
            </div>
            <div class="cart-footer-desc">
                应付总额 <span>￥{{ costAll -promotion }}</span>
                <br>
                <template v-if="promotion">
                    (优惠 <span>￥{{promotion}}</span>)
                </template>
                <div class="cart-footer-desc">
                    <div class="cart-control-order"
                    @click="handleOrder">现在结算</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import product_data from '../../product.js'
    import {mapState}from 'vuex'
    export default {
        data(){
          return {
              promotionCode:'',
              promotion:0,
              productList:product_data
          }
        },
        methods:{
            handleCheckCode(){
                if(this.promotionCode === ''){
                    window.alert('请输入优惠码');
                    return ;
                }
                if(this.promotionCode !== 'Vue'){
                    window.alert('优惠码验证失败');
                }else{
                    this.promotion =500;
                }
            },
            handleCount(index,count){
                if(count<0 && this.cartList[index].count ===1) return;
                this.$store.commit('editCartCount',{
                    id: this.cartList[index].id,
                    count:count
                })
            },
            handleOrder(){
              this.$store.dispatch('buy').then(()=>{
                  window.alert('购买成功');
              })
            },
            handleDelete(index){
                this.$store.commit('deleteCart',this.cartList[index].id)
            }
        },
        computed:{
          ...mapState(['cartList']),

          productDictList(){
              const dict={};
              this.productList.forEach(item=>{
                  dict[item.id]=item;
              });
              return dict;

          },
            countAll(){
              let count=0;
              this.cartList.forEach(item=>{
                  count += parseInt(item.count);
              });
              return count;
            },
            costAll(){
              let cost=0;
              this.cartList.forEach(item=>{
                  cost += this.productDictList[item.id].cost * item.count;
              });
                return cost;
            }
        },
        name: "cart"
    }
</script>

<style scoped>
.cart-left{
  height: 100%;
  width:40%;
  float: left;
}

div.cart-right{
  /*display: inline-block;*/
  width:60%;
  display: inline-block;
  height: 100%;
}
div.cart-top{
  text-align: center;
  height: 50%;
  width:100%;
}

div.cart-count{
  width:100%;
  height: 50%;
  float: right;
  text-align: center;

}
 .cart-price{
   vertical-align:middle;
   height: 100%;
   display: inline-block;
   float: left;
   margin-left: 18px;
   margin-right: 18px;
}

.cart{
    margin: 16px;
    background: #ffffff;
    border: 1px solid #dddee1;
    border-radius: 8px;
}
    .cart-empty{
        text-align: center;
        padding: 8px;
     }
    .cart-header-main div{
        text-align: center;
        float: left;
        font-size: 14px;
    }
    .cart-content-main{
        height: 150px;
        line-height: 100px;
      /*text-align: center;*/
        border-bottom: 1px dashed #e9eaec;
        overflow: hidden;
        margin-top: 8px;
    }
    .cart-content-main img{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .cart-control-minus,
    .cart-control-add{
        margin-left: 8px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        text-align: center;
        background: #f8f8f9;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        cursor: pointer;
    }
    .cart-control-delete{
        cursor: pointer;
        color:#2d8cf0;
    }
    .cart-promotion{
       padding: 16px 32px;
    }
    .cart-control-promotion,
    .cart-control-order{
        display: inline-block;
        padding: 8px 32px;
        background: #2d8cf0;
        color: #fff;
        border-radius: 8px;
        cursor: pointer;
    }
    .cart-control-promotion{
        padding: 2px 6px;
        font-size: 12px;
        border-radius: 3px;
    }
    .cart-footer{
        padding: 32px;
        text-align: right;
    }
    .cart-footer-desc{
    display: inline-block;
    padding: 0 8px;
}
    .cart-footer-desc span{
        color: #f2352e;
        font-size: 20px;
    }
</style>
