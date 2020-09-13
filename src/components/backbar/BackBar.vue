<template>
  <div class="backbar">
      <el-page-header @back="goBack" :content="content"></el-page-header>
      <el-divider></el-divider>
  </div>
</template>

<script>
export default {
    name: 'backbar',
    props: {
        content: {
            type: String,
            default: '子菜单项'
        }
    },
    methods: {
    goBack() {
            if (window.history.length <= 1) {
                this.$router.push({path:'/'})
                return false
            } else {
                this.$router.go(-1)
            }
        }
  }
}
</script>

<style>
.el-page-header{
    padding: 8px;
}
.el-page-header__content{
    font-size: 15px;
}
.el-divider--horizontal{
    margin:  0;
}
</style>