function Drag(id){
	this.disX = 0;
	this.disY = 0;
	var _this = this;
	this.oDiv = document.getElementById(id);
	
	this.oDiv.onmousedown = function(ev){
		_this.Dragdown(ev);
	} 
	
}
Drag.prototype.Dragdown = function (ev){
		var oEvent = ev||event;
		var _this = this;
		this.disX = oEvent.clientX - this.oDiv.offsetLeft;
		this.disY = oEvent.clientY - this.oDiv.offsetTop;
		
		document.onmousemove = function(ev){
			_this.Dragmove(ev);
		} 
		
		document.onmouseup = function(){
			_this.Dragup();
		} 
	}
Drag.prototype.Dragmove = function (ev){
			var oEvent = ev||event;
			var _this = this;
			this.oDiv.style.left = oEvent.clientX - this.disX + "px";
			this.oDiv.style.top = oEvent.clientY -this.disY + "px";
			
		}
Drag.prototype.Dragup = function (){
			document.onmousemove = null;
			document.onmouseup = null;
			
		}