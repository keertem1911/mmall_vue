<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="index">
      <i slot="icon" class="iconfont icon-shouye"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="category">
      <i slot="icon" class="iconfont icon-fenlei"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="shopping">
      <span class="cart-num" v-if="carNum.keySize>0">{{carNum.keySize}}</span>
      <i slot="icon" class="iconfont icon-gouwuche"></i>
      购物车
    </mt-tab-item>
    <mt-tab-item id="myself">
      <i slot="icon" class="iconfont icon-duomeitiicon-"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data(){
        return {
          message:this.$route.meta.index||'index',
        }
      },
      mounted(){
        this.$router.push(this.message)
      },
      watch: {
        message:function (val,oldVal)   {
          switch (val) {
            case "index":
              this.$router.push('/index');
              break;
            case "category":
              this.$router.push('/category');
              break;
            case "shopping":
              this.$router.push('/shopping');
              break;
            case "myself":
              this.$router.push('/myself');
              break;
          }
        }
      },
        name: "tab",
      computed:{
        ...mapState(['carNum'])
      }
    }
</script>

<style scoped>
  .cart-num{
    position:absolute;
    background: red;
    color: white;
    border-radius: 5px; /*圆角*/
    padding: 0px 3px; /*左右边距*/
    top: 0; /*数字离图片右上角的高度*/
    left: 65%;
  }
</style>
