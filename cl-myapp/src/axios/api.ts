//接口列表
/**   
 * api接口统一管理
 */
import { get, post } from './http'
export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p); //示例