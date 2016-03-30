/**
 * Created by hh on 2015/7/6.
 */
define(function (require, exports) {

    var base = require('app.base');//公共函数

    exports.delTutor = function () {
        $(".list .listData").on('click', ".delBtn", function (e) {
            // params
            var id = $(this).attr('data-id');
            var data = id;
            // confirm
            var cm = window.confirm('你确定需要删除该条数据吗？');
            if (!cm) {
                return;
            }

            // api request
            base.requestApi('/admin/api/tutor/del', {data: data}, function (res) {
                if (res.result == 1) {
                    $('.list .listData .item[data-id="' + id + '"]').fadeOut();
                    setTimeout(function () {
                        $('.list .listData .item[data-id="' + id + '"]').remove();
                    }, 1000);
                    tip.showTip('ok', '删除成功！', 3000);
                }
            });

            e.stopImmediatePropagation();
        });
    };

    //exports.saveTutor = function ()
    //{
    //}

    exports.saveTutor = function () {
        // confirm
        $('#optionWidget').on('click', '.res-btn', function () {
            var id = $(this).attr('data-id');
            var obj = $('#optionWidget');
            var name = obj.find('.name').val();
            var avatar = $('.set-field .avatar').attr('src');
            var introduce = obj.find('.introduce').val();
            var brief = obj.find('.brief').val();

            var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){2,5}$");
            if (!regex.test(name)) {
                tip.showTip('err', '请输入正确的姓名！', 3000);
            }
            if (!avatar) {
                tip.showTip('err', '请上传头像！', 3000);
            }
            if (!introduce) {
                tip.showTip('err', '请填写简介！', 3000);
            }

            var data = {
                real_name: name,
                avatar: avatar,
                introduce: introduce,
                brief:brief
            };

            base.requestApi('/admin/api/tutor/save', {data: data, id: id}, function (res) {
                if (res.result == 1) {
                    window.location.reload();
                    base.hidePop('#optionPopup');
                }
            });
        });

        // update
        $('.list .listData .upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            var introduce = $(this).attr('data-intro');
            var brief = $(this).attr('data-brief');
            var name = $(this).attr('data-name');
            var avatar = $(this).attr('data-avatar');

            if (id) {
                base.showPop('#optionPopup');

                $('#optionWidget .res-btn').attr('data-id', id);
                var obj = $('#optionWidget');
                obj.find('.name').val(name);
                obj.find('.avatar').attr('src', avatar);
                obj.find('.introduce').val(introduce);
                obj.find('.brief').val(brief);
            }
            e.stopImmediatePropagation();
        });

        // update
        $('.addBtn').click(function (e) {
            var id = $(this).attr('data-id');
            var introduce = $(this).attr('data-intro');
            var brief = $(this).attr('data-brief');
            var name = $(this).attr('data-name');
            var avatar = $(this).attr('data-avatar');

            base.showPop('#optionPopup');

            $('#optionWidget .res-btn').attr('data-id', id);
            var obj = $('#optionWidget');
            obj.find('.name').val("");
            obj.find('.avatar').val("");
            obj.find('.introduce').val("");
            obj.find('.brief').val("");

            e.stopImmediatePropagation();
        });
    };
});