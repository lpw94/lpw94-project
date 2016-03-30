define(function (require, exports) {
    var base = require('app.base');
    var storage = require('app/app.storage');

    /**
     * del Announce
     */
    exports.delAnnounce = function () {
        base.del('/admin/api/site/delAnnounce');
    };

    /**
     * set Announce
     * -- update or add
     */
    exports.setAnnounce = function () {
        storage.getImg('.getImg', function (res) {
            $('#focusModal #img').val(res.url);
            $('#focusModal .previewImg').attr('src', res.url).show();
            $('#focusModal #name').val(res.name);
        }, false);

        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/site/getAnnounce', {'id': id}, function (res) {
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

        $('#focusModal').find('#name').val(data.title);
        $('#focusModal').find('#img').val(data.cover);
        $('#focusModal').find('.previewImg').attr('src', data.cover).show();
        $('#focusModal').find('#link').val(data.url);
        $('#focusModal').find('#sort').val(data.sort);
        $('#focusModal').find('.saveBtn').attr('data-id', data.id);
        $('#focusModal').find('#intro').val(data.intro);

        // radio
        $('#focusModal').find('.published').attr("checked", false);
       // $('#focusModal').find('.published[value="' + data.is_show + '"]').attr("checked", true);
        $('.published[value="' + data.is_show + '"]').parent().trigger('click');
    }

    function resetModal() {
        $('#focusModal').find('#name').val('');
        $('#focusModal').find('#img').val('');
        $('#focusModal').find('.previewImg').attr('src', '').hide();
        $('#focusModal').find('#link').val('');
        $('#focusModal').find('#sort').val(0);
        $('#focusModal').find('.saveBtn').removeAttr('data-id');

        // radio
        $('#focusModal').find('.published').attr("checked", false);
        $('.published[value="1"]').parent().trigger('click');
       // $('#focusModal').find('.published[value="1"]').attr("checked", true).parent('label').addClass('active');
    }

    function save() {
        $('#focusModal .saveBtn').click(function (e) {
            var img = $('#focusModal').find('#img').val();
            var name = $('#focusModal').find('#name').val();
            var detail = $('#focusModal').find('#detail').val();
            var link = $('#focusModal').find('#link').val();
            var sort = $('#focusModal').find('#sort').val();
            var published = $('#focusModal').find('.checked input').val();
            var intro = $('#focusModal').find('#intro').val();

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
                cover: img,
                title: name,
                detail: detail,
                url: link,
                sort: sort,
                is_show: published,
                intro:intro
            };

            // api request
            base.requestApi('/admin/api/site/saveAnnounce', {'data': data, id: id}, function (res) {
                if (res.result == 1) {
                    base.hidePop('#focusModal');
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
            });

            e.stopImmediatePropagation();
        });
    }
});