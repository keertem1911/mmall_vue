
import {
  reqAddress,
  reqBanners,
  reqIndexItems,
  reqCategorys
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_BANNERS,
  RECEIVE_INDEXITEMS,
  RECEIVE_CATEGORYS
} from './mutation-type'
import product_data from "@/product";
export  default {
    async getAddress({commit, state}) {
        const gohash = state.latitude+','+state.longitude;
        const result= await reqAddress(gohash);
        commit(RECEIVE_ADDRESS,{address:result.data})
    },
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
      const result= await reqBanners();
      commit(RECEIVE_BANNERS,{banners:result.data})
  },
  async getIndexItems({commit, state}){
      const result= await reqIndexItems();
      commit(RECEIVE_INDEXITEMS,{indexItems:result.data})
  },
  async getCategoryList({commit}){
      const result =await  reqCategorys();
      commit(RECEIVE_CATEGORYS,{category:result.data})
  },
  async getShopsByCategoryId({commit},{categoryId}){
      const result =await  reqShopsByCategoryId(categoryId);
      commit(RECEIVE_CATEGORYITEMS,{categoryItems:result.data})
  }
}
