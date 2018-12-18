import {
  RECEIVE_ADDRESS,
  RECEIVE_INDEXITEMS,
  RECEIVE_BANNERS,
  RECEIVE_CATEGORYS,
  RECEIVE_CATEGORYITEMS,
  RECEIVE_USERINFO,
  RECEIVE_RECORDUSER,
  RECEIVE_LOGOUT
} from './mutation-type'
export default {
  [RECEIVE_LOGOUT](state){
    state.userinfo={};
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
  },

  emptyCart(state){
    state.cartList=[];
  },
  editCartCount(state,payload){
    const product= state.cartList.find(item=>item.id === payload.id);
    product.count += payload.count;
  },
  deleteCart(state,id){
    const index= state.cartList.findIndex(item=>item.id===id);
    state.cartList.splice(index,1);
  },
  setProductList(state,data){
    state.productList=data
  },
  addCart (state, id) {
    const isAdded= state.cartList.find(m=>m.id ===id);
    if(isAdded){
      isAdded.count++
    }else{
      state.cartList.push({
        id,
        count:1
      })
    }

  }
}
