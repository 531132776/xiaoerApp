<template>
    <div class="ticketingGuide">
    <div class=" bg_fff">
        <mu-list class="p0">
            <mu-list-item button :ripple=false>
                <mu-list-item-title class="text_center">门票类型</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <div class="p15 pb0">
            <div class="pb15 Ticket_type">
                <div class="ticket_type_item">
                    <p>单人门票</p>
                    <span>满足1人参展</span>
                </div>
                <div class="ticket_type_item">
                    <p>家庭套餐</p>
                    <span>满足4人参展</span>
                </div>
            </div>
            <mu-divider></mu-divider>
            <div class="pt15 pb15 text-6f text_14">
                    我们致力于为汽车消费者与汽车品牌厂商搭建一个便利、直接、可靠的交易平台。
                    通过平台为消费者争取更多购车优惠、搭建便利可靠的购车场景。为提高车展接待能力和服务质量，车展需要凭门票方可参展，避免无关人等入场，将参展商有限的时间和人力服务于有需求的客户。
            </div>
            <mu-divider></mu-divider>
        </div>
        <div  class="Admission_notice">
            <mu-list class="p0">
                <mu-list-item button :ripple=false>
                    <mu-list-item-title class="text_center">免费门票须知</mu-list-item-title>
                </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>
            <div class="p15">
                <span class="weui_badge">领取方式</span>
                <dl class="text-6f text_14">
                    <dt>
                            1、点击下方的免费领票按钮，按照提示报名领取门票；</dt>
                    <dt>
                            2、拨打官方客服热线400-1010-222 领取免费门票；
                        </dt>
                </dl>
                <span class="weui_badge">使用须知</span>
                <dl class="text-6f text_14">
                    <dt>
                            
                            1、1个手机号码仅限领取1张免费个人门票和3张家庭套票；</dt>
                    <dt>
                            2、车展期间使用门票进出2次，第2次进入展馆回收门票；
                        </dt>
                    <dt>
                        3、免费门票在车展开展前24小时停止赠送，车展现场不赠送免费门票，需要在售票窗口购票入场。
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
                        <img :src="item.img" alt="" class="img-responsive" preview="1" :preview-text="item.previewText">
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
    .weui_badge{
        display: inline-block;
        padding: 3px 5px;
        border-radius: 20px;
        color: #fff;
        background: #ec407a;
        font-size: 14px;
    }
    .Ticket_type{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: space-between;
    }
    .ticket_type_item{
        flex: 1 1;
        display: flex;
        flex-flow: column nowrap;
        /* align-items: center; */
        align-content: center;
        margin-right: 15px;
        background: #1cb0f6;
        padding: 10px 15px 10px; 
        border-radius: 4px;
        color: #fff;
    }
    .ticket_type_item p{
        margin: 0;
        font-size: 16px;
    }
    .ticket_type_item+.ticket_type_item{
        margin-right: 0;
        background: #a560e8;
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