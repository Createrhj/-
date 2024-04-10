// pages/feedback/feedback.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {
        avatarUrl: '/static/user_head.webp',
        nickName: '未授权'
      },
      hasUserInfo: false,
  },
  getUserProfile: function(e){
    wx.getUserProfile({
      desc: '获取您的微信个人信息',
      success:(res)=>{
          console.log(res.userInfo),
          app.globalData.userInfo=res.userInfo,
          app.globalData.integral=50,
          console.log(app.globalData.userInfo),
          this.setData({
            userinfo: res.userInfo,
            hasUserInfo: true
          })
          wx.setStorageSync('userinfo', res.userInfo)
          wx.showToast({
            title: '已获取信息',
          })
      },
      fail:function(e){
          wx.showToast({
            title: '已取消',
            icon: "none",
            duration: 1500,
            mask: true
          })
      }
    })
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
  onShow: function () {
    var n = wx.getStorageSync("userinfo");
    
    if(n.nickName != null && n.nickName != ''){
      console.log(n)

      this.setData({
          userinfo: n,
          hasUserInfo: true,
          
      })
    }
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
    wx.navigateTo({
        url: '/pages/classification/classification', 
      })
    }
})