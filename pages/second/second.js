// pages/second/second.js
const app = getApp()
const db = wx.cloud.database()

function update_page(data) {
    var pages = getCurrentPages() //获取加载的页面
    var _this = pages[pages.length - 1]

    _this.setData({
        lists: data
    })
}

Page({
    /**
     * 页面的初始数据
     */
    data: {
        lists: [],
        now_info:{

        },
        now_title: '',
        data_test:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */

    nav2: function(options){
        var id = options.currentTarget.dataset.info.back_id
        console.log(options)
        var _this = this
        console.log(this.data)
        wx.cloud.callFunction({
            name: 'get_relation',
            data: {
                select: {
                    front_id: id
                }

            },
            success: (res) => {
                console.log(res.result.data)
                _this.data.lists = res.result.data
                _this.setData({
                    lists: res.result.data
                })
            },
            fail: console.log
        })

    },

    onLoad: function(options) {
        var t = require('../../utils/parse_texts.js')
        var now1 = {
            name: '线性方程组',
            id: 'EQUA00000',
            introduction: t.parse_text(),
            is_info: true,
        }
            
        this.setData({
            now_info:now1
        })

        // console.log(options)
        // var id = options.second_id
        // var _this = this
        // var send_data = {
        //     currentTarget: {
        //         dataset: {
        //             info: {
        //                 back_id: id
        //             }
        //         }
        //     }
        // }
        // this.nav2(send_data)

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