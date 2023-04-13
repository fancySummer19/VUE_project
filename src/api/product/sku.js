import request from '@/utils/request'

export const reqSkuList = (page,limit)=>request({url:`/admin/product/list/${page}/${limit}`,method:'get'})

//上架与下架
export const reqSale = (skuId)=>request({url:`/admin/product/onSale/${skuId}`,method:'get'})
export const reqCancel = (skuId)=>request({url:`/admin/product/cancelSale/${skuId}`,method:'get'})

//sku详情
export const reqSkuById = (skuId) => request({url:`/admin/product/getSkuById/${skuId}`,method:'get'})
