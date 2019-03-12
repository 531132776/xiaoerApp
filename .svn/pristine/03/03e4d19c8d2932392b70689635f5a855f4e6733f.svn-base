<template>
    <div class="homePage">
        <headerVue></headerVue>

        <div class="content_all" :class="[$store.state.showTopNav == true ? 'pdTopClass' : '']">
            <transition name="fade" mode="out-in">
                <!-- <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive> -->
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<style>
    
</style>
<script>
import headerVue from "@/components/headerVue";

    export default {
        data () {
            return {

            }
        },
        created(){
            this.$store.state.showTopNav == true;
        },
        components: {
            headerVue
        }
    }
</script>