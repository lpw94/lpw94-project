/**
 * Created by hh on 2015/9/10.
 */

define(function (require,exports){
    require('../../js/datepicker.js');
exports.room = function(){
    $( "#datepicker").datepicker({
        inline: true
    });
    //��ߵ���ر�
    $(".close").on('click',function(){
        $(this).hide();
        $(this).parents(".close-select").find("span").show();
    })
    // �������
    $(".back").on('click',function(){
        $(this).parent("span").siblings(".close").show();
        $(this).parent("span").hide();
    })

    //���ɾ��
    $(".remove").on('click',function(){
        $(this).parent().parents().parent(".reserve-item").hide()
    })

    $(".room-time").find("li").hover(function(){
        $(this).find(".booking").show();
    },function(){
        $(this).find(".booking").hide();
    })
    //�������Ĭ��
    $(".select-style").on('click',function(){
        $(this).html('Default')
        $(this).css('padding-bottom','5px')
    })

    //����ұ�Ԥ��
    var type;
    $(".booking").on('click',function(){
        type=$(this).parent("li").attr("data-type");
        //console.log(type)
        $(".bar").show();
        $(".book-box-pre").animate({'top':'5%'},1000);

    })
    //����ر�
    $(".down").on('click',function(){
        $(".book-box-pre").animate({'top':'-115%'});
        $(".bar").hide();
    })
    $(".cancel").on('click',function(){
        $(".bar").hide();
        $(".book-box-pre").animate({'top':'-115%'});
    })
    $(".bar").on('click',function(){
        $(".bar").hide();
        $(".book-box-pre").animate({'top':'-115%'});
        $(".cancel-book").animate({'top':'-115%'});
        $(".book-submit").animate({'top':'-130%'});
    })
    //���ȷ��
    $(".submit").on('click',function(){
        console.log(type)
        $(".book-box-pre").css('top','-115%');
        $(".book-submit").animate({'top':'5%'},100);
        $(".room-time").find('li[data-type="'+type+'"]').html("<div class='book-success'>CFG created by: Chun Xue</div>");
    })
    //������
    $(".done").on('click',function(){
        $(".book-box-pre").css('top','-115%');
        $(".book-submit").animate({'top':'-130%'});
        $(".bar").hide();
    })
//ȡ��Ԥ��

    $(".book-success").on('click',function(){
        type = $(this).parent("li").attr("data-type")
        $(".bar").show();
        $(".cancel-book").animate({'top':'5%'},1000);
    })
    $(".cancel-btn").on('click',function(){
        $(".bar").hide();
        $(".cancel-book").animate({'top':'-115%'});
        $(".room-time").find('li[data-type="'+type+'"]').html("<div class='booking'>+</div>");
    })

}
})