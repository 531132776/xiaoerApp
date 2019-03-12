<template>
    <div class="groupcommon">
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            
        </transition>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>