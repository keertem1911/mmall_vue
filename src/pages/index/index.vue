<template>
  <section class="msite">
    <div class="header">
      <mt-header fixed title="首页"></mt-header>
    </div>

    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="banners.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
                <router-link :to="`/product/${banner.id}`">
                  <div class="food_container">
                    <img :src="baseImageUrl+banner.image_url">
                  </div>
                </router-link>
              </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/back.svg" alt="back" v-else>
        </nav>
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">每日推荐</span>
          </div>
          <ShopList :shopList="indexItems"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import BScroll from 'better-scroll'
  import ShopList from '../../views/shopList/ShopList'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
  components:{
    ShopList
  },
    data(){
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com',

      }
    },
    computed:{
      ...mapState(['banners','indexItems'])
    },
    watch: {
      banners (value) { // categorys数组中有数据了, 在异步更新界面之前执行

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

          new BScroll('.miste-content-wrapper', {
            click: true
          })
        })

      }
    },
    mounted () {

      this.$store.dispatch('getBanners');
      this.$store.dispatch('getIndexItems');
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
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
    .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
          padding 10px 10px 0
          .shop_icon
            margin-left 5px
            color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px
</style>
