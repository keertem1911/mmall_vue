<template>
  <div class="address">
    <div class="header">
      <mt-header fixed title="地址管理">
        <mt-button icon="back" slot="left" @click="$router.go(-1)"/>
      </mt-header>
    </div>
    <div class="main-content">
        <div class="address-list">
          <ul class="address-ul">
            <li class="address-li" v-for="(address,index) in addressList"   :key="index">
              <div class="content-left">
                <div class="content-top">
                  <div class="content-name">{{address.receiveName}}</div>
                  <div class="content-phone">{{address.phone}}</div>
                  <div class="content-tags">
                    <div class="tag-default" v-show="address.isdefault">默认</div>
                    <div class="tag-item" v-for="(tag,index) in address.tags" :key="index">{{tag}}</div>
                  </div>
                </div>
                  <div class="content-bottom">{{address.addressInfo}}</div>

              </div>
              <div class="content-right">
                <i class="iconfont icon-compile" @click="editReceive(address.id)"></i>
              </div>
            </li>
          </ul>
        </div>

    </div>
    <div class="add-div">
      <mt-button class="add-address" @click="addReceive()" type="danger" ><i  class="iconfont icon-add1"></i>添加收货人</mt-button>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
    export default {
      data(){
        return {

        }
      },
      methods:{
        editReceive(id){
          this.$router.push({path:'/addressDetail',query:{id}})
        },
        addReceive(){
          this.$router.push({path:'/addressDetail'})

        }
      },
      computed:{
        ...mapState(['addressList'])
      },
      watch:{
        addressList:function (val,old) {
          this.$nextTick(()=>{

            new BScroll('.address-list')
          })
        }
      },
      mounted(){
        this.$store.dispatch('getAddress',()=>{

        });
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
.main-content
  width: 100%
  height: 700px
  .address-list
    ul
      margin-bottom 20px
      .address-li
        background white
        width: 100%
        height: 60px
        display flex
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .content-left
          margin-left 10px
          flex 8
          height: 70px
          overflow: hidden
          .content-top
            width: 100%
            margin 10px 0 0 4px
            display flex
            .content-name
              font-size 16px
              flex: 1
              font-weight bold
            .content-phone
              margin-left 8px
              flex: 1
              font-size 16px
              font-weight bold
            .content-tags
              flex: 3
              color white
              display flex
              margin-left 8px
              font-size 16px
              .tag-default
                font-size 12px
                text-full-border(#ff5f3e,40px,16px)
              .tag-item
                font-size 12px
                text-full-border(#ff5f3e,40px,16px)
          .content-bottom
            width: 100%
            height: 20px
            display inline-block
            margin 4px 0 0 4px
            overflow: hidden
            text-overflow: ellipsis
        .content-right
          height: 60px
          flex 1
          i
            text-align center
            float right
            margin 8px
            padding 8px
.add-div
  background #fefefe
  position fixed
  bottom 0
  height:40px
  width: 100%;
  .add-address
    width: 80%
    position: fixed;
    left: 10%;
    text-align center
    margin-bottom 8px
    padding 10px
    border-radius 20px
    .iconfont
      margin-right 10px
</style>
