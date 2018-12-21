import vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_INDEXITEMS,
  RECEIVE_BANNERS,
  RECEIVE_CATEGORYS,
  RECEIVE_CATEGORYITEMS,
  RECEIVE_USERINFO,
  RECEIVE_RECORDUSER,
  RECEIVE_LOGOUT,
  RECEIVE_PRODUCTID,
  RECEIVE_ADDCAR,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  RECEIVE_CARS,
  SELECTED_ALL_FOODS,
  UNSELECTED_ALL_FOODS
} from './mutation-type'
export default {

  [SELECTED_ALL_FOODS](state){
    state.cartFoods.forEach(item=>item.selected=true)
  },
  [UNSELECTED_ALL_FOODS](state){
    state.cartFoods.forEach(item=>item.selected=false)
  },
  [RECEIVE_CARS](state,cartFoods){
    state.cartFoods=cartFoods;
  },
  [INCREMENT_FOOD_COUNT](state,food){
      if(food.count){
        food.count++;
      }else{
          vue.set(food,'count',1);
        state.cartFoods.push(food);
      }

  },
  [DECREMENT_FOOD_COUNT](STATE,food){

      if(food.count){
        food.count--;
        // if(food.count===0){
        // state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        // }
      }

  },
  [RECEIVE_ADDCAR](state,{id,count,price}){
    const idx= state.cartFoods.findIndex(d=>d.id===id);
    console.log(idx)
    if(idx>0){
      state.cartFoods[idx].count=count+state.cartFoods[idx].count;
    }else{
      const food= {id,count,price};
      console.log(food)
      state.cartFoods.push(food);
    }
  },
  [RECEIVE_LOGOUT](state){
    state.userinfo={};
  },
  [RECEIVE_PRODUCTID](state,{detail}){
    state.detail=detail;
  },
  [RECEIVE_RECORDUSER](state,{user}){
    state.userinfo=user;
  },
  [RECEIVE_USERINFO](state,{userinfo}){
    state.userinfo= userinfo;
  },
  [RECEIVE_CATEGORYITEMS](state,{categoryItems}){
    state.categoryList=categoryItems;
  },
  [RECEIVE_ADDRESS] (state,{address}) {
  },
  [RECEIVE_BANNERS](state,{banners}){
    state.banners=banners;
  },
  [RECEIVE_INDEXITEMS](state,{indexItems}){
    state.indexItems=indexItems;
  },
  [RECEIVE_CATEGORYS](state,{category}){
    state.categorys= category;
  }

}
