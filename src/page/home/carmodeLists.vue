<template>
    <div class="common_news">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
          <mu-appbar color="teal">
            <mu-button icon slot="left" @click="$router.back(-1)">
              <mu-icon value=":iconfont icon-zuo headerZuo"></mu-icon>
            </mu-button>
            {{carModeList.name}}
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
        <!-- 品牌车型列表 -->
        
        <section class="brandCarMode_list ">
            <div class="bg_fff">
                <mu-list textline="two-line">
                    <div v-for="(item,index) in catgorylist" :key="index">
                        <div class="p15 car_spacial_text" style="background: #f8f8f8">
                                <h5>{{item.name}}</h5>
                        </div>
                        <!-- <mu-sub-header>{{item.name}}</mu-sub-header> -->
                        <mu-list-item 
                        button 
                        :ripple="false" 
                        class="brandCarMode_list_info view_cell_after" 
                        v-for="(carinfo,index) in item.carSeries" 
                        :key="index" 
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
                                <mu-list-item-action>
                                    <mu-icon value=":iconfont icon-you"></mu-icon>
                                </mu-list-item-action>
                        </mu-list-item>
                    </div>
                </mu-list>
            </div>
        </section>
        
    </div>
</template>
<script>
import apiAll from '@/http/apiAll'
import Toast from 'muse-ui-toast'
import bus from '@/components/bus.js'
    export default {
        data () {
            return {
                msg:'品牌车型',
                open: false,
                trigger: null,
                carModeList:{},//车型list
                catgorylist:[],
            }
        },
        mouted(){
            this.trigger = this.$refs.button.$el;
        },
        created (){
            this.$store.state.showTopNav = false;
            let res = this.$route.params.objContent;
            let newObj = JSON.parse(res);
            console.log(newObj);
            this.carModeList = newObj;
            let catgorylist = newObj.categoryList.map(val => val)
            console.log(catgorylist);
            this.catgorylist = catgorylist
            console.log(this.$store.state.map)
        },
        methods:{
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
        }
    }
</script>
<style>
    .brandCarMode_list_info .mu-item{
        padding-top: 10px;
        padding-bottom: 10px;
        height: auto !important;
    }
    .brandCarMode_list_info .mu-item .mu-item-action:nth-child(1){
        min-width: auto !important;
        margin-right: 15px;
        width: 100px;
        max-width: 120px;
        flex: 1 1 100%;
    }
    .brandCarMode_list_info .mu-item .mu-item-action:last-child{
        min-width: auto !important;
    }
</style>
