// pages/newsdetail/newsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // bargaincommList:{id:1,title:'今天是一个好天气',author:'admin',photo:'/images/1.png',addtime:'2023-12-12'},
    bargaincomm:{},
    isAdd:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) 
  {
    let id=options.id;
    console.log("获取到id");
    console.log(id)
    wx.request({
      
      url: 'http://127.0.0.1:8012/api/SelectNewsById?id='+parseInt(id), //这里填写你的接口路径
      method: 'POST',       
      success: (res)=> {
      //这里就是请求成功后，进行一些函数操作
     
      this.setData({
        bargaincomm:res.data
      })  
      
      }
    })
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
  ysc:function(event)
    {
      this.setData({
        isAdd:false
      }) 
        
    },
    wsc:function(event)
    {
      this.setData({
        isAdd:true
      }) 
        
    }
})