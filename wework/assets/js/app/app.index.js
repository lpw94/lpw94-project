/**
 * Created by hh on 2015/9/10.
 */

define(function(require,exports){
    exports.index = function(){
        /**
         * Created by lnan on 2015/8/25.
         */
            //滚动时头部的变化
        $(window).scroll(function(){
            var _doc=$(document);

            if (_doc.scrollTop() >= 500) {
                $(".head").css("position","fixed");
            } else {
                $(".head").css("position","relative");
            }
        })
        $(document).ready(function(){
            //点击头部导航弹出层
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
                if($(this).hasClass("active")){
                    $(".right-drop").hide();
                    $(".menber-dropdown").hide();
                    $(".local-dropdown").hide();
                    $(this).removeClass("active")
                }else{
                    $(".right-drop").show();
                    $(this).addClass("active");
                }
            })
            $(function() {
                if (document.body.offsetWidth < 768) {
                    $(".back").on("click", function () {
                        $(".leadbox").show();
                        $(".menber-dropdown").animate({left: '+100%'}, "slow");
                        $(".local-dropdown").animate({left: '+100%'}, "slow");
                    })
                }
                $(".peo").on("click",function(){
                    $(".menber-dropdown").animate({left: '0'}, "slow");
                    $(".local-dropdown").hide();
                })
                $(".local").on("click",function(){
                    $(".local-dropdown").animate({left: '0'}, "slow");
                    $(".menber-dropdown").hide();
                })
            })

            //视频弹出层
            $(".video-click-control").hover(function(){
                $(".video-control p").show();
            },function(){
                $(".video-control p").hide();
            })
            $(".video-click-control").on("click",function(){
                $(".barbox").show();
                $(".bar-second").show();
                $(".bar-second").css("position","absolute");
                $("#vedio").trigger('pause');
            })
            //引导注册弹出层
            $(".bar-second").on("click",function(){
                $(".barbox").hide();
                $(".bar-second").hide();
                $("#vedio").trigger('play');
                $(".menber-detial").hide();
                $(".bar-second").css("position","fixed")
            })
            $(".video-click-btn").on("click",function(){
                $(".menber-detial").fadeIn();
                $(".bar-second").show();
            })
            $(".close").on("click",function(){
                $(".menber-detial").fadeOut();
                $(".bar-second").hide();
            })
            //membership点击

            $(function(){
                if( document.body.offsetWidth > 768 ){
                    $(".ship-item i:eq(0)").show();
                    $(".slide-item:eq(0)").show();
                    $(".ship-item").each(function(index){
                        $(this).click(function(){
                            $(".ship-item").removeClass("ship-item-bg");
                            $(".ship-item i").hide();
                            $(".slide-item").hide();
                            $(this).addClass("ship-item-bg");
                            $(this).find("i").show();
                            $(".slide-item").eq(index).show();
                            //轮播
                            jQuery(".slideBox").eq(index).slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                        })
                    })
                    jQuery(".slideBox").eq(0).slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                    /*
                     //轮播
                     jQuery("#slide1").slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                     jQuery("#slide2").slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                     jQuery("#slide3").slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                     jQuery("#slide4").slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                     jQuery("#slide5").slide({mainCell:".bd ul",effect:"left",autoPlay:true,trigger:"click"});
                     */
                }
            })
            $(function(){
                if( document.body.offsetWidth < 768 ){
                    $(".slide-item").hide();
                }
            })

            //events
            $(".act-item").hover(function () {
                $(this).find(".date").addClass("on");
                $(this).find(".attend").css("color","#edae49");
            },function(){
                $(this).find(".date").removeClass("on");
                $(this).find(".attend").css("color","#fff");

            })

        })


    }
})
