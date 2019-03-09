var text1 = ' 线性空间&线性变换向量空间又称线性空间，{2|a|1|1}是线性代数的中心内容和基本概念之一。{1}在解析几何里引入向量概念后，{3|xx.png|104|249}使许多问题的处理变得更为简洁和清晰，{1}在此基础上的进一步抽象化，{1}形成了与域相联系的向量空间概念。'
const app = getApp()

function parse_text() {

    var info = app.globalData.sys_info
    console.log(info)
    var text = text1
    var rtext = []
    var rtext2 = []
    var temp2 = []
    while (text.indexOf("{") > 0) {
        var temp = text.substring(0, text.indexOf("{"))
        temp = temp.split('')
        temp.forEach(function(item) {
            temp2.push({
                text: item,
                type: '0'
            })
        })

        temp = text.substring(text.indexOf("{") + 1, text.indexOf("}"))
        temp = temp.split('|')
        if (temp[0] == '1') {
            rtext.push(temp2)
            temp2 = []
        } else if (temp[0] == '3') {
            rtext.push(temp2)
            rtext.push({
                type: '3',
                path: info.download_path + temp[1],
                width: Number(temp[3]) / info.pRatio*4,
                height: Number(temp[2]) / info.pRatio*4,
                // is_load: false
            })
            temp2 = []
        } else if (temp[0] == '2') {
            temp2.push({
                type: '2',
                text: temp[1],
                up: temp[2],
                down: temp[3],
                down2: temp[4]
            })
        } else if (temp[0] == '4') {
            temp2.push({
                type: '4',
                length: Number(temp[1])
            })
        }
        text = text.substring(text.indexOf('}') + 1)
    }
    text = text.split('')
    text.forEach(function(item) {
        temp2.push({
            text: item,
            type: '0'
        })
    })
    rtext.push(temp2)
    console.log(rtext)
    return rtext
}

module.exports.parse_text = parse_text