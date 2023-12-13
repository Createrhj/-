Page({
  data: {
    text: '',
    show: false,
    integral:0,
    acount:0,
    userinfo: {
        avatarUrl: '/static/user_head.webp',
    },
    hasUserInfo: false,

  },
  getUserProfile: function(e){
    wx.getUserProfile({
      desc: '获取您的微信个人信息',
      success:(res)=>{
          this.setData({
            userinfo: res.userInfo,
            hasUserInfo: true,
            integral:50,
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
  /**
   * 返回到主界面
   */
  back(){
    wx.navigateTo({
      url: '/pages/classification/classification',
    })
  }
});
