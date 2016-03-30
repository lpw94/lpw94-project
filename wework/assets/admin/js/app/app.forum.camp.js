// admin user,group,menus,permission settings
define(function (require, exports) {

    var base = require('app.base');//公共函数
    var store = require('app/app.storage');//公共函数

    /**
     * publish post or not
     *
     */
    exports.pubCamp = function () {
        base.publish('/admin/api/camp/publish');
    };

    /**
     * del post
     */
    exports.delCamp = function () {
        base.del('/admin/api/camp/del');
    };

    /**
     * add post
     */
    exports.saveCamp = function () {
        require('jquery/timepicker/jquery.datetimepicker');

        // 初始化编辑器
        var editor = require('app/app.editor');
        editor.init('#salonForm #txtContent');
        // 初始化上传
        store.getImg('#upCoverIcon', function (res) {
            $('#thumb').val(res.url);
            $('.imgPreview').attr('src', res.url).show();
        });

        // 时间选择
        $("#end_time").datetimepicker({
           // minDate: 0//yesterday is minimum date(for today use 0 or -1970/01/01)
        });
        // 时间选择
        $("#apply_end").datetimepicker({
           // minDate: 0//yesterday is minimum date(for today use 0 or -1970/01/01)
        });

        $(".submitBtn").on('click', function (e) {
            // params
            var data = $("#salonForm").serializeObject();

            // if update
            var id = $(this).attr('data-id');

            if (checkField('#salonForm #txtTitle', '请填写标题') == false) {
                //return false;
            }
            if (checkField('#salonForm #serial_no', '请填写期刊号') == false) {
                return false;
            }

            if (checkField('#salonForm #thumb', '请上传封面图片') == false) {
                return false;
            }

            if (checkField('#salonForm #num', '请填写最多容纳人数', /^\d+$/) == false) {
                return false;
            }

            //if (checkField('#salonForm #speaker', '请选择嘉宾导师') == false) {
            //    return false;
            //}
            var str = document.getElementsByName("tutor");
            var objarray = str.length;
            var chestr = "";

            for (i = 0; i < objarray; i++)
                if (str[i].checked == true) {
                    chestr += str[i].value + ",";
                }

            if (chestr == "") {
                alert("请先填写参与的导师～！");
                return false;
            } else {
                chestr = chestr.substring(0, chestr.length - 1);
                data['tutor'] = '[' + chestr + ']';
            }

            if (checkField('#salonForm #time', '请填写活动时间') == false) {
                return false;
            }

            if (checkField('#salonForm #end_time', '请选择活动报名截止日期') == false) {
                return false;
            }

            if (checkField('#salonForm #address', '请填写活动活动地址') == false) {
                return false;
            }

            if (checkField('#salonForm #subject', '请填写培训课题') == false) {
                return false;
            }

            if (checkField('#salonForm #txtContent', '请填写培训简介') == false) {
                return false;
            }

            // api request
            base.requestApi('/admin/api/camp/save', {data: data, id: id}, function (res) {
                if (res.result == 1) {
                    tip.showTip('ok', "操作成功", 2000);
                    setTimeout(function () {
                        window.location.href = res.data;
                    }, 1000);
                }
            });
            e.stopImmediatePropagation();
        });
    };

    exports.setPic = function () {
        require('jquery/jquery.dragsort.min');

        // 多图
        store.getImg('#uploadProductPictures', function (res) {
            var str = '';
            $(res.url).each(function (index, img_url) {
                var isAdded = $('#picturesPreview').find('img[src="' + img_url + '"]');
                if (!(isAdded && isAdded.length > 0)) {
                    str += '<li class="pic">';
                    str += '<p><img src="' + img_url + '"></p>';
                    str += '<p style="padding: 5px 0;">';
                    str += '<input type="text" name="review_imgs[name][]" value="' + res.name[index] + '" id="" class="" placeholder="图片描述"/>';
                    str += '<input type="hidden" name="review_imgs[url][]" value="' + img_url + '" id="" class="" placeholder="图片描述"/>';
                    str += '</p>';
                    str += '<p class="">';
                    str += ' <a href="javascript:;" class="rmBtn">删除图片</a>';
                    str += '</p>';
                    str += '</li>';
                }
            });
            $('#picturesPreview ul').append(str);
        }, true);

        $('#picturesPreview ul').dragsort();

        // 移除图片
        $("#picturesPreview").on('click', '.rmBtn', function (e) {
            $(this).parent().parent().remove();
            e.stopImmediatePropagation();
        });

        // 设置主图
        $("#picturesPreview").on('click', '.setMainPic', function (e) {
            var src = $(this).parent().parent().find('img').attr('src');
            $('#thumbPreview').attr('src', src);
            $('#cover').val(src);
            e.stopImmediatePropagation();
        });
    };

    //修改杂项
    exports.saveIntro = function () {
        $('.item .center .upBtn').click(function (e) {
            var data_type = $(this).attr('data-type');
            var data_content = $(this).attr('data-content');

            base.showPop('#optionPopup');

            $("#optionPopup .form .field-mark").html(data_type);
            $("#optionPopup .form .content-text").html(data_content);
            e.stopImmediatePropagation();
        });

        $("#optionPopup .form .btn-success").click(function (e) {
            var data_type = $("#optionPopup .form .field-mark").html();
            var data_content = $("#optionPopup .form .content-text").val();

            // api request
            base.requestApi('/admin/api/camp/saveIntro', {key: data_type, data: data_content}, function (res) {
                if (res.result == 1) {
                    tip.showTip('ok', "操作成功", 2000);
                    setTimeout(function () {
                        window.location.href = res.data;
                    }, 1000);
                }
            });
            e.stopImmediatePropagation();
        })
    }
});