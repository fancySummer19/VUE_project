<template>
  <div class="charts" ref="charts"></div>
</template>
  
  <script>
import * as echarts from "echarts";
export default {
  name: "",
  mounted() {
    let lineCharts = echarts.init(this.$refs.charts);
    lineCharts.setOption({
      xAxis: {
        show: false,
        max:100,
        min:0
      },
      yAxis: {
        show: false,
        type: "category",
      },
      series: [
        {
          type: "bar",
          data: [78],
          barWidth:10,
          showBackground: true,
          backgroundStlye: {
            color:'#eee'
          }
        },
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      tooltip: {}
    });
  },
};
</script>
  
  <style>
.charts {
  width: 100%;
  height: 100%;
}
</style>