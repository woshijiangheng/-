import wepy from 'wepy'

const baseURL='https://www.zhengzhicheng.cn/api/public/v1'
//Toast的封装
wepy.baseToast = (title='请求失败!',issuccess)=>
 wepy.showToast(   {
        title: title,
        duration: 1500,
        icon: issuccess?'success':'none'
    })


    //wepy.get  函数的封装

    wepy.get = (url,data = {}) =>{
     return  wepy.request({
            url:baseURL + url,
            data
        })
           
    }
