import request from '@/utils/request'

//获取SPU列表
export const reqSpuList = (page,limit,category3Id) => request({url:`/admin/product/${page}/${limit}`,method:'get',params:{category3Id}})

//获取spu信息
export const reqSpu = (spuId) => request({url:`/admin/product/getSpuById/${spuId}`,method:'get'})

//获取品牌的信息
export const reqTradeMarkList = () => request({url:`/admin/product/baseTrademark/getTrademarkList`,method:'get'})

//获取图标
export const reqSpuImageList = (spuId) => request({url:`/admin/product/spuImageList/${spuId}`,method:'get'})

//所有的销售属性
export const reqBaseSaleAttrList = () => request({url:'/admin/product/baseSaleAttrList',method:'get'})