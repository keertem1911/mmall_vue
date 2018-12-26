<template>
    <div class="main">
      <div class="orderlist-header">
        <div class="orderlist-header-right"><i class="iconfont icon-delete"></i></div>
      </div>
      <div class="orderlist-content" v-if="orderItem.num===1">
        <div class="orderitem-left">
          <img class="orderitem_img"  src="../../../assets/5b5e7a55N41c4ad48.jpg" :src="orderItem.items[0].image_path">
        </div>
        <div class="orderitem-right">
          <section class="orderitem-detail-header">
            <p class="orderitem-title">{{orderItem.items[0].name}}</p>
          </section>
        </div>
      </div>
      <div class="orderlist-content" v-else>
        <div class="orderitem-images">
          <img class="orderitem_img" v-for="(img,index) in orderItem.items" :src="img.image_path">
        </div>
      </div>
      <div class="orderlist-sum">
        <div class="sum-right">
          共{{orderItem.num}}件商品  实付款: <span>￥{{orderItem.totlePrice}}</span>.00
        </div>
      </div>
      <div class="orderlist-oper">
        <div class="orderlist-empty"></div>
        <div class="orderlist-cannel" v-if="orderItem.status===2">取消订单</div>
        <div class="orderlist-receive" v-if="orderItem.status===3">确认收货</div>
        <div class="orderlist-pay" v-if="orderItem.status===2">立即支付</div>
        <div class="orderlist-agein" v-if="orderItem.status===4||orderItem.status===5">再次购买</div>
      </div>
    </div>
</template>

<script>
    export default {
      props:{
        orderItem:Object
      },
        name: "item"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
.main
  width: 100%
  .orderlist-header
    width 100%
    height:30px
    background white
    .orderlist-header-right
      width 30px
      height 100%
      float: right;
      margin-right 10px
      .iconfont
        padding 10px
        width 100%
        height:100%
        font-size 20px
  .orderlist-content
    width: 100%
    background #f1f1f1
    display: flex
    .orderitem-images
      width 100%
      height 75px
      padding-right 10px
      overflow hidden
      display block
      .orderitem_img
        width 20%
        height 75px
        margin-left 8px
    .orderitem-left
      box-sizing border-box
      width 23%
      height 75px
      padding-right 10px
      .orderitem_img
        display block
        width 100%
        height 100%
    .orderitem-right
      float right
      width 77%
      .orderitem-detail-header
        clearFix()
        width 100%
        .orderitem-title
          margin-left 4px
          margin-top 4px
          overflow: hidden
          text-overflow: ellipsis
          width 90%
          color #333
          font-size 14px
          line-height 20px
          height 60px
          font-weight 700
          &::before
            content '品牌'
            display inline-block
            font-size 11px
            line-height 11px
            color #333
            background-color #ffd930
            padding 2px 2px
            border-radius 2px
            margin-right 5px

  .orderlist-sum
    display block
    width 100%;
    height 20px
    margin-left  30px
    .sum-right
      float right
      width: 80%
      margin-right 5px
      & span
        font-weight bold
        font-size 18px
  .orderlist-oper
    display flex
    width 100%
    height:40px
    text-align center
    font-size 12px
    .orderlist-empty
      flex:1
    .orderlist-cannel
      text-border(#111111)
    .orderlist-receive
      text-border(#ff5f3e)
    .orderlist-pay
      text-border(#ff5f3e)
    .orderlist-agein
      text-border(#ff5f3e)

</style>
