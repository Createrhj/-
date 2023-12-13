// pages/recoverybin/recoverybin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    GoodsData:[
      {name:'过期药品',
      class:'有害垃圾',
      score:5,
      count:3,
      image:'/static/小花.png'
     },
     {name:'过期药品',
     class:'有害垃圾',
     score:5,
     count:1,
     image:'/static/小花.png'
    },],
  },
  onChange(event) {
    console.log(event.detail);
    
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

  }
})