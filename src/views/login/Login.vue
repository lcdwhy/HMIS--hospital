<template>
  <div class="login-container">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-form">
          <h3>客户管理系统</h3>
          <el-form-item  prop="account" >
            <el-input type="text"  v-model="ruleForm.account" autocomplete="off" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item  prop="pwd">
              <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
           <el-form-item class="btn-1">
              <el-button type="primary" @click="LoginFn" @keyup.enter="LoginFn">登录</el-button>
           </el-form-item>
           <el-form-item class="btn-2">
              <el-button @click="GoRegister">注册</el-button>
           </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {LoginApi} from '../../request/api'
import axios from 'axios'
export default {
    name: 'Login',
    data(){
      return{
          ruleForm:{},
          rules:{
            account: [{ required: true, message: "请输入账号", trigger: "blur"}],
            pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
          }
        }
    },
    methods:{
       LoginFn() {
        this.$refs.ruleForm.validate(async valid => {
          if(valid){
            let res =await LoginApi({
              username: this.ruleForm.account,
              password: this.ruleForm.pwd
            })
            console.log(res)
             if(res.code == 400 && res.data == "登录失败"){
                alert("请输入正确的账号和密码！")
              }else if(res.code ==200){
                let token = res.data.token;
                let username = res.data.username;
                this.$store.commit("AddAccount",{token,username})
                this.$router.push('/')
              }
          }else{
            alert("有未输入项！")
          }
        })
        
      },
      // 跳转到注册页面
      GoRegister() {
        this.$router.push('/register')
      }
    }
}
</script>
<style >
.login-container .el-input__inner{
  border-radius: 20px;
  width: 300px;
  background-color:rgba(0,0, 0, 0.7);
}
</style>
<style scoped>
.login-container{
  height: 100%;
  width: 100%;
  /* background: linear-gradient(to right,#feac5e,#c779d0,#4bc0c8); */
  background-image: url(../../assets/images/login1.jpg);
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form{
  width:450px;
  height: 300px;
}


.el-button{
  background-color: rgb(255, 255, 255, 0.3);
  width: 200px;
  height: 35px;
  border-radius: 20px;
  border-color: rgb(221, 130, 69);
  color: #000;
  margin-left: 50px;
}
.btn-1{
  margin-top: 50px;
  margin-bottom: 10px;
}
.el-form-item{
  margin-left: 10px;
}
h3{
  text-align: center;
  padding: 15px;
  font-size: 35px;
  color: #fff;
  letter-spacing: 8px;
  margin-left: 100px;
  margin-bottom: 20px;
}
</style>