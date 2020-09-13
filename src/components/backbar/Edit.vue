<template>
  <div class="eidt">
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <div @click="goBack" class="back">
               <el-page-header ></el-page-header>
          </div>
          <div class="menucontent">
              <el-breadcrumb-item>{{fristMenu}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{secondMenu}}</el-breadcrumb-item>
          </div>
    </el-breadcrumb>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
    props:{
        fristMenu: {
            type:String,
            default: "第一菜单"
        },
        secondMenu: {
            type:String,
            default: "第二菜单"
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
    padding: 10px 10xp 10px 10px;
}
.el-breadcrumb{
    font-size: 15px;
    /* padding: 13px; */
    display:flex;
    
}
.el-divider{
    margin:0;
}
.menucontent{
    padding: 10px 10px 10px 0;
}
</style>