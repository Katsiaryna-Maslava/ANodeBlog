var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = {
    article: {
        title: {type: String, required: true},              // 标题
        content: {type: String, required: true},            // 内容
        html: {type: String},                               // 转化后的内容
        index: {type: String},                              // 目录索引
        views: {type: Number, default: 0},                  // 阅读数
        favorite: {type: Number, default: 0},               // 喜欢数
        created_time: {type: Date, default: Date.now},      // 创建时间
        _user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    user: {
        username: {type: String, required: true, unique: true},// 用户名
        password: {type: String, required: true},
        email: {type: String},  // 邮箱
        website: {type: String},    // 个人网站
        address: {type: String},    // 所在地点
        github: {type: String}, // github
        signature: {type: String},  // 个人签名
        created_time: {type: Date, default: Date.now}   // 创建时间
    }
};