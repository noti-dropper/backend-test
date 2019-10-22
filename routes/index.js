var express = require('express');
var router = express.Router();
const _ = require('lodash');

/* GET home page. */
router.get('/api/polls', function(req, res, next) {

  console.log(req.body.json)

  _.delay(()=>res.json({result:["aaa", "bbb", "ccc"]}), 5000)
  
});

module.exports = router;
