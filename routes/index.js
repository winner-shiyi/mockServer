var express = require('express');
var notifier = require('node-notifier');
var router = express.Router();
var Mock = require('mockjs');

var notifierMsg = {
	//桌面展示通知	
	errorMsg: function(res) {
		notifier.notify({
			title: '模拟数据错误提示',
			message: '你看，你又出BUG了。。。。'
		});
		//返回结果给ajax
		res.send({
			"status": 0,
			"errorCode": '4445',
			"errorMsg": '错误的提示内容',
			"result": {}
		});
		//关闭请求
		res.end();
	},
	//请求成功
	sucMsg: function(res, mock) {
		var data = {
			"status": 1,
			"errorCode": 8888,
			"errorMsg": '请求成功的',
			result: mock
		}

		//返回结果给ajax
		res.send(data);
		//关闭请求
		res.end();
	}
};

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express',
		data: {
			"name": "yxf",
			"age": 15
		}
	});
});

/* 我的关注列表 */
router.post('/repairbill/status', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"number|1-100": 1,
		"count": 100,
		"list|3-40": [{
			"userId": 910856,
		}]
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0000',
		resultData: {
			mock,
		},
	});
	//关闭请求
	res.end();
});

module.exports = router;