// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command


// 云函数入口函数
exports.main = async(event, context) => await db.collection('relation_list')
    .where(
        _.or([{
            front_id: event.id
        }, {
            back_id: event.id,
            line_type: 2
        }])
        // id:event.id,
        // line_type:_.in(event.line_type)
    )
    .get()

// exports.main = async (event, context) => {
//     const list1 = await db.collection('relation_list').where(event.select).get()
//     const list2 = list1.data
//     const tasks = []
//     // list2.forEach(function(item){
//     //     const promise = db.collection('item_list1').where({
//     //         // id:item.back_id
//     //         id:'null'
//     //     }).get()
//     //     tasks.push(promise)
//     // })
//     const promise = list2.forEach(function(item){

//     })
//     return (await Promise.all(tasks)).reduce((acc,cur)=>({
//         data:acc.data.concat(cur.data),
//         errMsg:acc.errMsg
//     }))
// }