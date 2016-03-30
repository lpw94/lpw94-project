define(function(require,exports){
	require('../../js/jquery.nav.js');
	require('../../js/jquery.waypoints.js');
	require('../../js/odometer.min.js');
	
	exports.run = function(){
		$('.fadeInUp').waypoint({
			  	handler:function(){
			  		$(this.element).addClass('show')  // 注意 $(this.element)
			  	},
			  	offset: "80%"
			  });
        $(".leadbox li").hover(function(){
            $( this).find("i").addClass("changecolor")
        },function(){
            $( this).find("i").removeClass("changecolor")
        })

        $(".peo").on("click",function(){
            $(".menber-dropdown").toggle();
            $(".local-dropdown").hide();
        })
        $(".local").on("click",function(){
            $(".local-dropdown").toggle();
            $(".menber-dropdown").hide();
        })

        $(".menu").on("click",function(){
            $(this).css("color","#888888")
            $(".leadbox").toggle();
            $(".menber-dropdown").hide();
            $(".local-dropdown").hide();
        })

        $(".back").on("click",function(){
            $(".leadbox").show();
            $(".menber-dropdown").hide();
            $(".local-dropdown").hide();
        })

        $(".button").on("click",function(){
            $(".kuang").show();
            $(".bar").css("opacity","0.8")
            $("#vedio").trigger('pause');
        })
        $(".bar").on("click",function(){
            $(".kuang").hide();
            $(".bar").css("opacity","0.4")
            $("#vedio").trigger('play');
        });
        //页面导航引用
        $(".sticky-nav").smartFloat();
        $('#nav_bar').onePageNav();
        
        
        setTimeout(function() {
					$('.odometer').html(25000);
				}, 200);
				var _startNum = 25000;
				var _odometer = window.setInterval(function() {
				_startNum++;
				if (_startNum > 30000) {
					_startNum = 25000;
				}
				
				$('.odometer').html(_startNum);
				}, 2500);
	};
});
   
   
  
