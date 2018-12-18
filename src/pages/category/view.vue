<template>
  <div  >
    <div class="header">
      <mt-header fixed title="分类"></mt-header>
    </div>
    <div class="main">
      <div class="left-silde">
        <div class="left-item" v-for="item in categorys"
             :class="{ on: item.active }" @click="handleChange(item.id)">{{item.name}}</div>
      </div>
      <div class="content">
          <ShopList :shopList="categoryList"/>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import ShopList from '../../views/shopList/ShopList'
export default{
      components:{
        ShopList
      },
      computed:{
        ...mapState(['categorys','categoryList']),
        // 计算得到当前分类的下标
        currentIndex() {// 初始和相关数据发生了变化
          // 得到条件数据
          const {scrollY, tops} = this;
          // 根据条件计算产生一个结果
          const index = tops.findIndex((top, index) => {
            // scrollY>=当前top && scrollY<下一个top
            return scrollY >= top && scrollY < tops[index + 1]
          });
          // 返回结果
          return index
        }
      },
        data(){
          return{
            scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
            tops: [], // 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
          }
        },
  methods: {
    // 初始化滚动
    _initScroll() {
      // 列表显示之后创建
      new BScroll('.menu-wrapper', {
        click: true
      });
      this.foodsScroll = new BScroll('.foods-wrapper', {
        probeType: 2,  // 因为惯性滑动不会触发
        click: true
      });

      // 给右侧列表绑定scroll监听
      this.foodsScroll.on('scroll', ({x, y}) => {
        console.log(x, y);
        this.scrollY = Math.abs(y)
      });
      // 给右侧列表绑定scroll结束的监听
      this.foodsScroll.on('scrollEnd', ({x, y}) => {
        console.log('scrollEnd', x, y);
        this.scrollY = Math.abs(y);
      })

    },
    // 初始化tops
    _initTops() {
      // 1. 初始化tops
      const tops = [];
      let top = 0;
      tops.push(top);
      // 2. 收集
      // 找到所有分类的li
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight;
        tops.push(top)
      });

      // 3. 更新数据
      this.tops = tops;
      console.log(tops)
    },

    clickMenuItem(index) {
      // console.log(index)
      // 使用右侧列表滑动到对应的位置

      // 得到目标位置的scrollY
      const scrollY = this.tops[index];
      // 立即更新scrollY(让点击的分类项成为当前分类)
      this.scrollY = scrollY;
      // 平滑滑动右侧列表
      this.foodsScroll.scrollTo(0, -scrollY, 300)
    },

    // 显示点击的food
    showFood (food) {
      // 设置food
      this.food = food;
      // 显示food组件 (在父组件中调用子组件对象的方法)
      this.$refs.food.toggleShow()
    }
  },
        mounted() {
          this.$store.dispatch('getCategoryList', () => {// 数据更新后执行
            this.$nextTick(() => { // 列表数据更新显示后执行
              this._initTops();
              this._initScroll();
            })
          })

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.left-silde
  width:20%;
  height:100%;
  position: fixed;
  overflow: auto;
  background: #ffff;
  .left-item
    text-align: center;
    font-size: 16px;
    margin: 6px 0 ;
    padding: 10px 0;
    transition: all .3s ease-in-out;
    border-right: 1px solid transparent;
    &:hover
      background: #e3e8ee;
    &.on
      border-right: 2px solid #3399ff;
.content
  width:78%;
  margin-left: 4px;
  left:20%;
  position: relative;
  background: #ffff;
</style>
