<template>
    <div class="carpurchaseguide">
        <div class=" bg_fff">
            <mu-list class="p0">
                <mu-list-item button :ripple=false>
                    <mu-list-item-title class="text_center">灵活的购车方式</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
            <div class="p15">
                <div class="carPurch_mode">
                    <div class="carPurch_mode_item">
                        <div><i class="iconfont icon-31pinpai"></i></div>
                        <p>车展分期购车</p>
                    </div>
                    <div class="carPurch_mode_item">
                        <i class="iconfont icon-menpiao1"></i>
                        <p>现场全款购车</p>
                    </div>
                    <div class="carPurch_mode_item">
                        <i class="iconfont icon-menpiao1"></i>
                        <p>现场定金订车</p>
                    </div>
                </div>
            </div>
            <mu-list class="p0">
                <mu-list-item button :ripple=false>
                    <mu-list-item-title class="text_center">灵活的购车方式</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
            <div class="p15">
                <div>
                    <span class="weui_badge">分期购车</span> 
                    <dl class="text-6f text_14">
                        <dt>
                        交首付款—签合同—银行审批—银行放贷—办理牌照—办理还贷手续。
                        需提供证件：身份证、户口本、住房证明、收入证明、二张一寸照片。（已婚：配偶身份证、结婚证）。；
                        </dt>
                    </dl> 
                </div>
                <mu-divider></mu-divider>
                <div class="pt10">
                    <span class="weui_badge">全款购车</span> 
                    <dl class="text-6f text_14">
                        <dt>
                                需提供证件：身份证
                                提供：“汽车销售发票”、“车辆保修手册”、“车辆使用说明书”。
                                车商可以代办：缴纳购置费、保险、车船使用税、上牌等手续。
                        </dt>
                    </dl>
                </div>
                <mu-divider></mu-divider>
                <div class="pt10">
                    <span class="weui_badge">定金预订</span> 
                    <dl class="text-6f text_14">
                        <dt>
                            交付定金后如果退车，车商将不予退还定金；车商不愿交车或者不能按《定购合同》约定的时间交车，
                            你可以要求车商双倍返还定金。办好定金手续后，
                            等车商的现车来后，你需要交清全部车款，再提车。
                        </dt>
                    </dl>
                </div>
            </div>
        </div>
        <div class="pt10">
            <div class="bg_fff">
                <mu-list class="p0">
                    <mu-list-item button :ripple=false>
                        <mu-list-item-title >车展回顾</mu-list-item-title>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                </mu-list>
                <div class="Car_autoshow_review p5">
                    <div class="autoshow_review_item" v-for="(item,index) in autoshowReviewImgs" :key="index">
                        <img :src="item.img" alt="" class="img-responsive" preview="2" :preview-text="item.previewText">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .Car_autoshow_review{
        display: -webkit-box;
        display: flex;
        display: -webkit-flex;
        flex-flow: row wrap;
        align-items: center;
        align-content: center;
        justify-content: flex-start;
        width: 100%;
    }
    .autoshow_review_item{
        width: 33.333333333%;
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;
        align-content:center;
        padding: 5px;
        text-align: center;
    }
    .carPurch_mode{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: space-between;
    }
    .carPurch_mode_item{
        flex: 1 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        align-content: center;
        margin-right: 15px;
        background: #1cb0f6;
        padding: 10px 15px 10px; 
        border-radius: 4px;
        color: #fff;
    }
    .carPurch_mode_item .iconfont{
        font-size: 24px;
    }
    .carPurch_mode_item:nth-child(2){
        background: #a560e8
    }
    .carPurch_mode_item:nth-child(3){
        background: #faa918
    }
    .carPurch_mode_item:last-child{
        margin-right: 0;
    }
    .carPurch_mode_item > p{
        margin: 0;
    }
    .weui_badge {
        display: inline-block;
        padding: 0.08rem 0.133333rem;
        border-radius: 0.533333rem;
        color: #fff;
        background: #ec407a;
        font-size: 0.373333rem;
    }
</style>
<script>
    export default {
        data () {
            return {
                autoshowReviewImgs:[
                    {
                        img:require('@static/images/chezhan/a0f7d6b6-c511-4640-8e0c-373c90d8581e.jpg'),
                        previewText: '现场抽奖'
                    },
                    {
                        img:require('@static/images/chezhan/chezhan4.jpg'),
                        previewText: '2018大众CC盛夏来袭'
                    },
                    {
                        img:require('@static/images/chezhan/chezhan2.jpg'),
                        previewText: '英国皇家捷豹XLJ'
                    },
                    {
                        img:require('@static/images/chezhan/25aca667-c19f-4e3a-8a19-827227923c38.jpg'),
                        previewText: '2018新款保时捷'
                    },
                    {
                        img:require('@static/images/chezhan/28352efd-e759-4590-b893-06d3be7c7279.jpg'),
                        previewText: '现场活动进行中'
                    }
                ]
            }
        }
    }
</script>
