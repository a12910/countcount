// pages/second/second.js
const app = getApp()
const db = wx.cloud.database()



function update_page(data) {
    var pages = getCurrentPages() //获取加载的页面
    var _this = pages[pages.length - 1]

    _this.setData(data)

    setTimeout(function() {
        _this.setData({
            is_info: false
        })
    }, 1000)
}

Page({
    /**
     * 页面的初始数据
     */
    data: {
        lists: [],
        now_info: {

        },
        is_info: true,
        relation1: [],
        relation2: [],

        menu1: true,
        history: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    to_menu: function(options) {
        // console.log(this.data)
        var x = this.data.menu1
        this.setData({
            menu1: !x
        })
    },
    to_menu2: function() {
        var x = this.data.menu1
        if (!x) {
            this.setData({
                menu1: !x
            })
        }

    },
    nav2: function(options) {
        var info = options.currentTarget.dataset.info
        var id = info.back_id
        console.log(options)
        var _this = this
        // console.log(this.data)
        var infos = app.globalData.temp.list2
        console.log(infos)
        infos.forEach(function(item) {

            if (id == item.id) {
                var send_data = item
                _this.data.history.push(item)
                _this.setData({
                    history: _this.data.history,
                    now_info: item,
                    is_info: true
                })

            }
        })

        var up = require('../../utils/update_page.js')
        up.load_info(id, 'second/second')
    },

    his_nav: function(options) {
        var _this = this
        console.log(options)
        var info = options.currentTarget.dataset.info
        this.data.history.push(info)

        _this.setData({
            history: _this.data.history,
            now_info: item,
            is_info: true
        })

        var up = require('../../utils/update_page.js')
        up.load_info(info.id, 'second/second')

        this.to_menu()
    },
    onLoad: function(options) {
        var t = require('../../utils/parse_texts.js')

        var info = app.globalData.temp.list1
        var _this = this
        app.globalData.list1 = []
        info.introx = t.parse_text(info.intro)

        this.data.history.push(info)
        this.setData({
            now_info: info,
            history: _this.data.history
        })

        var _this = this
        var send_data = {
            currentTarget: {
                dataset: {
                    info: {
                        back_id: info.id
                    }
                }
            }
        }
        this.nav2(send_data)

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})

module.exports.update_page = update_page