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

/* 首页主播列表===>>>>房间列表 */
router.post('/proxy/room/roomList/h5/home', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		weight: 1,
		// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		'list|20-30': [{
			// 属性 id 是一个自增数，起始值为 1，每次增 1
			'roomId': 910856,
			'userId': Mock.mock('@zip'),
			'nickName': Mock.mock('@csentence(3, 7)'),
			'number|0-1000': 1,
			'liveState|0-1': 0,
			'liveTime|1-99': 1,
			'city': Mock.mock('@province()'),
			'liveTitle': Mock.mock('@ctitle(7)'),
			'avatar|+1': [
				'//img.xiu8.com/img/avatar/m/1_1/05/2fe/4e5384f6623b01480e93930dc122fe05.jpg',
				'//img.xiu8.com/img/avatar/m/1_1/78/244/ac665a8ba4eba7ba631eabcd17424478.jpg',
				'//img.xiu8.com/img/avatar/m/1_1/f1/364/776a5310b77e15db458fa28eef3364f1.png',
				'//img.xiu8.com/img/avatar/m/1_1/57/5c6/401c74bc4cba5a5b883603c80645c657.jpg',
				'//img.xiu8.com/img/avatar/m/1_1/39/048/395fff135f898ffa2e83b6d4a7404839.jpg',
				'//img.xiu8.com/img/avatar/m/1_1/9f/563/72491f9a764d6b678692b2a90405639f.jpg',
				'//img.xiu8.com/img/avatar/m/1_1/ac/de8/58fd91a97b761a635692d354382de8ac.jpg',
				'//img.xiu8.com/img/avatar/m/1_1/9b/525/205f8d973e7c917863ae60a10d95259b.jpg'
			]
		}]
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});


/* 房间信息===>>>>房间信息 */
router.post('/proxy/room/room/info', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		'userId': Mock.mock('@zip'),
		'roomId': 910856,
		'nickName': Mock.mock('@csentence(3, 7)'),
		'avatar': '//img.xiu8.com/img/avatar/m/1_1/05/2fe/4e5384f6623b01480e93930dc122fe05.jpg',
		'broadLevel|0-33': 0,
		'nowExp|100-9999': 100,
		'nextExp|0-99999': 100,
		'notice': Mock.mock('@csentence'),
		'welcome': '欢迎语：' + Mock.mock('@csentence'),
		'familyId': 17777,
		'familyName': '饭团&美食家',
		'nextLiveTime': new Date() / 1000,
		'number|0-9999': 0,
		'city': Mock.mock('@province()'),
		'liveTime': new Date() / 1000,
		'liveState|0-1': 0,
		'isVisitorShow': 1,
		'publicChatLimit': 1,
		'privateChatLimit': 1,
		'isFollow': 1,
		'thisNumber|500-1000': 500,
		'thisCoupon|900-12300': 900,
		'pullUrl': '//img.xiu8.com/img/avatar/',
		'canWebLive': 0
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});


/* 直播间分享 */
router.post('/proxy/room/share', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});



/* 点分享链接/pc扫码得秀币 */
router.post('/proxy/activity/h5/share', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});



/*   礼物列表   */
router.post('/proxy/fee/gift/list', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"list|0-4": [{
			"tagId|120-888": 120,
			"tagName": Mock.mock('@csentence(3, 5)'),
			"giftList|1-20": [{
				"goodsId": 8888,
				"giftId|200-900": 200,
				"giftName": "鼓掌",
				"salePrice|100-300000": 100,
				"recyclePrice|1-98": 1,
				"exp|1000-30000": 1000,
				"series|0-1": 0,
				"price|200-100000": 200,
				"grade|0-20": 0,
				"isLucky": 0,
				"remark": "这是的话多..",
				"isGuard|0-1": 0,
				"isPrivate|0-1": 0,
				"isWeekStar|0-1": 0,
				"isActivity|0-1": 0,
				"isYear|0-1": 0
			}]
		}],
		version: new Date() / 1000
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});


/* 添加/取消关注 */
router.post('/proxy/user/relation/attention', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		state: 1
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});


/* 查询用户个人中心信息接口 */
router.post('/proxy/user/user/info', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		'userId': Mock.mock('@zip'),
		'nickName': Mock.mock('@csentence(3, 7)'),
		'avatar': '//img.xiu8.com/img/avatar/m/1_1/05/2fe/4e5384f6623b01480e93930dc122fe05.jpg',
		"gender|0-1": 0,
		"level|0-20": 0,
		'broadLevel|0-33': 0,
		'userLevel|0-20': 0,
		'role|1-6': 1,
		'isCertification|0-1': 0,
		'authInfo': '认证成功/失败',
		'city': Mock.mock('@province()'),
		'signInfo': '上的士大夫士大夫',
		'attentionCount|200-9999': 200,
		'fansCount|0-9999': 0,
		'sendmoney|0-999999': 0,
		'contri|0-999999': 0,
		'amount|0-8888888': 0,
		'couponBalance|0-899898': 0,
		'fansRank|3': [{
			'userId|900138-900900': 900138,
			'avatar': 'asdfsfd.jpg'
		}],
		'familyId': 177777,
		'familyName': '饭团&美食家',
		'isUpdateAvatar': 1,
		'canLiveOnPc': 1
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});


/* 修改昵称 */
router.post('/proxy/user/nickName/edit', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		state: 1
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});



/* 我的关注列表 */
router.post('/proxy/h5/user/liveRoom/attention', function(req, res, next) {
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
			"nickName": "____d__d___",
			"avatar": "//img.xiu8.com/img/avatar/s/1_1/b6/11f/88989afb03deaf9e18ce58ed21c11fb6.jpg",
			"fansCount|1-10000": 1,
			"liveState|0-1": 0,
			"number|1-200": 1,
			"count|1-300": 1
		}]
	});

	//返回到ajax请求结果
	notifierMsg.sucMsg(res, mock);
});


// 测试跨域请求数据
router.post('/first', function(req, res, next) {
	notifierMsg.sucMsg(res, {
		name: 'aaa',
		pwd: '123'
	});
});


module.exports = router;