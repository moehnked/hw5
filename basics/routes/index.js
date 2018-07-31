var express = require('express');
var router = express.Router();
var methodType = "GET";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'big boy', condition: true, anyArray: [1,2,3] });
});

router.get('/test/:id', function(req, res, next) {
	res.render('test', {output: req.params.id, methodT: methodType});
});

router.post('/test/submit', function(req, res, next) {
	methodType = "POST";
	var id = req.body.id;
	res.redirect('/test/' + id);
});

module.exports = router;
