<template>
    <div class="trafficGuide">
    <div class=" bg_fff">
        <mu-list class="p0">
            <mu-list-item button :ripple=false>
                <mu-list-item-title class="text_center">展会地点</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
        </mu-list>
        <div class="p15 pb0 Exhibition_site">
            <mu-list class="p0">
                <mu-list-item :ripple="true" class="pl0">
                    <mu-list-item-action>
                        <mu-icon value=":iconfont icon-weizhi"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>广州国际会展中心</mu-list-item-title>
                        <mu-list-item-sub-title>广州国际会展中心</mu-list-item-sub-title>
                    </mu-list-item-content>
                </mu-list-item>
            </mu-list>
            <div class="pt10">
                <img src="@static/images/chezhan/20180504024433998.jpg" alt="" class="img-responsive">
            </div>
            
        </div>
        <mu-list class="p0 Traffic_routes">
            <mu-list-item button :ripple=false>
                <mu-list-item-title class="text_center">交通路线</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item :ripple="true" class="pl0 pt10 pb10">
                <mu-list-item-action class="min_width_auto pr10">
                    <mu-icon value=":iconfont icon-daohang"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>导航地址</mu-list-item-title>
                    <mu-list-item-sub-title>广州国际会展中心</mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item :ripple="true" class="pl0 pt10 pb10 nth3">
                <mu-list-item-action class="min_width_auto pr10">
                    <mu-icon value=":iconfont icon-qicheqianlian-"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>公交路线</mu-list-item-title>
                    <mu-list-item-sub-title class="title_text_14" style="color: #6f6f6f;-webkit-line-clamp: 4;">
                        附近公交站点：地铁林萃桥站   公交站
                        途径公交路线：乘坐44、81、379、路公交到地铁林萃桥站下车；乘坐510路公交到倚林佳园东门下车。
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item :ripple="true" class="pl0 pt10 pb10">
                <mu-list-item-action class="min_width_auto pr10">
                    <mu-icon value=":iconfont icon-ditie"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>地铁</mu-list-item-title>
                    <mu-list-item-sub-title>地铁8号线林萃桥站（C1东南出口）步行960米。</mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item :ripple="true" class="pl0 pt10 pb10">
                <mu-list-item-action class="min_width_auto pr10">
                    <mu-icon value=":iconfont icon-car"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>自驾</mu-list-item-title>
                    <mu-list-item-sub-title>国家网球中心钻石球场</mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
        </mu-list>
        
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
                        <img :src="item.img" alt="" class="img-responsive" preview="4" :preview-text="item.previewText">
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
    .Traffic_routes .nth3 .mu-item{
        height: auto !important;
    }
    .Traffic_routes li .iconfont{
        font-size: 22px;
        color: #ec407a;
    }
    .Exhibition_site .mu-item-action{
        min-width: auto !important;
        padding-right: 10px;
    }
    .Exhibition_site .mu-item-wrapper .mu-item{
        padding: 0px;
    }
    .Exhibition_site .icon-weizhi{
        font-size: 24px;
        color: #ec407a;
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