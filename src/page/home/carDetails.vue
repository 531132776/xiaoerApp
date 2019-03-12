<template>
    <div class="common_news">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
          <mu-appbar color="teal">
            <mu-button icon slot="left" @click="$router.back(-1)">
              <mu-icon value=":iconfont icon-zuo headerZuo"></mu-icon>
            </mu-button>
            {{newObj.name}}
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
        <section class="cardetails_info">
            <mu-row>
                <mu-col span="12"><div class="grid-cell">
                    <img :src="previewImg+newCarinfo.image" alt="" class="img-responsive">
                    </div></mu-col>
            </mu-row>
            <div class="cardetails_info_one bg_fff pr_pl15">
                <ul>
                    <li>
                        <h4 class="text_16 m0">{{newCarinfo.name}}</h4>
                    </li>
                    <li class="text_14">
                        <span class="text-999">厂商指导价：</span><span></span>
                    </li>
                    <li class="text_14">
                        <mu-row>
                            <mu-col span="6"><span class="text-999">级别：{{$store.state.map.get(type)}}</span></mu-col>
                            <mu-col span="6"><span class="text-999">发动机：</span></mu-col>
                        </mu-row>
                    </li>
                    <li class="text_14"><span class="text-999">变速箱：</span></li>
                </ul>
            </div>
            <div class="pt10">
                <div class="bg_fff">
                    <div class="lg_title"><div class="mu-sub-header text-red">在售车型</div></div>
                </div>
                <mu-divider></mu-divider>
                <!-- 车款列表 -->
                <div class="OnSale_car bg_fff ">
                    <div class="view_cell_after after_last" v-for="(item,index) in onSlicecarList" :key="index">
                        <div class="OnSale_car_item pt_pb10 pr_pl15">
                            <div class="item_left">
                                <ul>
                                    <li><span class="text_16">{{item.name}}</span></li>
                                    <li>
                                        <span class="text-999 text_14">前置四驱 7挡双离合</span>
                                    </li>
                                    <li>
                                        <span class="text-999 text_14">{{item.produceTime}}({{item.producestate}})</span>
                                        <span class="text-999 text_14">是否进口：<em class="text-red">{{item.salestate == false ? "合资" : "进口"}}</em></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="item_right">
                                    <div><span class="text_16 text-red">￥{{item.showPrice}}万</span></div>
                                    <div>
                                        <span class="text-999 text_14 text_line_through">指导价：{{item.mPrice}}万</span>
                                    </div>
                                    <div>
                                        <mu-button color="secondary" small @click="openFloorprice(item.seriesId,item.name,item.id)">询底价</mu-button>
                                    </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
        <!-- 询问底价 -->
        <mu-dialog :title="FloorPricename" width="80%" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openFloorPrice">
            <div class="openFloorPriceForm">
                <mu-form ref="priceForm" :model="openFloorPriceForm" class="mu-demo-form">
                    <mu-form-item label="用户名" prop="name" :rules="pricenameRules">
                        <mu-text-field v-model="openFloorPriceForm.name" label-float prop="name"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item label="电话" prop="phone" :rules="pricephoneRules">
                        <mu-text-field type="text" v-model="openFloorPriceForm.phone" label-float :max-length="11" prop="phone"></mu-text-field>
                    </mu-form-item>
                    <mu-form-item>
                        <mu-button color="primary" @click="PriceFormsubmit">提交</mu-button>
                        <mu-button @click="PriceFormFormclear">取消</mu-button>
                    </mu-form-item>
                    
                </mu-form>
            </div>
        </mu-dialog>
        <div>
            <!-- <img src="" alt="" id="home_jiaodianhuadong_1_title"> -->
        </div>
        
    </div>
</template>
<style>
    .OnSale_car_item{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        /* 两端对齐，没有空隙 */
        justify-content: space-around;
        /* 两端对齐，有空隙 */
        justify-content: space-between;
    }
    .item_left, .item_right{
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;
    }
    .item_right{
        justify-content: flex-end;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-item-align: end;
        align-self: flex-end;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
    }
    .cardetails_info_one > ul > li {
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>

<script>
    import bus from '@/components/bus.js'
    import apiAll from '@/http/apiAll'
    export default {
        data () {
            return {
                // xxoo:home_jiaodianhuadong_1_title,
                msg:'',
                previewImg:'http://39.108.53.107:9098/',
                open:false,
                trigger: null,
                newCarinfo:{},
                newObj:{},
                seriesId:'',
                onSlicecarList:[],
                type:this.$route.params.type,//车型级别(中型，SUV,MPV等等)
                openFloorPriceForm:{ //询问底价form
                    name:'',
                    phone:''
                },
                //询问底价
                openFloorPrice:false,//询问底价
                FloorPricename:'',//车款name
                FloorpriceCssId:'',//seriesId
                pricenameRules: [
                                    { validate: (val) => !!val, message: '请填写用户名'},
                                ],
                pricephoneRules: [
                                    { validate: (val) => !!val, message: '请填写手机号码便于工作人员联系您'},
                                    { validate: (val) => val.length <= 11, message: '密码长度为11位'},
                                    { validate: (val) => /^[1][3,4,5,7,8][0-9]{9}$/.test(val), message: '请输入正确手机号'}
                                ],
            }
        },
        created() {
            this.$store.state.showTopNav = false; //头部导航显示
             let _this = this
            bus.$on('age',function(e) {
                 this.msg = e;
                console.log(this.msg)
            });
            let obj = this.$route.params.objItem;
            let carinfo = this.$route.params.carinfo;
            let newObj = JSON.parse(obj);//当前汽车分类信息(如：一汽奥迪，进口奥迪)
            let newCarinfo = JSON.parse(carinfo);//车型信息（如：奥迪Q5）
            this.newObj = newObj;
            this.newCarinfo = newCarinfo
            this.seriesId = this.newCarinfo.id
            console.log(newObj);
            console.log(newCarinfo);
            //获取车款
            this.getCar();
        },
        mounted(){
            this.trigger = this.$refs.button.$el;
        },
        methods:{
            async getCar(){
                let data = {
                    seriesId:this.seriesId
                }
                let self = await apiAll.getCarSeries(data);
                console.log(self);
                this.onSlicecarList = self.data || []
            },
            
            //询问底价模态框
            openFloorprice(seriesId,carSeriesName,carId){
                this.FloorPricename = carSeriesName;
                this.carId = carId;
                this.FloorpriceCssId = seriesId;
                // console.log(this.FloorpriceCssId)
                this.openFloorPrice = true
            },
            PriceFormsubmit(){
                this.$refs.priceForm.validate().then((result) => {
                    console.log('form valid: ', result)
                    if(result){
                        let data = {
                            cssId:this.FloorpriceCssId,
                            carId:this.carId,
                            type:2,
                            name: this.openFloorPriceForm.name,
                            phone: this.openFloorPriceForm.phone,
                        }
                    apiAll.autoshowInsertIntentioner(data).then(res => {
                        console.log(res)
                        this.$toast.success({
                            position: 'top',
                            message:'询底价成功',
                            successIcon: 'check_circle',   // 成功信息图标
                            infoIcon: 'info'
                        })
                        this.$refs.priceForm.clear();
                        this.openFloorPriceForm = {
                            name: '',
                            phone: '',
                        };
                        this.openFloorPrice = false
                        }).catch(e => {
                            Toast.error({
                                message: '询底价失败',
                                infoIcon: 'info',
                                errorIcon: 'warning'
                            })
                        })
                    }
                    
                });
            },
            //询底价关闭模态框
            PriceFormFormclear(){
                this.$refs.priceForm.clear();
                this.openFloorPriceForm = {
                    name: '',
                    phone: '',
                };
                this.openFloorPrice = false
            },
        }
    }
</script>