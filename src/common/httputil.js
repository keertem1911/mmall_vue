import $ from 'axios'
const baseURL = '/api';
$.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default function ajax(url,data={},type='GET'){
  return new Promise(function (resolve, reject) {
      if(type=== 'GET'){
        var query="";
        data.forEach(k=>{
            query+= k+data[k]
        })
      }else{

      }

  })
}

