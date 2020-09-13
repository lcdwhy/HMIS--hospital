<template>
  <div class="side-bar">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="active"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <!-- 首页 -->
          <router-link to="/home/fristpage">
              <el-menu-item index="fristpage">
              <i class="el-icon-user-solid"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>


          <!-- 用户管理 -->
          <el-submenu index="users"> 
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/home/userlist">
                  <el-menu-item index="userlist"><i class="el-icon-s-check"></i>用户列表</el-menu-item>
                </router-link>
                
                <router-link to="/home/userrole">
                  <el-menu-item index="userrole"><i class="el-icon-price-tag"></i>角色管理</el-menu-item>
                </router-link>
                
                <router-link to="/home/userpower">
                   <el-menu-item index="userpower"><i class="el-icon-price-tag"></i>权限管理</el-menu-item>
                </router-link>
            
            </el-menu-item-group>
          </el-submenu>


          
          

          <!-- 医生管理 -->
          <router-link to="/home/doctors">
            <el-menu-item index="doctors" >
              <i class="el-icon-user"></i>
              <span slot="title">医生管理</span>
            </el-menu-item>
          </router-link>
          

          <!-- 病人管理 -->
          <el-submenu index="diagnosis"> 
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>诊断管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/home/patients">
                  <el-menu-item index="articlelist"><i class="el-icon-s-check"></i>病人列表</el-menu-item>
                </router-link>
                <router-link to="/home/diagnosistable">
                  <el-menu-item index="addarticle"><i class="el-icon-price-tag"></i>挂号管理</el-menu-item>
                </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- 药品管理 -->
          <router-link to="/home/durgs">
            <el-menu-item index="durgs">
              <i class="el-icon-s-custom"></i>
              <span slot="title">药品管理</span>
            </el-menu-item>
          </router-link>
          

          <!-- 文章管理 -->
          <el-submenu index="articles"> 
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
                <router-link to="/home/articlelist">
                  <el-menu-item index="articlelist"><i class="el-icon-s-check"></i>文章列表</el-menu-item>
                </router-link>
                
                <router-link to="/home/addarticle">
                  <el-menu-item index="addarticle"><i class="el-icon-price-tag"></i>发布文章</el-menu-item>
                </router-link>
            </el-menu-item-group>
          </el-submenu>

          
          <!-- 设置 -->
          <el-submenu index="info">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/info">
                <el-menu-item index="info"><i class="el-icon-s-check"></i>个人信息</el-menu-item>
              </router-link>
              
              <router-link to="/home/changepassword">
                <el-menu-item index="changepassword"><i class="el-icon-price-tag"></i>修改密码</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- 关于 -->
          <router-link to='/home/about'>
          <el-menu-item index="about">
            <i class="el-icon-coin"></i>
            <span slot="title">关于</span>
          </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'sidebar',
    data(){
      return {
        active:'users'
      }
    },
    methods: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){
      let arr = this.$route.path.split('/')
      this.active = arr[arr.length-1]
    }
}
</script>

<style scoped>
.side-bar{
  width: 205px;
}
.el-row{
  height: 100%;
}
.el-col{
  width:100%;
  height: 100%;
}
.el-menu{
  height: 100%;
}

</style>