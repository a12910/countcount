//app.js
App({
    onLaunch: function() {
        wx.cloud.init()
        var _this = this
        wx.getSystemInfo({
            success: function(res) {
                _this.globalData.sys_info.pRatio = res.pixelRatio
            },
            fail: function() {
                pixelRatio = 0
            }
        })

    },
    globalData: {
        sys_info: {
            pRatio: 2,
            download_path:'https://countcount-1256595820.cos.ap-beijing.myqcloud.com/pngs1/'
        },
        temp: {
            list1: []
        }
    }
})