import axios from 'axios';

export default (url,data={},type='GET') => new Promise((resolve,reject) => {
    let promise;
    let instance = axios.create({
        timeout: 6000,
        headers: {
            'X-APICloud-AppId': 'A6914327011091',
            'X-APICloud-AppKey': '8ac17d22e49cb7982d82796097cec52a6c7cd01d.1475375422841'
        }
    })

    if(type === 'GET'){
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '='+ data[key] + '&' 
        })

        if(dataStr !== ''){
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        promise = instance.get(url)
    }else{
        promise = instance.post(url,data)
    }

    promise.then( res => {
        resolve(res.data)
        console.log(res.data)
    }).catch(error => {
        reject(error)
    })

})