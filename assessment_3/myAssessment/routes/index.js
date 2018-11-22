3// 编写路由文件

// When Change this file you have to restart server(npm start) in putty / ternimal.
var express = require('express'); // Loading up the express module
var router = express.Router(); // Call a method Router(), which returns a router object
var add = require('./add'); // import the add.js file
var Comment = require('../models/comments'); // provide a relative path to the location of this module.
var version = require('./version');

/* GET home page.  is default page*/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 业务逻辑
/* POST Sum two numbers */
// post了一个JavaScript function, 加一个response一个Json内容
// 直接进入ADD页面 如果把post 改成 get，就可以访问/add页面了，返回的是一个下面response的json内容：{"Sum":num}.
// 用Post传输地址，访问/add页面时会得到404 Not Found,是因为The API is accepting POST,所以只能在查询/add页面POST出去的内容(json)
router.post('/add', function (req, res, next) {
  var sum = add(req.body.num1, req.body.num2);
  res.json({ Sum: sum }); // (property) Sum: any, (local var) sum: any
});

/**
 * A Simple REST API be created  
 * Response the version of application use post
 * */
router.post('/version', function (req, res, next) {
  // var ver = version(req.body.version);
  // return JSON data indicating the version of the app
  res.json({
    // version: ver
    message: 'Version 0.0.1 of the application'
  });
});

/**
 * Add an API for inserting comments
 * Adds comments to our database
 * API which can accept POST requests from clients.API可以接受来自客户端的POST请求。
 * Take the contents of the request body and save it to the database 获取请求正文的内容并将其保存到数据库中
 */
router.post('/addComment', function (req, res, next) {
  // Extract the request body which contains the comments提取包含comment的请求正文
  comment = new Comment(req.body); // 创建新的 Comment对象并request body内容，并传递给comment变量
  comment.save(function (err, savedComment) { // comment变量调用save()方法
    if (err) {
      throw err;
    }
    res.json({
      status: "Successfully Add Comment into DB Collection!",
      // a JSON response is returned containing the comment message and the id of the comment.
      "id": savedComment._id, // return id of the comment
      "message": savedComment.message // return comment message
    });
  });
});
// { "sort": [['date', 'asc']] } asc = ascending = 1, desc = descending = -1
// db.getCollection('comments').find().sort({date: -1})
// ref: https://stackoverflow.com/questions/13847766/how-to-sort-a-collection-by-date-in-mongodb
// Retrieve comments from the database sorted by the date they were submitted
// The number of ducuments returned should be limited to 10 documents
// { 'message': 1 }: return message comment in output
// { '_id': 0 } : everything will be follow the _id to output in mongodb (输出的内容是根据_id来输出的)
router.get('/sortComment', function (req, res, next) {
  Comment.find({}, { '_id': 0 }, { sort: 'date', limit: 10 }, function (err, comments) {
    if (err) {
      res.send(err);
    }
    res.json(
      {
        status: "Comments Sorted by the date ( 1 or ascending)",
        comments
      });
  });
});
/***
 * Retrieves comments from the database 从数据库中检索comment
 * user_name: req.query.user_name : Pass in query, ie. "EndaB" 通过输入user_name查询数据
 */
router.get('/getComments', function (req, res, next) {
  Comment.find({}, function (err, comments) {
    if (err) {
      res.send(err);
    }
    // if the query succeeds this comments contains all of our documents(array of objects)
    // 如果查询成功，则此comments包含我们的所有文档（对象数组）
    res.json(comments);
  });
});

/**
 * Updates a comment already in the databasev //更新已经在数据库中的comments
 * /updateComment/:id : Placeholder variable // 通过id查询jsonw文件内容
 */
router.put('/updateComment/:id', function (req, res, next) {
  var id = req.params.id;
  Comment.update({ _id: id }, req.body, function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ status: "Successfully updated the document" }); //如果传输成功则response.json文件内容
  });
});
/**
 * Deletes a comment from the database /从数据库删除一个comment
 *  注意 deleteOne()
 */
router.delete('/removeComment/:id', function (req, res, next) {
  var id = req.params.id;
  Comment.deleteOne({ _id: id }, function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ status: "Successfully removed the document" });
  });
});
// when you want navigation other local page, you should be add this.
// you have to restart your servers when you change here(add)
/* Get comment page. is Navigate page*/
/* Return JSON containing app info  返回包含应用信息的JSON */
router.get('/comment', function (req, res, next) {
  // Creating an API which responds to POST requests
  // console.log(req.body);
  // if (req.body) {
  //   re.json({ status: "Success" });
  // }
  // else {
  //   re.json({ status: "No request body" });
  // }
  res.render('comment', { title: 'Express' });
});
// /* Get info page. is Navigate page and return json file.*/
router.get('/info', function (req, res, next) {
  // return json file.
  res.json({
    version: "10.2.4",
    createBy: "Weichen Wang"
  });
});
module.exports = router;

