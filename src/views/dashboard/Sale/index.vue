<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visit"></el-tab-pane>
      </el-tabs>
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span>本月</span>
        <span>本年</span>

        <el-date-picker
          v-model="data"
          class="data"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="24"><div class="charts" ref="charts"></div></el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import dayjs from 'dayjs'

export default {
  name: "Sale",
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      data: [],
    };
  },
  mounted() {
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
      title: {
        text: "销售额趋势",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220, 100, 200, 11, 230, 223],
        },
      ],
    });
  },
  computed: {
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
  },
  watch: {
    title() {
      this.mycharts.setOption({
        title: {
          text: this.title,
        },
      });
    },
  },
  methods:{
    setDay(){
        const day = dayjs().format('YYYY-MM-DD')
        this.data = [day,day]
    },
    setWeek(){
        const start = dayjs().day(1).format('YYYY-MM-DD')
        const end = dayjs().day(7).format('YYYY-MM-DD')
        this.data = [start,end]
    }
  }
};
</script>

<style scoped>
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}

.data {
  margin: 0px 20px;
  width: 300px;
}
.right span {
  margin: 0px 10px;
}
.charts {
  width: 100%;
  height: 300px;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
}
ul li {
  height: 8%;
}
</style>