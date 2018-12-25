<template>
  <div>
    <div class="mdetail">
      <div class="content">
        <div class="header">
          <mt-header fixed  title="商品详情">
              <mt-button icon="back" slot="left" @click="backgo"></mt-button>
          </mt-header>
        </div>
        <div class="mdetail-content-wrapper">
            <!--首页导航-->
           <div>
             <nav class="msite_nav" @click="isShowImage=!isShowImage">
               <div class="swiper-container" v-if="detail.images.length">
                 <div class="swiper-wrapper">
                   <div class="swiper-slide" v-for="(image, index) in detail.images" :key="index">
                     <div class="food2_container">
                       <img :src="image">
                     </div>
                   </div>
                 </div>
                 <!-- Add Pagination -->
                 <div class="swiper-pagination"></div>
               </div>
               <img src="./images/back.svg"  alt="back" v-else>
             </nav>
             <div class="mdetail_content">
               <div class="product-price">
                 <div class="now">￥{{detail.price}}</div>
                 <div class="old" v-if="this.detail.oldPrice">￥{{detail.oldPrice}}</div>
               </div>
               <div class="product-name">
                 <i class="iconfont icon-logo"></i>
                 <p>{{detail.name}}</p>
               </div>
             </div>
             <div class="mdetail_desc">
               <ul>
                 <li>
                   <img v-for="descimage in detail.desclist" :src="descimage"/>
                 </li>
               </ul>
             </div>
           </div>
        </div>
        <div class="detailhandler">
        <div class="car-div">
          <span class="car-num" v-if="totalCount>0" >{{totalCount}}</span>
          <i class="iconfont icon-gouwuche" style="color:black" @click="$router.push('/shopping')"></i></div>
        <div class="add-car"><mt-button  @click="isShow=!isShow" size="large" type="danger" >加入购物车</mt-button></div>
        <div class="gotobuy"><mt-button @click="buyNow" size="large" style="color: #ffffff;background: #f25807">立即购买</mt-button></div>
      </div>
      </div>
      <div class="list-mask" v-show="isShow" @click="isShow=!isShow"></div>
      <transition name="move">
        <div class="shopcart-list" v-show="isShow">
          <mt-cell title="数量">
            <div class="cartcontrol">
                    <transition name="move1">
                      <div class="iconfont icon-jianhao" v-if="cartCount>1" @click.stop="updateFoodCount(false)"></div>
                    </transition>
                    <div class="cart-count"  >{{cartCount}}</div>
                    <div class="iconfont icon-add" @click.stop="updateFoodCount(true)"></div>
            </div>
          </mt-cell>
                  <div >
                    <mt-button size="normal" @click="addCar" style="width: 100%" type="danger">确定</mt-button>
                  </div>
        </div>
      </transition>
    </div>
    <div class="image-mask" v-show="isShowImage" @click="isShowImage=!isShowImage">
      <div class="images-num"><span>{{currentImageIdx}}</span>/{{detail.images.length}}</div>
      <div class="swiper2-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in detail.images" :key="index">
            <div class="image-container">
              <img :src="image">
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper2-pagination"></div>
      </div>
    </div>

  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState,mapGetters} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        data () {
          return {
              id: parseInt(this.$route.params.id),
            baseImageUrl: 'https://fuss10.elemecdn.com',
            isShow:false,
            cartCount:1,
            isShowImage:false,
            currentImageIdx:1,
            swiperMask:null
          }
        },
      computed:{
        ...mapState(['detail']),
        ...mapGetters(['totalCount'])
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
            this.swiperMask =new Swiper('.swiper2-container', {
              loop: true, // 可以循环轮播
              // 如果需要分页器
              pagination: {
                el: '.swiper2-pagination',
              },
              observer:true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents:true,//修改swiper的父元素时，自动初始化swiper
              on: {
                slideChangeTransitionEnd:  ()=> {
                  if(this.swiperMask)
                  this.currentImageIdx=this.swiperMask.realIndex+1

                }
              }
            });

            new BScroll('.mdetail-content-wrapper', {
              click: true
            })
          })

        }
      },
        methods:{
          updateFoodCount(isAdd){
            if(!isAdd&&cartCount===1){
              return ;
            }
              this.cartCount+= isAdd?1:-1;
          },
          backgo(){
            this.$router.go(-1);
          },
          addCar() {
                this.$store.dispatch('addCar',{id:this.id,count:this.cartCount,price:this.detail.price,selected:true});
                this.isShow=!this.isShow
            },
          buyNow(){}
        },
        mounted () {
          this.$store.dispatch('getProduct',{id:this.id,callback:()=>{
              this.$nextTick(()=>{
                new BScroll('.mdetail_desc', {

                });
              })
            }});
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .mdetail  //首页
    position fixed
    left 0
    bottom 0
    z-index 5
    width 100%
    height 48px
    .content
      display flex
      background #141d27
      font-size 0
      color rgba(255, 255, 255, 0.4)
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
            width 100%
            font-weight: 700
            margin: 2 30 2;
            text-align left
            padding 2px 10px 2px
            i
              color: red
              font-size 20px
            p
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
        .mdetail_desc
            width:100%
            margin-bottom 50px
            & img
              width 100%
              margin 0
      .detailhandler
        position fixed
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
            padding: 0 3px; /*左右边距*/
            top: 0; /*数字离图片右上角的高度*/
            left: 10%;
            font-size 8px
          & i
            font-size 28px
            text-align center
            margin 12px 10px 10px 10px
    .shopcart-list
      position absolute
      left 0
      bottom  0
      z-index 7
      width 100%
      height 44px
      background white
      transform translateY(-100%)
      &.move-enter-active, &.move-leave-active
        transition transform .2s
      &.move-enter, &.move-leave-to
        transform translateY(0)
      .cartcontrol
        font-size: 0
        float right
        margin-right 10px
        .cart-decrease
          display: inline-block
          padding: 6px
          line-height: 24px
          font-size: 24px
          color: rgb(0, 160, 220)
        .icon-jianhao
          display: inline-block
          padding 6px
          line-height 24px
          font-size 24px
          color black
          &.move1-enter-active, &.move1-leave-active
            transition all .3s
          &.move1-enter, &.move1-leave-to
            opacity 0
            transform translateX(15px) rotate(180deg)
        .cart-count
          display: inline-block
          vertical-align: top
          width: 12px
          padding-top: 6px
          line-height: 24px
          text-align: center
          font-size: 14px
          color: rgb(147, 153, 159)
        .icon-add
          display: inline-block
          padding: 6px
          line-height: 24px
          font-size: 24px
          color black
  .list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 6
    backdrop-filter blur(10px)
    opacity 1
    background rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
      background rgba(7, 17, 27, 0)
  .image-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 8
    backdrop-filter blur(10px)
    opacity 1
    background #ffffff
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
      background #ffffff
    img
      width: 100%;
      height:400px;
    .images-num
      font-size 18px
      padding-top 10px
      text-align center
      span
        font-size 20px
    .swiper2-container
      width 100%
      height 100%
      margin-top 30%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          justify-content center
          align-items flex-start
          .image-container
            width: 100%
            height:200px
      .swiper2-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
