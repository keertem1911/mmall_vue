<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="index">
      <img slot="icon" src="./index.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="category">
      <img slot="icon" src="./category.png">
      分类
    </mt-tab-item>
    <mt-tab-item id="shopping">
      <img slot="icon" src="./shopping.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="myself">
      <img slot="icon" src="./my.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
    export default {
      data(){
        return {
          message:'index',
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
