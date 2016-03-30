// admin user,group,menus,permission settings
define(function (require, exports) {

    var base = require('app.base');//公共函数
    var store = require('app/app.storage');//公共函数


    exports.setShanghai = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/mall/getShanghai', {'id': id}, function (res) {
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
            $('#catPopup').find('#name').val(data.title);
            $('#catPopup').find('#detail').val(data.content);
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);
        }

        function resetModal() {
            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var detail = $('#catPopup').find('#detail').val();

                var id = $(this).attr('data-id');

                var data = {
                    title: name,
                    content: detail
                };

                // api request
                base.requestApi('/admin/api/mall/saveShanghai', {'data': data, id: id}, function (res) {
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

    exports.setMainland = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/mall/getMainland', {'id': id}, function (res) {
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
            $('#catPopup').find('#name').val(data.project);
            $('#catPopup').find('#department').val(data.department);
            $('#catPopup').find('#detail').val(data.marks);
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);
        }

        function resetModal() {
            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var department = $('#catPopup').find('#department').val();
                var detail = $('#catPopup').find('#detail').val();

                var id = $(this).attr('data-id');

                var data = {
                    project: name,
                    department: department,
                    marks: detail
                };

                // api request
                base.requestApi('/admin/api/mall/saveMainland', {'data': data, id: id}, function (res) {
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


    exports.setHongkong = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/mall/getHongkong', {'id': id}, function (res) {
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
            $('#catPopup').find('#name').val(data.package);
            $('#catPopup').find('#price_HK').val(data.price_HK);
            $('#catPopup').find('#price_rmb').val(data.price_rmb);
            $('#catPopup').find('#detail').val(data.discribe);
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);
        }

        function resetModal() {
            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('#price_HK').val('');
            $('#catPopup').find('#price_rmb').val('');
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var price_HK = $('#catPopup').find('#price_HK').val();
                var price_rmb = $('#catPopup').find('#price_rmb').val();
                var detail = $('#catPopup').find('#detail').val();

                var id = $(this).attr('data-id');

                var data = {
                    package: name,
                    price_HK: price_HK,
                    price_rmb: price_rmb,
                    discribe: detail
                };

                // api request
                base.requestApi('/admin/api/mall/saveHongkong', {'data': data, id: id}, function (res) {
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

    exports.setQianhai = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/mall/getQianhai', {'id': id}, function (res) {
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
            $('#catPopup').find('.field-area').html(data);
        }

        function resetModal() {
            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var imgs = "";
                $('#picturesPreview .pic').find('img').each(function () {
                    imgs += $(this).attr('src') + ';';
                });
                var url = "";
                $('#catPopup').find(".linkUrl").each(function () {
                    url += $(this).val() + ';';
                });
                if (imgs != "") {
                    imgs = imgs.substr(0, imgs.length - 1);
                }
                if (url != "") {
                    url = url.substr(0, url.length - 1);
                    var temp_url = url.split(';');
                    var temp_imgs = imgs.split(';');
                    for (var i in temp_imgs) {
                        if (temp_imgs[i] != "") {
                            temp_imgs[i] = temp_imgs[i] + "-" + temp_url[i];
                        }
                    }
                    imgs = temp_imgs.join(';');
                }
                var id = $('#catPopup').find('#data_id').val();
                var data = {
                    name: name,
                    val: imgs
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
    exports.setBaseInfo = function () {
        // update event
        $('.upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.requestApi('/admin/api/site/getKeyVal', {'id': id}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '获取数据成功！', 1000);
                    base.showPop('#catPopup');
                    $("#data_id").val(res.data.id);
                    setModal(res.data.val);
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
            $('#catPopup').find('.field-area .keyVal').html(data);
        }

        function resetModal() {
            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#detail').val('');
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var val = $('#catPopup').find('#keyVal').val();
                var id = $('#catPopup').find('#data_id').val();
                console.log(id);
                var data = {
                    val: val
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