<template>
    <div class="cart">
        <div class="header">
             <mt-header fixed title="购物车清单">
               <mt-button  slot="right"  @click="editItem" v-show="cartFoods.length>0" >编辑</mt-button>

             </mt-header>
        </div>
        <div class="cart-content">
          <div class="foods-wrapper" >
            <ul>
                  <li class="food-item bottom-border-1px" v-for="(car, index) in cartFoods"
                      :key="index" v-if="car.count>0">
                    <div class="seleced-input" v-if="!isEdit">
                      <i class="car-selected iconfont icon-radiobox" v-if="car.selected" @click="car.selected=!car.selected"></i>
                      <i class="car-selected iconfont icon-radio02"v-else @click="car.selected=!car.selected"></i>
                      <!--<input  class="car-selected" type="checkbox" v-model="car.selected"/>-->
                    </div>
                    <div class="seleced-input" v-else>
                      <i class="car-selected iconfont icon-radiobox" v-if="car.editselected" @click="car.editselected=!car.editselected"></i>
                      <i class="car-selected iconfont icon-radio02" v-else @click="car.editselected=!car.editselected"></i>
                      <!--<input  class="car-selected" type="checkbox" v-model="car.selected"/>-->
                    </div>
                    <div class="icon">
                      <img width="57" height="57" :src="car.image_path">
                    </div>
                    <div class="content">
                      <h2 class="name">{{car.name}}</h2>
                      <!--<p class="desc">{{food.description}}</p>-->
                      <div class="extra">
                        <span class="count">月售{{car.recent_order_num}}份</span>
                        <span>好评率{{car.rating}}%</span>
                      </div>
                      <div class="price">
                        <span class="now">￥{{car.price}}</span>
                        <span class="old" v-if="car.oldPrice">￥{{food.oldPrice}}</span>
                      </div>
                      <div class="cartcontrol-wrapper" v-show="!isEdit">
                        <car-control :food="car"/>
                      </div>
                    </div>
                  </li>
            </ul>
          </div>
          <div class="cart-empty" v-if="cartFoods.length===0">
            <div class="cart-empty-content"><i class="iconfont icon-gouwuche1" ></i>购物车是空的</div>
          </div>
          <div class="detailhandler" v-if="!isEdit" v-show="cartFoods.length>0">
            <div class="select-all" @click="changeSelected" >
              <i class="iconfont icon-radiobox" v-if="isAllSelected" >全选</i>
              <i class="iconfont icon-radio02" v-else >全选</i>
            </div>
            <div class="totle-price">
              合计:￥{{totalPrice}}
            </div>
            <div class="gotobuy"><mt-button @click="gotobuy" size="large" style="color: #ffffff;" :style="{background:(totalCount&&cartFoods.length>0?'#f25807':'#e1e1e1')}">去结算({{totalCount}})</mt-button></div>
          </div>
          <div class="detailhandler" v-else v-show="cartFoods.length>0">
            <div class="select-all" @click="changeEditSelected" >
              <i class="iconfont icon-radiobox" v-if="isEditSelected" >全选</i>
              <i class="iconfont icon-radio02" v-else >全选</i>
            </div>
            <div class="totle-price">
            </div>
            <div class="gotobuy"><mt-button @click="deleteItem" size="large" type="danger"  >删除</mt-button></div>
          </div>
        </div>
    </div>
</template>

<script>
    import CarControl from '../../views/cartcontroller/view'
    import {mapState,mapGetters}from 'vuex'

    export default {
       components:{
         CarControl,
       },
        data(){
          return {
            isEdit:false
          }
        },
      computed:{
        ...mapState(['cartFoods']),
        ...mapGetters(['totalCount','totalPrice','isAllSelected','isEditSelected']),
      },

      mounted() {
        this.$store.dispatch('getCar', () => {// 数据更新后执行
          this.$nextTick(() => { // 列表数据更新显示后执行
            this._initScroll();
          })
        })

      },
        name: "cart",
      methods: {
        deleteItem(){
            this.$store.dispatch("deleteShoppingItems",()=>{
              this.$store.dispatch('getCar');
              this.isEdit=false
            })
        },
        editItem(){
          if(!this.isEdit)
            this.$store.dispatch('initEditSelected');
          this.isEdit=!this.isEdit

        },
        gotobuy(){
          if(this.totalCount>0){

          }
        },
        changeSelected(){
          this.$store.dispatch('changeSelected',{isSelected:!this.isAllSelected})
        },
        changeEditSelected(){
          this.$store.dispatch('changeEditSelected',{isSelected:!this.isEditSelected})
        },
        // 初始化滚动
        _initScroll() {
          // 列表显示之后创建
          new BScroll('.foods-wrapper', {
            click: true
          });
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart
    display: flex
    position: absolute
    top: 30px
    bottom: 46px
    width: 100%
    background: #f1f1f1;
    overflow: hidden
    .cart-content
      width:100%
      top:45px
    .foods-wrapper
      & ul
        margin-top 15px
        width:100%
        background white
      .food-item
        display: flex
        margin: 18px 8px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .seleced-input
          flex: 0 0 20px
          text-align center
          & i
            width:20px
            line-height 55px
            margin 0 auto
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
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
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
            line-height: 24p
    .cart-empty
      background white
      height: 60px
      margin 8px
      text-align center
      .cart-empty-content
        padding-top 10px
        font-size 20px
        .iconfont
          margin-right 8px
          font-size 30px
    .detailhandler
      background white
      position fixed
      margin-bottom  55px
      left:0
      right:0
      bottom:0
      display flex
      text-align center
     .gotobuy
        display inline-block
        flex:2
        text-align center
      .totle-price
        display inline-block
        flex:3
        text-align left
        padding 10px
      .select-all
        display inline-block
        flex:1
        text-align center
        padding 10px


</style>

