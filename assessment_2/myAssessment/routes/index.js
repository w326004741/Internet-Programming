
// When Change this file you have to restart server(npm start) in putty / ternimal.

var express = require('express'); // Loading up the express module
var router = express.Router(); // Call a method Router(), which returns a router object

/* GET home page.  is default page*/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
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
