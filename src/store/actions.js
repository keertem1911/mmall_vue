
import {
  reqBanners,
  reqIndexItems,
  reqCategorys,
  reqShopsByCategoryId,
  reqUserInfo,
  reqLogOut,
  reqProductById,
  reqAddCar,
  reqCars
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_BANNERS,
  RECEIVE_INDEXITEMS,
  RECEIVE_CATEGORYS,
  RECEIVE_CATEGORYITEMS,
  RECEIVE_USERINFO,
  RECEIVE_RECORDUSER,
  RECEIVE_LOGOUT,
  RECEIVE_PRODUCTID,
  RECEIVE_ADDCAR,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  SELECTED_ALL_FOODS,
  UNSELECTED_ALL_FOODS,
  RECEIVE_CARS

} from './mutation-type'
import product_data from "@/product";
export  default {

  getProductList(context){
    setTimeout(()=>{
      context.commit('setProductList',product_data);
    },500)
  },
  buy(content){
    return new Promise(resolve=>{
      setTimeout(()=>{
        content.commit('emptyCart');
        resolve();

      },500)
    });
  },
  async getBanners({commit, state}){
    console.log("req banners ");
      const result= await reqBanners();
      console.log(result+" banners ----------");
      commit(RECEIVE_BANNERS,{banners:result.data})
  },
  async getIndexItems({commit, state}){
      const result= await reqIndexItems();
      commit(RECEIVE_INDEXITEMS,{indexItems:result.data})
  },
  async getCategoryList({commit,dispatch},callback){
      const result =await  reqCategorys();
      if(result.code===0){
        commit(RECEIVE_CATEGORYS,{category:result.data});
        callback &&callback()
      }


  },
  async getShopsByCategoryId({commit},{categoryId}){
      const result =await  reqShopsByCategoryId(categoryId);
      commit(RECEIVE_CATEGORYITEMS,{categoryItems:result.data})
  },
  async getUserInfo({commit}){
      const result =await  reqUserInfo();
      if(result.code===0&&result.data)
      commit(RECEIVE_USERINFO,{userinfo:result.data})
  },
    recordUser({commit},user){
      commit(RECEIVE_RECORDUSER,{user})
  },
  async getProduct({commit},id){
    console.log("getProduct "+id)
    const result= await  reqProductById(id);
    if(result.code===0){
        commit(RECEIVE_PRODUCTID,{detail:result.data})

    }
  },
  async logout({commit}){
      const result =await reqLogOut();

      if(result.code=== 0){
      commit(RECEIVE_LOGOUT)
      }
  },
  async addCar({commit},{id,count,price}){
    const result= await reqAddCar(id,count);
    if(result.code === 0){
       commit(RECEIVE_ADDCAR,{id,count,price})
    }
  },
  updateFoodCount({commit},{food,isAdd}){
      if(isAdd){
        commit(INCREMENT_FOOD_COUNT,food)
      }else{
        commit(DECREMENT_FOOD_COUNT,food)
      }
  },
  async getCar({commit}){
    const result =await  reqCars();
    if(result.code=== 0){
      commit(RECEIVE_CARS,result.data)
    }
  },
  changeSelected({commit},{isSelected}){
    if(isSelected){
      commit(SELECTED_ALL_FOODS);
    }else{
      commit(UNSELECTED_ALL_FOODS);

    }
  }

}
