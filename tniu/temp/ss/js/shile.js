$(function(){
	var w=$(".viewport").width();
	var h=$(".viewport").height();
	zoom = w/320;
	alert(zoom);
	
	
	//遮罩效果
	function zhao(){
		var w=$(".viewport").width();
		var h=$(".viewport").height();
		$("#zhezhao").css({
			"width":w+"px",
			"height":h+"px",
			"background-size":w+"px "+h+"px",
			"background-attachment":"fixed",
			"background-color":"rgba(20,20,20,0.4)"
		})	
	}
	//最新指数切换背景色
	var zd = $(".three").text();
	if(zd.indexOf('+') > 0){
		$("#new1").removeClass("gree");
		$("#new1").attr("class","re");
		
	}else{
		$("#new1").removeClass("re");
		$("#new1").attr("class","gree");
	}	

	
	//倒计时
	function daoji(){
		var time1 = new Date();
		var time2 = new Date();
		time1.setSeconds(60);
		var time3 =time1-time2;
		var sec= Math.floor((time3/1000)%60);
		if(sec.toString().length==1){
			$("#daoji").text("0"+sec);
		}else{
			$("#daoji").text(sec);
		}
	}
	daojiout = setInterval(daoji,1000);
	//倒计时结束
	
	//最新指数时间开始
	function kaipan(){
		var time=new Date();
		var curweek = time.getDay();   //获得当前星期
	//	console.log(curweek);
		if(0<curweek<6){
			
			var hour= time.getHours();      //获取当前小时数(0-23)
			var minu = time.getMinutes();    //获取当前分钟数(0-59)
			var secon = time.getSeconds();    //获取当前秒数(0-59)
	//		var curtime = time.toLocaleTimeString();    //分上午下午
	//		console.log(curtime);
			if((hour.toString().length==1)){
				$(".xia").text("0"+hour+":"+minu+":"+secon);
			}else if((minu.toString().length==1)){
				$(".xia").text(hour+":"+"0"+minu+":"+secon);
			}else if((secon.toString().length==1)){
				$(".xia").text(hour+":"+minu+":"+"0"+secon);
			}else{
				$(".xia").text(hour+":"+minu+":"+secon);
			}
		}//else if(5<curweek<8){
	//		
	//	}
	}
	setInterval(kaipan,1000);

function jingcai(){
		kaipan();
		 curtime = $(".xia").text();
		if((curtime<"09:30:00")){                //竞猜未开始
			alert("竞猜未开始");
			$(".jing").text("竞猜还未开始，请耐心等待");
			clearInterval(daojiout);
			$("#daoji").text("00");
		}else if((curtime>"15:00:00")){           //竞猜未开始
			$(".jing").text("竞猜还未开始，请耐心等待");
			alert("竞猜结束");
			clearInterval(daojiout); 
			$("#daoji").text("00");
		}else if((curtime>"11:30:00")&&(curtime<"13:00:00")){    //竞猜未开始
			alert("竞猜未开始");
			$(".jing").text("竞猜还未开始，请耐心等待");
			clearInterval(daojiout);
			$("#daoji").text("00");
		}else if((curtime>"13:00:00")&&(curtime<"15:00:00")){    //竞猜时间
			setInterval(daojiout);
			daoji();
			var foty = $("#daoji").text();
			//alert(foty);
			
			if(foty>20){               //前40s可以竞猜
				alert("正在竞猜");
				
				function gues(){
					var time1=new Date();
					var hour1= time1.getHours();      //获取当前小时数(0-23)
					var minu1 = time1.getMinutes();
					if((hour1.toString().length==1)){
						$(".jing").text(curtime1="0"+hour1+":"+(minu1+1));
					}else if((minu1.toString().length==1)){
						$(".jing").text(curtime1=hour1+":"+"0"+(minu1+1));
					}else{
						$(".jing").text(curtime1=hour1+":"+(minu1+1));
					}
					$(".jing").text("竞猜："+curtime1+"分整 上证指数尾数最后一位数字");
				}
				setInterval(gues,100);
				
			}else if((foty>=0)&&(foty<=20)){       //后20s不能竞猜，竞猜结束
				alert("竞猜结束");
//				$(".jing").text("竞猜还未开始，请耐心等待");
			}
		}
		
}
jingcai();
//最新指数结束

//下注
function xiazhu(){
	lis = $("#ul").children();
	//alert(lis.length);
	$.each(lis, function(i) {	
		$(this).click(function(){
			$(this).index=i;
			$(this).children(":first").attr("src", "img/1-"+i+"@2x.png");
			$(this).prevAll().children(":first").attr("src", "img/0-"+(i-1)+"@2x.png");
			$(this).nextAll().children(":first").attr("src", "img/0-"+(i+1)+"@2x.png");
			//alert(i);
			//点击0-9图片颜色切换
			for(var n=0;n<lis.length;n++){
				if(i==n){
					for(var m=(i+2);m<lis.length;m++){
						$(lis[m]).children(":first").attr("src", "img/0-"+m+"@2x.png");	
					}	
					for(var m=0;m<i;m++){
						$(lis[m]).children(":first").attr("src", "img/0-"+m+"@2x.png");	
					}
				}	
			}
			
			//点击0-9减的T币数值
			if($("#zuo").hasClass("hong")){
				balance = $("#balance").text();
				balance -= 10;
				$("#balance").text(balance);
			}else{
				balance = $("#balance").text();
				balance -= 100;
				$("#balance").text(balance);	
			}
			
			//弹出减多少金币
			function tan(){
				zhao();
				$("#zhezhao").css({"display":"block"});
				$(".jian").css({"display":"block"});
				setTimeout(function(){$("#zhezhao").hide();},100);//1秒后执行该方法
				
				//bi();
//				alert(k);
			}
			tan();
			
			
			
			//每点一次减T币
			
			var sheng =  $("#balance").text();
			//alert(sheng);
			//如果T比余额不足，弹出余额不足
			if(sheng<=10){
				zhao();
				$("#zhezhao").css({"display":"block"});
				$(".buzu").css({"display":"block"});
				setTimeout(function(){$("#zhezhao").hide();},100);
			}else {
				//alert(0);	
			}
			
			//alert(curtime);
			//9:30之前竞猜未开始
			if(curtime<"09:30:00"){
				zhao();
				$("#zhezhao").css({"display":"block"});
				$(".nostart").css({"display":"block"});
				setTimeout(function(){$("#zhezhao").hide();},100);
				
			//15:00之后竞猜结束
			}else if(curtime>"15:00:00"){
				zhao();
				$("#zhezhao").css({"display":"block"});
				$(".over").css({"display":"block"});
				setTimeout(function(){$("#zhezhao").hide();},100);
			}            
			
		})		
		
		
			
	})
}
xiazhu();



//切换乘以多少T币下注
function bi(){
	
	xias = $(".xiazhu").children();
	$.each(xias, function(k) {		
		$(this).click(function(){
			$(this).index=k;	
			$(this).attr("class","hong");
			$(this).prevAll().attr("class","hui");
			$(this).nextAll().attr("class","hui");
			$(this).prevAll().removeClass("hong");
			$(this).nextAll().removeClass("hong");
			//xiazhu();
			if(k==1){
				$(".ulspan").text("x100T币");
				$(".jian").text("-100T币");
				
			}else{
				$(".ulspan").text("x10T币");
				$(".jian").text("-10T币");
			}
			
					
		})
		
	})
}
bi();






	
})