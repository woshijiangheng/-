import wepy from 'wepy'

export default class extends wepy.mixin{
    onLoad(){
        //获取列表数据
        this.list()
    }
    methods = {};

    data = {
        //列表
       list:[],
       a:1
    };
   
   async list(){
       let{data} = await wepy.get('/categories')
       console.log(data);
       
   }
}