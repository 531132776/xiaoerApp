<template>
    <div class="common_news">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
          <mu-appbar color="teal">
            <mu-button icon slot="left" @click="$router.back(-1)">
              <mu-icon value=":iconfont icon-zuo headerZuo"></mu-icon>
            </mu-button>
            找车
            <!-- <mu-button icon slot="right" class="navIcon" ref="button" @click="open = !open">
              <mu-icon value="menu"></mu-icon>
            </mu-button> -->
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
        <!-- 品牌分类 -->
        <section class="findCar_content pt10">
            <div class="bg_fff">
                <mu-list>
                    <div v-for="(item,index) in brandLists" :key="index">
                        <div class="p15 car_spacial_text" style="background: #f8f8f8">
                                <h5>{{item.first}}</h5>
                        </div>
                        <mu-list-item button :ripple="false" v-for="(childres,index) in item.brandList" :key="index" class="pt_pb5" @click="CorrespondingCar(childres.categoryList)">
                            <mu-list-item-action class="findCar_logoImg">
                                <img :src="childres.logo" alt="">
                            </mu-list-item-action>
                            <mu-list-item-title>{{childres.name}}</mu-list-item-title>
                        </mu-list-item>
                    </div>
                </mu-list>
            </div>
        </section>
        <!-- 选择品牌车型车款 -->
        <mu-drawer :open.sync="carmodeopen" :docked='false' :right='true' class="mu_drawer_derective">
            <div class="position_scollr">
                    <mu-list textline="two-line">
                        <div v-for="(item,index) in categoryList" :key="index">
                            <div class="p15 car_spacial_text" style="background: #f8f8f8">
                                    <h5>{{item.name}}</h5>
                            </div>
                            <mu-list-item button :ripple="false" class="findCarMode_list_info view_cell_after" v-for="(carinfo,index) in item.carSeries" :key="index" 
                            @click="carDetails(item,carinfo,carinfo.type)">
                                    <mu-list-item-action>
                                        <img :src="'http://39.108.53.107:9098/'+carinfo.image+''" class="img-responsive">
                                    </mu-list-item-action>
                                    <mu-list-item-content>
                                        <mu-list-item-title>{{carinfo.name}}</mu-list-item-title>
                                            <mu-list-item-sub-title class="text-red">28.98-33.68万</mu-list-item-sub-title>
                                        <mu-list-item-sub-title>
                                            {{$store.state.map.get(carinfo.type)}}
                                        </mu-list-item-sub-title>
                                    </mu-list-item-content>
                                    <mu-list-item-action class="child_nth2">
                                        <mu-icon value=":iconfont icon-you"></mu-icon>
                                    </mu-list-item-action>
                            </mu-list-item>
                        </div>
                    
                    <mu-list-item  @click="carmodeopen = false" button>
                        <mu-list-item-title>Close</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </div>
            
        </mu-drawer>
        <transition name="fade" mode="out-in">
            <div class="scroll_top " v-show="$store.state.showTop" @click="TopScroll">
                <span class="iconfont icon-triangle-up"></span>
            </div>
        </transition>
    </div>
</template>
<style>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
    
    .findCar_logoImg > img{
        height: 100%;
        max-width: 50px;
    }
    .findCarMode_list_info .mu-item{
        padding-top: 10px;
        padding-bottom: 10px;
        height: auto !important;
    }
    .findCarMode_list_info .mu-item .mu-item-action:nth-child(1){
        min-width: auto !important;
        margin-right: 10px;
        width: 90px;
        max-width: 90px;
        flex: 1 1 100%;
    }
    .findCarMode_list_info .mu-item .mu-item-action:last-child{
        min-width: auto !important;
    }

</style>

<script>
import apiAll from '@/http/apiAll'
import Toast from 'muse-ui-toast'
import bus from '@/components/bus.js'
import { mapMutations,mapActions } from 'vuex';
export default {
  data() {
    return {
      open: false,
      trigger: null,
      brandLists:[],//品牌分类
      carmodeopen:false,
      categoryList:[],//展开车型列表
      showTop:false,
      scroll:'',
      msg:[1,2,3]
    };
  },
  components:{
  },
  created() {
    this.$store.state.showTopNav = false; //头部导航显示
    //获取车品牌
    this.getCarBrand();
  },
  mounted(){
      this.trigger = this.$refs.button.$el;
      const _this = this
     window.addEventListener('scroll', _this.handleScroll)
  },
 
  methods: {
      //回到顶部
    ...mapMutations(['handleScroll']),
    ...mapActions(['addAction','TopScroll']),
      //汽车详情页
    carDetails(item,carinfo,type){
        // alert(1);
        this.$router.push({
            name:'carDetails',
            params:{
                objItem:JSON.stringify(item),
                carinfo:JSON.stringify(carinfo),
                type:type
            }
        });
        bus.$emit('age','hehe')
        
    },
    //展开对应车品牌车型车款
    CorrespondingCar(categoryList){
        console.log(categoryList);
        this.categoryList = categoryList;
        this.carmodeopen = !this.carmodeopen
    },
    //获取车品牌
    async getCarBrand() {
      let res = await apiAll.carBrand({});
      console.log(res);
      this.brandLists = res.data || [];
      let newBrand = res.data || [];
      let newlist = newBrand.map(val => val.brandList);
    //   this.newBrandLists = newlist;
    //   console.log(this.newBrandLists);
    }
  },
  //销毁钩子
   beforeDestroy() {
    const _this = this
    document.documentElement.removeEventListener('scroll', _this.handleScroll, true)
 },
};
</script>