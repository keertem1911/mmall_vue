<template>
    <div class="addressedit">
      <div class="header">
        <mt-header fixed :title="headName">
          <mt-button icon="back" slot="left" @click="$router.go(-1)"/>
          <mt-button   slot="right" @click="deleteAddress" v-show="$route.query.id">删除</mt-button>
        </mt-header>
      </div>
      <div class="address-content">
            <div class="address-form">
                <ul>
                    <li><mt-field label="收货人:" placeholder="请填写姓名" v-model="address.name"></mt-field></li>
                    <li><mt-field label="手机号码:"    placeholder="请填写手机号" v-model="address.phone" type="tel"></mt-field></li>
                    <li><mt-field label="所在地区:" :readonly="!0" v-model="address.area" placeholder="请选择地区" @click.native="popupVisible=!popupVisible"></mt-field></li>
                    <li><mt-field label="详细地址:" placeholder="请填写详细地址" v-model="address.addressInfo"></mt-field></li>
                    <li><div class="mint-cell mint-field">
                      <div class="mint-cell-wrapper" style="min-height: 40px">
                        <div class="mint-cell-title"><span class="mint-cell-text">标签</span></div>
                        <div class="mint-cell-value" >
                          <div class="tag-item" style="margin-left: 14px" v-for="(item,index) in detailtTags" :key="index">
                            <input type="radio" v-model="address.tag" :value="item"/>
                            <label>{{item}}</label>
                          </div>
                        </div>
                      </div>
                    </div></li>
                  <li>
                    <mt-cell title="是否默认:"><mt-switch style="height: 20px;right: 40%" v-model="address.isdefault"></mt-switch></mt-cell>
                  </li>

                </ul>
              <div class="btn-submit">
                <mt-button type="danger" class="btn-save" >保存</mt-button>
              </div>
            </div>
        <mt-popup  v-model="popupVisible" position="bottom" class="prop-tk" style="font-size: 16px">
          <div style="display: flex;">
            <p style="margin:4px 0 0 18px;text-align:left;float: left;flex: 1;" @click="closeTK">取消</p>
            <p  style="margin:4px 18px 0 0;text-align:right;float: right;flex: 1;"@click="saveTK">确定</p>
          </div>
          <mt-picker ref="pickCom" :slots="slots"   @change="onValuesChange" value-key="areaName"></mt-picker>
        </mt-popup>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
  const streetMap={
    '雁塔区':[
      {
        areaName:'小寨路街道',
        areaCode:'1',
      },{
        areaName:'大雁塔街道',
        areaCode:'2',
      },{
        areaName:'长延堡街道',
        areaCode:'3',
      }
    ],
    '未央区':[
      {
        areaName:'未央区街道',
        areaCode:'1',
      },{
        areaName:'未央区街道',
        areaCode:'2',
      },{
        areaName:'未央区街道',
        areaCode:'3',
      }
    ],
    '莲湖区':[
      {
        areaName:'莲湖区街道',
        areaCode:'1',
      },{
        areaName:'莲湖区街道',
        areaCode:'2',
      },{
        areaName:'莲湖区街道',
        areaCode:'3',
      }
    ],
    '渭1区':[
      {
        areaName:'渭南区街道',
        areaCode:'1',
      },{
        areaName:'渭南区街道',
        areaCode:'2',
      },{
        areaName:'渭南区街道',
        areaCode:'3',
      }
    ],
    '渭2区':[
      {
        areaName:'渭南区街道',
        areaCode:'1',
      },{
        areaName:'渭南区街道',
        areaCode:'2',
      },{
        areaName:'渭南区街道',
        areaCode:'3',
      }
    ],
    '渭3区':[
      {
        areaName:'渭南3区1街道',
        areaCode:'1',
      },{
        areaName:'渭南3区2街道',
        areaCode:'2',
      },{
        areaName:'渭南3区3街道',
        areaCode:'3',
      }
    ]
  };
const areaMap={
  "西安":[
    {
      areaName:'雁塔区',
      areaCode:'1',
    },{
      areaName:'未央区',
      areaCode:'2',
    },{
      areaName:'莲湖区',
      areaCode:'3',
    }
  ],
  "渭南":[
    {
      areaName:'渭1区',
      areaCode:'4',
    },{
      areaName:'渭2区',
      areaCode:'5',
    },{
      areaName:'渭3区',
      areaCode:'6',
    }
  ]
};

    export default {
      data(){
        return {
          myAdress:null,
          popupVisible: false,
          preCity:'',
          preArea:'',
          slots:[
            {
              flex: 1,
              defaultIndex: 0,
              values:[{
                areaName:'西安',
                areaCode:'1',

              },{
                areaName:'渭南',
                areaCode:'2'
              }],
              className: 'slot1',
              textAlign: 'center',

            }, {
              flex: 1,
              values:areaMap.西安,
              className: 'slot2',
              textAlign: 'center',
              defaultIndex: 0,
            }, {
              flex: 2,
              values:streetMap.雁塔区,
              className: 'slot3',
              textAlign: 'center',
              defaultIndex: 0,
            }
          ],
          isShow:true,
          address:{
            name:'',
            phone:'',
            area:'',
            addressInfo:'',
            tag:['家'],
            isdefault:false
          },
          detailtTags:['家','公司','其他'],
          headName:this.$route.query.id?'编辑收货人':'新建收货人'
        }
      },
      name: "addressDetail",
      methods:{
        deleteAddress(){
            this.$store.dispatch("deleteAddress",{id:this.$route.query.id},()=>{
              tihs.$router.go(-1);
            })
        },
        onValuesChange(picker, values) {

          var city=picker.getValues()[0];
          var area=picker.getValues()[1];
          console.log('onValuesChange')
          if(city.areaName !==this.preCity)
             this.onCityChange(picker,city);
          else if(area.areaName !== this.preArea){
            this.onAreaChange(picker,area);
          }

        },
        onCityChange(picker,city){
          var area=[];
          this.preCity=city.areaName;
          console.log('onCityChange');
          for (let a in areaMap[city.areaName]) {
            area.push(areaMap[city.areaName][a]);
          }
          console.log(area);
          picker.setSlotValues(1,area);
          this.onAreaChange(picker,area[0])
        },
        onAreaChange(picker,area){
          var street =[];
          this.preArea=area.areaName;
          console.log('onAreaChange')
          for (let a in streetMap[area.areaName]) {
            street.push(streetMap[area.areaName][a]);
          }
          console.log(street)
          picker.setSlotValues(2,street)
        },
        closeTK(){
          this.popupVisible=false;
        },
        saveTK(){
          this.popupVisible=false;
          const values=  this.$refs.pickCom.getValues();
          const area= values.concat();
          this.address.area= area[0].areaName+area[1].areaName+area[2].areaName;
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
.address-content
  width 100%
  height:100%
  .address-form
    z-index: 1
    ul
      li
        top-border-1px(#e4e4e4)
        margin-bottom 1px
        background white
        .address-field
          height:48px
          width:48px
          display flex
          font-size 16px
          line-height 1
          padding 0 4px
    .btn-submit
      width: 100%
      height:40px
      float bottom
      bottom 0
      position: fixed
      .btn-save
        width: 60%
        left: 20%
        border-radius 20px

  .prop-tk
    width:100%
</style>
