<template>
  <div class="register-container">

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
        <h3>用户注册页面</h3>
        <el-form-item label="用户名" prop="username">
            <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="账号" prop="account">
            <el-input  v-model="ruleForm.account" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item class="btn-container">
            <el-button type="primary" @click="submitForm">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {RegisterApi} from '../../request/api'
export default {
 data() {
      var checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }
        let checkEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        if(!checkEmail.test(value)){
            console.log(value)
            callback(new Error('不符合邮箱格式'));
        }else{
            callback();
        }
        
      };
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkUserName');
          }
          callback();
        }
      };
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkAccount');
          }
          callback();
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          account:'',
          password: '',
          checkPass: '',
          email: ''
        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          account: [
            { validator: validateAccount, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
       submitForm() {
        this.$refs.ruleForm.validate(async valid => {
          if (valid) {
            let result =await RegisterApi({...this.ruleForm})
            if(result == "账号已存在"){
              alert(result)
            }else if(result == "注册成功"){
              alert("注册成功！")
              this.$router.push('/login')
            }
          } else {
             alert("有未输入项！")
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
h3{
  text-align: center;
  font-size: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
}
.register-container{
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgb(41, 18, 124), rgb(182, 32, 32));
    display:flex;
    justify-content: center;
    align-items: center;
}
.demo-ruleForm{
    border-radius: 20px;
    height: 500px;  
    width: 500px;
    background: rgba(0, 0, 0, 0.7);
    padding: 50px 60px 20px 20px;
}
.btn-container{
  display:flex;
  justify-content:space-between;
}


</style>