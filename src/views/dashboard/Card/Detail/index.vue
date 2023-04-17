<template>
  <div>
    <div class="card-header">
        <span>{{title}}</span>
        <i class="el-icon-info"></i>
    </div>
    <div class="card-content">12306</div>
    <div class="card-charts">
        <slot name="cahrts">
        </slot>
    </div>
    <div class="card-footer">
        <slot name="footer">

        </slot>
    </div>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props:['title']
}
</script>

<style>
    .card-header {
        display: flex;
        justify-content: space-between;
        color: silver;
    }
    .card-content {
        font-size: 30px;
        padding: 10px 0;
    }
    .card-charts {
        height: 50px;
    }
    .card-footer {
        border-top: 1px solid #eee;
    }
</style>