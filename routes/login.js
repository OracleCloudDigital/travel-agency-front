var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  console.log("calling login");
});

module.exports = router;