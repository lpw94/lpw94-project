var canvasW = 1200;
var canvasH = 600;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2016,4,21,11,22,45)
var cur = 0;
 
window.onload = function() {

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width = canvasW;
	canvas.height = canvasH;
	
	cur = getcurrent();
	
	render(context);
}

function getcurrent(){
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();
	ret = Math.round(ret/1000);
	
	return ret >=0 ? ret : 0;
}

function render(txt) {
	var hours =  parseInt( cur / 3600);
	var minutes = parseInt( (cur - hours * 3600)/60 );
	var seconds = cur % 60;
	
	
	//alert(hours);
	
	renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) , txt )
    renderDigit( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(hours%10) , txt )
    renderDigit( MARGIN_LEFT + 30*(RADIUS + 1) , MARGIN_TOP , 10 , txt )
    renderDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minutes/10) , txt);
    renderDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minutes%10) , txt);
    renderDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , txt);
    renderDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , txt);
    renderDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) , txt);
}
function renderDigit(x, y, num, txt) {
	//alert(digit[num].length);
	txt.fillStyle = "#0080EA";
	for( var i = 0 ; i < digit[num].length ; i ++ )
        for(var j = 0 ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
            	txt.beginPath();
            	txt.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI )
                txt.closePath()

                txt.fill()
            }
}