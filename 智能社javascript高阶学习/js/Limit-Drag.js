function LimitDrag(id){
	Drag.call(this,id)
}
for(var i in Drag.prototype){
	LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.Dragmove = function(ev){
	var oEvent = event || ev;
	var _this = this;
	
	
	
	var L = oEvent.clientX - this.disX;
	var T = oEvent.clientY - this.disY;
	
	if(L<0){
		L = 0;
	}else if(L>document.documentElement.clientWidth - this.oDiv.offsetWidth){
		   L = document.documentElement.clientWidth - this.oDiv.offsetWidth;
	}
	
	this.oDiv.style.left = L + "px";
	this.oDiv.style.top = T +"px";
	
	
}