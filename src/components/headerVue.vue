<template>
    <div class="header_nav" v-if="$store.state.showTopNav">
        <mu-container>
            <mu-tabs router full-width :default-active="active2" :value="$route.path" >
                <mu-tab v-for="(item,index) in routes" :key="index" ripple :to="item.path" exact :active-class="item.value" >{{item.title}}</mu-tab>
                <!-- <mu-tab to="/autoshow">车展</mu-tab>
                <mu-tab to="/grouppurchase">团购</mu-tab>
                <mu-tab to="/member">会员</mu-tab> -->
            </mu-tabs>
        </mu-container>
    </div>
</template>
<script>
    export default{
        name:'',
        data () {
            return {
                active2:this.$route.path,
                routes: [
                    {
                        path:'/home',
                        title:'首页',
                        value:'active-color'
                    },
                    {
                        path:'/autoshow',
                        title:'车展',
                        value:'active-color'
                    },
                    {
                        path:'/grouppurchase',
                        title:'团购',
                        value:'active-color'
                    },
                    {
                        path:'/distributor',
                        title:'商家',
                        value:'active-color'
                    },
                ]
            }
        },
        mounted(){
            // console.log(this.$router.currentRoute)
        }
    }
</script>
<style>
.header_nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    box-shadow: 0 3px 5px rgba(0,0,0,.12);
    -webkit-box-shadow: 0 3px 5px rgba(0,0,0,.12);
}
.header_nav .mu-tab-active{
    color: inherit;
}
.active-color{
    color: #fff !important;
}
</style>
