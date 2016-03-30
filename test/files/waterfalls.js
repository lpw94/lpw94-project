var currentWidth = 630;
function floatgoods(){
	var winWidth = $(window).width();
	var conWidth;
	if(winWidth < 600) {
		conWidth = 350;
		col = 1
	}
	else if(winWidth < 630) {
		conWidth = 590;
		col = 2
	}  
	else if(winWidth < 660) {
		conWidth = 620;
		col = 2
	}  
	else if(winWidth < 700) {
		conWidth = 650;
		col = 2
	}  
	else if(winWidth < 769) {
		conWidth = 710;
		col = 2
	}
	else if(winWidth < 800) {
		conWidth = 770;
		col = 2
	} 	
	else if(winWidth < 853) {
		conWidth = 800;
		col = 3
	} 
	else if(winWidth < 950) {
		conWidth = 850;
		col = 3;
	}
	else if(winWidth < 1050) {
		conWidth = 950;
		col = 3;
	}
	else if(winWidth < 1200) {
		conWidth = 1050;
		col = 4;
	}
	else if(winWidth < 1300) {
		conWidth = 1150;
		col = 4;
	}
	else if(winWidth < 1400) {
		conWidth = 1250;
		col = 4;
	}
	else if(winWidth < 1500) {
		conWidth = 1400;
		col = 4;
	} 
	else if(winWidth < 1700) {
		conWidth = 1500;
		col = 5;
	} 
	else if(winWidth < 1800) {
		conWidth = 1600;
		col = 5;
	} else {
		conWidth = 1800;
		col = 6;
	}
	if(conWidth != currentWidth) {
		currentWidth = conWidth;
		$('#container').width(conWidth);
		$('#container').BlocksIt({
			numOfCol: col,
			offsetX: 8,
			offsetY: 8
		});
	}
}
$(function(){
	//瀑布流
	$("img.lazy").lazyload({		
		 effect:"fadeIn"
	});	
	floatgoods();
	$(window).resize(function() {
		floatgoods();
	});	
});
window.onload = floatgoods;
window.onresize = floatgoods;
