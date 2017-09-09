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

router.post('/login', function(req, res, next) {
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
		'resultCode': '0',
		resultData: {
			mock,
		},
	});
	//关闭请求
	res.end();
});


/* 商家名称模糊搜索 */
router.post('/sender/fuzzyQuery', function(req, res, next) {
	var _data = req.body,
		mock = null;
	console.log(_data) //可以在控制台看到我们传给后端的参数
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"list": [
		{
	        "shopName": "发货商家2",
	        "userName": "发货人2",
	        "phone": "18810278138",
	        "province": "北京市",
	        "city": "市辖区",
	        "area": "东城区",
	        "addressDetail": "天安门"
	    },
	    {
	        "shopName": "发货商家1",
	        "userName": "发货人1",
	        "phone": "18810278138",
	        "province": "北京市",
	        "city": "市辖区",
	        "area": "东城区",
	        "addressDetail": "天安门"
	    }
		]
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "请模糊搜索求失败啦啦啦"
	});
	//关闭请求
	res.end();
});

/* 提交新建车配任务*/
router.post('/order/create', function(req, res, next) {
	var _data = req.body,
		mock = null;
	// console.log(_data) //可以在控制台看到我们传给后端的参数
	if (_data.error) {
		// notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({

	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: [],
		"resultDesc": "新建任务请求失败咯"
	});
	//关闭请求
	res.end();
});
/* 车配任务列表 */
router.post('/order/list', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"total": 50,
		"list": [
			{
		        "orderNo": "123456",
		        "address": "发货地址111",
		        "orderStatus": 1,
		        "driverName": "司机嘟嘟",
		        "driverPhone": "13612541414",
		        "phone": "发货15880274595",
		        "orderTime":"1503540843000",
		        "receiversInfoList": [
		          {
		            "address": "近江时代大厦",
		            "userName": "收货商家1"
		          },
		          {
		            "address": "近江时代大厦222",
		            "userName": "收货商家222"
		          }
		        ]
		      },
		      {
		        "orderNo": "2223456",
		        "address": "发货地址222",
		        "orderStatus": 2,
		        "driverName": "司机嘟嘟",
		        "driverPhone": "13612541414",
		        "phone": "发货15880274595",
		        "orderTime":"1503540843000",
		        "receiversInfoList": [
		          {
		            "address": "近江时代大厦",
		            "userName": "收货商家1"
		          },
		          {
		            "address": "近江时代大厦222",
		            "userName": "收货商家222"
		          }
		        ]
      		},
      		{
		        "orderNo": "54743456",
		        "address": "发货地址333",
		        "orderStatus": 5,
		        "driverName": "司机嘟嘟",
		        "driverPhone": "13612541414",
		        "phone": "发货15880274595",
		        "orderTime":"",
		        "receiversInfoList": [
		          {
		            "address": "近江时代大厦",
		            "userName": "收货商家1",
		            "shopName": "aaaa"
		          }
		        ]
      		}
		],
		"pageNo": 1,
	    "pageSize": 10
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "任务列表页失败咯"
	});
	//关闭请求
	res.end();
});
/* 编辑车配任务 */
router.post('/order/infoDetail', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"shopName":"发货商家111",
		"userName":"发货人11",
		"province":"浙江省",
		"city":"温州市",
		"area":"鹿城区",
		"addressDetail":"好吃的",
		"drivingTime":"1503540843000",
		"phone":"15880274595",
		"receiversInfoList":[
			{
				"shopName":"收货商家111",
				"userName":"收货人11",
				"province":"福建省",
				"city":"厦门市",
				"area":"思明区",
				"addressDetail":"软件园",
				"phone":"15880274595",
			},
			{
				"shopName":"收货商家2222",
				"userName":"收货人2222",
				"province":"福建省",
				"city":"厦门市",
				"area":"思明区",
				"addressDetail":"软件园",
				"phone":"15880274595",
			}
		]
	});

	//返回结果给ajax
	res.send({
		'resultCode':'0',
		resultData: mock,
		"resultDesc": "编辑车配任务要怎么请求嘞"
	});
	//关闭请求
	res.end();
});

/* 取消订单 */
router.post('/order/cancel', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"list": {
	        "orderNo": "123456",
	        "address": "发货地址111",
	        "orderStatus": 1,
	        "driverName": "司机嘟嘟",
	        "driverPhone": "13612541414",
	        "phone": "发货15880274595",
	        "receiversInfoList": [
	          {
	            "address": "近江时代大厦",
	            "userName": "收货商家1"
	          },
	          {
	            "address": "近江时代大厦222",
	            "userName": "收货商家222"
	          }
	        ]
		}
	});

	//返回结果给ajax
	res.send({
		'resultCode': '000',
		resultData: mock,
		"resultDesc": "取消订单请求失败"
	});
	//关闭请求
	res.end();
});

/* 批量导入订单 */
router.post('/order/import', function(req, res, next) {
	var _data = req.body,
		mock = null;
	console.log(_data) //可以在控制台看到我们传给后端的参数
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"errorOrderNo": [
            "1",
            "2",
            "3",
            "4"
        ],
        "successCount": 2
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "导入失败，不要气馁"
	});
	//关闭请求
	res.end();
});

/* 下载excel模板 */
router.post('/order/downExcel', function(req, res, next) {
	var _data = req.body,
		mock = null;

	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"errorOrderNo": [
            "1",
            "2",
            "3",
            "4"
        ],
        "successCount": 1
	});

	//返回结果给ajax
	res.send({
		'size': 8397,
		'type': 'application/octet-stream'
	});
	//关闭请求
	res.end();
});
/* 分配司机-分配司机列表 */
router.post('/order/driver/list', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		"total": 50,
		"list": [
			{
		        "carLength": "11",
		        "carNumber": "2657567",
		        "driverOrderCount": 5,
		        "driverName": "司机嘟嘟",
		        "driverId": "136",
		        "driverWorkStatus": 1,
		        "carType": "0"
      		},
      		{
		        "carLength": "11",
		        "carNumber": "2657567",
		        "driverOrderCount": 5,
		        "driverName": "司机哒哒",
		        "driverId": "150",
		        "driverWorkStatus": 0,
		        "carType": "1"
      		},
      		{
		        "carLength": "11",
		        "carNumber": "2657567",
		        "driverOrderCount": 5,
		        "driverName": "司机ccc",
		        "driverId": "120",
		        "driverWorkStatus": 0,
		        "carType": "1"
      		},
		],
		"pageNo": 1,
	    "pageSize": 10
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "任务列表页失败咯"
	});
	//关闭请求
	res.end();
});
/* 分配司机-派单按钮 */
router.post('/order/dispatch', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "派单失败咯"
	});
	//关闭请求
	res.end();
});
/* 车配任务详情-获取订单信息 */
router.post('/order/detail', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		'dispatchOrderTime': '',
		'orderNo': '123456',
		'orderStatus': 4,
		'orderTime': '',
		'senderInfo': {
			'address': '浙江省杭州市三新家园',
			'phone': '14567890789',
			'shopName': '发货商家1111',
			'userName': '发货人郭德纲'
		},
		'receiversInfoList': [
			{
				'address': '浙江省杭州市三新家园',
				'phone': '14567890789',
				'shopName': '收货商家1111',
				'userName': '收货人郭德纲',
				'imageTip': [
                    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    "http://tubobo-qa.oss-cn-shanghai.aliyuncs.com/file_2017082416510016",
                    "http://tubobo-qa.oss-cn-shanghai.aliyuncs.com/file_2017082416510016"
                ],
				'textTip': '人不在家',
				'receiverStatus': 3
			}
			
		]
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "获取车配任务详情-获取订单信息失败咯"
	});
	//关闭请求
	res.end();
});
/* 车配任务详情-获取打卡信息 */
router.post('/order/cardInfo', function(req, res, next) {
	var _data = req.body,
		mock = null;
	if (_data.error) {
		notifierMsg.errorMsg(res);
		return false;
	}

	mock = Mock.mock({
		'carNumber': '5678',
		'carType': '1',
		'driverId': '7FFGG',
		'driverName': '司机嘟嘟',
		'driverPhone': '15880356789',
		'punchInfo': [
			{
			    "receiverFlag": false,
			    "shopName": "金众达",
			    "userName": "蒋庆明",
			    "province": "浙江省",
			    "city": "杭州市",
			    "area": "余杭区",
			    "addressDetail": "银杏路11号",
			    "hasArrived": true,
			    "hasLeft": true,
			    "serialNumber": 0,
			    "leaveTime": 1503696703000,
			    "arriveTime": 1503696699000,
			    "actualLeaveAddress": "浙江省杭州市江干区九堡镇东湖高架路",
			    "actualArriveAddress": "浙江省杭州市江干区九堡镇东湖高架路八堡家园"
			},
			{
			    "receiverFlag": true,
			    "shopName": "绿茶萧山店 ",
			    "userName": "吴姐",
			    "province": "浙江省",
			    "city": "杭州市",
			    "area": "萧山区",
			    "addressDetail": "银隆百货主楼B楼第二层商铺B213-B216号  ",
			    "hasArrived": true,
			    "hasLeft": true,
			    "serialNumber": 1,
			    "leaveTime": 1483323600000,
			    "arriveTime": 1483236900000,
			    "actualLeaveAddress": "浙江省杭州市江干区九堡镇沙县小吃(八堡家园南)八堡家园",
			    "actualArriveAddress": "浙江省杭州市江干区九堡镇沙县小吃(八堡家园南)八堡家园"
			},
		]
	});

	//返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: mock,
		"resultDesc": "获取打卡信息失败咯"
	});
	//关闭请求
	res.end();
});




module.exports = router;