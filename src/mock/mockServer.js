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
  "data|3-4": [
    {
        "id|1000-9999":11,
        name:Mock.mock('@cword(3)'),
        "children|4-10":[
          {
            "id|1000-9999":11,
            image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
            name:Mock.mock('@name'),
            "price|10-200":1,
            "oldPrice|10-200":1,
            "rating|1-10":2,
            "recent_order_num|1-100":1 ,
          }
        ]
      },
    {
      "id|1000-9999":11,
      name:Mock.mock('@cword(3)'),
      "children|4-10":[
        {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:Mock.mock('@name'),
          "price|10-200":1,
          "oldPrice|10-200":1,
          "rating|1-10":2,
          "recent_order_num|1-100":1 ,
        }
      ]

    },
    {
      "id|1000-9999":11,
      name:Mock.mock('@cword(3)'),
      "children|4-10":[
        {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:Mock.mock('@name'),
          "price|10-200":1,
          "oldPrice|10-200":1,
          "rating|1-10":2,
          "recent_order_num|1-100":1 ,
        }
      ]
    },
    {
      "id|1000-9999":11,
      name:Mock.mock('@cword(3)'),
      "children|4-10":[
        {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:Mock.mock('@name'),
          "price|10-200":1,
          "oldPrice|10-200":1,
          "rating|1-10":2,
          "recent_order_num|1-100":1 ,
        }
      ]
    }
  ]

});
Mock.mock(RegExp('/api/shops' + ".*"),{
  code:0,
  data: [
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.Random.paragraph( 10 ),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.Random.paragraph( 10 ),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.Random.paragraph( 20 ),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.Random.paragraph( 20 ),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.Random.paragraph( 20 ),
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.Random.paragraph( 20 ),
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
Mock.mock(RegExp('/api/product' + ".*"), {
  code: 0,
  data:
    {
      "images|1-4":[
            Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      ],
        name:Mock.Random.paragraph( 1 ),
      "rating|1-10":2,
      "recent_order_num|1-100":1,
      "id|1000-9999":11,
      "price|1000-9999":11,
      "oldPrice|1000-9999":11,
      "desclist":[
        '//img30.360buyimg.com/popWaterMark/jfs/t26929/34/523288830/60888/849ae66e/5bb0809bNb9d99fa9.jpg',
          '//img30.360buyimg.com/popWaterMark/jfs/t25750/147/1388208357/369868/b64f906a/5bb0809bN65cd4827.jpg',
          '//img30.360buyimg.com/popWaterMark/jfs/t27403/332/517051732/177138/39fbcb4/5bb0809bNc29a4d0f.jpg',
          '//img30.360buyimg.com/popWaterMark/jfs/t27865/28/537494087/206527/8fdef2ae/5bb0809bN12562b61.jpg',
          '//img30.360buyimg.com/popWaterMark/jfs/t24787/203/1423695872/213123/45dadc83/5bb0809bN8d2be73e.jpg',
          '//img30.360buyimg.com/popWaterMark/jfs/t26236/146/539731984/187198/e62d0c90/5bb0809bNa88976ec.jpg',
          'http://img10.360buyimg.com/imgzone/jfs/t1/316/26/15703/631219/5bde4d6fE9f723d58/5ef89413092808f6.jpg'
      ]
    }
});
Mock.mock(RegExp('/api/car' + ".*"), {
  code: 0,
  "data":[
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "price|10-200":1,
      "rating|1-10":2,
      "recent_order_num|1-100":1,
      count:1,
      selected:true
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "price|10-200":1,
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
      count:1,
      selected:true
    },
    {
      "id|1000-9999":11,
      image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
      name:Mock.mock('@name'),
      "price|10-200":1,
      "rating|1-10":2,
      "recent_order_num|1-100":1 ,
      count:1,
      selected:false
    }
  ]
});
/**
 *
 */
Mock.mock(RegExp('/api/orderlist' + ".*"), {
  code: 0,
  "data":[
    {
      "id|1000-9999":11,
      items:[
        {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"芙丽芳丝（freeplus）净润洗面霜100g（洗面奶洁面乳 男女适用 氨基酸系 日本 护肤品化妆品 温和不易紧绷）",
        }, {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"芙丽芳丝（freeplus）净润洗面霜100g（洗面奶洁面乳 男女适用 氨基酸系 日本 护肤品化妆品 温和不易紧绷）",
        }, {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"芙丽芳丝（freeplus）净润洗面霜100g（洗面奶洁面乳 男女适用 氨基酸系 日本 护肤品化妆品 温和不易紧绷）",
        }, {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"芙丽芳丝（freeplus）净润洗面霜100g（洗面奶洁面乳 男女适用 氨基酸系 日本 护肤品化妆品 温和不易紧绷）",
        }, {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"芙丽芳丝（freeplus）净润洗面霜100g（洗面奶洁面乳 男女适用 氨基酸系 日本 护肤品化妆品 温和不易紧绷）",
        }, {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"芙丽芳丝（freeplus）净润洗面霜100g（洗面奶洁面乳 男女适用 氨基酸系 日本 护肤品化妆品 温和不易紧绷）",
        },
      ],
      "totlePrice|10-200":1,
      "status|1-5":1,
      num:6
    },
    {
      "id|1000-9999":11,
      items:[
        {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"法国贝德玛（Bioderma）舒妍多效洁肤液500ml （卸妆水 深层清洁 粉水 舒缓保湿 敏感肌 眼唇 官方授权）",
        }
      ],

      "totlePrice|10-200":1,
      "status|1-5":1,
        num:1
    }, {
      "id|1000-9999":11,
      items:[
        {
          "id|1000-9999":11,
          image_path: Mock.Random.dataImage('200x100',Mock.mock('@color'), Mock.mock('@name')) ,
          name:"法国贝德玛（Bioderma）舒妍多效洁肤液500ml （卸妆水 深层清洁 粉水 舒缓保湿 敏感肌 眼唇 官方授权）",
        }
      ],
      "totlePrice|10-200":1,
      "status|1-5":1,
        num:1
    },
  ]
});


