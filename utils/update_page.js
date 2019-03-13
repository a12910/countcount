const app = getApp()


function load_info(id, page) {
    wx.cloud.init()
    wx.cloud.callFunction({
        name: 'get_relation',
        data: {
            id: id,
        },
        complete: res => {
            console.log(res)
            var relation1 = []
            var relation2 = []

            var list = [id]
            var xx = require('parse_texts.js')


            res.result.data.forEach(function(item) {
                // if(item.introduction==''){
                //     item.introduction='balabalabalabala'
                // }
                if (item.line_type == 2) {
                    if (item.back_id == id) {
                        var tname = item.back_name
                        item.back_name = item.front_name
                        item.back_id = item.front_id
                        item.front_name = tname
                        item.front_id = id
                    }

                    relation2.push(item)
                } else {
                    relation1.push(item)
                }
                if (list.indexOf(item.back_id) == -1) {
                    list.push(item.back_id)
                }
                if (list.indexOf(item.front_id) == -1) {
                    list.push(item.front_id)
                }
            })

            var send_data = {
                relation1: relation1,
                relation2: relation2,
                is_info: true
            }
            // console.log(send_data)

            var up = require('../pages/' + page + '.js')
            up.update_page(send_data)
            wx.cloud.callFunction({
                name: 'get_relationinfo',
                data: {
                    ids: list
                },
                complete: (res2) => {
                    console.log(res2)
                    res2.result.data.forEach(function(item) {
                        item.introx = xx.parse_text(item.intro)
                        if(item.s_intro=='null'){
                            item.s_intro = 'balabalabalabala,balabala'
                        }

                    })
                    app.globalData.temp.list2 = res2.result.data
                }
            })
        },
    })
}

module.exports.load_info = load_info