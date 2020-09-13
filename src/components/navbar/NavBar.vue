<template>
  <div>
      <el-menu
        class="el-menu-demo"
        background-color="#222c1c"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1">后台管理系统</el-menu-item>
        <div class="menu-center">
            <el-menu-item index="2">菜单</el-menu-item>
            <el-menu-item index="3" >新增</el-menu-item>
        </div>
        <el-menu-item index="4" >

          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="info">个人信息</el-dropdown-item>
              <el-dropdown-item command="changepassword">修改密码</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-menu-item>
        <el-menu-item index="5">前台首页</el-menu-item>
        </el-menu>
  </div>
</template>

<script>
import {LoginOutApi} from '../../request/api'
export default {
    name: "navbar",
    data() {
      return {
        
      };
    },
    methods: {
      async handleCommand(command) {
        if(command == 'loginout'){
          //清除用户信息并退出
          let result = await LoginOutApi();
          alert(result);
          this.$router.push('/login');
        }
          // 修改密码
        if(command == 'changepassword'){
          this.$router.push('/home/changepassword')
        }
        // 个人信息
        if(command == 'info'){
          this.$router.push('/home/info')
        }
      },
          
      
    },
}
</script>

<style scoped>
  .el-menu-demo{
    display:flex;
    justify-content: space-around;
  }
  .menu-center{
      flex-grow: 1;
      display: flex;
      justify-content: left;
  }


  /* 用户个人信息样式 */
  .el-dropdown-link {
    cursor: pointer;
    color:#fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>