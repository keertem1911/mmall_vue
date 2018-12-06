import $ from 'axios'
$.defaults.baseURL = 'http://localhost:8080/mmall';
$.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const http={
};
 http.get =(url,param,callback)=>{
  return $.get(url,{
    params:param
  }).then(res=>{
    return res.data;
  }).catch(error=>{
    callback(error.message);
    return''
  })
};
 http.post =(url,param,callback)=>{
  return $.post(url,param).then(res=>{
    return res.data;
  }).catch(error=>{
    callback(error.message);
    return''
  })
};
 http.delete =(url,param,callback)=>{
  return $.delete(url,param).then(res=>{
    return res.data;
  }).catch(error=>{
    callback(error.message);
    return''
  })
}; http.put =(url,param,callback)=>{
  return $.put(url,param).then(res=>{

    return res.data;
  }).catch(error=>{
    callback(error.message);
    return''
  })
};
export default http;
