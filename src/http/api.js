
import axios from "./http.js"


//登录
const finance_login   = (data)=>{return axios.post('api/sys/login',data)}
//退出
const finance_loginOut = ()=>{ return axios.post('api/sys/logout')}  
//sys/role/queryall获取当前系统的所有角色信息
const finance_departmens = (data)=>{ return axios.get('api/sys/role/queryall',{params:data })}  


//岗位板块权限配置
//sys/role/pageList 系统角色分页列表
const finance_roleList = (data)=>{ return axios.get('api/sys/role/pageList',{params:data })}  
//sys/permission/rolePermission 查询角色拥有的菜单权限   

const finance_rolePermission = (data)=>{ return axios.get('api/sys/permission/rolePermission',{params:data})}    
//sys/permission/updateRolePermission 更新用户拥有的菜单权限
const finance_updateRolePermissionn = (data)=>{ return axios.put('api/sys/permission/updateRolePermission',data)}    




//菜单列表，树形结构
const finance_menuList = ()=>{ return axios.get('api/sys/permission/list')}  
//查询用户拥有的菜单权限和按钮权限
const finance_queryByUser = ()=>{ return axios.get('api/sys/permission/queryByUser')} 
//sys/permission/userPermission 查询用户拥有的菜单权限   
const finance_userPermission = (data)=>{ return axios.get('api/sys/permission/userPermission',{params:data})}    
//sys/permission/updateUserPermission 更新用户拥有的菜单权限
const finance_updateUserPermission = (data)=>{ return axios.put('api/sys/permission/updateUserPermission',data)}    



/*-----员工--------*/
//员工列表
const finance_saffList = (data)=>{ return axios.get('api/sys/user/listUserPage',{params:data })}  
//sys/user/userDepartList 查询指定用户和部门关联的数据
const finance_userDepartList = (data)=>{ return axios.get('api/sys/user/userDepartList',{params:data })}  
//sys/user/add 添加员工
const finance_userAdd = (data)=>{ return axios.post('api/sys/user/add',data)}  
//sys/user/edit 编辑员工信息
const finance_userEdit = (data)=>{ return axios.put('api/sys/user/edit',data)}  


/*---部门---*/
//添加部门
const finance_departmentAdd = (data)=>{ return axios.post('api/sysdepart/sysDepart/add',data)}  
//部门列表 树结构数据格式
const finance_treeList = ()=>{ return axios.get('api/sysdepart/sysDepart/queryTreeList')}  
//部门搜索功能方法,根据关键字模糊搜索相关部门
const finance_searchDepartment = (data)=>{ return axios.get('api/sysdepart/sysDepart/searchBy',{params:data })}  

//查询所有用户所对应的角色信息
const finance_userRole= ()=>{ return axios.get('api/sys/role/list')}  


// 分类配置
//----Catalogue

//  /Catalogue/AddOrUpd 批量新增或修改分类平台信息(flag : 1.新增 2.修改' )
const finance_AddOrUpd= (data)=>{ return axios.post('api/Catalogue/AddOrUpd',data)}   
// Catalogue/selectByPrimaryKey 平台名称,分类名称 模糊查询
const finance_selectByPrimaryKey= (data)=>{ return axios.get('api/Catalogue/selectByPrimaryKey',{params:data })}   
// /Catalogue/export 下载导出excl
const finance_export= (data)=>{ return axios.get('api/Catalogue/export',{params:data })}   
// /Catalogue/delete 批量删除分类平台信息
const finance_delete= (data)=>{ return axios.get('api/Catalogue/delete',{params:data })}   

// /paymentTool 收款工具
//收款工具信息列表
const finance_paymentToolList= (data)=>{ return axios.get('api/paymentTool/list',{params:data })}   
// 批量新增或修改收款工具信息(flag : 1.新增 2.修改' )
const finance_payAddOrUpd= (data)=>{ return axios.post('api/paymentTool/AddOrUpd',data)}   
//收款工具名称模糊查询  平台名称,分类名称 模糊查询
const finance_payselectByPrimaryKey= (data)=>{ return axios.get('api/paymentTool/selectByPrimaryKey',{params:data })} 


//paypalAccount
//paypalAccount/list收款账号列表
const finance_paypalAccountlist= (data)=>{ return axios.get('api/paypalAccount/list',{params:data })}   
//paypalAccount/import 导入PaypalAccount 配置的excel
const finance_paypalAccountImport= (data)=>{ return axios.post('api/paypalAccount/import',data)}   
//paypalAccount/change PaypalAccount 编辑
const finance_editAccount= (data)=>{ return axios.put('api/paypalAccount/editAccount',data)}



//paypalAccount/batchChange 导入PaypalAccount 批量修改的excel



// 汇率配置
//rate/editRateConfig 汇率配置编辑
const finance_rateEditRateConfig=  (data)=>{ return axios.put('api/rate/editRateConfig',data)}   
/// 汇率配置列表 以及根据币种搜索
const finance_rateListConfig=  (data)=>{ return axios.get('api/rate/listConfigRatePage',{params:data })}   
/// 汇率操作日志列表 以及根据币种搜索
const finance_rateListRateLog= (data)=>{ return axios.get('api/rate/listRateLogPage',{params:data })}   
// 币种
const finance_rateListCurrency= (data)=>{ return axios.get('api/rate/listCurrency',{params:data })}   



// /rate/listPreChangeRate 汇率预修改列表 及根据币种查询
const finance_listPreChangeRate= (data)=>{ return axios.get('api/rate/listPreChangeRate',{params:data })}   
// /rate/deleteChangeRate 汇率预修--删除
const finance_deleteChangeRate= (data)=>{ return axios.post('api/rate/deleteChangeRate',data)}   
// /rate/addChangeRate 汇率预修--新增
const finance_addChangeRate= (data)=>{ return axios.post('api/rate/addChangeRate',data)}  



//店铺组别
// 批量新增或修改店铺信息(flag : 1.新增 2.修改 )
const finance_shopAddOrUpd= (data)=>{ return axios.post('api/Shop/AddOrUpd',data)}  
// /Shop/list 店铺信息列表
const finance_shopList= (data)=>{ return axios.get('api/Shop/list',{params:data })}  
//  Shop/selectByPrimaryKey 店铺信息模糊查询
const finance_shopSearch= (data)=>{ return axios.get('api/Shop/selectByPrimaryKey',{params:data})}  

//店铺管理
// 批量新增或修改店铺信息(flag : 1.新增 2.修改 )
const finance_shopgroupAddOrUpd= (data)=>{ return axios.post('api/Shopgroup/AddOrUpd',data)}  
// /Shopgroup/list 店铺组别信息列表
const finance_shopgroupList= (data)=>{ return axios.get('api/Shopgroup/list',{params:data})}  
//  Shopgroup/selectByPrimaryKey 店铺组别模糊查询
const finance_shopgroupSearch= (data)=>{ return axios.get('api/Shopgroup/selectByPrimaryKey',{params:data })}  


//平台
// /Shopgroup/list 平台信息列表
const finance_platformList= (data)=>{ return axios.get('api/Platform/list',{params:data})}  
//Platform/delete 批量删除平台信息
const finance_platformDelete= (data)=>{ return axios.delete('api/Platform/delete',{params:data})}  
//Platform/AddOrUpd 批量新增或修改平台信息(flag : 1.新增 2.修改 )
const finance_platformAddOrUpd= (data)=>{ return axios.post('api/Platform/AddOrUpd',data)}  

//Platform/selectByPrimaryKey 平台名称模糊查询
const finance_platformSearch= (data)=>{ return axios.get('api/Platform/selectByPrimaryKey',{params:data})}  



//部门配置
//Department/Add 批量新增销售部门
const finance_DepartmentAdd= (data)=>{ return axios.post('api/Department/Add',data)}  
//Department/list 销售部门信息列表
const finance_DepartmentList= (data)=>{ return axios.get('api/Department/list',{params:data})}  
//Department/selectByPrimaryKey 销售部门模糊查询
const finance_DepartmentSearch= (data)=>{ return axios.get('api/Department/selectByPrimaryKey',{params:data})}  




// 2期
/*************发货数据配置表**********/

//dailyMargin/configListpage 日进订单毛利配置 分页列表

const finance_configListpage = (data)=>axios.post("api/dailyMargin/configListpage",data)

//dailyMargin/delete 日进毛利配置--删除

const finance_configDelete = (data)=>axios.delete("api/dailyMargin/delete",{data:data})

//dailyMargin/export 日进毛利费率配置下载
const finance_configExport = (data)=>axios.post("api/dailyMargin/export",data)






export {
    
    finance_login,
    finance_loginOut,
    finance_menuList,
    finance_roleList,
    finance_queryByUser,
    finance_userPermission,
    finance_updateUserPermission,
    finance_rolePermission,
    finance_updateRolePermissionn,
    finance_saffList,
    finance_userEdit,
    finance_userAdd,
    finance_userDepartList,
    finance_departmentAdd,
    finance_departmens,
    finance_treeList,
    finance_userRole,
    finance_searchDepartment,
    finance_selectByPrimaryKey,
    finance_export,
    finance_delete,
    finance_AddOrUpd,
    finance_paymentToolList,
    finance_payAddOrUpd,
    finance_payselectByPrimaryKey,
    finance_rateEditRateConfig,
    finance_rateListRateLog,
    finance_rateListConfig,
    finance_deleteChangeRate,
    finance_addChangeRate,
    finance_listPreChangeRate,
    finance_shopList,
    finance_shopSearch,
    finance_shopAddOrUpd,
    finance_shopgroupAddOrUpd,
    finance_shopgroupList,
    finance_shopgroupSearch,
    finance_platformList,
    finance_platformDelete,
    finance_platformAddOrUpd,
    finance_platformSearch,
    finance_DepartmentAdd,
    finance_DepartmentList,
    finance_DepartmentSearch,
    finance_paypalAccountlist,
    finance_paypalAccountImport,
    finance_editAccount,
    finance_rateListCurrency,
    //2-------
    finance_configListpage,
    finance_configDelete,
    finance_configExport

}