<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail :title="销售总额"/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail :title="访问量"/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail :title="支付笔数"/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail :title="运营活动效果"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
export default {
  name: "Cart",
  components: {
    Detail,
  },
};
</script>

<style>
</style>