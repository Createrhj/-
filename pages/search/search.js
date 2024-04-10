// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList:['易拉罐','水果皮', '奶茶杯',' 过期口红'],
    dataList:[
      {name:'过期药品',
      class:'有害垃圾',
      score:5,
      count:3,
      image:'/static/小花.png'
     },
    ],
    total:0,
    keyword:"",
    noData:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let searchKeyArr =wx.getStorageSync('searchKeyArr') || null;
    if(searchKeyArr){
      this.setData({
        historyList:searchKeyArr
      })
    }
  },

    /**
   * 搜索时改变
   */
  onChange(e){
    this.setData({
      keyword:e.detail
    })
  },
  /**
   * 清空输入框
   */
  onClear(){
    this.setData({
      keyword:"",
      dataList:[],
      total:0,
      noData:true
    })
  },

    /**
   * 点击搜索记录里面的item，自动搜索
   */
  tapHisitem(e){
    this.setData({
      keyword:e.currentTarget.dataset.value
    })
  },
  /**
   * 搜索
   */
  onSearch(){
    let historyArr=this.data.historyList || [];
    historyArr.unshift(this.data.keyword);
    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。添加结尾用push()
    historyArr = [...new Set(historyArr)];//数组去重
    historyArr=historyArr.slice(0,5);//裁剪0到5的数据输出
    this.setData({
      historyList:historyArr
    }),
    wx.setStorageSync('searchKeyArr', historyArr)//缓存
  },

    /**
   * 清空历史记录
   */
  removeHistory(){
    this.setData({
      historyList:[],
      total:0,
      keyword:"",
      dataList:[],
      noData:true
    })
    wx.removeStorageSync('searchKeyArr')
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

  jump(){
    wx.redirectTo({
      url: '/pages/searchresult/searchresult',
    })
  }
})