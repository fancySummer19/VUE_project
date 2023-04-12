<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称"> BOB </el-form-item>
      <el-form-item label="SKU名称">
        <el-input placeholder="SKU名称"></el-input>
      </el-form-item>
      <el-form-item label="价格（元）">
        <el-input placeholder="价格（元）"></el-input>
      </el-form-item>
      <el-form-item label="重量(千克)">
        <el-input placeholder="重量(千克)"></el-input>
      </el-form-item>
      <el-form-item label="价格描述">
        <el-input type="textarea" rows="4"></el-input>
      </el-form-item>
      <el-form-item label="平台属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-select value="" placeholder="请选择">
            <el-option label="lable" value=""> </el-option>
          </el-select>
        </el-form>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-select value="" placeholder="请选择">
            <el-option label="lable" value=""> </el-option>
          </el-select>
        </el-form>
      </el-form-item>
      <el-form-item label="图片列表">
        <el-table style="width: 100%" border="">
          <el-table-column type="selection " prop="prop" label="label" width="80">
          </el-table-column>
          <el-table-column prop="prop" label="图片" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'Sku',
  data() {
    return {
      spuImageList:[],
      spuSaleAttrList:[],
      attrInfoList:[]
    }
  },
  methods:{
    async getData(category1Id,category2Id,spu){
      let result = await this.$API.sku.reqSpuImageList(spu.id)
      if(result.code == 200){
        this.spuImageList = result.data
      }

      let result1 = await this.$API.sku.reqSpuSaleAttrList(spu.id)
      if(result1.code == 200){
        this.spuSaleAttrList = result1.data
      }
    

    let result2 = await this.$API.sku.reqAttrInfoList(category1Id,category2Id,spu.category3Id)
    console.log(result2);
      if(result2.code == 200){
        this.attrInfoList = result2.data
      }
    }
  
    
  }
};
</script>

<style>
</style>