$(function(){
	$(".pay").css({"height":$(".content").height()+"px"});
	//点击微信，支付宝支付方式切换
	$(".weichat").click(function(){
		$(".wx").css({"display":"block"});
		$(".zf").css({"display":"none"});
		$(this).addClass("weix");
		$(this).removeClass("noselect");
		$(this).next().addClass("noselect");
		$(this).next().removeClass("zhifb");
	});
	$(".wallt").click(function(){
		$(".wx").css({"display":"none"});
		$(".zf").css({"display":"block"});
		$(this).addClass("zhifb");
		$(this).removeClass("noselect");
		$(this).prev().addClass("noselect");
		$(this).prev().removeClass("weix");
	});
	
	//显示支付金额
	var choicebox = $(".choicebox");
	var arr = [1,28,58,88,188,388,688];
	$.each(choicebox, function(i) {
		$(this).index = i;
		$(this).click(function(){
			$(this).addClass("on");
			$(this).siblings().children(".tit").addClass("txtcolor");
			$(this).siblings().children(".tip").addClass("graycolor");
			$(this).siblings().removeClass("on");
			$(this).children().removeClass("txtcolor graycolor")
			if($(choicebox[i]).hasClass("on")){
				$("#amount").text(arr[i]);
			}
		});
		
		
	});
	
	//点击天牛号充值
	$(".log_right").click(function(){
		$(".tniu_number").css({"display":"block"});
	});
	//点击close 关闭充值弹窗
	$(".close").click(function(){
		$(".tniu_number").css({"display":"none"});
	});
	
	//登录和未登录状态下确认支付显示
	if($(".user_nologin").display=="block"){
		$(".confirm").removeClass("noselect");
		$(".confirm").addClass("zhifb");
	}else{
		$(".confirm").removeClass("zhifb");
		$(".confirm").addClass("noselect");
	}
	
	//点击弹窗确认
	$(".cz_confirm").on("click keyup",function(){
		if($(".input_number").val()==""){
			$(".please").text("请输入天牛号");
		}else if($(".input_number").val()=="123"){
			$(".please").text("您输入的天牛号有误");
		}else{ 
			//用户信息
			$(".tniu_number").css({"display":"none"});
			$(".user_nologin").css({"display":"none"});
			$(".login").css({"display":"block"});
			$(".head_portrait").css({"background-image":"url(img/head.jpg)"}); //头像
			$(".level").css({"background-image":"url(img/head.jpg)"});    //等级
			$(".nickname").text("1231");     //昵称
			$("#guage").text("12");     //股龄
			
			$(".log_right").text("切换账号");
			$(".log_right").addClass("qiehuan");
			$(".qiehuan").click(function(){
				$(".log_right").text("天牛号充值");
				$(".tniu_number").css({"display":"block"});
				$(".user_nologin").css({"display":"block"});
				$(".login").css({"display":"none"});
				$(".confirm").removeClass("zhifb");
				$(".confirm").addClass("noselect");             //退出登录信息清除
				$(".head_portrait").css({"background-image":""}); //头像
				$(".level").css({"background-image":""});    //等级
				$(".nickname").text("");     //昵称
				$("#guage").text("");     //股龄
				
			});
			if($(".user_nologin").display=="block"){
				$(".confirm").removeClass("zhifb");
				$(".confirm").addClass("noselect");
				
			}else{
				$(".confirm").removeClass("noselect");
				$(".confirm").addClass("zhifb");
			}
		}
		
	});
	
	
	$(".confirm").click(function(){
		if($(this).hasClass("noselect")){
			$(".pay").css({"display":"none"});
		}else{
			var selects = $(".mode_select").children();
			$.each(selects, function(i) {
				$(this).index = i;
				if($(this).hasClass("noselect")){
					$(".pay").css({"display":"block"});
					$(".pay_money").text($("#amount").text());
					if(i==1){   //微信
						$(".wx_title").text("请使用微信进行支付");
						$(".code_bot").text("请使用微信扫描二维码进行支付");
						$(".scan_left").css({"background-image":"url(img/weichat.png)"});
						$("#chat").css({"background-image":"url(img/down_code.png)"});
					}else if(i==0){    //支付宝
						$(".wx_title").text("请使用支付宝进行支付");
						$(".code_bot").text("请使用支付宝扫描二维码进行支付");
						$(".scan_left").css({"background-image":"url(img/zhifb.png)"});
						$("#chat").css({"background-image":"url(img/)"});
					}
				}
			});
		}
		
	});
	
	$(".back").click(function(){
		$(".pay").css({"display":"none"});
	});
	
	
	
	
	
	
	
	
});