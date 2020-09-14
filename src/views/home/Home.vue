<template>
  <div class="meun-main">
    <nav-bar/>
    <div class="meun-container">
      <side-bar/>
      <div class="content">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {AdminApi} from '../../request/api'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
export default {
    name: 'Home',
    data(){
      return{
        isRouterAlive:true
      }
    },
    provide(){
      return{
        reload:this.reload
      }
    },
    components:{
      NavBar,
      SideBar
    },
    methods:{
      reload(){
        this.isRouterAlive = false;
        this.$nextTick(function(){
          this.isRouterAlive = true;
        })
      },
     async btn(){
      //  let result =  await AdminApi();
      //  console.log(result)
      //  if(result == "未登录"){
      //    alert("用户未登录，请先登录!")
      //    this.$router.push('/login')
      //  }else{
      //    console.log("登录成功！")
      //  }
      },
    },
    created(){
      this.btn()
    }
}
</script>

<style scoped>
  .meun-main{
    height: 100%;
    display:flex;
    flex-direction: column;
  }
  .meun-container{
    display:flex;
    width:100%;
    flex-grow: 1;
  }
  .content{
    /* background: black; */
    flex-grow: 1;
  }
</style>