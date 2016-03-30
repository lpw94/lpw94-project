// for set channel suggest data
define(function (require, exports) {
    var base = require('app.base');//公共函数

    exports.setLinks = function (form) {
        var btn = form + ' .submitBtn';
        // set form
        function setForm(item) {
            $(form + ' .logo').val(item.logo);
            $(form + ' .txtTitle').val(item.name);
            $(form + ' .txtUrl').val(item.url);
            $(form + ' .txtAdmin').val(item.admin);
            $(form + ' .txtContact').val(item.contact);
            $(form + ' .intSort').val(item.sort);
            $(form + ' .txtDetail').val(item.detail);
            $(btn).attr('data-id', item.id);
        }

        // reset form
        function emptyForm() {
            // reset form
            $(form + ' .logo').val('');
            $(form + ' .txtTitle').val('');
            $(form + ' .txtUrl').val('');
            $(form + ' .txtAdmin').val('');
            $(form + ' .txtContact').val('');
            $(form + ' .intSort').val('');
            $(form + ' .txtDetail').val('');
            $(btn).removeAttr('data-id');
        }

        function setItem(item, id) {
            var obj = $('.listData .row[data-id="' + id + '"]');
            // set form data
            obj.find('.logo').attr('src', item.logo).text(item.name);
            obj.find('.admin').text(item.admin);
            obj.find('.contact').text(item.contact);
            obj.find('.sort').text(item.sort);
            obj.find('.txtDetail').text(item.detail);
        }

        // get data
        $('.row .updateBtn').on('click', function () {
            var id = $(this).attr('data-id');
            base.requestApi('/admin/api/links/get', {'id': id}, function (res) {
                if (res.error.code == 0) {
                    base.showTip('ok', '成功获取数据', 1000);
                    var item = res.data;

                    // set form data
                    setForm(item);

                    base.showPop('#linksPopup');
                }
            });
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
            var pic_url = $(form + ' .logo').val();
            var title = $(form + ' .txtTitle').val();
            var url = $(form + ' .txtUrl').val();
            var admin = $(form + ' .txtAdmin').val();
            var contact = $(form + ' .txtContact').val();
            var sort = $(form + ' .intSort').val();
            var detail = $(form + ' .txtDetail').val();

            var item = {
                'name': title,
                'logo': pic_url,
                'url': url,
                'admin': admin,
                'contact': contact,
                'sort': sort,
                'detail': detail
            };

            // api request
            base.requestApi('/admin/api/links/save', {data: item, id: id}, function (res) {
                if (res.error.code == 0) {
                    if (id) {
                        // set dom
                        setItem(item, id);
                    } else {
                        window.location.reload()
                    }
                    base.showTip('ok', '操作成功！');
                    base.hidePop();
                }
            });
            e.stopImmediatePropagation();
        })

    };

    // del
    exports.delLink = function () {
        base.del('/admin/api/links/del')
    }
});