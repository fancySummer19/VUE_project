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
        type: "category",
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [15, 20, 5, 10, 20, 28],
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