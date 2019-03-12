<template>
    <div class="autoshowNotes">
        <div class=" bg_fff">
            <mu-list class="p0">
                <mu-list-item button :ripple=false>
                    <mu-list-item-title class="text_center">参展须知</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
            <div class="p15">
                <div class="text-6f text_14">
                    1.免费门票分为免费个人门票与免费家庭套票，个人门票为1张，家庭套票为3张。<br>
                    2.网友在车展官网领取门票均为免费，车展门票现场售价为20元1张，个人门票与家庭套票销售同价。<br>
                    3.在车展期间，所有门票均可以进出使用2次，在车展当天，个人免费门票和免费家庭套票将停止派送。
                </div>
            </div>
            <mu-list class="p0">
                <mu-list-item button :ripple=false>
                    <mu-list-item-title class="text_center">疑问解答</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
            <div class="pb15">
                <mu-expansion-panel>
                    <div slot="header">免费门票如何领取?</div>
                    <span class="text_14">
                    领取免费门票有2种官方渠道，下面为您详细介绍： 1、点击进入官方领票网址，填写您的姓名电话和收件地址，即可免费领取；
                                        2、拨打官方免费领票热线400-1010-222，告知客服您的姓名电话和收件地址，即可免费领取。</span>
                </mu-expansion-panel>
                <mu-expansion-panel>
                    <div slot="header">车展买车价格真的便宜吗？</div>
                    <span class="text_14">这个答案是肯定的，车展开展前官方会面向网友赠送价值1000元购车代金券，是可以抵扣购车款的。</span>
                </mu-expansion-panel>
                <mu-expansion-panel>
                    <div slot="header">车展买车的车源质量有保障吗？</div>
                    <span class="text_14">车展买车车源质量是绝对保证的，参加参展的展商都是来自官方厂家、区域、经销商，保证车源质量与售后服务。</span>
                </mu-expansion-panel>
                <mu-expansion-panel>
                    <div slot="header">车展买车后售后怎么办？</div>
                    <span class="text_14">您在车展上买车之后，所享受的售后服务直接由4S店负责，包括交税、上牌、买保险等事宜。</span>
                </mu-expansion-panel>
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
                        <img :src="item.img" alt="" class="img-responsive" preview="3" :preview-text="item.previewText">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .autoshowNotes .mu-elevation-2:last-child{
        box-shadow: none;
    }
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