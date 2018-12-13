import ajax from '../common/httputil.js'

export const reqAddress = geohash => ajax('/api/position/' + geohash);
export const reqBanners = ()=>ajax('/api/banners');
export const reqIndexItems= ()=>ajax('/api/indexItems');
export const reqCategorys= ()=>ajax('/api/categorys');
export const reqShopsByCategoryId= (category)=>ajax('/api/shops',{category});
