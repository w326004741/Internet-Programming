// we will create a module for our connection string and include 
// in every model that we wish to use
//我们将为我们的连接字符串创建一个模块，并包含在我们希望使用的每个模型中
// 创建连接 (引用mongoose第三方模块)
var mongoose = require('mongoose'); // require like import in java
// node连接自己的mongodb
var connection = mongoose.connect(
    'mongodb://mongodb4494ww:be0baj@danu7.it.nuigalway.ie:8717/mongodb4494',
    { userNewUrlParser: true }); // include to avoid deprecation warning包括以避免弃用警告

exports.connection = connection;
// 到处connection，提供其他地方使用

// the connection string is as follows:
//  mongodb://dbusername:dbpasswd@danu7:8717/dbname
