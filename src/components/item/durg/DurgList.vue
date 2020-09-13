<template>
  <div class="durglist">
      <back-bar content="药品列表"></back-bar>
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
          prop="durgname"
          label="药品名称"
          width="150">
        </el-table-column>

        <el-table-column
          prop="price"
          label="价格/元"
          width="150">
        </el-table-column>

        <el-table-column
          prop="inventory"
          label="库存"
          width="150">
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
import {DurgListApi, DurgDeleteApi} from '../../../request/api'
import { MessageBox, Message } from 'element-ui';
export default {
    inject:["reload"],
    components:{
      BackBar
    },
   data() {
      return {
        // 药品的详细信息
        tableData: [],
        // 保存被选中的药品项
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
      // 删除选中的药品
      toggleDelete(){
        let multipleSelection = this.multipleSelection;
        //确认删除？
         MessageBox.confirm('是否确定要删除选中药品？', '确认删除', {
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
              var result =await this.deleteDurg(multipleSelection);
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
        this.$router.push({name: 'durgedit',params:{durg:row}})
      },
      // 删除按钮
      handleDelete(index, row) {
        var durgname = row.durgname;
         MessageBox.confirm('是否确定要删除该药品？', '确认删除', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '放弃删除'
        })
          .then(async () => {
            var result =await this.deleteDurg(durgname);
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
        this.handleDurgList(val)
      },

      // 请求第page页的药品列表信息的方法
      async handleDurgList(page){
       let result = await DurgListApi({page});
       this.total = result.total;
       this.tableData = result.tableData;
      },
      // 删除指定的药品项
      async deleteDurg(val){
      let result =await DurgDeleteApi({val})
      return result
      }
    },
    created(){
      // 组件创建时默认请求第一页的药品信息
      this.handleDurgList(1);
    }
}
</script>

<style scoped>
  .durglist{
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