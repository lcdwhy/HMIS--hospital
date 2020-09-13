<template>
  <div class="addarticle">
      <back-bar content="文章发布"></back-bar>
      <div class="container">
        <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>
      </div>
      
  </div>
</template>

<script>
import BackBar from '../../backbar/BackBar'
import EditorBar from '../../editor/EditorBar'
export default {
  components:{
    EditorBar,
    BackBar
  },
  data() {
      return {
        isClear: false,
        detail:""
        }
      },  
methods: {
  change(val) {
      console.log(val)
      
    },
 }
}
</script>

<style>
.container{
  padding: 20px;
}
</style>