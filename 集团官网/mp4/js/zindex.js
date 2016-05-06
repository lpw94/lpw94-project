$(function() {
		/*tab切换*/
//	$(".asition").hide();
//	$(".menu-list li:first").addClass("on");
//	$(".asition:first").show();
//	$(".menu-list li").click(function() {
//		$(".menu-list li").removeClass("on");
//		$(this).addClass("on");
//		var index = $(".menu-list li").index(this);
//		$(".asition").eq(index).show().siblings(".asition").hide();
//		return false;
//	});


	//	$("#nav li").hover(function(){
//		        //$(this).children("a").addClass("on");
//		        
//  			//$("#nav li.on").children("a").parent("bkg").stop(false,false).animate({height:'0'},"fast");
//  			$("#nav li").siblings().children("a").removeClass("on");
//  			$("#nav li").siblings().children("a").children("bkg").stop(false,false).animate({height:'0'},"fast");
//  			$(this).children("a").addClass("on").children("bkg").stop(false,false).animate({height:'100%'},"fast");
//  			
//  			var idx = $("#nav .more").index(this);
//  			$("#subNav .g-wrap .item").eq(idx).animate({top:0},"fast");
//  			
//  		},function(){
//  			$("#nav li.on").children("a").addClass("on");
//  			$(this).children("a").removeClass("on").children("bkg").stop(false,false).animate({height:'0'},"fast");
//  			//$("#nav li.on").children("a").children("bkg").stop(false,false).animate({height:'100%'},"fast");
//  			var idx = $("#nav .more").index(this);
//  			$("#subNav .g-wrap .item").eq(idx).hide();
//  })
//	
	
    // banner 切换
    (function() {
        var banner = $('#banner'),
            pic_c  = banner.find('.pics'),
            pics   = pic_c.children(),
            idx_c  = banner.find('.idxs'),
            idxs   = idx_c.children(),
            btns   = banner.find('.btns a'),
            prev   = btns.filter('.prev'),
            next   = btns.filter('.next'),

            len    = pics.length,
            idx    = 0,
            prev_i = -1,
            max_i  = len - 1,
            curr_p = pics.eq(idx),
            curr_i = idxs.eq(idx),
            delay  = 5000,
            timeout = -1;

        win.on('load', function() {
            idx_recu(0, 1500/len, function() {
                setTimeout(function() {
                    curr_i.addClass('on');
                    auto();
                }, 300);
                idxs.hover(hover);
            });
            banner.hover(function() {
                // prev.stop().fadeIn(300);
                // next.stop().fadeIn(300);
                btns.addClass('on');
            }, function() {
                btns.removeClass('on');
                // prev.stop().fadeOut(300);
                // next.stop().fadeOut(300);
            });
            prev.on('click', function() {fade(idx===0? idx=max_i:--idx)});
            next.on('click', function() {fade(idx===max_i? idx=0:++idx)});
        });

        function fade(idx) {
            clearTimeout(timeout);
            prev_i = idx;
            curr_p.stop(false,true).fadeOut(300);
            curr_p = pics.eq(idx).stop(false,true).fadeIn(300);
            curr_i.removeClass('on');
            curr_i = idxs.eq(idx).addClass('on');
            auto();
        }
        function hover(){
            idx = $(this).index();
            if (idx === prev_i) return;
            fade(idx);
        }
        function idx_recu(idx, delay, func) {
            temp = idxs.eq(idx);
            if (temp.length) {
                temp.css('margin-top',0).fadeIn(500);
                setTimeout(function() {
                    idx_recu(idx+1, delay, func);
                }, delay);
            } else {
                func();
                return;
            }
        }
        function auto() {
            timeout = setTimeout(function() {
                fade(idx===max_i? idx=0: ++idx);
            }, delay);
        }
    }());
    
    //子导航切换
	$(".sub-con").hide();
	$(".sub-con:first").show();
	$(".tab-sun").hover(function() {
		var index = $(".tab-sun").index(this);
		$(".sub-con").eq(index).show().siblings(".sub-con").hide();
		return false;
	});

    // 新闻轮播
    (function() {
        var sup   = $('#news-slide'),
            items = sup.children(),
            first = items.eq(0);

        win.on('load', function() {auto();});

        function slide(elem) {
            elem = first;
            first.animate({'margin-top':-57}, 500, function() {
                first = first.next();
                sup.append(elem.css('margin-top', 0));
            });
            auto();
        }

        function auto() {
            setTimeout(function() {
                slide();
            }, 5000);
        }
    }());
});









