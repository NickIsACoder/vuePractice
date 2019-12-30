<template>
    <div class="aniBox">
        <div class="aniItem">
            <el-button type="primary" @click="showModal=true,showModalCont=true">showModal</el-button>
            <div class="page_modal" v-show="showModal">
                <transition name="fade">
                    <div class="page_modal_cont" v-show="showModalCont">
                        撒大事
                        <span class="close" @click="closeModal">关闭</span>
                    </div>
                </transition>
            </div>
        </div>


        <div class="aniItem">
            <el-button type="primary" @click="show=!show">单个动画</el-button>
            <div>
                <transition name="fade">
                    <div class="box" v-if="show"></div>
                </transition>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                showModal: false,
                showModalCont: false,
                show: false
            }
        },
        methods: {
            closeModal() {
                this.showModalCont = false;
                setTimeout(() => {
                    this.showModal = false
                }, 600)
            },
        },
    }
</script>

<style>
    .aniBox {
        padding: 20px;
    }

    .aniItem {
        border: 1px solid #666666;
        margin-top: 20px;
        padding: 10px;
    }

    .box {
        width: 200px;
        height: 130px;
        background: #008A00;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active {
        animation: fadeInUp .6s ease forwards;
    }

    .fade-leave-active {
        animation: fadeOutDown .6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeOutDown {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }
    }

    .page_modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page_modal_cont {
        width: 300px;
        height: 300px;
        background: white;
        position: relative;
    }

    .close {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
</style>
