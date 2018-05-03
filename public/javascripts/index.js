

	dd.config({
		agentId: _config.agentid, // 必填，微应用ID
		corpId: _config.corpId, //必填，企业ID
		timeStamp: _config.timeStamp,  // 必填，生成签名的时间戳
		nonceStr: _config.nonceStr, // 必填，生成签名的随机串
		signature: _config.signature, // 必填，签名
		type:0,   //选填，0表示微应用的jsapi，1表示服务窗的jsapi，不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
		jsApiList: ['device.notification.confirm', // 必填，需要使用的jsapi列表，注意：不要带dd。
			'device.notification.alert',
			'device.notification.prompt',
			'biz.chat.chooseConversation',
			'biz.ding.post', 'biz.util.open', 'biz.user.get', 'biz.contact.choose'
		]
	});

	dd.error(function (error) {
		/**
		 
		    message:"错误信息",//message信息会展示出钉钉服务端生成签名使用的参数，请和您生成签名的参数作对比，找出错误的参数
		    errorCode:"错误码"
		 }
		**/
		// alert('dd errors111: ' + JSON.stringify(err));
	});

	dd.ready(function () {

		dd.device.notification.confirm({
			message: "你爱我吗",
			title: "提示",
			buttonLabels: ['爱', '不爱'],
			onSuccess : function(result) {
			},
			onFail : function(err) {}
			});
	});



