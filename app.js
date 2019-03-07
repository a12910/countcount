//app.js
App({
  onLaunch: function () {
    
    wx.cloud.init()
  },
  globalData: {
    temp:{
        list1:[]
    }
  }
})