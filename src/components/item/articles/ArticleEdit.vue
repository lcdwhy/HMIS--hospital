<template>
  <div class="articleedit">
      articledit
      <el-card>
          <div id="main" style="width:600px;height:400px"></div>
      </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    data(){
        return {
            options: {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {data: ["销量"]},
            xAxis: {
                data: ['衬衫', '羊毛衫','雪衬衫','裤子','高跟鞋','袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5,20,36,10,10,20]
                }
            ]
        }
        }
    },
    created(){
        console.log(this.$route.params.article)
    },
    mounted() {
        let myChart = echarts.init(document.getElementById("main"))
        
        myChart.setOption(this.options)
    }
}
</script>

<style>

</style>