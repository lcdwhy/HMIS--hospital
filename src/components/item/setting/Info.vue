<template>
  <div class="info">
      <back-bar content="个人信息"></back-bar>
      <div class="info-content">
          <!-- 头像 -->
          <div class="info-img">
            <div class="block"><el-avatar :size="100" :src="info.circleUrl"></el-avatar></div>
            <el-upload
                name="file"
                class="upload-demo"
                action="/api/admin/info/upload"
                :on-success="handleSuccess"
                :on-error="handleError"
                :show-file-list="false"
                >
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div>
          <!-- 信息内容 -->
          <div class="info-body">
              <div class="username">
                  <span>用户名：{{this.info.username}}</span>
              </div>
              <div class="account">
                  <span>账号：{{this.info.account}}</span>
              </div>
              <div class="email">
                  <span>邮箱：{{this.info.email}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import BackBar from '../../backbar/BackBar'
import {InFoApi} from '../../../request/api'
export default {
     data () {
      return {
          info: {
              username: '',
              account: '',
              email: '',
              circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          },
      }
    },
    components: {
        BackBar
    },
    methods: {
        handleSuccess(response){
            console.log("http://localhost:888"+response.imgUrl)
            this.info.circleUrl = "http://localhost:888"+response.imgUrl
            console.log(this.info.circleUrl)
        },
        handleError(){
            console.log("error")
        },
        async infoQuery(){
            let result =await InFoApi();
            console.log(result)
            let {username, account, email,imgUrl} = result[0];
            let circleUrl = "http://localhost:888"+imgUrl
            this.info = {
                username,
                account,
                email,
                circleUrl
            }
        }
    },
    created(){
        this.infoQuery()
    }
}
</script>

<style >
    .info{
        /* height: 100%; */
    }
    .info-content{
        padding: 50px;
    }
    .info-img{
        display: flex;
        align-self: center;
        padding: 20px;
        
    }
    .upload-demo{
        display:flex;
        align-self: center;
        margin-left: 30px;
    }
    .info-body{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        height: 500px;
        width: 800px;
        margin-top: 20px;
        padding: 30px;
    }
    .info-body div{
        margin: 20px;
    }
</style>