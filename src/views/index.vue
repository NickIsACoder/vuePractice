<template>
    <div class="body-content">
        <headTop @childFn="parentFn" title="管理系统" :state="state"><span>子传过来的值--{{childMsg}}</span></headTop>
        <Pgcontent></Pgcontent>
    </div>
</template>

<script>
    import headTop from '../components/head.vue'
    import Pgcontent from '../components/content.vue'

    export default {
        data() {
            return {
                state: 'dev',
                childMsg: '',
            }
        }, 
        components: {
            headTop, Pgcontent,
        },
        methods: {
            parentFn(payload) {
                this.childMsg = payload;
            }
        },
        watch: {
            '$route.path': function(newVal, oldVal) {
                console.log(oldVal+"---跳转到---"+newVal);
                // if (newVal === '/login') {
                //     console.log('欢迎进入登录页面');
                // } else if (newVal === '/register') {
                //     console.log('欢迎进入注册页面');
                // }
            }
        }
    }
</script>

<style>
</style>
