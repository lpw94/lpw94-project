// admin user,group,menus,permission settings
define(function (require, exports) {

    var base = require('app.base');//公共函数
    var store = require('app/app.storage');//公共函数

    /**
     * publish post or not
     *
     */
    exports.topDiscuss = function () {
        base.publish('/admin/api/discuss/setTop');
    };

    /**
     * del post
     */
    exports.delDiscuss = function () {
        base.del('/admin/api/discuss/del');
    };
    /**
     * del comment
     */
    exports.delComment = function (item_id) {
        var data = {};
        data['Reply'] = [];
        data['Comment'] = [];
        $('.list').on('click', '.delBtn', function (e) {
            // params
            var id = $(this).attr('data-id');
            var type = $(this).attr('data-type');
            // confirm
            var cm = window.confirm("您确认需要删除选中的数据吗？");
            if (!cm) {
                return;
            }
            data[type] = [id];
            del(data);

            e.stopImmediatePropagation();
        }).on('click', '.delAllSelected', function (e) {

            $(".list .listData input.chk").each(function () {
                if ($(this).attr('checked') == true || $(this).attr('checked') == 'checked') {
                    var type = $(this).attr('data-type');
                    data[type].push($(this).attr('data-id'));
                }
            });

            //  has no selected
            if (data.length == 0) {
                exports.showTip('err', '请选择需要删除的项', 3000);
                return;
            }

            // confirm
            var cm = window.confirm("您确认需要删除选中的数据吗？");
            if (!cm) {
                return;
            }

            del(data);

            e.stopImmediatePropagation();
        });

        function del(data) {
            if (!data) return;
            // api request
            base.requestApi('/admin/api/discuss/delComment', {data: data, item_id: item_id}, function (res) {
                if (res.result == 1) {
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);

                    tip.showTip('ok', '恭喜您,删除成功！', 2000);
                }
            });
        }
    };
    /**
     * add post
     */
    exports.saveDiscuss = function () {
        // 初始化编辑器
        var editor = require('app/app.editor');
        editor.init('#postForm #txtContent');
        // 初始化上传
        // 初始化上传
        store.getImg('#upCoverIcon', function (res) {
            $('#cover').val(res.url);
            $('.imgPreview').attr('src', res.url).show();
        });

        $(".submitBtn").on('click', function (e) {
            // params
            var data = $("#postForm").serializeObject();
            // if update
            var id = $(this).attr('data-id');

            if (checkField(data.title, '#postForm #txtTitle') == false) {
                tip.showTip('err', "请填写标题", 3000);
                $('#postForm #txtTitle').focus();
                return false;
            }

            if (isNaN(data.cid) || data.cid == '' || data.cid == null) {
                base.showTip('err', '请选择文章分类！', 3000);
                return false;
            }

            if (data.created) {
                if (false == IsDateTime(data.created)) {
                    base.showTip('err', '时间格式不正确！', 3000);
                    return false;
                }
            }

            // tags
            var tags = [];
            $('.tag-list .tag').each(function () {
                var tagName = $(this).attr('data-tag').trim();
                if (tagName) {
                    tags.push(tagName);
                }
            });
            tags = $.unique(tags);

            data.tags = tags;

            if (id) {
                // update params
                data = $.extend({}, data, {'id': id});
            }

            // api request
            base.requestApi('/admin/api/discuss/save', {data: data, id: id}, function (res) {
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

    exports.setCat = function () {
        store.getImg('.getCoverBtn', function func(res) {
            $('#catPopup #cover_img').val(res.url);
            $('.preview_img').attr('src', res.url);
        }, false);

        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/discuss/getCat', {'id': id}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '获取数据成功！', 1000);
                    base.showPop('#catPopup');

                    setModal(res.data);
                }
            });

            e.stopImmediatePropagation();
        });

        // add event
        $('.addBtn').click(function (e) {
            resetModal();
            base.showPop('#catPopup');
        });

        // save event
        save();

        function setModal(data) {
            // set icon
            var icon = data.icon;
            $('.icon-preview').removeClass().addClass('icon-preview ' + icon);
            $('#catPopup').find('#icon').val(data.icon);
            // 二级分类
            $('#catPopup').find('#parent_id option').show();
            $('#catPopup').find('#parent_id option[value="' + data.id + '"]').hide();
            if (data.parent_id > 0) {
                $('#catPopup').find('#parent_id option[value="' + data.parent_id + '"]').prop('selected', true);
            }

            $('#catPopup').find('#cover_img').val(data.cover);
            $('#catPopup').find('.preview_img').attr('src', data.cover);

            $('#catPopup').find('#name').val(data.name);
            $('#catPopup').find('#detail').val(data.detail);
            $('#catPopup').find('#sort').val(data.sort);
            $('#catPopup').find('#page').val(data.page);


            var allow_login = parseInt(data.allow_login);
            $('#catPopup').find("input[name='allow_login']:eq(" + allow_login + ")").attr('checked', 'checked');
            if (allow_login == 1) {
                $('#catPopup').find('#pagec').css('display', 'block');
            }
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);

        }

        function resetModal() {
            $('#catPopup').find('#color').val('color117');

            // set icon
            $('.icon-preview').removeClass().addClass('icon-preview icon-sun');
            $('#catPopup').find('#icon').val('icon-sun');

            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('#sort').val(0);
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var detail = $('#catPopup').find('#detail').val();
                var icon = $('#catPopup').find('#icon').val();
                var color = $('#catPopup').find('#color').val();
                var cover_img = $('#catPopup').find('#cover_img').val();
                var sort = $('#catPopup').find('#sort').val();
                var parent_id = $('#catPopup').find('#parent_id option:selected').val();
                var allow_login = $('#catPopup').find("input[name='allow_login']:checked").val();
                var page = $('#catPopup').find("#page").val();


                var id = $(this).attr('data-id');

                if (!checkField('#catPopup #name', '分类名称不能为空')) {
                    return false;
                }

                if (!checkField('#catPopup #icon', '请选择图标')) {
                    return false;
                }

                var data = {
                    name: name,
                    detail: detail,
                    sort: sort,
                    parent_id: parent_id,
                };

                // api request
                base.requestApi('/admin/api/discuss/saveCat', {'data': data, id: id}, function (res) {
                    if (res.result == 1) {

                        window.location.reload();
                        base.showTip('ok', '操作成功！', 1000);
                        base.hidePop();
                    }
                });

                e.stopImmediatePropagation();
            });
        }
    };

    /**
     * del post
     * @param btn
     */
    exports.delCat = function () {
        base.del('/admin/api/discuss/delCat', "严重警告！\r\n　　删除栏目后该栏目及子栏目原有的所有文章会将不能指定栏目，前台页面可能会出错哦！\r\n　　您确定需要进行此操作吗？");
    };
});