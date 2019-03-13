// pages/main/main.js
const app = getApp()
const db = wx.cloud.database()

function update_page(data) {
    var pages = getCurrentPages() //获取加载的页面
    var _this = pages[pages.length - 1]
    _this.setData(data)
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        relation1:[],
        relation2:[],
        is_info:false
    },

    nav1: (options) => {
        console.log(options)
        var info = options.currentTarget.dataset.info
        var infos = app.globalData.temp.list2

        var send_data = {
            name:info.back_name,
            id:info.back_id,
            intro:'null',
            s_intro:'null',

        }

        app.globalData.temp.list1 = send_data
        wx.navigateTo({
            url: '../second/second'
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // var dat = require('datas.js')
        var _this = this
        // this.setData({
        //     main_list:dat.datas
        // })

        var up = require('../../utils/update_page.js')
        up.load_info('MAIN','main/main')

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