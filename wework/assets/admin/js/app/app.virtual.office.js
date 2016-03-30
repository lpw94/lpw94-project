// admin user,group,menus,permission settings
define(function (require, exports) {

    var base = require('app.base');//公共函数
    var store = require('app/app.storage');//公共函数

    /**
     * publish post or not
     *
     */
    exports.pubVirtual = function () {
        base.publish('/admin/api/virtual/publish');
    };

    /**
     * del post
     */
    exports.delVirtual = function () {
        base.del('/admin/api/virtual/del');
    };

    /**
     * add post
     */
    exports.saveVirtual = function () {
        $(".saveBtn").on('click', function (e) {
            // params
            var data = $("#virtualForm").serializeObject();
            // if update
            var id = $(this).attr('data-id');

            if (checkField(data.name, '#postForm #txtTitle') == false) {
                tip.showTip('err', "请填写套餐名称", 3000);
                $('#postForm #txtTitle').focus();
                return false;
            }

            if (!data.service_param) {
                base.showTip('err', '请选择套餐服务项！', 3000);
                return false;
            }


            if (isNaN(data.price) || price < 0) {
                base.showTip('err', '请设置套餐价格！', 3000);
                return false;
            }

            // api request
            base.requestApi('/admin/api/virtual/save', {data: data, id: id}, function (res) {
                if (res.result == 1) {
                    tip.showTip('ok', "操作成功", 2000);
                    setTimeout(function () {
                   //   window.location.href = res.data;
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
            base.requestApi('/admin/api/virtual/getCat', {'id': id}, function (res) {
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


            var allow_login = parseInt(data.allow_login);
            $('#catPopup').find("input[name='allow_login']:eq(" + allow_login + ")").attr('checked', 'checked');
            if (allow_login == 1) {
                $('#catPopup').find('#pagec').css('display', 'block');
            }
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);

        }

        function resetModal() {
            // set icon
            $('.icon-preview').removeClass().addClass('icon-preview icon-sun');

            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('#sort').val(0);
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var detail = $('#catPopup').find('#detail').val();
                var cover_img = $('#catPopup').find('#cover_img').val();
                var sort = $('#catPopup').find('#sort').val();

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
                    cover: cover_img,
                    sort: sort
                };

                // api request
                base.requestApi('/admin/api/virtual/saveCat', {'data': data, id: id}, function (res) {
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
     * del
     */
    exports.delCat = function () {
        base.del('/admin/api/virtual/delCat', "警告！\r\n　　前台页面可能会出错哦！\r\n　　您确定需要进行此操作吗？");
    };

    /**
     * del
     */
    exports.delService = function () {
        base.del('/admin/api/virtual/delService', "警告！\r\n　　前台页面可能会出错哦！\r\n　　您确定需要进行此操作吗？");
    };
    exports.setService = function () {
        store.getImg('.getCoverBtn', function func(res) {
            $('#catPopup #cover_img').val(res.url);
            $('.preview_img').attr('src', res.url);
        }, false);

        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/virtual/getService', {'id': id}, function (res) {
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

            $('#catPopup').find('#cover_img').val(data.cover);
            $('#catPopup').find('.preview_img').attr('src', data.cover);

            $('#catPopup').find('#name').val(data.service_name);
            $('#catPopup').find('#detail').val(data.detail);
            $('#catPopup').find('#sort').val(data.sort);


            var allow_login = parseInt(data.allow_login);
            $('#catPopup').find("input[name='allow_login']:eq(" + allow_login + ")").attr('checked', 'checked');
            if (allow_login == 1) {
                $('#catPopup').find('#pagec').css('display', 'block');
            }
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);

        }

        function resetModal() {
            // set icon
            $('.icon-preview').removeClass().addClass('icon-preview icon-sun');

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
                    service_name: name,
                    detail: detail,
                    cover: cover_img
                };

                // api request
                base.requestApi('/admin/api/virtual/saveService', {'data': data, id: id}, function (res) {
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
    exports.setBaseInfo = function () {

        // 初始化编辑器
        var editor = require('app/app.editor');
        editor.init('#virtualOffice #des_detail');
        editor.init('#virtualOffice #need_detail');
        // 初始化上传
        store.getImg('#upCoverIcon1', function (res) {
            $('#des_cover').val(res.url);
            $('.imgPreview1').attr('src', res.url).show();
        });
        // 初始化上传
        store.getImg('#upCoverIcon2', function (res) {
            $('#need_cover').val(res.url);
            $('.imgPreview2').attr('src', res.url).show();
        });

        $(".submitBtn").on('click', function (e) {
            // params
            var data = $("#virtualOffice").serializeObject();

            // if update
            var id = $(this).attr('data-id');

            if (checkField('#virtualOffice #des_cover', '请上传介绍封面图片') == false) {
                return false;
            }
            if (checkField('#virtualOffice #need_cover', '请上传需求封面图片') == false) {
                return false;
            }
            if (checkField('#virtualOffice #des_detail', '请填写虚拟办公室介绍') == false) {
                return false;
            }
            if (checkField('#virtualOffice #need_detail', '请填写虚拟办公室需求') == false) {
                return false;
            }
            base.requestApi('/admin/api/virtual/setBaseInfo', {data: data, id: id}, function (res) {
                if (res.result == 1) {
                    tip.showTip('ok', "操作成功", 2000);
                    setTimeout(function () {
                        window.location.href = res.data;
                    }, 1000);
                }
            });


        })
    }


});