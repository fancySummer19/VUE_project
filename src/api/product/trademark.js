///admin/product/baseTrademark/{page}/{limit}
import request from '@/utils/request'

//获取品牌列表接口
export const reqTradeMarkList = (page,limit) => request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'})

//处理添加品牌/admin/product/baseTrademark/save
//修改品牌的地址/admin/product/baseTrademark/update
export const reqAddOrUpdateTradeMArk = (tradeMArk)=>{
    if(tradeMArk.id){
        return request({url:'/admin/product/baseTrademark/update',method:'put',data:tradeMArk})
    }else {
        return request({url:'/admin/product/baseTrademark/save',method:'post',data:tradeMArk})
    }
}
