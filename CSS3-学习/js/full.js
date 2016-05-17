window.onload = function(){
				//获取瀑布流层
				waterfull("main","box");
			}
			function waterfull(parents,son){
				//获取主要层
				var oMain = document.getElementById(parents);
				//alert(main);
				var oBoxs = getClassname(main,son);
				alert(oBoxs.length)
			}
			
			
			//封装获取class 类函数
			function getClassname(main,classname){
	var otag = main.getElementsByTagName("*");  //获取main下面所有元素
	var boxarr = [];   //创建数组用于收集所有获取的元素
	for (var i = 0;i<otag.length;i++) {
		if(otag[i].className == classname){
			boxarr.push(otag[i])
		}
	}
	return boxarr;
	//alert(boxarr.length)
}