//app.js
App({
  onLaunch: function () {
    var t = require('pages/second/datas.js')
    t.parse_text(t.text1)
    wx.cloud.init()
  },
  globalData: {
    temp:{
        list1:[]
    }
  }
})