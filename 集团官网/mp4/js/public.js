var win = $(window),
    nav_on = null;
$(function () {
	/*tab切换*/
	$(".con_tab").hide();
	//$(".menu li:first").addClass("on");
	$(".con_tab:first").show();
	$(".menu li").on("click",function(e) {
		e.stopPropagation();
		$(".menu li").removeClass("on");
		$(this).addClass("on");
		var index = $(".menu li").index(this);
		$(".con_tab").eq(index).show().siblings(".con_tab").hide();
		var txt = $(this).text();
		$(".con_tit").text(txt);
		//return false;  //解决链接不跳转
	});
	/*右导航*/
	$(".menu li a").hover(function(e){
		        e.stopPropagation(); 
    			$(".menu li.on").children(".abs").stop(false,false).animate({width:'0'},"fast");
    			$(this).siblings(".abs").stop(false,false).animate({width:'100%'},"fast");
    		},function(e){
    			e.stopPropagation();
    			$(this).siblings(".abs").stop(false,false).animate({width:'0'},"fast");
    			$(".menu li.on").children(".abs").stop(false,false).animate({width:'100%'},"fast");
    });	
    // 导航栏控制
    (function () {
        var nav = $('#nav'),
            shop = $('#shop'),
            // search_box = shop.find('#searchbox'),
            // search_btn = shop.find('.btn-search')[0],
            lis = nav.children(),
            lis_1 = lis.filter(':not(.more)'),
            lis_2 = lis.filter('.more'),
            links = lis.children(),
            links_1 = lis_1.children(),
            links_2 = lis_2.children(),
            subNav = $('#subNav'),
            subitem = $('#subNav').find('.item'),
            prev_item = $(),
            spans = links.children(),
            offs = spans.filter('.off'),
            ons = spans.filter('.on'),
            sbs = spans.filter('.slideBlock'),

            hei = links.eq(0).height(),
            len = lis.length,

            // 记录当前
            link_page = null,
            link_curr = null,

            timeout = -1;

        // 初始化当前链接
        href = location.href.replace(/[_\d]{1,2}\./, '.');      // 静态页面用
        // href = location.href,                                   // 程序用
        for (var i = 0; i < len; i++) {
            link_page = links.eq(i);
            if (href.indexOf(link_page.attr('href').replace(/(?:_\d)?\..*/, '')) > 0) {    // 静态页面用
                // if (href.indexOf(link_page.attr('href').replace(/(?:_\d)?\..*/, '')) > 0) {    // 程序用
                control(nav_on = link_curr = link_page = link_page[0], false);
                delete i;
                break;
            }
        }
        links_2.each(function (idx) {
            if (this === nav_on) return;
            this.setAttribute('idx', idx);
            //alert(idx)
        });
        if (i === len) {
            if (href.indexOf('/user') >= 0) {
                control(nav_on = link_curr = link_page = links.eq(5)[0], false);
            } else {
                control(nav_on = link_curr = link_page = links.eq(0)[0], false);
            }
        }


        win.on('load', function () {
            // 鼠标指向, 链接高亮
            links_1.hover(function () { control(this, false) }, none);
            links_2.hover(function () { control(this, true) }, none);
            // 鼠标离开导航栏, 恢复当前页面高亮
            nav.hover(none, function () {
                timeout = setTimeout(function () {
                    control(link_page, true);
                }, 10);
            });
            subNav.hover(function () {
                clearTimeout(timeout);
            }, function () {
                control(link_page, false);
            });
        });

        function control(elem, flag, idx) {
            link_curr.className = "";
            elem.className = "on";
            link_curr = elem;
            prev_item.removeClass('on');
            if (flag) {
                idx = parseInt(elem.getAttribute('idx'));
                prev_item = subitem.eq(idx).addClass('on');
                // search_box.hide();
                // search_btn.className = "btn-search";
            }
        }
        function none() { }


    }());


 
     
			
			    
});
   //生成底部
$(document).ready(function() {
	var strFoot = "";
		    strFoot += "<div class=\"foot_cont clearfix\">";
		    strFoot += "<div class=\"foot_left\">";
		    strFoot += "<div class=\"friend_link\"><span>友情链接:<\/span>";
		    strFoot += "<a href=\"http://www.lber.com.cn/\" target=\"_blank\" title=\"\">乐贝尔商城<\/a>";
		    strFoot += "<a href=\"http://www.ygakj.com/\" target=\"_blank\" title=\"\">前海粤港澳供应链<\/a>";
		    strFoot += "<a href=\"http://www.qhjrjt.cn/\" target=\"_blank\" title=\"\">前海非标金融集团<\/a>";
		    strFoot += "<a href=\"http://www.qhp2p.com/\" target=\"_blank\" title=\"\">前海P2P<\/a>";
		    strFoot += "<a href=\"javascript:;\" class=\"moreLink\">&nbsp;<\/a>";
		    strFoot += "<div class=\"friends\" style=\"display: none;\">";
		    strFoot += "<a href=\"#\" target=\"_blank\" title=\"\">奥迪斯国际<\/a>";
		    strFoot += "<\/div>";
		    strFoot += "<\/div>";
		    strFoot += "<p class=\"foot_txt\">";
		    strFoot += "<span>关于粤港跨境电商集团<\/span>";
		    strFoot += "<span class=\"kan3\">|<\/span>";
		    strFoot += "<a href=\"hr_contact.html\">联系我们<\/a>";
		    strFoot += "<span class=\"kan3\">|<\/span><a href=\"abouts-law.html\">法律声明<\/a>&nbsp;&nbsp;&nbsp;&nbsp;集团总机：0755-86186168 &nbsp;&nbsp;&nbsp;&nbsp;传真：0755-86538660&nbsp;&nbsp;&nbsp;&nbsp;客服热线：400-848-6262";
		    strFoot += "<br>集团地址：广东省深圳市南山区科技中三路1号海王银河科技大厦11层";
		    strFoot += "<\/p>";
		    strFoot += "<p class=\"foot_txt\">";
		    strFoot += "Copyright © 2003-2016 粤港跨境电商集团 版权所有   &nbsp;&nbsp;&nbsp;&nbsp;粤ICP备15023180号-1";
		    strFoot += "<\/p>";
		    strFoot += "<\/div>";
		    strFoot += "<div class=\"foot_right\">";
		    strFoot += "<div class=\"erweima1\">";
		    strFoot += "<img src=\"images/erweima1.jpg\"/>";
		    strFoot += "<span class=\"txt\">微信订阅号<\/span>";
		    strFoot += "<\/div>";
		    strFoot += "<div class=\"erweima2\">";
		    strFoot += "<img src=\"images/erweima2.jpg\"/>";
		    strFoot += "<span class=\"txt\">微信服务号<\/span>";
		    strFoot += "<\/div>";
		    strFoot += "<\/div>";
		    strFoot += "<\/div>";
			$("#foot").html(strFoot);
			
			
			
			$(".moreLink").on("click",function() {
				$(".moreLink").toggleClass("other");
				$(".friends").slideToggle(200);
			});
});