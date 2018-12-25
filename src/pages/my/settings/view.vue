<template>
    <div class="settings">
      <div class="header">
        <mt-header fixed title="设置">
          <mt-button icon="back" slot="left" @click="$router.go(-1)"/>
        </mt-header>
      </div>
      <div class="main-header">
        <div class="main-img"><img src="../header.png" :src="userinfo.header"></div>
        <div class="main-content">
          <p>账号名称: {{userinfo.name||userinfo.phone}}</p></div>
      </div>
      <div class="setting-list">
          <mt-cell v-for="(setting,index) in settinglist" :to="setting.link" :key="index" :title="setting.name" is-link   :value="setting.value||''">
            <i class="iconfont" :class="setting.icon" slot="icon"></i>
          </mt-cell>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Item from "@/pages/my/orderlist/item";
    export default {
        name: "settings",
      components: {Item},
      data(){
        return{
          settinglist:[
            {
              name:'地址管理',
              link:'/address',
              icon:'icon-shouhuodizhi'
            },
            {
              name:'账户安全',
              value:'密码/支付等管理',
              link:'/accountSecurity',
              icon:'icon-suo'
            }
          ]
        }
      },
      computed:{
        ...mapState(['userinfo'])
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
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
</style>
