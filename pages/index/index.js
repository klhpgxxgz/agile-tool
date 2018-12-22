//index.js
//获取应用实例
const app = getApp()
Page({
  //页面数据
  data: {
    routers: [
      {
        name: '?',
        url: '',
        icon: ''
      },
      {
        name: '0',
        url: '',
        icon: ''
      },
      {
        name: '1',
        url: '',
        icon: ''
      },
      {
        name: '3',
        url: '',
        icon: ''
      },
      {
        name: '5',
        url: '',
        icon: ''
      },
      {
        name: '8',
        url: '',
        icon: ''
      },
      {
        name: '10',
        url: '',
        icon: ''
      },
      {
        name: '13',
        url: '',
        icon: ''
      },
      {
        name: '15',
        url: '',
        icon: ''
      },
      {
        name: '20',
        url: '',
        icon: ''
      },
      {
        name: '40',
        url: '',
        icon: ''
      },
      {
        name: '∞',
        url: '',
        icon: ''
      }

    ]  
  },
  //事件处理函数
  gotoDetail: function(e) {
    var param = e.currentTarget.dataset.variable;
    wx.setStorageSync('number', param);
    wx.navigateTo({
      url: '../detail/index'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
