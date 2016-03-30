window.onload = function(){
	waterfull("main","box");
	var data = {"img":[{"src":"11.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"}]}
	window.onscroll = function(){
		if(full()){
			for (var i = 0;i<data.img.length;i++) {
				var main = document.getElementById("main");
				var obox = document.createElement("div");
				obox.className = "box";
				main.appendChild(obox);
				
				var opic = document.createElement("div");
				opic.className = "pic";
				obox.appendChild(opic);
				
				var oimg = document.createElement("img");
				oimg.src = "img/"+data.img[i].src;
				opic.appendChild(oimg)
				
			}
			waterfull("main","box");
		};
	}
}
function waterfull(parentbox,showbox){
	var main = document.getElementById(parentbox);   //获取main元素
	var box = getClassname(main,showbox); 
	var oboxW = box[0].offsetWidth;     //获取盒子的宽度
	//alert(oboxW)
	var cols =Math.floor(document.documentElement.clientWidth/oboxW);//当前窗口可以放置图片的列数
	//console.log(cols);
	main.style.cssText = "width:"+cols*oboxW+"px"//设置main容器定宽
	harr = []  //存放每一列高度的数组
	for (var i = 0;i<box.length;i++) {
		if(i<cols){
			harr.push(box[i].clientHeight)
		}else{
		var minH = Math.min.apply(null,harr);//获取数组最小高度的值
		var indexminH = getminHindex(harr,minH);//获取最小高度索引
		box[i].style.position = "absolute";
		box[i].style.top = minH + "px";
		//box[i].style.left = oboxW*indexminH + "px"; //方法一
		box[i].style.left = box[indexminH].offsetLeft + "px";
		harr[indexminH]+=box[i].offsetHeight;
	}
	}
	
}

//获取最小高度值索引
function getminHindex(arr,val){
	for (var i in arr) {
		if(arr[i]==val){
			return i;
		}
	}
}

//获取 class 元素标签
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
//判断是否需要加载   滚动到最后一块元素的时候加载
function full(){
	//重新获取主要元素
	var main = document.getElementById("main");
	var box = getClassname(main,"box");
	//获取元素距离高度
	//===============最后一个元素距离顶部的距离   =======加上==========最后一块自己高度的一半
	var lastboxH = box[box.length-1].offsetTop + Math.floor(box[box.length-1].offsetHeight/2);
	//滚动条滚动的距离顶部的距离
	var scrollwinTop = document.body.scrollTop || document.documentElement.scrollTop;
	//窗口高度
	var winH = document.body.clientHeight || document.documentElement.clientHeight;
	
	return(lastboxH<scrollwinTop+winH)?true:false 
	
	
}
