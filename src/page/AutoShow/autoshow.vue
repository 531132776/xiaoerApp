<template>
    <div class="autoshow">
        <!-- 头部banner -->
        <div class="home_header_banner">
            <mu-carousel transition="fade">
                <mu-carousel-item v-for="(item,index) in autoShowNavBanner" :key="index" >
                    <a href="javascript:;">
                    <img :src="item.img">
                    </a>
                </mu-carousel-item>
            </mu-carousel>
        </div>
        <!-- 广告 -->
        <section class="Advertisement ">
          <a href="javascript:;">
            <img src="@static/images/chezhan/wKgHEVtQZIKAUD23AABA2pl64dc491.jpg" alt="">
            <span class="AdvertisementSpan"></span>
          </a>
        </section>
        <!-- 车展集合 -->
        <section class="auto_show_lists pt10">
            <div class="recent_auto_show bg_fff">
                <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
                    <mu-tab v-for="(item,i) in autoShowTabs" :key="i">{{item.tab}}</mu-tab>
                </mu-tabs>
                <mu-divider></mu-divider>
                <div class="demo_text" v-if="active1 === 0">
                        <mu-row gutter class="row_m0">
                                <mu-col span="12" sm="12" md="12" lg="6" xl="12" class="pr_pl15 pt_pb10 view_cell_after after_last" 
                                    v-for="(item,index) in autoshowLists" :key="index" >
                                    <div class="grid-cell autoshow_group" 
                                     @click="autoshowNewDetails(item.id,item.cityId,item.bigImage,item.cityName)">
                                        <a class="ablock">
                                            <h4 class="h4_mgin">{{item.title}}</h4>
                                            <div class="img_vw100">
                                                <img :src="item.titleImage" alt="" class="img-responsive">
                                            </div>
                                            <mu-list class="auto_list_info">
                                                <mu-list-item>
                                                    <mu-list-item-action>
                                                        <mu-icon value=":iconfont icon-weizhi"></mu-icon>
                                                    </mu-list-item-action>
                                                    <mu-list-item-title>
                                                        {{item.name}}
                                                    </mu-list-item-title>
                                                </mu-list-item>
                                                <mu-list-item>
                                                    <mu-list-item-action>
                                                        <mu-icon value=":iconfont icon-web-icon-"></mu-icon>
                                                    </mu-list-item-action>
                                                    <mu-list-item-title>
                                                        <span>{{item.startTime}}</span>
                                                    </mu-list-item-title>
                                                    <mu-list-item-action>
                                                        <mu-badge :content="item.status" :class="[item.status=='即将开展' ? 'status_color_secondary' : 'status_color_default']"></mu-badge>
                                                    </mu-list-item-action>
                                                </mu-list-item>
                                                <mu-list-item>
                                                    <mu-list-item-action>
                                                        <mu-icon value=":iconfont icon-dianhua1"></mu-icon>
                                                    </mu-list-item-action>
                                                    <mu-list-item-title>
                                                        <span>{{item.ticketCall}}</span>
                                                    </mu-list-item-title>
                                                </mu-list-item>
                                            </mu-list>
                                        </a>
                                    </div>
                                </mu-col>
                        </mu-row>
                </div>
                <div class="demo_text" v-if="active1 === 1">
                    规划投入和个人说的挺好
                </div>
                <div class="demo_text" v-if="active1 === 2">
                    鬼地方个回复的  
                </div>
            </div>
        </section>
        <!-- news新闻 -->
        <section class="pt10">
            <!-- <div class="autoshow_news_list bg_fff">
              <mu-divider></mu-divider>
              <div class="">

              </div>
              <div class="autoshow_text_img">
                <div class="view_cell_after after_last" v-for="(item,index) in autoshowNews" :key="index">
                  <a href="javascript:;" class=" ablock">
                    <mu-row gutter class="row_m0_p157">
                      <mu-col span="8" sm="8" lg="7" md="7" xl="8">
                        <ul class="news_text">
                          <div class="title_text">{{item.title}}</div>
                          <li>{{item.news}}</li>
                        </ul>
                      </mu-col>
                      <mu-col span="4" sm="4" lg="5" md="5" xl="4">
                        <div class="img_box">
                            <img :src="item.img" alt="" class="img-responsive">
                        </div>
                      </mu-col>
                    </mu-row>
                  </a>
                </div>
              </div>
            </div> -->
            <!-- 车展新闻 -->
            <div class="autoshow_news_list">
              <mu-divider></mu-divider>
              <div class="autoshow_text_img bg_fff">
                <div class="view_cell_after after_last" v-for="(item,index) in homeAutoShowNews" :key="index">
                  <a @click="toNews(item.id,item.content,item.title,item.createTime)" class=" ablock">
                    <mu-row gutter class="row_m0_p157">
                      <mu-col span="8" sm="8" lg="7" md="7" xl="8">
                        <ul class="news_text">
                          <div class="title_text">{{item.title}}</div>
                          <!-- <li>{{item.news}}</li> -->
                        </ul>
                      </mu-col>
                      <mu-col span="4" sm="4" lg="5" md="5" xl="4">
                        <div class="img_box">
                            <img :src="item.titleImgage" alt="" class="img-responsive">
                        </div>
                      </mu-col>
                    </mu-row>
                  </a>
                </div>
              </div>
            </div>
        </section>
        <!-- 回到顶部 -->
        <transition name="fade" mode="out-in">
            <div class="scroll_top " v-show="$store.state.showTop" @click="TopScroll">
                <span class="iconfont icon-triangle-up"></span>
            </div>
        </transition>
    </div>
</template>
<style>
    .status_color_secondary .mu-badge{
        background: #ff4081;
    }
    .status_color_default .mu-badge{
        background: #bdbdbd;
    }
    
    .autoshow_group .auto_list_info{
        padding: 0px;
        padding-top: 10px;
    }
    .auto_list_info li .mu-item-wrapper .mu-item{
        height: auto !important;
        padding: 0;
        line-height: initial;
    }
    .auto_list_info li .mu-item-wrapper .mu-item .mu-item-title{
        font-size: 14px;
        width: auto;
        height: auto;
        color: rgba(0,0,0,.37);
        line-height: initial;
    }
    .auto_list_info .mu-item-action{
        min-width: auto;
        height: auto;
    }
    /* .icon-weizhi, .icon-web-icon-{
        font-size: 20px;
    } */
    .active{
        border-bottom: 2px solid red;
    }
    .recent_auto_show .mu-tabs-inverse{
        background: none;
    }
   
</style>
<script>
import apiAll from '@/http/apiAll'
import { mapMutations,mapActions } from 'vuex'
    export default {
        data () {
            return {
                active1: 0,
                autoShowNavBanner:[
                    {
                        img:require('@static/images/chezhan/wKgHHFsh05OAAFgZAAJ1OC0p8jQ504.jpg')
                    },
                     {
                        img:require('@static/images/chezhan/1280x0_q87_c41_autohomecar__ChcCP1ta0XOAaQ_GAAP6RjDmc0w045.jpg')
                    },
                     {
                        img:require('@static/images/chezhan/wKgHFFtL9O6AMAp6AASTT1NoFMA144.jpg')
                    },
                     {
                        img:require('@static/images/chezhan/1280x0_q87_c41_autohomecar__ChcCP1ta6L6ALgwPAADhyNHKrgM468.jpg')
                    }
                ],
                autoShowTabs: [
                    {
                        value:'allAutoShow',
                        tab:'全部车展',
                        content:'……是的，我承认从很早以前我都害怕死亡',
                        borderbot:'active',
                        img:require('@static/images/chezhan/wKgHFFtL9O6AMAp6AASTT1NoFMA144.jpg'),
                        autoshowitme:'2018-08-16至2018-08-18',
                        title:'2018年07月广州车展精彩回顾',
                        address:'广州国际采购中心',
                        status: '即将开展'
                    },
                    {
                        value:'recentAutoShow',
                        tab:'近期车展',
                        content:'在医院里被人研究的时候，以前做出布局的时候',
                        borderbot:'active',
                        img:require('@static/images/chezhan/1280x0_q87_c41_autohomecar__ChcCP1ta6L6ALgwPAADhyNHKrgM468.jpg'),
                        autoshowitme:'2018-08-16至2018-08-18',
                        title:'2018年08月广州车展',
                        address:'东莞会展中心',
                        status: '即将开展'
                    },
                    {
                        value:'pastAutoShow',
                        tab:'往期车展',
                        content:'以前做出布局的时候',
                        borderbot:'active',
                        img:require('@static/images/chezhan/1280x0_q87_c43_autohomecar__wKgHIFr9VKqAAXb-AAo3dMvjfLw060.jpg'),
                        autoshowitme:'2018-07-16至2018-08-18',
                        title:'2018年06月佛山车展精彩回顾',
                        address:'深圳会展中心',
                        status: '已结束'
                    }
                ],
                homeAutoShowNews:[],//首页车展新闻列表
                autoshowNews: [
                    {
                        title: ' 众泰汽车多分会场同步进行！',
                        news: "车展新闻快讯",
                        img: require('@static/images/chezhan/20180705034548646.jpg')
                    },
                    {
                        title: ' 宝马5系！',
                        news: "车展报价新闻2",
                        img: require('@static/images/chezhan/20180521022135229.jpg')
                    },
                    {
                        title: ' 广州奥迪大型团购会',
                        news: "车展团购新闻3",
                        img: require('@static/images/chezhan/20180528120047429.jpg')
                    }
                ],
                autoshowLists: [],
            }
        },
        created () {
            this.$store.state.showTopNav = true;//头部导航显示
            //车展列表
            this.autoshowList();
            //获取新闻
            this.getNewlist();
        },
        mounted () {
            const _this = this
            window.addEventListener('scroll', _this.handleScroll)
        },
        methods: {
            ...mapMutations(['handleScroll']),
            ...mapActions(['addAction','TopScroll']),
            //车展详情
            autoshowNewDetails(id,cityId,bigImage,cityName){
                this.$store.commit('toAuotshowDetails',{id,cityId,bigImage,cityName})
                this.$router.push({
                    name:'autoshowNew',
                    params:{
                    id:id,
                    cityId:cityId,
                    bigImage:bigImage,
                    cityName:cityName
                    }
                })
            },
            //获取新闻
            async getNewlist(){
                try{
                    let params = {
                    type:1,
                    nnNewsCode:"home",
                    cityId: this.cityId
                    }
                    let res =await apiAll.getNewList(params);
                    // console.log(res)
                    if(res.data != null && res.data != undefined){
                    this.homeAutoShowNews = res.data;
                    }
                }catch(e){
                    this.$toast.error({
                    message:'网络错误',
                    position:'top',
                    errorIcon: 'warning'
                    })
                }
            },
            //新闻详情
            toNews(id,content,title,createTime){
                this.$store.commit('NewsDetails',{id,content,title,createTime})
                this.$router.push({
                    name:'news',
                    params:{
                    id:id,
                    content:content,
                    title:title,
                    createTime:createTime
                    }
                })
            },
            //车展列表
            async autoshowList() {
                try{
                    let item = await apiAll.AutoShowGetList({});
                    console.log(item);
                    if(item.data !=null && item.data != undefined){
                        this.autoshowLists = item.data
                    }
                }
                catch(e){
                    this.$alert('请求错误！','提示',{
                        errorIcon: 'warning',
                        iconSize: 24,
                        width: '80%',
                        transition: 'scale',
                        okLabel: '知道了',
                    })
                }
            }
        }
    }
</script>