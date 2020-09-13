<template>
  <div class="change">
      <back-bar content="修改密码"></back-bar>
        <div class="change-content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="新密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
import BackBar from '../../backbar/BackBar'
import {ChangeApi} from '../../../request/api'
import { MessageBox, Message } from 'element-ui';
export default {
    data() {
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
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    components: {
      BackBar
    },
    methods: {
         submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {

            MessageBox.confirm('是否确定修改密码？', '确认修改', {
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
            cancelButtonText: '放弃修改'
            })
            .then(async () => {
              let newpassword = this.ruleForm.pass;
              console.log(newpassword)
              let result = await ChangeApi({password:newpassword});
              this.$refs[formName].resetFields();
              Message({
                type: 'info',
                message: result
              });
              
            })
            .catch(action => {
              Message({
                type: 'info',
                message: action === 'cancel'
                  ? '取消修改'
                  : '取消操作'
              })
            });


            






          } else {
            console.log('error submit!!');
            return false;
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
    .change{
        height: 100%;
        width: 100%;
    }
    .change-content{
        height: 100%;
        width: 100%;
    }
    .el-form{
        padding: 20px;
        height: 300px;
        width: 600px;
    }
</style>