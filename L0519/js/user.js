$(document).ready(function(){
   $(".div_title").bind("click",listshow);
   
   $("tr:even").addClass("one");
   $("tr:odd").addClass("two");
   
  // .parent("li").siblings().children(".div_title").children("span").removeClass("reimg").addClass("addimg")
});
function listshow(){
    
    $(this).parent("a").parent().children("ol").slideToggle("slow");
    $(this).parent("a").parent().siblings().children("ol").slideUp("slow");
    
     
     
    //通过判断按钮btn有没有active这个class名判断是否已经点击过
    if($(this).hasClass("reimg")){
    //如果有了active，假设已经点击过了
    //执行你的代码
    //把active去掉
   $(this).removeClass("reimg").addClass("addimg").parent("a").parent("li").siblings().children().children(".div_title").addClass("reimg").removeClass("addimg");
    }else{
    //没有active，假设还没有点击过
    //执行你的代码
    $(this).addClass("reimg");
    }
}