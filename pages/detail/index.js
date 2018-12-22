//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    number: ""
  },
  //事件处理函数
  cancel: function () {
    //返回上一页
    wx.navigateBack();
  },
  confirm: function () {
    //wx.setStorageSync('number', '5');
  },
  onLoad: function () {
    let a = wx.getStorageSync('number');
    this.setData({
      number:a
    });
    //wx.removeStorageSync('number');
  },
  onReady: function () {
  }
})
