import wepy from 'wepy'
export default class extends wepy.mixin {
   
    methods = {
        goto:(url)=>{
            console.log(url);
            wepy.navigateTo({
                url:url
            })
        }
    }
    data = {
        //轮播图
        swiperList: [],
        // 获取分类数据
        cateList: [],
        //获取楼层数据
        floolList:[]
    }
    onLoad() {
        //获取轮播图
        this.getSwiperList()
        //获取分类数据
        this.getCateList()
        //获取楼层
        this.getFlooerList()
    }
    //获取轮播图
    async getSwiperList() {
        let { data } = await wepy.get('/home/swiperdata')
      
        console.log(data)
        if (data.meta.status !== 200) {
           
            return wepy.baseToast('轮播图请求失败')
        }
        this.swiperList = data.message

        this.$apply()
    }
    //获取分类数据
    async getCateList() {
        let { data } = await wepy.get('/home/catitems')
        console.log(data)
        if (data.meta.status !== 200) {
            wepy.showToast({
                title: '请求失败',
                duration: 1500,
                icon: 'none'
            })
            return
        }
        this.cateList = data.message

        this.$apply()
    }
    // 获取楼层数据
    async getFlooerList() {
        let { data } = await wepy.get('/home/floordata')
        console.log(data)
        if (data.meta.status !== 200) {
            wepy.showToast({
                title: '请求失败',
                duration: 1500,
                icon: 'none'
            })
            return
        }
        this.floolList = data.message

        this.$apply()
    }
}