<template>
    <div id="orderlist">
      <div class="header">
        <mt-header fixed title="我的订单">
          <mt-button icon="back" slot="left" @click="backgo">返回</mt-button>
        </mt-header>
      </div>
      <mt-navbar v-model="selected" class="order-nav">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待收货</mt-tab-item>
        <mt-tab-item id="4">已完成</mt-tab-item>
        <mt-tab-item id="5">已取消</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container style="margin-top: 20px" v-model="selected" class="order-content">
        <mt-tab-container-item id="1">
          <mt-cell v-for="(n,key) in 10" :key="key" :title="'全部 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="(n,key) in 4" :key="key" :title="'待付款 ' + n" />

        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="(n,key) in 4" :key="key"  :title="'待收货 ' + n"  />

        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="(n,key) in 4" :key="key" :title="'已完成 ' + n" />

        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="(n,key) in 4" :key="key" :title="'已取消 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          selected:this.$route.params.id,
          n:1
        }
      },
      name: "orderlist",
      methods:{
          backgo() {
            this.$router.go(-1);
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.orderlist
  width: 100%

</style>
