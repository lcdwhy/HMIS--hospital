<template>
    <div class="err404">
        <img src="../../assets/images/4040.jpg" alt="">
        <h4>您访问的页面不见了！</h4>
        <h5>
            <button class="go-home" @click="goHome">去首页</button>
        </h5>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goHome() {
                this.$router.push('/home/fristpage')
            }
        }
    }
</script>

<style>
   .err404{
       display:flex;
       flex-direction: column;
       height: 100%;
       width: 100%;
       justify-content: center;
       align-items: center;
   }

    .err404 img{
        width: 350px;
        height: 350px;
    }
    .err404 h4 {
        font-size: 24px;
        color: #191919;
        padding-bottom: 16px
    }

    .err404 .go-home {
        width: 130px;
        height: 38px;
        background: #c9141d;
        line-height: 38px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        display: inline-block;
        border-radius: 5px
    }
</style>