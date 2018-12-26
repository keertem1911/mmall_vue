<template>
    <div class="orderlist">
      <div class="header">
        <mt-header fixed title="我的订单">
          <mt-button icon="back" slot="left" @click="backgo"></mt-button>
        </mt-header>
      </div>
      <div class="tab">
        <div class="tab-item" >
          <router-link to="/orderlist/all" :class="{'router-link-active':name==='all'}"  replace>全部</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/orderlist/unplay" :class="{'router-link-active':name==='unplay'}" replace>待付款</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/orderlist/unreceive" :class="{'router-link-active':name==='unreceive'}" replace>待收货</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/orderlist/finished" :class="{'router-link-active':name==='finished'}" replace>已完成</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/orderlist/cannceled" :class="{'router-link-active':name==='cannceled'}" replace>已取消</router-link>
        </div>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          name:this.$route.params.id
        }
      },
      name: "orderlist",
      methods:{
          backgo() {
            this.$router.go(-1);
          }
      },
      mounted(){
        console.log(this.$route.params.id)
        switch (this.$route.params.id) {
          case 'all':   this.$router.replace('/orderlist/all');break;
          case 'unplay':   this.$router.replace('/orderlist/unplay');break;
          case 'unreceive':   this.$router.replace('/orderlist/unreceive');break;
          case 'finished':   this.$router.replace('/orderlist/finished');break;
          case 'canneled':   this.$router.replace('/orderlist/canneled');break;
          // default:    this.$router.push('/orderlist/all');
        }

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

.orderlist
  width: 100%
  overflow hidden
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 20%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        color: #000
        &.router-link-active
          color #26a2ff
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #26a2ff

</style>
