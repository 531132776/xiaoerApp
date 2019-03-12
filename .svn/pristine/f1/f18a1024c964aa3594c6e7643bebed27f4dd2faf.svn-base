<template>
  <div id="app">
    <!-- <div class="content_all"> -->
    
    <transition name="fade" mode="">
        <!-- <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive> -->
        <router-view/>
        <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    </transition>
    <!-- </div> -->
  </div>
</template>

<script>
// import headerVue from "./page/headerVue";
export default {
  name: "App",
  // components: {
  //   headerVue
  // }
  mounted () {
    //   var passiveSupported = false;
    //   try {
    //       var options = Object.defineProperty({}, "passive", {
    //           get: function() {
    //               passiveSupported = true;
    //           }
    //       });
    //       window.addEventListener("test", null, options);
    //   } catch(err) {}
    //   function fn() {
    //   };
    //   document.addEventListener("touchstart", fn, passiveSupported ? { passive: true } : false);
    //移动端Web界面滚动性能优化
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {}
      function fn() {
      };
      // Use our detect's results. 
      // passive applied if supported, capture will be false either way.
      document.addEventListener(
        'touchstart',
        fn,
        supportsPassive ? { passive: true } : false
      ); 
    },
    methods:{
      
    },
//     watch:{
//             '$route':function(to,from){
// 　　　　　　　　　　 document.body.scrollTop = 0;
//                  document.documentElement.scrollTop = 0;
//            }

//     }
}
</script>

<style>
@import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
  -webkit-font-smoothing: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
 background: #f8f8f8;
 
}

</style>
