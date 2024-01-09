// pages/newindex/newindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // bargainList:[{id:1,title:'今天是一个好日子',typename:'国际新闻',photo:'/images/1.png',introduction:'今天是一个好日子',descript:'今天是一个好日子今天是一个好日子今天是一个好日子',author:'admin',addtime:'2023-12-23'}]
    bargainList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) 
  {
    wx.request({
      url: 'http://127.0.0.1:8012/api/SelectNewsTopAll', //这里填写你的接口路径
      method: 'POST', 
      header: { //这里写你借口返回的数据是什么类型，这里就体现了微信小程序的强大，直接给你解析数据，再也不用去寻找各种方法去解析json，xml等数据了
          'Content-Type': 'application/json'
      },
      success: (res)=> {
      //这里就是请求成功后，进行一些函数操作
      console.log(res.data)
      this.setData({
        bargainList:res.data
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
  gdxq:function(event)
    {
        
        let index=event.currentTarget.dataset.index;
        console.log(index);
        wx.navigateTo({
          url: '/pages/newsdetail/newsdetail?id='+index
        })
    }
})