// pages/recoverybin/recoverybin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    GoodsData:[
      {name:'旧衣物被褥',
      class:'可回收垃圾',
      score:10,
      count:3,
      image:'/static/可回收垃圾/旧衣物被褥.png'
     },
     {name:'毛绒玩具',
     class:'可回收垃圾',
     score:6,
     count:1,
     image:'/static/可回收垃圾/毛绒玩偶.png'
    },
    {name:'毛报纸书本',
     class:'可回收垃圾',
     score:8,
     count:1,
     image:'/static/可回收垃圾/报纸书本.png'
    },
    {name:'纸箱纸板',
     class:'可回收垃圾',
     score:8,
     count:1,
     image:'/static/可回收垃圾/纸箱纸板.png'
    },
    {name:'易拉罐',
    class:'可回收垃圾',
    score:2,
    count:1,
    image:'/static/可回收垃圾/易拉罐.png'
   },
   {name:'牛奶盒',
     class:'可回收垃圾',
     score:2,
     count:1,
     image:'/static/可回收垃圾/牛奶盒.png'
    },
]},
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