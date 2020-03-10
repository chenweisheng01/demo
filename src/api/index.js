import ajax from './ajax';

const BASE_URL = 'http://d.apicloud.com/mcm';

export const reqSupportArea = () => ajax(BASE_URL+'/api/supportArea')

export const reqFoodList = (filter) => ajax(BASE_URL + '/api/ware',filter)
//获取水果图片
export const reqFruitsImage = () => ajax('/fruits')