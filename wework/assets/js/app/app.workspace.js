define(function (require, exports) {
exports.init = function () {
                $(".show_link").click(function(){
				if($(".show_box").is(":hidden")){
				       $(".show_box").show();    //如果元素为隐藏,则将它显现
				       $(this).text("隐藏")
				}else{
				      $(".show_box").hide();     //如果元素为显现,则将其隐藏
				      $(this).text("显示")
				}
				});
				$(".show_link1").click(function(){
				if($(".show_box1").is(":hidden")){
				       $(".show_box1").show();    //如果元素为隐藏,则将它显现
				       $(this).text("隐藏")
				}else{
				      $(".show_box1").hide();     //如果元素为显现,则将其隐藏
				      $(this).text("显示")
				}
				});
			};
			
});