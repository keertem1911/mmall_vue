export default {

  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.selected?food.count:0 , 0)
  },

  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + (food.selected?food.count:0)*food.price , 0)
  },
  isAllSelected:state=>{
    return state.cartFoods.filter(item=>item.selected).length=== state.cartFoods.length
  },
  isEditSelected:state=>{
    return state.cartFoods.filter(item=>item.editselected).length=== state.cartFoods.length
  }

}


