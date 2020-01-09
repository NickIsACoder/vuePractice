<template>
    <div class="container flex">
        <div class="left flex">
            <ul class="nav">
                <li v-for="(item,index) in navList" :key="index" @click="pageGo(item.pageName)" 
                class="nav-item">{{item.label}}</li>
            </ul>
        </div>
        
        <div class="right">
            <router-view>
                <template v-slot:header>
                    <p>你好</p>
                </template>
                <template v-slot:default="myslotProps">
                    我是默认插槽
                    <!-- {{ myslotProps.user.fname }} -->
                </template>
                <template v-slot:footer>
                    <p>我是底部插槽</p>
                </template>
            </router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pg-content',
        data() {
            return {
                navList: [
                    {
                        label:"watch",
                        pageName:"watch"
                    },
                    {
                        label:"页面2",
                        pageName:"page2"
                    },
                    {
                        label:"状态管理",
                        pageName:"vuex"
                    },
                    {
                        label:"quill",
                        pageName:"quill"
                    },
                    {
                        label:"ueditor",
                        pageName:"ueditor"
                    },
                    {
                        label:"wangeditor",
                        pageName:"wangeditor"
                    },
                    {
                        label:"锚点",
                        pageName:"mpoint"
                    },
                    {
                        label:"动效",
                        pageName:"animate"
                    },
                    {
                        label:"组件值交互",
                        pageName:"father"
                    },
                    {
                        label:"图表",
                        pageName:"echart"
                    },
                ],
            }
        },
        methods: {
            pageGo(_item) {
                if(_item=='father'){
                    this.$router.push({name: `${_item}`,params: { id: 123,name:'messi' }});
                }else{
                    this.$router.push({name: `${_item}`});
                }
                
            },
        },
    }
</script>

<style scoped lang="less">
    .flex{
        display: flex;
    }
    .left{
        // background: #1F2D3D;
        background: #1f2e45;
        min-width: 100px;
        overflow-y:auto;
    }
    .right{
        flex: 1;
        // background: #F5F7FA;
        background: #fff;
        overflow-y: scroll;
    }
    .nav{
        width: 100%;
        .nav-item{
           color: #d4e4fa;
            // background-color: #2e3b4d;
            width: 100%;
            padding: 10px 0;
            text-align: center;
            // border-bottom: 1px solid rgb(84, 108, 140);
        }
    }
    
</style>
