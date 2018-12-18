<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="index">
      <i slot="icon" class="iconfont icon-shouye"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="category">
      <i slot="icon" class="iconfont icon-fenlei"></i>
      分类
    </mt-tab-item>
    <mt-tab-item id="shopping">
      <i slot="icon" class="iconfont icon-gouwuche"></i>
      购物车
    </mt-tab-item>
    <mt-tab-item id="myself">
      <i slot="icon" class="iconfont icon-duomeitiicon-"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
    export default {
      data(){
        return {
          message:this.$route.meta.index||'index',
        }
      },
      mounted(){
        this.$router.push(this.message)
      },
      watch: {
        message:function (val,oldVal)   {
          switch (val) {
            case "index":
              this.$router.push('/index');
              break;
            case "category":
              this.$router.push('/category');
              break;
            case "shopping":
              this.$router.push('/shopping');
              break;
            case "myself":
              this.$router.push('/myself');
              break;
          }
        }
      },
        name: "tab"
    }
</script>

<style scoped>

</style>
