define(function (require, exports) {
    var base = require('app.base');
    var storage = require('app/app.storage');

    /**
     * del all nav
     */
    exports.delNav = function () {
        base.del('/admin/api/site/delNav');
    };

    /**
     * set nav
     * -- update or add
     */
    exports.setNav = function () {
        storage.getImg('.getCoverBtn', function func(res) {
            $('#navModal #cover').val(res.url);
            $('.preview_img').attr('src', res.url);
        }, false);


        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/site/getNav', {'id': id}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '获取数据成功！', 1000);

                    base.showPop('#navModal');

                    setModal(res.data);
                }
            });

            e.stopImmediatePropagation();
        });

        // add event
        $('.addBtn').click(function (e) {
            resetModal();
        });

        // save event
        save();
    };


    function setModal(data) {

        // set icon
        $('#navModal').find('#icon').val(data.icon);

        $('#navModal').find('#cover').val(data.cover);
        $('#navModal').find('.preview_img').attr('src', data.cover);
        // 二级分类
        $('#navModal').find('#parent_id option').show();
        $('#navModal').find('#parent_id option[value="' + data.id + '"]').hide();
        if (data.parent_id > 0) {
            $('#navModal').find('#parent_id option[value="' + data.parent_id + '"]').prop('selected', true);
        }

        $('#navModal').find('#name').val(data.name);
        $('#navModal').find('#intro').val(data.intro);
        $('#navModal').find('#detail').val(data.detail);
        $('#navModal').find('#link').val(data.link);
        $('#navModal').find('#link_type').val(data.link_type);
        $('#navModal').find('#sort').val(data.sort);
        $('#navModal').find('.saveBtn').attr('data-id', data.id);

        // radio
        $('#navModal').find('.published').attr("checked", false);
        $('#navModal').find('.published[value="' + data.published + '"]').attr("checked", true).parent('label').addClass('active');
    }

    function resetModal() {
        // set icon
        $('.icon-preview').removeClass().addClass('icon-preview icon-sun');
        $('#navModal').find('#icon').val('icon-sun');

        $('#navModal').find('#name').val('');
        $('#navModal').find('#intro').val('');
        $('#navModal').find('#detail').val('');
        $('#navModal').find('#link').val('');
        $('#navModal').find('#link_type').val('');
        $('#navModal').find('#sort').val(0);
        $('#navModal').find('.saveBtn').removeAttr('data-id');

        // radio
        $('#navModal').find('.published').attr("checked", false);
        $('#navModal').find('.published[value="1"]').attr("checked", true).parent('label').addClass('active');
    }

    function save() {
        $('#navModal .saveBtn').click(function (e) {
            var name = $('#navModal').find('#name').val();
            var intro = $('#navModal').find('#intro').val();
            var detail = $('#navModal').find('#detail').val();
            var icon = $('#navModal').find('#icon').val();
            var color = $('#navModal').find('#color').val();
            var cover = $('#navModal').find('#cover').val();
            var link = $('#navModal').find('#link').val();
            var link_type = $('#navModal').find('#link_type').val();
            var sort = $('#navModal').find('#sort').val();
            var published = $('#navModal').find('.published:checked').val();
            var position = $('#navModal').find('#position').val();
            var parent_id = $('#navModal').find('#parent_id option:selected').val();


            var id = $(this).attr('data-id');

            if (!checkField('#navModal #name', '分类名称不能为空')) {
                return false;
            }

            if (!checkField('#navModal #link', '链接不能为空')) {
                return false;
            }

            if (!checkField('#navModal #icon', '请选择图标')) {
                return false;
            }
            // var page_type=$('#page_type').val();
            var data = {
                name: name,
                intro: intro,
                detail: detail,
                icon: icon,
                color: color,
                cover: cover,
                link: link,
                link_type: link_type,
                sort: sort,
                parent_id: parent_id,
            };

            // api request
            base.requestApi('/admin/api/site/saveNav', {'data': data, id: id}, function (res) {
                if (res.result == 1) {
                    base.hidePop("#navModal");
                    window.location.reload();
                }
            });

            e.stopImmediatePropagation();
        });
    }

    //banner
    exports.setBanner = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/site/getBanner', {'id': id}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '获取数据成功！', 1000);
                    base.showPop('#catPopup');

                    setModal(res.data);
                }
            });

            e.stopImmediatePropagation();
        });


        function setModal(data) {
            $('#catPopup').find('.field-area').html(data);
        }

        // save event
        save();

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var desc = $('#catPopup').find('#desc').val();
                var img = $('#catPopup').find('#thumb').val();
                var id = $('#catPopup').find('#data_id').val();

                var data = {
                    val: img
                };

                // api request
                base.requestApi('/admin/api/site/saveKeyVal', {'data': data, id: id}, function (res) {
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

    //banner
    exports.setMeta = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/site/getMeta', {'id': id}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '获取数据成功！', 1000);
                    base.showPop('#catPopup');

                    setModal(res.data);
                }
            });

            e.stopImmediatePropagation();
        });

        // save event
        save();
        function setModal(data) {
            $('#catPopup').find('.field-area').html(data);
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var meta_description = $('#catPopup').find('#meta_description').val();
                var meta_keyword = $('#catPopup').find('#meta_keyword').val();
                var page_title = $('#catPopup').find('#page_name').val();
                var id = $('#catPopup').find('#data_id').val();

                if (!page_title) {
                    base.showTip('err', "页面标题不能为空", 2000);
                }
                var data = {
                    name: page_title,
                    val: meta_keyword,
                    param: meta_description
                };

                // api request
                base.requestApi('/admin/api/site/saveKeyVal', {'data': data, id: id}, function (res) {
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
});