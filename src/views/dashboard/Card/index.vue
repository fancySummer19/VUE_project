<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="销售总额" count="$666">
            <template slot="charts">
              <span
                >周同比&nbsp;&nbsp;56.67%<i class="el-icon-caret-top"></i
              ></span>
              <span
                >日同比&nbsp;&nbsp;15.97%<i class="el-icon-caret-bottom"></i
              ></span>
            </template>
            <template slot="footer">
              <span>日销售额 $2222</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="8848">
            <template slot="charts">
                <LineCharts></LineCharts>
            </template>
            <template slot="footer">
              <span>日访问量 22422</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="345">
            <template slot="charts">
                <barCharts/>
            </template>
            <template slot="footer">
              <span>转换率 70%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="50%" >
            <template slot="charts">
                <progressCharts/>
            </template>
            <template slot="footer">
              <span
                >周同比&nbsp;&nbsp;56.67%<i class="el-icon-caret-top"></i
              ></span>
              <span
                >日同比&nbsp;&nbsp;15.97%<i class="el-icon-caret-bottom"></i
              ></span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import LineCharts from './lineChart'
import barCharts from './barChart'
import progressCharts from './progressCharts'

export default {
  name: "Cart",
  components: {
    Detail,
    LineCharts,
    barCharts,
    progressCharts
  },
};
</script>

<style>
.el-icon-caret-top {
  color: green;
}
.el-icon-caret-bottom {
  color: red;
}
</style>