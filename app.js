//app.js
App({
    onLaunch: function() {
        wx.cloud.init()
        // wx.loadFontFace({
        //     family: 'serif',
        //     source: 'url("https://countcount-1256595820.cos.ap-beijing.myqcloud.com/font.TTF")',
        //     success: console.log,
        //     fail:console.log
        // })

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
            download_path: 'https://countcount-1256595820.cos.ap-beijing.myqcloud.com/pngs1/'
        },
        temp: {
            list1: [],
            list2: []
        },
        history:[]
    }
})