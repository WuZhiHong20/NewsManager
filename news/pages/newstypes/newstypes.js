// pages/newstypes/newstypes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Typedata:[{id:1,name:'网络新闻'},{id:2,name:'资讯新闻'},{id:3,name:'明星新闻'},{id:4,name:'八卦新闻'},{id:5,name:'头条新闻'},{id:6,name:'国际新闻'},{id:7,name:'国内新闻'},{id:8,name:'政治新闻'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) 
  {

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
  typestr:function(event)
    {
        let index=event.currentTarget.dataset.index;
        console.log(index);
    wx.navigateTo({
      url: '/pages/searchlist/searchlist?id='+index
    })
    }
})