const app = getApp();
Page({
  data: {
    userinfo:null,
    text: '',
    show: false,
    acount:0,
    integral:0,
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    this.setData({  
        userinfo: app.globalData.userInfo,
        integral:app.globalData.integral
    })
  },
  
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onConfirm(event) {
    this.setData({
      show: false,
      text: `选择了 ${event.detail.length} 个日期`,
    });
  },
  onShow(){
    
 },
  /**
   * 返回到主界面
   */
  back(){
    wx.navigateTo({
      url: '/pages/classification/classification',
    })
  }
});
