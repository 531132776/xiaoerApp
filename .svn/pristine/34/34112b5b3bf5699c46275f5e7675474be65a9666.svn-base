import Vue from 'vue'
import Router from 'vue-router'
import headerVue from '@/components/headerVue'
import autoshow from '@/page/AutoShow/autoshow'
// import AutoShowNotes from '@/page/AutoShow/AutoShowNotes'
// import CarPurchaseGuide from '@/page/AutoShow/CarPurchaseGuide'
// import TicketingGuide from '@/page/AutoShow/TicketingGuide'
// import TrafficGuide from '@/page/AutoShow/TrafficGuide'
import autoshowIndex from '@/page/AutoShow/autoshowIndex'
import autoshowNew from '@/components/autoshowNew'
import grouppurchase from '@/page/GroupPurchase/grouppurchase'
import groupIndex from '@/page/GroupPurchase/groupIndex'
import groupPuSignUp from '@/components/groupPuSignUp'
import dealershop from '@/page/Distributor/dealershop'
import distributor from '@/page/Distributor/distributor'
import dealershopSignUp from '@/page/Distributor/dealershopSignUp'
import distributorIndex from '@/page/Distributor/distributorIndex'
import home from '@/page/home/home'
import homeIndex from '@/page/home/homeIndex'
import carmodeLists from '@/page/home/carmodeLists'
import findcar from '@/page/home/findcar'
import carDetails from '@/page/home/carDetails'
import news from '@/components/news'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
    //路由跳转页面显示在顶部
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      },
    routes: [

        //团购报名
        {
            path: '/groupPuSignUp', //'/groupPuSignUp/:id/:content'
            name: 'groupPuSignUp',
            component: groupPuSignUp,
            meta: { keepAlive: true }
        },
        //车展详情
        {
            path: '/autoshowNew', //'/autoshowNew/:id/:cityId/:bigImage/:cityName'
            name: 'autoshowNew',
            component: autoshowNew,
            meta: { keepAlive: true }
            // children:[
            //   {
            //     path:'/TicketingGuide',
            //     name:'票务指南',
            //     component: TicketingGuide
            //   },
            //   {
            //     path:'/TrafficGuide',
            //     name:'交通指南',
            //     component: TrafficGuide
            //   },
            //   {
            //     path:'/CarPurchaseGuide',
            //     name:'购车指南',
            //     component: CarPurchaseGuide
            //   },
            //   {
            //     path:'/AutoShowNotes',
            //     name:'车展须知',
            //     component: TicketingGuide
            //   },
            // ]
        },
        //新闻
        {
            path: '/news', //'/news/:id/:title/:content/:createTime'
            name: 'news',
            component: news,
            meta: { keepAlive: true }
        },
        //公用头部
        {
            path: '/headerVue',
            name: 'headerVue',
            component: headerVue,
            status: true
        },
        //各大主模块
        {
            path: '/',
            name: index,
            component: index,
            redirect: '/homeIndex',
            children: [{
                    path: '/homeIndex',
                    name: 'homeIndex',
                    component: homeIndex,
                    redirect: '/home',
                    children: [
                        {
                            path: '/home',
                            name: 'home',
                            component: home,
                            meta: { keepAlive: true },
                        },
                        {
                            path: '/carmodeLists/:objContent',
                            name: 'carmodeLists',
                            component: carmodeLists,
                            meta: { keepAlive: true },
                        },
                        {
                            path: '/findcar',
                            name: 'findcar',
                            component: findcar,
                            meta: { keepAlive: true },
                            children:[
                                
                            ],
                        },
                        {
                            path: '/carDetails/:objItem/:carinfo/:type',
                            name: 'carDetails',
                            component: carDetails,
                        }
                ]
                },
                {
                    path: '/autoshowIndex',
                    name: 'autoshowIndex',
                    component: autoshowIndex,
                    redirect: '/autoshow',
                    children: [{
                        path: '/autoshow',
                        name: 'autoshow',
                        component: autoshow,
                        meta: { keepAlive: true },
                    }]
                },
                {
                    path: '/groupIndex',
                    name: 'groupIndex',
                    component: groupIndex,
                    redirect: '/grouppurchase',
                    children: [{
                            path: '/grouppurchase',
                            name: 'grouppurchase',
                            component: grouppurchase,
                            meta: { active: 1, keepAlive: true },
                        }

                    ]
                },
                {
                    path: '/distributorIndex',
                    name: 'distributorIndex',
                    component: distributorIndex,
                    redirect: '/distributor',
                    meta: { active: 1 },
                    children: [{
                            path: '/distributor',
                            name: 'distributor',
                            component: distributor,
                            // meta: { active: 1, keepAlive: true },
                        },
                        //经销商主页
                        {
                            path: '/dealershop',
                            name: 'dealershop',
                            component: dealershop,
                            // meta: { keepAlive: true }
                        },
                        //经销商团购报名
                        {
                            path: '/dealershopSignUp', //dealershopSignUp/:id/:cssId/:companyId/:item
                            name: 'dealershopSignUp',
                            component: dealershopSignUp,
                            // meta: { keepAlive: true }
                        },
                    ]
                },

            ]
        },

    ]
})