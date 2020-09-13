<template>
  <div class="userpower">
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
import {Message,MessageBox,} from 'element-ui'
export default {
  data(){
    return{
      a:"sssss"
    }
  },
methods: {
      open() {
         MessageBox.alert('', {
          dangerouslyUseHTMLString: true
        });
    }
  
  }
}
</script>

<style>
  .content-body{
    display: flex;
    flex-direction: column;
    padding:20px;
  }
</style>