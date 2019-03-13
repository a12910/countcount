const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command


// 云函数入口函数
exports.main = async (event, context) => await db.collection('item_list1')
    .where({
        id:_.in(event.ids)
    })
    .get()