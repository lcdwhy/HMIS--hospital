<template>
  <div class="userlist">
      <back-bar content="用户列表"></back-bar>
      <div class="list-content">
        <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">

        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
          prop="register_time"
          label="日期"
          width="120">
        </el-table-column>

        <el-table-column
          prop="username"
          label="姓名"
          width="120">
        </el-table-column>

        <el-table-column
          prop="account"
          label="账号"
          width="120">
        </el-table-column>

        <el-table-column
          prop="password"
          label="密码"
          width="120">
        </el-table-column>

        <el-table-column
          prop="sex"
          label="性别"
          width="120">
        </el-table-column>

        <el-table-column
          prop="email"
          label="邮箱"
          width="180">
        </el-table-column>

        <el-table-column
          prop="phonenumber"
          label="电话号码"
          width="120">
        </el-table-column>

        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>

        <el-table-column
          prop="rolename"
          label="用户等级"
          width="120">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection(tableData)">反选</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button @click="toggleDelete" type="danger">删除</el-button>
      </div>
      </div>

      <div class="list-footer">
        <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        
        :page-size="6">
        </el-pagination>
      </div>

  </div>
</template>

<script>
import BackBar from '../../backbar/BackBar'
import {UserListApi, UserDeleteApi} from '../../../request/api'
import { MessageBox, Message } from 'element-ui';
export default {
    inject:["reload"],
    components:{
      BackBar
    },
   data() {
      return {
        // 用户的详细信息
        tableData: [],
        // 保存被选中的用户项
        multipleSelection: [],
        // 默认第一页
        currentPage:1,
        // 默认的页面数
        total:0
      }
    },

    methods: {
      //全选按钮
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          // 取消选择
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 删除选中的用户
      toggleDelete(){
        let multipleSelection = this.multipleSelection;
        //确认删除？
         MessageBox.confirm('是否确定要删除选中的用户？', '确认删除', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '放弃删除'
        })
          .then(async () => {
            if(multipleSelection.length ==0){
              Message({
              type: 'info',
              message: "请勾选再操作"
            });
            }else{
              var result =await this.deleteUser(multipleSelection);
              Message({
              type: 'info',
              message: result
            });
            //刷新页面
            this.reload();
            } 
          }).catch(action => {
            Message({
              type: 'info',
              message: action === 'cancel'
                ? '取消删除'
                : '取消操作'
            })
          });
          
          
      },
      // 编辑按钮
      handleEdit(index, row) {
        console.log(index, row)
        this.$router.push({name: 'useredit',params:{user:row}})
      },
      // 删除按钮
      handleDelete(index, row) {
        var username = row.username;
         MessageBox.confirm('是否确定要删除该用户账号？', '确认删除', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '放弃删除'
        })
          .then(async () => {
            var result =await this.deleteUser(username);
            Message({
              type: 'info',
              message: result
            });
            this.reload();
          })
          .catch(action => {
            Message({
              type: 'info',
              message: action === 'cancel'
                ? '取消删除'
                : '取消操作'
            })
          });
        
       
      },
      // 分页
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.handleUserList(val)
      },

      // 请求第page页的用户列表信息的方法
      async handleUserList(page){
       let result = await UserListApi({page});
       this.total = result.total
       this.tableData = result.tableData
      },
      // 删除指定的用户
      async deleteUser(val){
      let result =await UserDeleteApi({val})
      return result
      }
    },
    created(){
      // 组件创建时默认请求第一页的用户信息
      this.handleUserList(1)
    }
}
</script>

<style scoped>
  .userlist{
    display: flex;
    flex-direction: column;
  }
  .list-content{
    margin: 20px;
    padding:20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .5), 0 0 6px rgba(0, 0, 0, .07);
    /* background: black; */
  }
  .list-footer{
    /* background: chartreuse; */
    padding: 20px;
    display: flex;
    justify-content: center;
  }
</style>