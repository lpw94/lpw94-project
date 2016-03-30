define(function (require, exports) {
    var base = require('app.base');
    var storage = require('app/app.storage');

    /**
     * del Focus
     */
    exports.delFocus = function () {
        base.del('/admin/api/site/delFocus');
    };

    /**
     * set Focus
     * -- update or add
     */
    exports.setFocus = function () {
        storage.getImg('.getImg', function (res) {
            $('#focusModal #img').val(res.url);
            $('#focusModal .previewImg').attr('src', res.url).show();
            $('#focusModal #name').val(res.name);
        }, false);

        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/site/getFocus', {'id': id}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '获取数据成功！', 1000);
                    base.showPop('#focusModal');
                    setModal(res.data);
                }
            });

            e.stopImmediatePropagation();
        });

        // add event
        $('.addBtn').click(function () {
            resetModal();
            base.showPop('#focusModal');
        });

        // save event
        save();
    };
    function setModal(data) {

        $('#focusModal').find('#name').val(data.name);
        $('#focusModal').find('#img').val(data.img);
        $('#focusModal').find('.previewImg').attr('src', data.img).show();
        $('#focusModal').find('#link').val(data.link);
        $('#focusModal').find('#link_type').val(data.link_type);
        $('#focusModal').find('#sort').val(data.sort);
        $('#focusModal').find('.saveBtn').attr('data-id', data.id);
        // radio
        $('#focusModal').find('.published').attr("checked", false);
        $('#focusModal').find('.published[value="' + data.published + '"]').attr("checked", true).parent('label').addClass('active');
        $('#focusModal').find('.published[value="' + data.published + '"]').parent().addClass('checked');
        $(".icheck-item").on('click', function () {
            $(".icheck-item").removeClass('checked');
            $(this).addClass('checked');
        })
    }

    function resetModal() {
        $('#focusModal').find('#name').val('');
        $('#focusModal').find('#img').val('');
        $('#focusModal').find('.previewImg').attr('src', '').hide();
        $('#focusModal').find('#link').val('');
        $('#focusModal').find('#link_type').val('');
        $('#focusModal').find('#sort').val(0);
        $('#focusModal').find('.saveBtn').removeAttr('data-id');

        // radio
        $('#focusModal').find('.published').attr("checked", false);
        $('#focusModal').find('.published[value="1"]').attr("checked", true).parent('label').addClass('active');
    }

    function save() {
        $('#focusModal .saveBtn').click(function (e) {
            var img = $('#focusModal').find('#img').val();
            var name = $('#focusModal').find('#name').val();
            var detail = $('#focusModal').find('#detail').val();
            var link = $('#focusModal').find('#link').val();
            var link_type = $('#focusModal').find('#link_type').val();
            var sort = $('#focusModal').find('#sort').val();
            var published = $('#focusModal').find('.published:checked').val();

            var id = $(this).attr('data-id');

            if (!checkField('#focusModal #img', '请上传图片')) {
                return false;
            }

            if (!checkField('#focusModal #name', '名称不能为空')) {
                return false;
            }

            if (!checkField('#focusModal #link', '链接不能为空')) {
                return false;
            }

            var data = {
                img: img,
                name: name,
                detail: detail,
                link: link,
                sort: sort,
                published: published
            };

            // api request
            base.requestApi('/admin/api/site/saveFocus', {'data': data, id: id}, function (res) {
                if (res.result == 1) {
                    base.hidePop('#focusModal');
                    setTimeout(function () {
                        window.location.reload();
                    }, 5000);
                }
            });

            e.stopImmediatePropagation();
        });
    }
});