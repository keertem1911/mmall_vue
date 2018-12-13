<template>
  <div class="msite">
    <!--首页头部-->
    <header class="header">
      <a class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <a class="header_title">
        <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
      </a>
      <a class="header_login">
        <span class="header_login_text">登录|注册</span>
      </a>
    </header>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">每日推荐</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/1.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title" >锄禾日当午， 汗滴禾下土</h4>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售 106 单
                    </div>
                  </section>
                 <!-- <section class="shop_rating_order_right">
                      <span class="delivery_style delivery_left">硅谷专送
                      </span>
                    <span class="delivery_style delivery_right">准时达
                        </span>
                  </section>-->
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
</style>
