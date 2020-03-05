import ajax from './ajax';

const BASE_URL = 'http://d.apicloud.com/mcm';

export const reqSupportArea = () => ajax(BASE_URL+'/api/supportArea')

