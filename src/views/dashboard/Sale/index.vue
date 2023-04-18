<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="销售额"></el-tab-pane>
        <el-tab-pane label="访问量" name="访问量"></el-tab-pane>
      </el-tabs>
      <div class="right">
        <span>今日</span>
        <span>本周</span>
        <span>本月</span>
        <span>本年</span>

        <el-date-picker
          class="data"
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
        >
        </el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="16">2</el-col>
        <el-col :span="8">2</el-col>
        
      </el-row>
    </div>
  </el-card>
</template>

<script>




export default {
  name: "Sale",
  data() {
    return {
      activeName: "销售额",
      show: false,
    };
  },
};
</script>

<style>
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
  width: 200px;
}
.right span {
  margin: 0px 10px;
}
</style>