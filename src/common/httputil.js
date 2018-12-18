import $ from 'axios'
const baseURL = '/api';
$.defaults.headers['Content-Type']='multipart/form-data';

$.defaults.withCredentials=true;
export default function ajax(url,data={},type='GET'){
  return new Promise(function (resolve, reject) {
    let promise;
    if (type === 'GET') {
    // 准备 url query 参数数据
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      });
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr
      } //  发送 get 请求
      promise = $.get(url)
    } else if(type=== 'POST'||type=== 'PUT'){
    // 发送 post 请求
      promise = $({
        url,
        method: type,
        data,
        transformRequest: [function (data) {
          let ret = '';
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    } else if(type=== 'DELETE'){
      promise= $.delete(url,data);
    }
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      reject(error)
    })

  })
}

