// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击的左侧的菜单
    currentIndex:5,
    show:false,
    //垃圾数据
    GarbageData:[
      {
        id:0,
        name:'手机电池',
        image:'/static/有害垃圾/手机电池.png',
        detal:'无汞干电池为其它垃圾'
      },
      {
        id:0,
        name:'铅蓄电池',
        image:'/static/有害垃圾/铅蓄电池.png'
        ,detal:'同为有害电池：镉镍电池，氧化汞电池'
      },
      {
        id:0,
        name:'纽扣电池',
        image:'/static/有害垃圾/纽扣电池.png'
        ,detal:'空'
      },      {
        id:0,
        name:'灯管',
        image:'/static/有害垃圾/灯管.png'
        ,detal:'空'
      },      {
        id:0,
        name:'灯泡',
        image:'/static/有害垃圾/灯泡.png'
        ,detal:'aaaaaaa'
      },      {
        id:0,
        name:'硒鼓',
        image:'/static/有害垃圾/硒鼓.png'
        ,detal:'空'
      },      {
        id:0,
        name:'墨盒',
        image:'/static/有害垃圾/墨盒.png'
        ,detal:'空'
      },      {
        id:0,
        name:'水银体温计',
        image:'/static/有害垃圾/水银体温计.png'
        ,detal:'空'
      },      {
        id:0,
        name:'废胶片相纸',
        image:'/static/有害垃圾/废胶片相纸.png'
        ,detal:'空'
      },      {
        id:0,
        name:'染发剂壳',
        image:'/static/有害垃圾/染发剂壳.png'
        ,detal:'空'
      },     {
        id:0,
        name:'废旧笔芯',
        image:'/static/有害垃圾/废旧笔芯.png'
        ,detal:'空'
      },     {
        id:0,
        name:'过期药品',
        image:'/static/有害垃圾/过期药品.png'
        ,detal:'空'
      },     {
        id:0,
        name:'指甲油',
        image:'/static/有害垃圾/指甲油.png'
        ,detal:'空'
      },     {
        id:0,
        name:'油漆桶',
        image:'/static/有害垃圾/油漆桶.png'
        ,detal:'空'
      },     {
        id:0,
        name:'X光片',
        image:'/static/有害垃圾/X光片.png'
        ,detal:'空'
      },     {
        id:0,
        name:'废膏药',
        image:'/static/有害垃圾/废膏药.png'
        ,detal:'空'
      },     {
        id:0,
        name:'杀虫剂',
        image:'/static/有害垃圾/杀虫剂.png'
        ,detal:'空'
      },     {
        id:0,
        name:'消毒剂',
        image:'/static/有害垃圾/消毒剂.png'
        ,detal:'由于消毒剂瓶多为PE塑料包装，空消毒剂瓶也属于有害垃圾哦！'
      },
      //厨余垃圾
      {
        id:1,
        name:'宠物饲料',
        image:'/static/厨余垃圾/宠物饲料.png'
        ,detal:'空'
      },{
        id:1,
        name:'茶叶渣',
        image:'/static/厨余垃圾/茶叶渣.png'
        ,detal:'空'
      },{
        id:1,
        name:'中药药渣',
        image:'/static/厨余垃圾/中药药渣.png'
        ,detal:'空'
      },
      {
        id:1,
        name:'剩米饭',
        image:'/static/厨余垃圾/剩米饭.png'
        ,detal:'空'
      },{
        id:1,
        name:'菜叶',
        image:'/static/厨余垃圾/菜叶.png'
        ,detal:'空'
      },{
        id:1,
        name:'水果皮',
        image:'/static/厨余垃圾/水果皮.png'
        ,detal:'空'
      },{
        id:1,
        name:'豆渣',
        image:'/static/厨余垃圾/豆渣.png'
        ,detal:'空'
      },{
        id:1,
        name:'动物内脏',
        image:'/static/厨余垃圾/动物内脏.png'
        ,detal:'空'
      },{
        id:1,
        name:'鸡鸭肉骨头',
        image:'/static/厨余垃圾/鸡鸭肉骨头.png'
        ,detal:'空'
      },{
        id:1,
        name:'猪羊牛肉',
        image:'/static/厨余垃圾/猪羊牛肉.png'
        ,detal:'空'
      },{
        id:1,
        name:'鱼刺鱼骨',
        image:'/static/厨余垃圾/鱼刺鱼骨.png'
        ,detal:'空'
      },
      ,{
        id:1,
        name:'食物加工废料',
        image:'/static/厨余垃圾/食物加工废料.png'
        ,detal:'空'
      },


      //其他垃圾
      {
        id:2,
        name:'大棒骨',
        image:'/static/其他垃圾/大棒骨.png'
        ,detal:'空'
      },{
        id:2,
        name:'榴莲壳',
        image:'/static/其他垃圾/榴莲壳.png'
        ,detal:'空'
      },{
        id:2,
        name:'玉米衣',
        image:'/static/其他垃圾/玉米衣.png'
        ,detal:'空'
      },{
        id:2,
        name:'卫生纸',
        image:'/static/其他垃圾/卫生纸.png'
        ,detal:'空'
      },{
        id:2,
        name:'保鲜膜',
        image:'/static/其他垃圾/保鲜膜.png'
        ,detal:'空'
      },{
        id:2,
        name:'塑料袋',
        image:'/static/其他垃圾/塑料袋.png'
        ,detal:'空'
      },{
        id:2,
        name:'一次性口罩',
        image:'/static/其他垃圾/一次性口罩.png'
        ,detal:'空'
      },{
        id:2,
        name:'干燥剂',
        image:'/static/其他垃圾/干燥剂.png'
        ,detal:'空'
      },{
        id:2,
        name:'口香糖',
        image:'/static/其他垃圾/口香糖.png'
        ,detal:'空'
      },{
        id:2,
        name:'打火机',
        image:'/static/其他垃圾/打火机.png'
        ,detal:'空'
      },{
        id:2,
        name:'隐形眼镜',
        image:'/static/其他垃圾/隐形眼镜.png'
        ,detal:'空'
      },{
        id:2,
        name:'方便面盒',
        image:'/static/其他垃圾/方便面盒.png'
        ,detal:'空'
      },
      
      //可回收
      {
        id:3,
        name:'报纸书本',
        image:'/static/可回收垃圾/报纸书本.png'
        ,detal:'空'
      },{
        id:3,
        name:'纸箱纸板',
        image:'/static/可回收垃圾/纸箱纸板.png'
        ,detal:'空'
      },{
        id:3,
        name:'易拉罐',
        image:'/static/可回收垃圾/易拉罐.png'
        ,detal:'空'
      },{
        id:3,
        name:'牛奶盒',
        image:'/static/可回收垃圾/牛奶盒.png'
        ,detal:'空'
      },{
        id:3,
        name:'奶瓶',
        image:'/static/可回收垃圾/奶瓶.png'
        ,detal:'空'
      },{
        id:3,
        name:'拉杆箱',
        image:'/static/可回收垃圾/拉杆箱.png'
        ,detal:'空'
      },{
        id:3,
        name:'洗发水瓶',
        image:'/static/可回收垃圾/洗发水瓶.png'
        ,detal:'空'
      },{
        id:3,
        name:'塑料衣架',
        image:'/static/可回收垃圾/塑料衣架.png'
        ,detal:'空'
      },{
        id:3,
        name:'橡胶轮胎',
        image:'/static/可回收垃圾/橡胶轮胎.png'
        ,detal:'空'
      },{
        id:3,
        name:'旧刀具',
        image:'/static/可回收垃圾/旧刀具.png'
        ,detal:'空'
      },{
        id:3,
        name:'插座电路板',
        image:'/static/可回收垃圾/插座电路板.png'
        ,detal:'空'
      },{
        id:3,
        name:'毛绒玩具',
        image:'/static/可回收垃圾/毛绒玩偶.png'
        ,detal:'空'
      },{
        id:3,
        name:'旧衣物被褥',
        image:'/static/可回收垃圾/旧衣物被褥.png'
        ,detal:'空'
      },{
        id:3,
        name:'废旧家具',
        image:'/static/可回收垃圾/废旧家具.png'
        ,detal:'空'
      },{
        id:3,
        name:'剪刀',
        image:'/static/可回收垃圾/剪刀.png'
        ,detal:'空'
      },
    ],
    //回收商品数据
    RecycleData:[
        {
            id:0,
            name:'旧衣物被褥',
            score:'10',
            image:'/static/可回收垃圾/旧衣物被褥.png'
          },{
            id:0,
            name:'废旧家具',
            score:'15',
            image:'/static/可回收垃圾/废旧家具.png'
          },{
            id:0,
            name:'剪刀',
            score:'5',
            image:'/static/可回收垃圾/剪刀.png'
          },{
            id:0,
            name:'橡胶轮胎',
            score:'12',
            image:'/static/可回收垃圾/橡胶轮胎.png'
          },{
            id:3,
            name:'旧刀具',
            score:'6',
            image:'/static/可回收垃圾/旧刀具.png'
          },{
            id:3,
            name:'插座电路板',
            score:'5',
            image:'/static/可回收垃圾/插座电路板.png'
          },{
            id:3,
            name:'毛绒玩具',
            score:'6',
            image:'/static/可回收垃圾/毛绒玩偶.png'
          },{
            id:0,
            name:'报纸书本',
            score:'8',
            image:'/static/可回收垃圾/报纸书本.png'
          },{
            id:0,
            name:'纸箱纸板',
            score:'8',
            image:'/static/可回收垃圾/纸箱纸板.png'
          },{
            id:0,
            name:'易拉罐',
            score:'2',
            image:'/static/可回收垃圾/易拉罐.png'
          },{
            id:0,
            name:'牛奶盒',
            score:2,
            image:'/static/可回收垃圾/牛奶盒.png'
          },{
            id:0,
            name:'奶瓶',
            score:'2',
            image:'/static/可回收垃圾/奶瓶.png'
          },{
            id:0,
            name:'拉杆箱',
            score:'9',
            image:'/static/可回收垃圾/拉杆箱.png'
          },{
            id:0,
            name:'洗发水瓶',
            score:'3',
            image:'/static/可回收垃圾/洗发水瓶.png'
          },{
            id:0,
            name:'塑料衣架',
            score:'1',
            image:'/static/可回收垃圾/塑料衣架.png'
          },
  ],
  },

  showPopup(e) {
    console.log(e.currentTarget.dataset.name)
    this.setData({ show: true});
  },

  onClose() {
    this.setData({ show: false });
  },
    clickSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },
    clickUser(){
      wx.navigateTo({
        url: '/pages/user/user',
      })
    },
    ChangecurrentIndex(e){
        console.log(e.currentTarget.dataset.index)
        this.setData({
          currentIndex:e.currentTarget.dataset.index
        })
    },
    butt(){
        wx.showToast({
          title: '回收成功',
          icon: 'none',
          duration: 1500,
        })
    },
            
    

    /**
   * 设置change方法来监听切换导航项时的事件。
   */
  onChange(event) {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  
  /** 
   * 搜索栏传递内容
   */ 
  onSearch(){

  }
  
})