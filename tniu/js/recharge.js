$(function() {
	var path="https://api.51tniu.com/tniu/";

	$(".pay").css({
		"height": $(".content").height() + "px"
	});
	$(".complete").css({
		"height": $(".content").height() + "px"
	});
	//点击微信，支付宝支付方式切换
	$(".weichat").click(function() {
		$(".wx").css({
			"display": "block"
		});
		$(".zf").css({
			"display": "none"
		});
		$(this).addClass("weix");
		$(this).removeClass("noselect");
		$(this).next().addClass("noselect");
		$(this).next().removeClass("zhifb");
	});
	$(".wallt").click(function() {
		$(".wx").css({
			"display": "none"
		});
		$(".zf").css({
			"display": "block"
		});
		$(this).addClass("zhifb");
		$(this).removeClass("noselect");
		$(this).prev().addClass("noselect");
		$(this).prev().removeClass("weix");
	});

	//点击天牛号充值
	$(".log_right").click(function() {
		$(".tniu_number").css({
			"display": "block"
		});
	});
	//点击close 关闭充值弹窗
	$(".close").click(function() {
		$(".tniu_number").css({
			"display": "none"
		});
		$("#tniuId").val("");
		$(".please").text("");
	});

	//登录和未登录状态下确认支付显示
	if($(".user_nologin").display == "block") {
		$(".confirm").removeClass("noselect");
		$(".confirm").addClass("zhifb");
	} else {
		$(".confirm").removeClass("zhifb");
		$(".confirm").addClass("noselect");
	}

	//点击弹窗确认
	$(".cz_confirm").on("click keyup focus", function() {
		var reg = /^[0-9]*$/;
		var tniuId = $(".input_number").val();
		if(tniuId == '') {
			$(".please").text("请输入天牛号");
		} else if(!reg.test(tniuId)) {
			$(".please").text("请输入数字");
		} else {
			$.ajax({
				url: path + 'webpay/queryTniuId',
				type: 'POST',
				async: true,
				dataType: "json",
				data: {
					"tniuId": tniuId
				},
				/*	contentType: "application/json",*/
				success: function(data) {
					var result = data;
					var res = []; // 创建数组
					if(result.status == 0) {
						var obj = result.data;
						//用户信息
						$("#uid").val(obj.uid)
						$(".tniu_number").css({
							"display": "none"
						});
						$(".user_nologin").css({
							"display": "none"
						});
						$(".login").css({
							"display": "block"
						});
						if((obj.avatar == undefined) || (obj.avatar == "")) {
							$(".head_portrait").css({
								"background-image": "url(img/man.png)"
							});
						} else {
							$(".head_portrait").css({
								"background-image": "url(" + obj.avatar + ")"
							}); //头像
						}

						$(".nickname").text(obj.nickname); //昵称
						if((obj.marketAge == undefined) || (obj.marketAge == "")) {
							$("#guage").text("无"); //股龄
						} else {
							$("#guage").text(obj.marketAge); //股龄
						}
						if(obj.vipPic != "") {
							$(".nickname").addClass("vipcolor");
							$(".nickname").removeClass("novipcolor");
						} else {
							$(".nickname").removeClass("vipcolor");
							$(".nickname").addClass("novipcolor");
						}
						$(".level").css({
							"background-image": "url(" + obj.vipPic + ")"
						}); //等级

						$(".log_right").text("切换账号");
						$(".log_right").addClass("qiehuan");
						$(".qiehuan").click(function() {
							$(".log_right").text("天牛号充值");
							$("#tniuId").val("");
							$(".please").text("");
							$(".tniu_number").css({
								"display": "block"
							});
							$(".user_nologin").css({
								"display": "block"
							});
							$(".login").css({
								"display": "none"
							});
							$(".confirm").removeClass("zhifb");
							$(".confirm").addClass("noselect"); //退出登录信息清除
							$(".head_portrait").css({
								"background-image": ""
							}); //头像
							$(".level").css({
								"background-image": ""
							}); //等级
							$(".nickname").text(""); //昵称
							$("#guage").text(""); //股龄

						});
						if($(".user_nologin").display == "block") {
							$(".confirm").removeClass("zhifb");
							$(".confirm").addClass("noselect");
						} else {
							var choices = $(".choicebox").length;
							if(choices == 0) {
								$(".confirm").removeClass("zhifb");
								$(".confirm").addClass("noselect");
							} else {
								$(".confirm").removeClass("noselect");
								$(".confirm").addClass("zhifb");
							}
						}
					} else {
						$(".please").text("你输入的天牛号有误");
					}
				}
			});

		}

	});

	$(".back").click(function() {
		$(".pay").css({
			"display": "none"
		});
	});

	$("#productList").empty();
	$.ajax({
		url: path + 'webpay/getMemberProducts',
		type: 'GET',
		async: true,
		dataType: "json",
		contentType: "application/json",
		success: function(data) {
			var result = data;
			var res = []; // 创建数组
			if(result.status == 0) {
				var dataArray = result.data
				for(var x in dataArray) {
					if(x == 0) {
						res.push("<div class='choicebox on'>");
						res.push("<span class='tit'>￥" + dataArray[x].price + "元/" + dataArray[x].numOfDay + "天</span>")
						if(dataArray[x].presentTb == 0 || dataArray[x].presentTb == undefined) {
							res.push("<span class='tip'>额外赠送" + dataArray[x].presentGrowth + "点成长值</span>");
						} else {
							res.push("<span class='tip'>额外赠送" + dataArray[x].presentTb + "T币和" + dataArray[x].presentGrowth + "点成长值</span>");
						}
						res.push("<input name='productId' value='" + dataArray[x].id + "' style='display:none;'>");
						res.push("<input name='price' value='" + dataArray[x].price + "' style='display:none;'>");
						res.push("</div>")
						$("#amount").text(dataArray[x].price);

					} else {
						res.push("<div class='choicebox'>");
						res.push("<span class='tit txtcolor'>￥" + dataArray[x].price + "元/" + dataArray[x].numOfDay + "天</span>")
						if(dataArray[x].presentTb == 0 || dataArray[x].presentTb == undefined) {
							res.push("<span class='tip graycolor'>额外赠送" + dataArray[x].presentGrowth + "点成长值</span>");
						} else {
							res.push("<span class='tip graycolor'>额外赠送" + dataArray[x].presentTb + "T币和" + dataArray[x].presentGrowth + "点成长值</span>");
						}
						res.push("<input name='productId' value='" + dataArray[x].id + "' style='display:none;'>");
						res.push("<input name='price' value='" + dataArray[x].price + "' style='display:none;'>");
						res.push("</div>")
					}
				}
				$("#productList").html(res.join(""));
				//显示支付金额
				var choicebox = $(".choicebox");
				// var arr = [1,28,58,88,188,388,688];
				$.each(choicebox, function(i) {
					$(this).index = i;
					$(this).click(function() {
						$(this).addClass("on");
						$(this).siblings().children(".tit").addClass("txtcolor");
						$(this).siblings().children(".tip").addClass("graycolor");
						$(this).siblings().removeClass("on");
						$(this).children().removeClass("txtcolor graycolor")
						if($(choicebox[i]).hasClass("on")) {
							var price = $(choicebox[i]).children("input[name='price']").val();
							$("#amount").text(price);
						}
					});
				});

				$(".confirm").click(function() {
					var payType = 0;
					//订单id
					var wid = $(".on").children("input[name='productId']").val();
					var uid = $("#uid").val();
					var selects = $(".mode_select").children();
					$.each(selects, function(i) {
						$(this).index = i;
						if($(this).hasClass("noselect")) {
							if(i == 1) { //微信
								payType = 0;
							} else if(i == 0) {
								payType = 1;
							}
						}
					});
					if($(this).hasClass("noselect")) {
						$(".pay").css({
							"display": "none"
						});

					} else {
						$.ajax({
							url: path + 'webpay/preOrder',
							type: 'POST',
							async: false,
							dataType: "json",
							data: {
								"uid": uid,
								"payType": payType,
								"productId": wid
							},
							/*	contentType: "application/json",*/
							success: function(data) {
								var result = data;
								if(result.status == 0) {
									var traNo = result.data;
									$.each(selects, function(i) {
										$(this).index = i;
										if($(this).hasClass("noselect")) {
											$(".pay").css({
												"display": "block"
											});
											var wprice = $(".on").children("input[name='price']").val();
											$(".pay_money").text(wprice);
											if(i == 1) { //微信
												$(".wx_title").text("正在使用微信进行支付");
												$(".code_bot").text("请使用微信扫描二维码进行支付");
												$(".scan_left").css({
													"background-image": "url(img/weichat.png)"
												});
												$("#chat").css({
													"background-image": "url(" + path + "webpay/qrCodePay?transactionNo=" + traNo + "&uid=" + uid + ")"
												});
											} else if(i == 0) { //支付宝
												$(".wx_title").text("正在使用支付宝进行支付");
												$(".code_bot").text("请使用支付宝扫描二维码进行支付");
												$(".scan_left").css({
													"background-image": "url(img/zhifb.png)"
												});
												$("#chat").css({
													"background-image": "url(" + path + "webpay/qrCodePay?transactionNo=" + traNo + "&uid=" + uid + ")"
												});
											}
										}
									});
									setInterval(function() {
										$.ajax({
											url: path + 'webpay/queryWebOrder',
											type: 'POST',
											async: true,
											dataType: "json",
											data: {
												"transactionNo": traNo
											},
											success: function(data) {
												if(data.status == 0) {
													traNo = "";
													//订单支付完成跳转到支付完成的页面
													$(".complete").css({"display": "block"});
													$(".complete_btn").click(function(){
														$(".complete").css({"display": "none"});
														$(".pay").css({"display": "none"});
													});
													$(".complete_back").click(function() {
														$(".pay").css({"display": "none"});
														$(".complete").css({"display": "none"});
													});
												}
											}
										});
									}, 5000);

								} else {
									$(".pay").css({
										"display": "none"
									});
								}
							}
						})
					}

				});

			}
		}
	});

});