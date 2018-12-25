<template>
    <div class="my">
      <div class="header">
        <mt-header fixed title="我的">
          <mt-button  slot="right"  class="iconfont icon-setting"  @click="$router.push('/settings')"></mt-button><!--v-show="userinfo._id"-->
        </mt-header>
      </div>
      <div class="my-main-content">
          <div class="main-header">
            <div class="main-img"><img src="header.png"></div>
            <div class="main-content">
              <router-link v-if="userinfo._id==null" to="login">
                登陆|注册
              </router-link>
            <p v-else>账号名称: {{userinfo.name||userinfo.phone}}</p></div>
          </div>
          <div class="main-type">
            <div class="type-item" v-for="item in types" @click="$router.push(item.action)">
              <div class="type-img"><i class="iconfont" :class="item.icon"></i></div>
              <div class="type-name">{{ item.name }}</div>
            </div>
          </div>
        <div  class="profile_my_order border-1px" v-if="userinfo._id">
          <mt-button style="width: 100%" type="danger" @click="logout">退出登陆</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { MessageBox, Toast } from 'mint-ui'
    export default {
    computed:{
      ...mapState(['userinfo'])
    },
      data() {
        return {
          types:[
            {
              icon: "icon-32",
              name:'待付款',
              action:'/orders/unplay'
            },
            {
              icon: "icon-daishouhuofuben",
              name:'待收货',
              action:'/orders/unreceive'
            },
            {
              icon: "icon-pinglun",
              name:'待评论',
              action:'/commentlist'
            },
            {
              icon: "icon-order_icon",
              name:'我的订单',
              action: '/orders/all'
            }
          ]
        }
      },
        name: "my",
      methods:{
        logout(){
          MessageBox.confirm('确定要退出？').then(action=>{
            // 请求退出
            this.$store.dispatch('logout');
            Toast('登出完成')
          }).then(action=>{

          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.main-header
  display: flex;
  margin: 16px;
  border: 1px solid #dddee1;
  border-radius: 8px;
  height:10%;
  background: #fff;
  .main-content
    flex:3;
    padding: 16px;
    &p
      text-align: center;
      margin:16px 8px 8px;
      padding: 4px;
      float: left;
  .main-img
    margin: 8px;
    flex:1;
    padding: 8px;
    overflow: hidden;
    & img
      width:64px;
      height:64px;
.main-type
  margin: 16px;
  border: 1px solid #dddee1;
  border-radius: 8px;
  height:10%;
  background: #fff;
  display: flex;
  .type-item
    width:20%;
    height: 48px;
    margin: 8px;
    padding: 7px 0;
    flex:1;
    text-align: center;
    font-size: 12px;
    .type-img
      padding: 0;
      margin: 8px auto 0;
      & i
        font-size: 24px;
        width:64px;
        height:64px;
    .type-name
      padding: 0;
      margin: 6px;
      line-height: 1;
    & span
      float: bottom;
.profile_my_order
  top-border-1px(#e4e4e4)
  margin-bottom  10px
  background #fff
  .my_order
    display flex
    align-items center
    padding-left 15px
    >span
      display flex
      align-items center
      width 20px
      height 20px
      >.iconfont
        margin-left -10px
        font-size 30px
      .icon-order-s
        color #02a774
      .icon-jifen
        color #ff5f3e
      .icon-vip
        color #f90
      .icon-fuwu
        color #02a774
    .my_order_div
      width 100%
      border-bottom 1px solid #f1f1f1
      padding 18px 10px 18px 0
      font-size 16px
      color #333
      display flex
      justify-content space-between
      span
        display block
      .my_order_icon
        width 10px
        height 10px
        .icon-jiantou1
          color #bbb
          font-size 10px
</style>
