$(function(){
	
	//提醒发货成功弹出层
	$(".remind_btn").click(function(){
		$('#remind_success').show().delay(500).hide(400);
	});
	
	//点击"显示其余3件"，显示隐藏的商品
	$("#more").click(function(){
		$(".more_goods").css("display","block");
		$("#more").css("display","none");
	});
	
	
	
	//add
	//我的优惠券三种状态切换
	//详情切换
	tabFunC(".couponTitle a",".infor_coupon>div","coupon_current");
	//tab切换
	function tabFunC(tabo,contento,coupon_current){
		var conNum = 0;
		$(tabo).click(function(){
			$(this).addClass(coupon_current).siblings().removeClass(coupon_current);
			conNum =$(this).index();
			$(contento).eq(conNum).show().siblings().hide();	
			return false;
		});
	}
	
	//活动列表页tab切换
	//详情切换
	tabFunA(".active_table a",".goods_information>div","act_current");
	//tab切换
	function tabFunA(acttab,actcontent,act_current){
		var conNum = 0;
		$(acttab).click(function(){
			$(this).addClass(act_current).siblings().removeClass(act_current);
			conNum =$(this).index();
			$(actcontent).eq(conNum).show().siblings().hide();	
			return false;
		});	
	}

	//01新增的移动端——首页的列表
	//导航分类二级展开
	//头部导航分类展开
	$(".nav").toggle(function(){
		$("body").addClass("hide");
	},function(){
		$("body").removeClass("hide");
	});

	//导航分类三级展开
	$(".nav_list>li, .nav_child1>li").each(function(i){
			if( i!= 0 ){
			$(this).addClass("down");
			}
	});
	$("#bed").parent().removeClass('down').addClass("up");
	$("li>a",$(".nav_list")).click(function(i){
		if( i!=0 ){
			if( $(this).parent().hasClass("down") ){
				$(".nav_list>li>a").parent().removeClass("up").addClass("down");
				$(this).parent().removeClass("down").addClass("up");
				$(".nav_list>li").first().removeClass("down").removeClass("up");
				$(".nav_list>li>a").next('ul').hide();
				$(this).next('ul').show();
			}else{
				$(this).parent().removeClass("up").addClass("down");
				$(".nav_list>li").first().removeClass("down").removeClass("up");
				$(this).next('ul').hide();
			}
		}
	});
	
	//底部导航分类三级展开
		$(".nav_list1>li, .nav_child2>li").each(function(i){
			if( i!= 0 ){
			$(this).addClass("down");
			}
		});
	$("#bed1").parent().removeClass('down').addClass("up");
	$("li>a",$(".nav_list1")).click(function(i){
		if( i!=0 ){
			if( $(this).parent().hasClass("down") ){
				$(".nav_list1>li>a").parent().removeClass("up").addClass("down");
				$(this).parent().removeClass("down").addClass("up");
				$(".nav_list1>li").first().removeClass("down").removeClass("up");
				$(".nav_list1>li>a").next('ul').hide();
				$(this).next('ul').show();
			}else{
				$(this).parent().removeClass("up").addClass("down");
				$(".nav_list1>li").first().removeClass("down").removeClass("up");
				$(this).next('ul').hide();
			}
		}
	});
	
	//首页导航下拉
	$(".nav").click(function(e){
		e.stopPropagation();
		if($(".nav_list").is(':hidden') ){
			$(".nav_list").show();	
		}else{
			$(".nav_list").hide();	
		}
	});
	
	//首页品牌滚动
	var list_box_width = $(".brand_list").width();
	$(".brand_list li").width(parseInt(list_box_width/4));
	$(".brand_list li:last").css("border","0px");

	var list_num = $(".brand_list li").size();
	var list_width = $(".brand_list li").outerWidth();
	$(".brand_list ul").width(list_num*list_width);
	
	//首页底部均分宽度
	$("footer").find("li").each(function(){
		var a_num = $(this).find("a").size();
		var li_width = $(this).width();
		$(this).find("a").width(parseInt((li_width-a_num+1)/a_num));
	});
	
	$(".composite li:last a").css("border",0);
	$(".screen li:last").css("border",0);
	
	//列表页综合下拉
	$(".first").click(function(e){
		e.stopPropagation();
		if($(".composite").is(':hidden') ){
			$(this).addClass("down");
			$(".composite").show();	
		}else{
			$(".composite").hide();	
			$(this).removeClass("down");
		}
		if($(".screen").is(':visible') ){
			$(".screen").hide();
			$(".third").removeClass("down");
		};
	});
	$(".third").click(function(e){
		e.stopPropagation();
		if($(".screen").is(':hidden') ){
			$(this).addClass("down");
			$(".screen").show();	
		}else{
			$(".screen").hide();	
			$(this).removeClass("down");
		}
		if($(".composite").is(':visible') ){
			$(".composite").hide();
			$(".first").removeClass("down");
		};
	});
	$(".screen ul, .screen p, .composite ul").click(function(e){
		e.stopPropagation();
	});
	$("body").click(function(){
		if($(".composite").is(':visible') ){
			$(".composite").hide();
			$(".first").removeClass("down");
		};
		if($(".screen").is(':visible') ){
			$(".screen").hide();
			$(".third").removeClass("down");
		};
	});
	
	$(".fourth").toggle(function(){
		$(".good_list").hide();
		$(".scroll_good").show();
		//列表页列表滚动
		var $go_big = $(".scroll_big")[0];
		var $go_small = $(".scroll_small")[0];
		var $good_pic = $(".scroll_big ul"); 
		var $good_small_pic = $(".scroll_small ul"); 
		
		$good_pic.find("li").width($(window).width()-20);
		var scroll_num = $good_pic.find("li").size();
		var scroll_big_width = $(window).width()-20;
		$good_pic.width(scroll_num*scroll_big_width);
		
		var scroll_small_width = $good_small_pic.find("li").outerHeight();
		$good_small_pic.height(scroll_num*scroll_small_width);
		var startX, endX, startY, endY;
		$go_big.ontouchstart = function (event) {
			startX = event.touches[0].pageX;
		}
		$go_big.ontouchmove = function (event) {
			endX = event.touches[0].pageX;
			event.preventDefault();
		}
		$go_big.ontouchend = function (event) {
			if((startX - endX) > 0){//左滑动
				if(Math.abs(parseInt($good_pic.css("left"))) < (scroll_num-1)*scroll_big_width){
					$good_pic.animate({'left':"-="+scroll_big_width});
					$good_small_pic.animate({'top':"-="+scroll_small_width});
				}
			}else if((startX - endX) < 0){//右滑动
				if(Math.abs(parseInt($good_pic.css("left"))) > 0){
					$good_pic.animate({'left':"+="+scroll_big_width});
					$good_small_pic.animate({'top':"+="+scroll_small_width});
				}	
			}
		}
		$go_small.ontouchstart = function (event) {
			startY = event.touches[0].pageY;
		}
		$go_small.ontouchmove = function (event) {
			endY = event.touches[0].pageY;
			event.preventDefault();
		}
		$go_small.ontouchend = function (event) {
			if((startY - endY) > 0){//上滑动
				if(Math.abs(parseInt($good_small_pic.css("top"))) < (scroll_num-1)*scroll_small_width){
					$good_pic.animate({'left':"-="+scroll_big_width});
					$good_small_pic.animate({'top':"-="+scroll_small_width});
				}
			}else if((startY - endY) < 0){//下滑动
				if(Math.abs(parseInt($good_small_pic.css("top"))) > 0){
					$good_pic.animate({'left':"+="+scroll_big_width});
					$good_small_pic.animate({'top':"+="+scroll_small_width});
				}	
			}
		}
			
	},function(){
		$(".good_list").show();
		$(".scroll_good").hide();	
	});

	//详情切换
	tabFun(".inforTitle a",".information>div","current");
	//我的订单切换
	tabFun(".orderlistTitle a",".orderlist>div","current");
	$('.orderlistTitle>a').first().click();
	
	//详情弹出定位	
	$(".choose_con").css("margin-top",$(".bd img").height());
	$(".good_choose").click(function(){
		$(".choose_box").show();	
	});
	$(".good_btn>.add_cart,.good_btn>.buy_now").click(function(){
		$(".choose_box").show();
		$(".choose_box").css("bottom","0");		
	});
	$(".close").click(function(){
		$(".choose_box").hide();
		$(".good_btn").show();		
	});
    count_cart();
});

function subtract(obj, inv){
	var input = $(obj).next('input');
    var num = parseInt(input.val());
	if( num>1 ){
		input.val(num-1);
	}else{
		baison.alert('数量不能为零！');
	}
}

function plus(obj, inv){
	var input = $(obj).prev('input');
	var num = parseInt(input.val());
	if( num<inv ){
		input.val(num+1);
	}else{
		baison.alert('库存不足！');
	}
}

//tab切换
function tabFun(tab,content,current){
	var conNum = 0;
	$(tab).click(function(){
		$(this).addClass(current).siblings().removeClass(current);
		conNum =$(this).index();
		$(content).eq(conNum).show().siblings().hide();	
		return false;
	});	
}
function ishop_order(){
	var goods_price = parseFloat( $('input[name=goods_price]').val() );
	var express_fee = parseFloat( $('input[name=express_fee]').val() );
	var discount = parseFloat( $('input[name=discount]').val() );
	var coupon_money= 0;
	if( $('#check_coupon1').size()>0 && $('#check_coupon1').hasClass('use_coupon') ){
		coupon_money = parseFloat($('#check_coupon1').attr('coupon_money'));
	}
	var integral = 0;
	var integral_fee = 0;
	var end_price = 0;
	var total_discount = 0;
	//计算积分
	if( $("#check_coupon2").size()>0 && $("#check_coupon2").hasClass("use_coupon") ){
		integral = parseFloat( $("input[name=integral]").val() );
		if( !integral ){
			integral = 0;
		}
	    var integral_rate = $("input[name=integral]").attr("integral_rate");
	    integral_fee = integral/integral_rate;
		integral_fee = Math.floor(integral_fee);
	}
	total_discount = integral_fee+coupon_money+discount;
	end_price = goods_price+express_fee-total_discount
	
	$('input[name=order_money]').val(end_price);
	
	var pos = end_price.toFixed(2).indexOf('.');
	var str1 = end_price.toFixed(2).toString().substr('0',pos+1);
	var str2 = end_price.toFixed(2).toString().substr(pos+1,2);
    end_price < 0 ? end_price = 0 : null;
	$("#discount").html(" ￥"+total_discount.toFixed(2));
    $("#total_money").html("需付 ： ￥<span class='f8'>"+end_price.toFixed(2)+"</span>");
}
//跳转商品详情页
function redirectUrl(id) {
    window.location.href = "?app_act=mobile/goods/do_index&code=" + id;
}
function count_cart(){
    jQuery.ajax({
        type: "POST",
        cache: false,
        url: "/ishop/web/?app_act=cart/count_cart",
        dataType:'json',
        success: function(data){
            if(data.status==1 && data.message){
                $('#count_cart').html(data.message).show();
                if( $('#count_cart2').size()>0 ) $('#count_cart2').html(data.message);
            }else{
                $('#count_cart').hide();
            }
        }
    });
}