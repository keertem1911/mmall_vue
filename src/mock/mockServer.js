import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/api/banners',{
  code:0,
  "data|1-3": [
    {
      "id|100-200": "202",
      image_url: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name'))
    }
  ]

});
Mock.mock('/api/indexItems',{
  code:0,
  "data|1-10": [
    {
        "id|1000-9999":11,
        image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
        name:Mock.mock('@name'),
        "rating|1-10":2,
        "recent_order_num|1-100":1 ,
      }
  ]

});
Mock.mock('/api/categorys',{
  code:0,
  "data": [
    {
        "id|1000-9999":11,
        name:Mock.mock('@cword(3)'),
        active:true
      },
    {
      "id|1000-9999":11,
      name:Mock.mock('@cword(3)'),
      active:false
    },
    {
      "id|1000-9999":11,
      name:Mock.mock('@cword(3)'),
      active:false
    },
    {
      "id|1000-9999":11,
      name:Mock.mock('@cword(3)'),
      active:false
    }
  ]

});
Mock.mock(RegExp('/api/shops' + ".*"),{
  code:0,
  data: [
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    }
  ]

});
