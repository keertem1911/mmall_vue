<template>
    <div class="my">
      <div class="header">
        <mt-header fixed title="我的">
          <mt-button  slot="right" icon="more iconfont icon-setting"></mt-button>
        </mt-header>
      </div>
      <div class="my-main-content">
          <div class="main-header">
            <div class="main-img"><img src="./header.png"></div>
            <div class="main-content">
            <p>账号名称: swqsvf2312dc</p></div>
          </div>
          <div class="main-type">
            <div class="type-item" v-for="item in types">
              <div class="type-img"><img :src="item.icon"></div>
              <div class="type-name">{{ item.name }}</div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          types:[
            {
              icon: require('./index1.png'),
              name:'待付款',
              action:'/orderlist/1'
            },
            {
              icon: require('./index2.png'),
              name:'待收货',
              action:'/orderlist/2'
            },
            {
              icon: require('./index3.png'),
              name:'待评论',
              action:'/commentlist'
            },
            {
              icon: require('./index4.png'),
              name:'我的订单',
              action:'/orderlist/4'
            }
          ]
        }
      },
        name: "my"
    }
</script>

<style scoped>
  .mintui-setting{
    background-image: url("./setting.png");
  }
  div.main-content{
    flex:3;

    padding: 16px;
  }
  .main-content p{
    text-align: center;
    margin:16px 8px 8px;
    padding: 4px;
    float: left;
  }

  div.main-img{
    margin: 8px;
    flex:1;
    padding: 8px;
    overflow: hidden;
  }
  div.main-header{
    display: flex;
    margin: 16px;
    border: 1px solid #dddee1;
    border-radius: 8px;
    height:10%;
    background: #fff;
  }

  div.main-img img{
    width:64px;
    height:64px;
  }

div.main-type{
  margin: 16px;
  border: 1px solid #dddee1;
  border-radius: 8px;
  height:10%;
  background: #fff;
  display: flex;
  /*position: fixed;*/
}
  div.type-item{
    width:20%;
    height: 48px;
    margin: 8px;
    padding: 7px 0;
    flex:1;
    text-align: center;
    font-size: 12px;
  }
  div.type-img{
    padding: 0;
    margin: 8px auto 0;
  }
  div.type-name{
    padding: 0;
    margin: 0;
    line-height: 1;
  }
  div.type-img img{
    width:32px;
    height:32px;
  }
  .type-item span{
    float: bottom;
  }
  /*div.my-main-content{*/
    /*margin*/
  /*}*/
</style>
