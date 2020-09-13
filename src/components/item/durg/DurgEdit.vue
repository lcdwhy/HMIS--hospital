<template>
  <div class="useredit">
      <edit fristMenu="药品管理" secondMenu="药品编辑"></edit>
      <div class="edit-content">
          <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="药品名称" prop="durgname">
                    <el-input v-model="ruleForm.durgname" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="价格/元" prop="price">
                    <el-input v-model.number="ruleForm.price" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="库存" prop="inventory">
                    <el-input  v-model.number="ruleForm.inventory"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">修改提交</el-button>
                </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import Edit from "../../backbar/Edit"
import {DurgEditApi} from '../../../request/api'
import {MessageBox, Message} from 'element-ui'
export default {
    name: 'doctoredit',
    data(){
        return{
          ruleForm: {
              durgname: '',
              price: '',
              inventory: '',
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
             MessageBox.confirm('是否确定要修改该药品信息？', '确认修改', {
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
            cancelButtonText: '放弃修改'
            })
            .then(async () => {
                var result = await DurgEditApi({ruleForm});
                Message({
                type: 'info',
                message: result
                });
                this.$router.go(-1);
            })
           
           
        },
    },
    created(){
        let {durgname,price,inventory} = this.$route.params.durg;
        let bakname = durgname;
        this.ruleForm = {
            durgname,price,inventory,bakname
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