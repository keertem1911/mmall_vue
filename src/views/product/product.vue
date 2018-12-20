<template>
  <div class="mdetail">
    <div class="header">
      <mt-header fixed  title="商品详情">
          <mt-button icon="back" slot="left" @click="backgo">返回</mt-button>
      </mt-header>
    </div>
    <div class="mdetail-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="detail.images.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(image, index) in detail.images" :key="index">
                  <div class="food_container">
                    <img :src="image">
                  </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/back.svg" alt="back" v-else>
        </nav>
        <div class="mdetail_content">
          <div class="product-price">
            <div class="now">￥{{detail.price}}</div>
            <div class="old">￥{{detail.oldPrice}}</div>
          </div>
          <div class="product-name">
            <i class="iconfont icon-logo"></i>
            {{detail.name}}</div>
        </div>
        <div class="mdetail_desc">
          <img v-for="descimage in detail.desclist" :src="descimage"/>
        </div>
      </div>
    </div>
    <div class="detailhandler">
      <div class="car-div">
        <span class="car-num" v-if="carNum>0" >{{carNum.keySize}}</span>
        <i class="iconfont icon-gouwuche"></i></div>
      <div class="add-car"><mt-button  @click="addCar" size="large" type="danger" >加入购物车</mt-button></div>
      <div class="gotobuy"><mt-button @click="buyNow" size="large" style="color: #ffffff;background: #f25807">立即购买</mt-button></div>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        data () {
          return {
              id: parseInt(this.$route.params.id),
            baseImageUrl: 'https://fuss10.elemecdn.com',

          }
        },
      computed:{
        ...mapState(['detail','carNum'])
      },
      watch: {
        detail (value) { // categorys数组中有数据了, 在异步更新界面之前执行

          // 界面更新就立即创建Swiper对象
          this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
            // 创建一个Swiper实例对象, 来实现轮播
            new Swiper('.swiper-container', {
              loop: true, // 可以循环轮播
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            });

            new BScroll('.mdetail-content-wrapper', {
              click: true
            })
          })

        }
      },
        methods:{
          backgo(){
            this.$router.go(-1);
          },
          addCar() {
                this.$store.dispatch('addCar',{id:this.id,num:1});
            },
          buyNow(){}
        },
        mounted () {
          this.$store.dispatch('getProduct',this.id);
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .mdetail  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 15px
      height 200px
      width:100%
      background #fff
      img
        width: 100%;
        height:200px;
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            justify-content center
            align-items flex-start
            food_container
              width: 100%
              height:200px
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .mdetail-content-wrapper
      position fixed
      top: 45px
      bottom: 50px
      width: 100%
      .mdetail_content
        top-border-1px(#e4e4e4)
        margin-top 10px
        height:auto
        background #fff
        .product-price
          display flex
          color: #ff1144;
          font-size 16px;
          margin: 0 30 0;
          padding 8px;
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .product-name
          color: #000000
          font-weight: 700
          margin: 2 30 2;
          text-align left
          padding 2px 10px 2px
          & i
            color: red
            font-size 20px
      .mdetail_desc
          display:inline-block;
          width:100%
          height:100%
          & img
            width 100%
            margin 0
    .detailhandler
      position fixed
      z-index 1
      left:0
      right:0
      bottom:0
      display flex
      .add-car,.gotobuy
        display inline-block
        flex:3
      .car-div
        display inline-block
        background #ffffff
        flex:1
        .car-num
          position:absolute;
          background: red;
          color: white;
          border-radius: 4px; /*圆角*/
          padding: 0px 3px; /*左右边距*/
          top: 0; /*数字离图片右上角的高度*/
          left: 10%;
          font-size 8px
        & i
          font-size 28px
          text-align center
          margin 12px 10px 10px 10px



</style>
