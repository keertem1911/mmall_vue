export default {
  brands:state=>{
    const brands= state.productList.map(b=>b.brand);
    return getFilterArray(brands);
  },
  colors: state=>{
    const colors =state.productList.map(c=>c.color);
    return getFilterArray(colors);
  }
}

function getFilterArray(array) {
  let _self=[];
  let json={};
  for (let i = 0; i < array.length; i++) {
    if(!json[array[i]]){
      _self.push(array[i]);
      json[array[i]]=1;
    }
  }
  return _self;
}
