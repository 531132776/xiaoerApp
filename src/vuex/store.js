import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const map = new Map();
map.set("1", "微型车");
map.set("2", "小型车");
map.set("3", "紧凑型车");
map.set("4", "中型车");
map.set("5", "中大型车");
map.set("6", "豪华车");
map.set("7", "MPV");
map.set("8", "SUV");
map.set("9", "跑车");
map.set("10", "面包车");
map.set("11", "皮卡");
map.set("12", "微卡");
map.set("13", "轻客");
map.set("14", "微面");
map.set("15", "大型");
const state = {
    showTop: false,
    showTopNav: true,
    pdTop: 'pdTopClass',
    routelist: [{
            path: '/home',
            title: '首页',
            value: 'active-color'
        },
        {
            path: '/autoshow',
            title: '车展',
            value: 'active-color'
        },
        {
            path: '/grouppurchase',
            title: '团购',
            value: 'active-color'
        },
        {
            path: '/distributor',
            title: '商家',
            value: 'active-color'
        },
    ],
    map,
    name: '',
    dealershopdetail:'',//商家团购报名
    News:'',//新闻
    autoshowDetails:'',//车展详情
    groupSignup:'',//团购
};
const actions = {
    //context：上下文对象，这里你可以理解称store本身。
    //{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
    //此方法对组件页面上的@click
    addAction(context) {
        context.commit('handleScroll')
    },
    //此方法对组件页面上的@click
    TopScroll(context) {
        context.commit('TopScroll')
    }
};
const mutations = {

    //商家主页详情
    dealershop(state, arg) {
        sessionStorage.setItem('name', JSON.stringify(arg));
        state.name = arg;
    },
    //商家团购报名
    dealershopSign(state, n){
        sessionStorage.setItem('detail',JSON.stringify(n));
        state.dealershopdetail = n;
    },
    //公共新闻方法
    NewsDetails(state, k){
        sessionStorage.setItem('publicNews',JSON.stringify(k));
        state.News = k;
    },
    //车展详情
    toAuotshowDetails(state, i){
        sessionStorage.setItem('autoshow',JSON.stringify(i));
        state.autoshowDetails = i;
    },
    //团购报名
    togroupSign(state, l){
        sessionStorage.setItem('tuangou',JSON.stringify(l));
        state.groupSignup = l;
    },
    handleScroll() {
        // 窗口可视高度    
        var windowHeight = document.body.clientHeight
            // 窗口实际高度    
        var height = document.body.scrollHeight
            // 滑动条移动高度    
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            // 滑动条距离底部距离    
            //   var bottomHeight = height - windowHeight - scrollTop
            //   alert(scrollTop)
        if (scrollTop >= 200) {
            // 调用处理方法,可实现懒加载
            state.showTop = true
        } else {
            state.showTop = false
        }
    },
    //回到顶部
    TopScroll() {
        //   alert(1)
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    },


};

module.default new Vuex.Store({
    state,
    mutations,
    actions
})