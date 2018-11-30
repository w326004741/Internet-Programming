var mongoose = require('mongoose');// (引用mongoose第三方模块)
var Schema = mongoose.Schema;  // 定义模式Schema
// Requiring the module in this way just gives us a reference to our db connection
// 以这种方式要求模块只是为我们提供了数据库连接的参考
require('./util');
// 声明一个数据集，对象
// 每一个 Schema 对应 MongoDB 中的一个集合（collection），Schema 中定义了Collection中文档的样式(Schema)。
// 下面设置了集合users的基本样式，type是字段类型
var commentsSchema = new Schema({
    userid: { type: String },
    message: { type: String },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },  // `Date.now()` returns the current unix timestamp as a number
    // default: new Date(): the comment put date always not change when you push or put your new comments
});

// 把数据模型暴露出去，提供使用.
module.exports = mongoose.model('Comment', commentsSchema);
// import it into index.js file