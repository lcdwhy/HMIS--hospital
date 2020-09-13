<template>
  <div class="useredit">
      <edit fristMenu="用户管理" secondMenu="用户编辑"></edit>
      <div class="edit-content">
          <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="账号" prop="account">
                    <el-input v-model="ruleForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input  type="password" v-model.number="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-input v-model.number="ruleForm.sex"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model.number="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="phonenumber">
                    <el-input v-model.number="ruleForm.phonenumber"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model.number="ruleForm.address"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm">修改提交</el-button>
                </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import Edit from "../../../backbar/Edit"
import {UserEditApi} from '../../../../request/api'
import {MessageBox, Message} from 'element-ui'
export default {
    data(){
        return{
          ruleForm: {
              username: '',
              acount: '',
              password: '',
              sex: '',
              email: '',
              phonenumber: '',
              address: '',
              bakname: ''
          }
        }
    },
    components: {
        Edit
    },
    methods: {
        async submitForm() {
            let ruleForm = this.ruleForm;
             MessageBox.confirm('是否确定要修改该用户账号？', '确认修改', {
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
            cancelButtonText: '放弃修改'
            })
            .then(async () => {
                var result = await UserEditApi({ruleForm});
                Message({
                type: 'info',
                message: result
                });
                this.$router.go(-1);
            })
           
           
        },
    },
    created(){
        let {username,account,password,sex,email,phonenumber,address} = this.$route.params.user;
        let bakname = username;
        this.ruleForm = {
            username,account,password,sex,email,phonenumber,address,bakname
        }
    }
}
</script>

<style >
.edit-content{
    height: 700px;
    width: 700px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 50px;
   
}
</style>