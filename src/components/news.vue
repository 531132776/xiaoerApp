<template>
    <div class="common_news">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
          <mu-appbar color="teal">
            <mu-button icon slot="left" @click="$router.back(-1)">
              <mu-icon value=":iconfont icon-zuo headerZuo"></mu-icon>
            </mu-button>
            新闻
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
        <section class="news_content p15 bg_fff">
          <div class="">
            <div class="news_text_img">
              <h2 class="text_16">{{title}}</h2>
              <p class="text-999">
                <span>发布时间：<em>{{createTime}}</em></span>
                <span>作者：<em>张三丰</em></span>
              </p>
              <div class="newsContent" v-html="content">
              </div>
            </div>
          </div>
        </section>
        <!-- 回到顶部 -->
        <transition name="fade" mode="out-in">
            <div class="scroll_top " v-show="$store.state.showTop" @click="TopScroll">
                <span class="iconfont icon-triangle-up"></span>
            </div>
        </transition>
    </div>
</template>
<style>
.news_text_img .newsContent p{
  font-size: 16px !important;
  line-height: 30px !important;
  margin: 5px 0;
}
.newsContent ul{
  width: auto !important;
}
.news_text_img p span{
  font-size: 14px !important;
  margin: 5px 0;
}
.news_text_img p img{
    display: block;
    max-width: 100%;
    height: auto;
    width: 100vw;
}
.demo-loadmore-wrap {
  width: 100%;
  display: flex;
  /* height: 500px; */
  flex-direction: column;
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

</style>
<script>
import { mapMutations,mapActions } from 'vuex'
export default {
  data() {
    return {
      open: false,
      trigger: null,
      num: 10,
      loading: false,
      text: "List",
      createTime:'',
      title:'',
      content:'',
    };
  },
  created(){
    // console.log(this.$store.state.News.content || JSON.parse(sessionStorage.getItem('publicNews')).content)
    this.content = this.$store.state.News.content || JSON.parse(sessionStorage.getItem('publicNews')).content;
    this.createTime = this.$store.state.News.createTime || JSON.parse(sessionStorage.getItem('publicNews')).createTime;
    this.title = this.$store.state.News.title || JSON.parse(sessionStorage.getItem('publicNews')).title;
  },
  mounted(){
    // alert(this.$route.params.id)
    this.trigger = this.$refs.button.$el;
    //回到顶部
      window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    //回到顶部
      ...mapMutations(['handleScroll']),
      ...mapActions(['addAction','TopScroll']),
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === "List" ? "Menu" : "List";
        this.num = 10;
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000);
    }
  }
};
</script>
