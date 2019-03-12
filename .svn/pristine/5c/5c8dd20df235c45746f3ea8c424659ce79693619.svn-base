<template>
    <div class="common_news">
      <!-- 头部标题 -->
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
          <mu-appbar color="teal">
            <mu-button icon slot="left" @click="$router.back(-1)">
              <mu-icon value=":iconfont icon-zuo headerZuo"></mu-icon>
            </mu-button>
            {{cityName}}车展
            <!-- <mu-button  slot="right" class="navIcon" ref="button" @click="open = !open"> -->
              <!-- <mu-icon value="menu"></mu-icon> -->
              <!-- 导航 -->
            <!-- </mu-button> -->
            <div slot="right" @click="open = !open" ref="button" class="headerNavRight">
              导航
            </div>
            <div >
              <mu-popover class="titleNav" cover :open.sync="open" :trigger="trigger" placement="left-start">
                <mu-list>
                  <mu-list-item button v-for="(item,index) in $store.state.routelist" :key="index">
                    <mu-list-item-title>
                      <router-link :to="item.path">{{item.title}}</router-link>
                    </mu-list-item-title>
                  </mu-list-item>
                </mu-list>
              </mu-popover>
            </div>
          </mu-appbar>
        </mu-paper>
        <!-- 内容区 -->
        <section class="autoshowNew_content">
            <!-- 车展标题img -->
            <div class="autoshowNew_top_bgImg">
                <div class="container-fluid">
                    <img :src="previewImg+bigImage" alt="" class="img-responsive" preview preview-text="描述文字">
                </div>
            </div>
            <!-- 车展报名 -->
            <div class="autoshowSignUp_from pt10">
              <div class="bg_fff">
                  <mu-form :model="signUpForm" ref="autoShowSignUpForm" class="mu-demo-form p15" label-position="top">
                    <mu-form-item label="姓名" help-text="请输入姓名" prop="name" :rules="usernameRules">
                        <mu-text-field v-model="signUpForm.name"  prop="name" label-float icon=":iconfont icon-wode"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item label="手机号码" prop="phone" :rules="phomeRules">
                        <mu-text-field v-model="signUpForm.phone" prop="phone" label-float :max-length="11" icon=":iconfont icon-shouji"></mu-text-field>
                    </mu-form-item>
                    
                    <mu-form-item label="选择车型" prop="brandCar" :rules="carRules" class="optionCar" >
                      <div class="inputmodalCar" @click="open2 = !open2"></div>
                      <mu-text-field v-model="signUpForm.brandCar" style="pointer-events: none;" prop="brandCar" label-float icon=":iconfont icon-wode"></mu-text-field>
                    </mu-form-item>

                    <mu-form-item label="寄票地址" :rules="addressRules" prop="address">
                        <mu-text-field v-model="signUpForm.address" multi-line  prop="address" :rows="2" full-width></mu-text-field><br/>
                    </mu-form-item> 
                    
                    <mu-form-item class="signUpButton">
                        <mu-button full-width color="primary" @click="groupPurchSubmit">团购报名</mu-button>
                    </mu-form-item>
                  </mu-form>
              </div>
            </div>
            <!-- 关于本届车展 -->
            <div class="aboutAutoshow pt10">
              <div class="bg_fff">
                <div class="lg_title"><div class=" mu-sub-header">关于本届车展</div></div>
                <mu-divider></mu-divider>
                <div class="aboutAutoshow_info">
                  <div class="aboutAutoshow_info_Discount">
                    <div class="view_items" v-for="(item,index) in aboutAutoShowInfoLists" :key="index">
                      <div>
                        <i class="iconfont" :class="item.iconClass"></i>
                      </div>
                      <p>{{item.pinfo}}</p>
                    </div>
                  </div>
                </div>
                <p class="m0 pr_pl15 pb15 text_14">
                  订车客户均可获得惊喜大礼包一份，五天四晚港澳双人双飞游带您嗨翻全场，订车抽奖更有六重豪礼等您来拿！整点免费抽奖、模特巡场燃爆全场！
                </p>
                <mu-divider></mu-divider>
                <div class="lg_title">
                  <mu-list class="p0">
                    <mu-list-item button :ripple=false @click="brandOpen = !brandOpen">
                    <mu-list-item-title>查看参展品牌</mu-list-item-title>
                    <mu-list-item-action>
                      <mu-icon value=":iconfont icon-you"></mu-icon>
                    </mu-list-item-action>
                  </mu-list-item>
                  </mu-list>
                  
                </div>
              </div>
            </div>
            <!-- 车展流程 -->
            <div class="autoshow_Technological_process pt10">
              <div class="bg_fff">
                <div class="lg_title"><div class=" mu-sub-header">参展流程</div></div>
                <mu-divider></mu-divider>
                <div class="p15">
                  <img :src="AutoShowProcess" alt="" class="img-responsive">
                </div>
              </div>
            </div>
            <!-- 车展优势 -->
            <div class="autoshow_advantage pt10">
              <div class="bg_fff">
                <div class="lg_title"><div class=" mu-sub-header">车展优势</div></div>
                <mu-divider></mu-divider>
                <div class="p15">
                  <img :src="AutoShowAdvantage" alt="" class="img-responsive">
                </div>
              </div>
            </div>
            <!-- 车展须知 -->
            <div class="autoshow_Notes pt10">
              <div class="">
                <mu-tabs :value.sync="active2" full-width >
                  <mu-tab v-for="(item,index) in tabs" :key="index" ref="xxoo" :class="{'active-class': active2 === index}" @click="toggleTab(index)">{{item.title}}</mu-tab>
                </mu-tabs>
                <div class="swiper-container swiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in tabs" :key="index" >
                          <!-- // is 特性动态绑定子组件 -->
                          <!-- // keep-alive 将切换出去的组件保留在内存中 -->
                          <!-- <prince :is="item.component" keep-alive></prince> -->
                          <keep-alive>
                            <component :is="item.component"></component>
                          </keep-alive>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
            <!-- 车型列表 -->
            <mu-drawer :open.sync="open2" :docked="docked" :right="position === 'left'">
              <mu-list class="ChoiceBrandCar">
                <mu-list-item button>
                  <mu-list-item-title >参展品牌</mu-list-item-title>
                </mu-list-item>
                <mu-expansion-panel v-for="(item,index) in categoryList" :key="index" :expand="panelCar === 'panel'+index" @change="toggle('panel'+index)">
                  <div slot="header">{{item.name}}</div>
                  <mu-list-item button v-for="(carSeries,index) in item.carSeries" :key="index" @click.prevent="ChoiceCar(carSeries.name, carSeries.id, carSeries.categoryId)">
                    <mu-list-item-title>{{carSeries.name}}</mu-list-item-title>
                  </mu-list-item>
                </mu-expansion-panel>
                <!-- <mu-expansion-panel v-for="(brand,index1) in thisBrandCar" :key="index1" :expand="panelCar === 'panel'+index1" @change="toggle('panel'+index1)">
                  <div slot="header">{{brand.name}}</div>
                  <mu-list-item button v-for="(carSeries,index2) in brand.carSeries" :key="index2" @click.prevent="ChoiceCar(carSeries.name, carSeries.id, carSeries.categoryId)">
                    <mu-list-item-title>{{carSeries.name}}</mu-list-item-title>
                  </mu-list-item>
                </mu-expansion-panel> -->
                <mu-list-item  @click="open2 = false" button>
                  <mu-list-item-title>Close</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-drawer>
        </section>

        <!-- 品牌列表 -->
        <mu-drawer :open.sync="brandOpen" :docked=false :right=true>
          <!-- <mu-paper :z-depth="1" class="demo-loadmore-wrap"> -->
            <mu-appbar color="teal" class="closeExhibitorBrand">
              <mu-button icon slot="left" @click="brandOpen = false">
                <mu-icon value=":iconfont icon-zuo headerZuo"></mu-icon>
              </mu-button>
              参展品牌
            </mu-appbar>
          <!-- </mu-paper> -->
          
          <div class="Exhibitor_brandLists">
            <div class="Exhibitor_brandLists_item" v-for="(item,index) in carbrandlogoImg" :key="index">
              <div>
                <img :src="item.imgLogo" alt="" class="img-responsive">
              </div>
              <span class="text-center">{{item.name}}</span>
            </div>
            
          </div>
        </mu-drawer>
        <!-- 回到顶部 -->
        <transition name="fade" mode="out-in">
            <div class="scroll_top " v-show="$store.state.showTop" @click="TopScroll">
                <span class="iconfont icon-triangle-up"></span>
            </div>
        </transition>
    </div>
</template>

<style>
.autoshowSignUp_from .mu-text-field-input{
  -webkit-user-select:auto !important;
  user-select:auto !important;
}
.inputmodalCar{
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 11;
  /* background: #1cb0f6; */
  /* opacity: 0; */
  width: 100%;
}
  .optionCar .mu-form-item-content > i, .optionCity .mu-form-item-content > i {
    position: absolute;
    left: -0.666667rem;
    font-size: 0.533333rem;
}
.optionCar .mu-form-item-content, .optionCity .mu-form-item-content {
    position: relative;
}
  .closeExhibitorBrand .mu-appbar-title{
    padding-left: 0;
  }
  .closeExhibitorBrand .mu-appbar-left{
    padding-right: 0;
  }
  .Exhibitor_brandLists{
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        flex-flow: row wrap;
        align-items: center;
        align-content: center;
        justify-content: flex-start;
        width: 100%;
    }
    .Exhibitor_brandLists_item{
        width: 33.333333%;
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content:center;
        align-content:center;
        padding: 5px;
        text-align: center;
    }
    .Exhibitor_brandLists_item > span{
      font-size: 14px;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      
    }
.swiper-container{
  height: auto;
}
 .aboutAutoshow_info_Discount{
   display: flex;
   /* display: -webkit-box; */
   /* display: -ms-flexbox; */
   flex-direction: row;
   -ms-flex-direction: row;
   -webkit-box-orient: horizontal;
   justify-content: flex-start;
   align-items: center;
   flex-flow:row nowrap;
   align-content: space-between;
   padding: 15px;
 }
 .aboutAutoshow_info_Discount .view_items{
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   align-content: center;
   flex: 1;
   background: gray;
   margin-left: 10px;
   padding: 10px 0;
   color: #fff;
   font-size: 12px;
   border-radius: 4px;
 }
 .aboutAutoshow_info_Discount .view_items:nth-child(1){
   background: #faa918;
 }
 .aboutAutoshow_info_Discount .view_items:nth-child(2){
   background: #1cb0f6;
 }
 .aboutAutoshow_info_Discount .view_items:nth-child(3){
   background: #7ac70c;
 }
 .aboutAutoshow_info_Discount .view_items:nth-child(4){
   background: #a560e8;
 }
 .aboutAutoshow_info_Discount .view_items p{
   margin: 0px;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
 }
 .aboutAutoshow_info_Discount .view_items .iconfont{
   font-size: 22px;
 }
 
 .aboutAutoshow_info_Discount .view_items:first-child{
   margin-left: 0;
 }
 .autoshowSignUp_from .mu-form-item__has-label{
   padding-left: 25px;
   margin-bottom: 5px;
 }
 .mu-input.full-width .mu-input-label{
   font-size: 18px;
 }
 .autoshowSignUp_from .mu-input.has-icon .mu-input-icon{
   left: -25px;
   font-size: 20px;
 }
 .autoshowSignUp_from .mu-form-item .mu-button{
   margin: 0;
   margin-top: 10px;
 }
 .autoshowSignUp_from .mu-form-item:last-child{
   margin-bottom: 5px;
 }
</style>

<script>
// import Toast from 'muse-ui-toast';//toast提示插件
import Swiper from 'swiper'
import AutoShowNotes from '@/page/AutoShow/AutoShowNotes'
import CarPurchaseGuide from '@/page/AutoShow/CarPurchaseGuide'
import TicketingGuide from '@/page/AutoShow/TicketingGuide'
import TrafficGuide from '@/page/AutoShow/TrafficGuide'
import apiAll from '@/http/apiAll.js'
import Toast from 'muse-ui-toast'
import { mapMutations,mapActions } from 'vuex'
  export default {
    name:'',
    data () {
      return {
        panelCar: '',
      docked: false,
      open2: false,
      position: 'left',
      bigImage:'',
      cityName:'',
      previewImg:'http://39.108.53.107:9098/',
      AutoShowProcess:require('@static/images/chezhan/7ee447b6-da46-4589-9a13-8b41b0bed536.png'),
      AutoShowAdvantage:require('@static/images/chezhan/86e32655-51fc-4c72-bf6d-da3a4517b3f9.jpg'),
        // previewImg:require('@static/images/chezhan/537a9da6-4a59-4478-abc7-30c6ae81e32d.jpg'),
        currentTab:null,
        active2:0,
        swiperIndex:0,
        open: false,
        drawerOpen: false,
        brandOpen: false,
        trigger: null,
        usernameRules:[
          { validate: (val) => !!val, message: '请填写用户名'},
          { validate: (val) => val.length >= 2, message: '用户名长度大于2'} 
        ],
        phomeRules:[
          { validate: (val) => !!val, message: '请填写手机号码'},
          { validate: (val) => val.length <= 11, message: '密码长度为11位'},
          { validate: (val) => /^[1][3,4,5,7,8][0-9]{9}$/.test(val), message: '请输入正确手机号'},
        ],
        cityRules:[
          { validate: (val) => !!val, message: '请选择城市'},
        ],
        carRules:[
          { validate: (val) => !!val, message: '请选择车型'},
        ],
        // carMoneyRules:[
        //   { validate: (val) => !!val, message: '请选择车款'},
        // ],
        addressRules:[
          { validate: (val) => !!val, message: '请填写您的收票地址'},
        ],
        signUpForm:{
          name: '',
          phome: '',
          brandCar:'',
          address: '',
        },
        cityList:[],
        autoshowId:'',
        // brandName:'',
        categoryList:[],//汽车分类
        groupPurchSignUpInfo:{//
          carId:'',
          cityId:'',
          cssId:''
        },
        CarMoneyList:[],//车款
        aboutAutoShowInfoLists:[
          {
            iconClass:'icon-31pinpai',
            pinfo:'50多个品牌'
          },
          {
            iconClass:'icon-qiche',
            pinfo:'300余款车型'
          },
          {
            iconClass:'icon-menpiao1',
            pinfo:'免费门票'
          },
          {
            iconClass:'icon-jiangpin',
            pinfo:'公开抽奖'
          }
        ],
        tabs:[
          {
            title:'票务指南',
            component: 'TicketingGuide'
          },
          {
            title:'交通指南',
            component: 'TrafficGuide'
          },
          {
            title:'购车指南',
            component: 'CarPurchaseGuide'
          },
          {
            title:'车展须知',
            component: 'AutoShowNotes'
          },
        ],
        swiperLists:[
          {
            path:'/TicketingGuide',
            name:'票务指南',
            component: TicketingGuide
          },
          {
            path:'/TrafficGuide',
            name:'交通指南',
            component: TrafficGuide
          },
          {
            path:'/CarPurchaseGuide',
            name:'购车指南',
            component: CarPurchaseGuide
          },
          {
            path:'/AutoShowNotes',
            name:'车展须知',
            component: TicketingGuide
          },
        ],
        carbrandlogoImg:[
          {
            imgLogo: require('@static/images/chezhan/14612048991063020_s.jpg'),
            name:'进口宝马'
          },
          {
            imgLogo: require('@static/images/chezhan/Benz.gif'),
            name:'进口奔驰'
          },
          {
            imgLogo: require('@static/images/chezhan/50467340-706f-413d-acc3-b0623c04b104.png'),
            name:'奥迪'
          },
          {
            imgLogo: require('@static/images/chezhan/0ff1d1bf-f57a-4bdf-9bf5-b987eb4f7791.png'),
            name:'德国大众'
          },

          {
            imgLogo: require('@static/images/chezhan/c30f9181-e668-4049-8533-6bb449f4d133.png'),
            name:'东方本田'
          },
          {
            imgLogo: require('@static/images/chezhan/15286878840734767_s.jpg'),
            name:'别克'
          },
          {
            imgLogo: require('@static/images/chezhan/Toyota.gif'),
            name:'一汽丰田'
          },
          {
            imgLogo: require('@static/images/chezhan/Lexus.gif'),
            name:'雷克萨斯'
          },
          {
            imgLogo: require('@static/images/chezhan/14612048991063020_s.jpg'),
            name:'进口宝马'
          },
          {
            imgLogo: require('@static/images/chezhan/Benz.gif'),
            name:'进口奔驰'
          },
          {
            imgLogo: require('@static/images/chezhan/50467340-706f-413d-acc3-b0623c04b104.png'),
            name:'奥迪'
          },
          {
            imgLogo: require('@static/images/chezhan/0ff1d1bf-f57a-4bdf-9bf5-b987eb4f7791.png'),
            name:'德国大众'
          },

          {
            imgLogo: require('@static/images/chezhan/c30f9181-e668-4049-8533-6bb449f4d133.png'),
            name:'东方本田'
          },
          {
            imgLogo: require('@static/images/chezhan/15286878840734767_s.jpg'),
            name:'别克'
          },
          {
            imgLogo: require('@static/images/chezhan/Toyota.gif'),
            name:'一汽丰田'
          },
          {
            imgLogo: require('@static/images/chezhan/Lexus.gif'),
            name:'雷克萨斯'
          },
          {
            imgLogo: require('@static/images/chezhan/14612048991063020_s.jpg'),
            name:'进口宝马'
          },
          {
            imgLogo: require('@static/images/chezhan/Benz.gif'),
            name:'进口奔驰'
          },
          {
            imgLogo: require('@static/images/chezhan/50467340-706f-413d-acc3-b0623c04b104.png'),
            name:'奥迪'
          },
          {
            imgLogo: require('@static/images/chezhan/0ff1d1bf-f57a-4bdf-9bf5-b987eb4f7791.png'),
            name:'德国大众'
          },

          {
            imgLogo: require('@static/images/chezhan/c30f9181-e668-4049-8533-6bb449f4d133.png'),
            name:'东方本田'
          },
          {
            imgLogo: require('@static/images/chezhan/15286878840734767_s.jpg'),
            name:'别克'
          },
          {
            imgLogo: require('@static/images/chezhan/Toyota.gif'),
            name:'一汽丰田'
          },
          {
            imgLogo: require('@static/images/chezhan/Lexus.gif'),
            name:'雷克萨斯'
          },
          {
            imgLogo: require('@static/images/chezhan/14612048991063020_s.jpg'),
            name:'进口宝马'
          },
          {
            imgLogo: require('@static/images/chezhan/Benz.gif'),
            name:'进口奔驰'
          },
          {
            imgLogo: require('@static/images/chezhan/50467340-706f-413d-acc3-b0623c04b104.png'),
            name:'奥迪'
          },
          {
            imgLogo: require('@static/images/chezhan/0ff1d1bf-f57a-4bdf-9bf5-b987eb4f7791.png'),
            name:'德国大众'
          },

          {
            imgLogo: require('@static/images/chezhan/c30f9181-e668-4049-8533-6bb449f4d133.png'),
            name:'东方本田'
          },
          {
            imgLogo: require('@static/images/chezhan/15286878840734767_s.jpg'),
            name:'别克'
          },
          {
            imgLogo: require('@static/images/chezhan/Toyota.gif'),
            name:'一汽丰田'
          },
          {
            imgLogo: require('@static/images/chezhan/Lexus.gif'),
            name:'雷克萨斯'
          },
        ]
      }
    },
    components:{
      AutoShowNotes,CarPurchaseGuide,TicketingGuide,TrafficGuide
    },
    created(){
      //车展头部广告大图
      this.bigImage = this.$store.state.autoshowDetails.bigImage || JSON.parse(sessionStorage.getItem('autoshow')).bigImage;
      this.cityName = this.$store.state.autoshowDetails.cityName || JSON.parse(sessionStorage.getItem('autoshow')).cityName;
      this.autoshowId = this.$store.state.autoshowDetails.id || JSON.parse(sessionStorage.getItem('autoshow')).id;
      this.groupPurchSignUpInfo.cityId = this.$store.state.autoshowDetails.cityId || JSON.parse(sessionStorage.getItem('autoshow')).cityId;

      //获取汽车
      this.getBrandCarSeries();
    },
    mounted () {
      //绑定组件切换
      let _this = this;
        window.mySwper2 = new Swiper('.swiper2',{
          loop: false,
          on: {
                  slideChangeTransitionEnd: function(){
                      _this.active2 = this.activeIndex; 
                  },
              },
        })
       //获取城市
        // this.getCityList();
        //获取最新团购团友
      //  this.getGroupSingUpList();
      this.trigger = this.$refs.button.$el;
      //回到顶部
      window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
      //回到顶部
      ...mapMutations(['handleScroll','menu']),
      ...mapActions(['addAction','TopScroll']),
      //切换组件
      toggleTab(index){
        this.active2 = index;
        window.mySwper2.slideTo(index, 1000, false);
      },
      
      //展开汽车品牌车型
    toggle (panel) {
      this.panelCar = panel === this.panelCar ? '' : panel;
    },
    
    //获取城市ID
    selectCityId(val){
      alert(val)
      this.groupPurchSignUpInfo.cityId = val;
    },
    //获取车款
    ChoiceCar(name,carId,cssId){
      // alert(carId)
      this.signUpForm.brandCar = name;
      this.groupPurchSignUpInfo.cssId = carId;
      
    },
    
    //获取车型
    getBrandCarSeries(){
      // debugger
      apiAll.getBrandCarSeries({}).then(getCar => {
        console.log(getCar)
        let thisBrandCar = getCar.data || [];
        
        if(thisBrandCar.length > 0 && thisBrandCar !=undefined){
          for(let i=0,len; len=thisBrandCar[i++];){
            // console.log(i)
            // console.log(len)
            let brandList = len.brandList;
            if(brandList.length > 0 && brandList !=undefined){
              for(let k=0,len2;len2=brandList[k++];){
                let categoryList = len2.categoryList
                if(categoryList != undefined && categoryList.length > 0){
                  for(let j=0,len3; len3=categoryList[j++];){
                    this.categoryList.push(len3);
                    break
                  }
                }
              }
              
            }
          }
         
      }
      }).catch(e =>{
        Toast.error({
          message:'没有可用数据',
          errorIcon: 'warning',
          position:'top',
          infoIcon: 'info',
       })
      })
    },
    //获取城市
   async getCityList(){
     try{
       let getCity = await apiAll.getCityList({});
      //  console.log(getCity);
       if(getCity.data != null && getCity.data !=undefined){
         this.cityList = getCity.data
       }

     }catch(e){
       Toast.error({
          message:'网路异常',
          errorIcon: 'warning',
          position:'top',
          infoIcon: 'info',
       })
     }
   },
    //获取最新团购团友
  //  async getGroupSingUpList(){
  //    try{
  //      let groupList =await apiAll.getGroupSingUpList({});
  //      if(groupList.data != null && groupList.data !=undefined){
  //        this.groupList = groupList.data;
  //      }
  //    }catch (e){
  //      this.$alert('请求错误!!','提示',{
  //         errorIcon: 'warning',
  //           iconSize: 24,
  //           width: '80%',
  //           transition: 'scale',
  //           okLabel: '确定',
  //      })
  //    }
  //   },
    //车展报名
    groupPurchSubmit(){
      // debugger
        this.$refs.autoShowSignUpForm.validate().then((result) => {
        // console.log('signUpForm valid: ', result);
        let groupPurch = {
            name: this.signUpForm.name,
            phone: this.signUpForm.phone,
            ticketAddress: this.signUpForm.address,
            type: 5,
            cityId: this.groupPurchSignUpInfo.cityId,
            cssId: this.groupPurchSignUpInfo.cssId,
            autoShowId: this.autoshowId
          }
        if(result){
          apiAll.autoshowInsertIntentioner(groupPurch).then(res => {
              // console.log(res)
              this.$refs.autoShowSignUpForm.clear();
              this.signUpForm = {
                    name: '',
                    phome: '',
                    brandCar:'',
                    address: '',
                  },
              this.$toast.success({
                position: 'top',
                message:'报名成功',
                successIcon: 'check_circle', 
                infoIcon: 'info'
              })
          }).catch(e => {
              this.$toast.warning({
                position: 'top',
                message:'未能报名成功！',
                infoIcon:'info',
                warningIcon: 'priority_high'
              })
          })
          
        }
        //else{
        //   return false
        // }
      });
      },
    }
  }
</script>

