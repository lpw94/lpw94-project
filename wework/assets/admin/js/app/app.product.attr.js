define(function (require, exports) {
    var base = require('app.base');

    /**
     * del
     */
    exports.delAttr = function () {
        base.del('/admin/api/product/delAttr');
    };

    /**
     * publish
     *
     */
    exports.pubAttr = function () {
        base.publish('/admin/api/product/pubAttr');
    };

    exports.saveAttr = function (max_len) {
        // add click
        $('.addOptionBtn').click(function (e) {
            var len = $('.list .listData .item').length;
            if (len > max_len) {
                base.showTip('err', '最多可以创建' + ( max_len + 1) + '个选项', 2000);
                return;
            }
            // reset
            $('#optionWidget .saveBtn').removeAttr('data-id');
            $('.choose-type-selc').show();
            $('#optionWidget .attr_name').val('');
            $('#optionWidget .attr_value').val('');

            base.showPop('#optionPopup');

            e.stopImmediatePropagation();
        });

        // switch
        $('#optionWidget').on('change', '.select-option-type', function () {
            var val = $(this).val();

            $('.option').hide();
            $('#option-' + val).show();
        });

        // confirm
        $('#optionWidget').on('click', '.saveBtn', function () {
            var type = $(this).attr('data-type');
            var id = $(this).attr('data-id');
            var obj = $('#optionWidget .option:visible');
            var attr_type = obj.attr('data-type');
            var attr_name = obj.find('.attr_name').val();
            var attr_value = obj.find('.attr_value').val();
            var is_active = $('#optionWidget .is_active:checked').val();
            var must = $('#optionWidget .must:checked').val();
            var sort = $('#optionWidget .sort').val();
            var is_sale_prop = $('#optionWidget .is_sale_prop').val();

            if (!checkField(obj.find('.attr_name'), '请填写正确的属性名', /^[\w\u4E00-\u9FA5]{2,18}$/)) {
                obj.find('.attr_name').focus();
                base.showTip('err', '请填写正确的字段名', 3000);
                return false;
            }
            var attr_tmp;
            if (attr_type == 'single') {
                attr_tmp = attr_value.replace(/\s/g, '').split('-');
                attr_tmp = getUniqueArray(attr_tmp);

                if (attr_tmp.length <= 1) {
                    base.showTip('err', '请填写单选选项,并用-隔开', 3000);
                    return false;
                }
                attr_value = attr_tmp.join('-');
            }

            if (attr_type == 'multi') {
                attr_tmp = attr_value.replace(/\s/g, '').split('-');
                attr_tmp = getUniqueArray(attr_tmp);

                if (attr_tmp.length <= 1) {
                    base.showTip('err', '请填写多选选项,并用-隔开', 3000);
                    return false;
                }
                attr_value = attr_tmp.join('-');
            }

            var data = {
                type: type,
                attr_name: attr_name,
                attr_value: attr_value,
                sort: sort,
                is_active: is_active
            };

            base.requestApi('/admin/api/product/saveAttr', {data: data, id: id}, function (res) {
                if (res.result == 1) {
                    window.location.reload();
                    base.hidePop('#optionPopup');
                }
            });

        });

        function getUniqueArray(a) {
            var hash = {},
                len = a.length,
                result = [];

            for (var i = 0; i < len; i++) {
                if (!hash[a[i]]) {
                    hash[a[i]] = true;
                    result.push(a[i]);
                }
            }
            return result;
        }

        // update
        $('.list .listData .upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            var attr_type = $(this).attr('data-attr_type');
            var attr_name = $(this).attr('data-attr_name');
            var attr_value = $(this).attr('data-attr_value');
            if (id) {
                base.showPop('#optionPopup');

                $('#optionWidget .saveBtn').attr('data-id', id);
                $('.choose-type-selc').hide();
                $('.option').hide();
                var obj = $('#option-' + attr_type);
                obj.find('.attr_name').val(attr_name);
                obj.find('.attr_value').val(attr_value);
                obj.show();
            }

            e.stopImmediatePropagation();
        });

    };

    exports.setPeripheral = function (form) {
        var btn = form + ' .submitBtn';

        // reset form
        function emptyForm() {
            // reset form
            $(form + ' .img').val('');
            $(form + ' .txtTitle').val('');
            $(form + ' .txtUrl').val('');
            $(form + ' .txtAdmin').val('');
            $(form + ' .txtContact').val('');
            $(form + ' .intSort').val('');
            $(form + ' .txtDetail').val('');
            $(btn).removeAttr('data-id');
        }

        // get data
        $('.list').on('click', ' .updateBtn', function () {
            var id = $(this).attr('data-id');
            $(form + ' .img').val($(this).attr('data-img'));
            $(form + ' .pic-preview').attr('src', $(this).attr('data-img'));
            $(form + ' .txtTitle').val($(this).attr('data-name'));
            $(form + ' .intSort').val($(this).attr('data-sort'));
            $(btn).attr('data-id', id);
            base.showPop("#linksPopup");
        });

        // add
        $('.addLinks').on('click', function () {
            emptyForm();
            base.showPop("#linksPopup");
        });

        // submit
        $(form).on('click', '.submitBtn', function (e) {
            // params
            var id = $(this).attr('data-id');
            var pic_url = $(form + ' .img').val();
            var title = $(form + ' .txtTitle').val();
            var sort = $(form + ' .intSort').val();
            if (!checkField(form + ' .img', '请上传图标')) {
                return false;
            }
            if (!checkField(form + ' .txtTitle', '请填写设施名称')) {
                return false;
            }

            var item = {
                'name': title,
                'img': pic_url,
                'sort': sort
            };

            // api request
            base.requestApi('/admin/api/product/savePeripheral', {data: item, id: id}, function (res) {
                if (res.error.code == 0) {
                    window.location.reload()
                    base.showTip('ok', '操作成功！');
                    base.hidePop();
                }
            });
            e.stopImmediatePropagation();
        })

    };

    // del
    exports.delPeripheral = function () {
        base.del('/admin/api/product/delPeripheral')
    }
});