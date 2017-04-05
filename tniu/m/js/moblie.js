window.onload=function(){
	AdobeEdge.loadComposition('m1', 'EDGE-25115836', {
    	scaleToFit: "width",
    	centerStage: "horizontal",
    	minW: "100%",
    	maxW: "1080px",
   		width: "640px", 
    	height: "auto"
	}, {"dom":{}}, {"dom":{}});
	
	scaleW=window.innerWidth/320;
	scaleH=window.innerHeight/480;
	var resizes = document.querySelectorAll('.resize');
    for (var j=0; j<resizes.length; j++) {
       resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
	   resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
	   resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
	   resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px';

    }
	    
	var scales = document.querySelectorAll('.txt');
	for (var i=0; i<scales.length; i++) {
		ss=scales[i].style;
		ss.webkitTransform = ss.MsTransform = ss.msTransform = ss.MozTransform = ss.OTransform =ss.transform='translateX('+scales[i].offsetWidth*(scaleW-1)/2+'px) translateY('+scales[i].offsetHeight*(scaleH-1)/2+'px)scaleX('+scaleW+') scaleY('+scaleH+') ';
	}

		  
    var mySwiper = new Swiper ('.swiper-container', {
   		direction : 'vertical',
   		pagination: '.swiper-pagination',
// 		mousewheelControl : true,
   		onInit: function(swiper){    //Swiper2.x的初始化是onFirstInit
//	   		swiperAnimateCache(swiper);   //隐藏动画元素 
//	   		swiperAnimate(swiper);    //初始化完成开始动画
		},
	    onSlideChangeEnd  : function(swiper){
//  		alert(swiper.activeIndex);
//			swiperAnimate(swiper);  //每个slide切换结束时也运行当前slide动画
			var Stage2 = document.getElementById("Stage2");
			var attStage2 = Stage2.getAttribute('class');
			var Stage3 = document.getElementById("Stage3");
			var attStage3 = Stage3.getAttribute('class');
			var Stage4 = document.getElementById("Stage4");
			var attStage4 = Stage4.getAttribute('class');
			
			if((attStage2.length ==0 ) && (swiper.activeIndex==1)){ 
				Stage2.setAttribute("class","EDGE-25115838");
				AdobeEdge.loadComposition('m2', 'EDGE-25115838', {
				    scaleToFit: "width",
				    centerStage: "horizontal",
				    minW: "320px", 
				    maxW: "1080px",
				    width: "640px",
				    height: "auto"
				}, {"dom":{}}, {"dom":{}});
			}
			if((attStage3.length ==0 ) && (swiper.activeIndex==2)){
//				var Stage3 = document.getElementById("Stage3");
				Stage3.setAttribute("class","EDGE-25115839");
				AdobeEdge.loadComposition('m3', 'EDGE-25115839', {
				    scaleToFit: "width",
				    centerStage: "horizontal",
				    minW: "320px",
				    maxW: "1080px",
				    width: "640px",
				    height: "auto"
				}, {"dom":{}}, {"dom":{}});
			}
			if((attStage4.length ==0 ) && (swiper.activeIndex==3)){ 
//				var Stage4 = document.getElementById("Stage4");
				Stage4.setAttribute("class","EDGE-25115840");
				AdobeEdge.loadComposition('m4', 'EDGE-25115840', {
				    scaleToFit: "width",
				    centerStage: "horizontal",
				    minW: "320px",
				    maxW: "1080px",
				    width: "640px",
				    height: "auto"
				}, {"dom":{}}, {"dom":{}});
			}
//			 mySwiper.detachEvents(); 
	    }	  
	});   
	
	
}
