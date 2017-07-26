var express = require('express');
var router = express.Router();

/* GET jquery listing. */
router.get('/', function(req, res, next) {
	res.render('jquery', {
		title: 'Express'
	});
});


/* 一个中间件栈，显示如何指向/jquery/:name 的http请求的信息，必须要next()方法 */
router.get('/:name', function(req, res, next) {
	console.log(req.param.name);
	next();
});

router.get('/test', function(req, res, next) {
	res.render('jquery/test', {
		title: 'Express'
	});
});


/* GET jquery listing. */
router.post('/aaa', function(req, res, next) {
	res.send({
		name:'aaaa',
		add:'zhangdan'
	});
	res.end();
});


module.exports = router;