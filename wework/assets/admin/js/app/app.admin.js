// admin user,group,menus,permission settings
define(function (require, exports) {

    var base = require('app.base');//公共函数

    /**
     * login access
     *
     * @param btn
     * @param referer
     */
    exports.login = function () {
        $('.loginForm').on('click', '.loginBtn', function (e) {
            var data = $('.loginForm').serializeObject();

            if (!new RegExp(/(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/).test(data.account)) {
                if (!new RegExp(/[0-9a-zA-Z-+]{4,16}/).test(data.account)) {
                    tip.showTip('err', "账号格式不准确，请填写用户名或邮箱！", 2000);
                    $('.forgotForm #account').focus();
                    return;
                }
            }

            if (data.password.length < 5 || data.password.length > 16) {
                tip.showTip('err', "密码长度为6-16位", 2000);
                return;
            }


            base.requestApi('/admin/api/account/login', data, function (res) {
                if (res.result == 1) {
                    setTimeout(function () {
                        window.location.href = res.data;
                    }, 1500);
                    tip.showTip("ok", '恭喜您，登陆成功！', 2000);
                }
            });

            e.stopImmediatePropagation();
        });
    };

    /**
     * update Admin userInfo
     * @param btn
     */
    exports.updateAdminInfo = function () {
        $('#btnUpAdmin').on('click', function () {
            var obj = $("#updateAdminForm");
            // params
            var name = obj.find('.name').val();
            var password = obj.find('.password').val();

            if (password) {
                if (!(password.length >= 6 && password.length <= 16)) {
                    obj.find('.password').focus();
                    tip.showTip('err', '密码长度为6-16位,为空则不修改~!', 3000);
                    return false;
                }
            }

            if (!name) {
                obj.find('.name').focus();
                tip.showTip('err', '用户名不能为空!', 3000);
            }

            // api request
            base.requestApi('/admin/api/admin/setMyInfo', {data: {'name': name, password: password}}, function (res) {
                if (res.error.code == 0) {
                    tip.showTip('ok', '恭喜您，个人信息修改成功！', 3000);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1500);
                }
            });
        });
    };

    /**
     * mv cat and their children to new parent
     * @param btn
     */
    exports.mvMenus = function (btn) {
        $(btn).on('click', function (e) {
            // params
            var toCid = $('select.mvMenusCat').val();

            if (isNaN(toCid) || toCid == '') {
                tip.showTip('err', '请选择二级栏目！', 3000);
                return false;
            }

            var data = [];
            $(".list .listData input.chk").each(function () {
                if ($(this).prop('checked') == true || $(this).prop('checked') == 'checked') {
                    data.push($(this).attr('data-id'));
                }
            });

            //  has no selected
            if (data.length == 0) {
                tip.showTip('err', '请选择需要移动的项', 3000);
                return;
            }

            // confirm
            var cm = window.confirm('你确定需要进行此操作吗？');
            if (!cm) {
                return;
            }

            // disable the button
            $(btn).attr('disabled', true);
            // api request
            base.requestApi('/admin/api/admin/mvMenu', {'data': data, 'cid': toCid}, function (res) {
                if (res.error.code == 0) {
                    for (var i = 0; i < data.length; i++) {
                        $('.listData .item[data-id="' + data[i] + '"]').remove();
                    }
                    tip.showTip('ok', '操作成功！', 2000);
                }
            });

            e.stopImmediatePropagation();
        });
    };

    /**
     * set menus
     */
    exports.setMenus = function () {
        // first cat click
        $("#menus").on('click', ' .menuCat', function () {
            var catPid = $(this).attr('data-id');

            // change current
            $("#menus .menuCat").removeClass('current');
            $(this).addClass('current');

            // change second cat view
            $("#menus .menuCat2").removeClass('current').hide();
            $("#menus .menuCat2[data-pid=" + catPid + "]").show();
        });
        // second cat click
        $("#menus").on('click', '.menuCat2', function () {
            var catId = $(this).attr('data-id');
            $("#menus .menuCat2").removeClass('current');
            $(this).addClass('current');
            $("#menus .listData .item").removeClass('current').hide();
            $("#menus .listData .item[data-cid=" + catId + "]").show();
            // add cid to attr
            $('#menus .listData .addMenuRow').show().attr('data-cid', catId);
            $('#menus .listData .addMenuBtn').show().attr('data-cid', catId);
        });

        // add menu item
        $("#menus").on('click', ' .addMenuBtn', function (e) {
            var catId = $(this).attr('data-cid');
            // append empty item
            var str = '<tr id="" class="item addMenuRow current" data-cid="' + catId + '" >';
            str += '<th class="name"></th>';
            str += '    <td></td>';
            str += '    <td><input class="txt sort" type="text" value="0" ></td>';
            str += '    <td><input class="txt isHide" type="text" value="0"/></td>';
            str += '    <td><input class="txt module" type="text" value="admin"/></td>';
            str += '    <td><input class="txt api" type="text" value=""/></td>';
            str += '    <td><input class="txt controller" type="text" value=""/></td>';
            str += '    <td><input class="txt action" type="text" value=""/></td>';
            str += '    <td><input class="txt menuTitle" type="text" value=""/></td>';
            str += '</tr>';
            // append
            $('#menus .listData').append(str);
            e.stopImmediatePropagation();
        });

        // submit
        var btn = '#setMenuBtn';
        $(btn).on('click', function (e) {
            var data = [];
            $('#menus .listData .item').each(function () {
                var id = $(this).attr('data-id');
                var cid = $(this).attr('data-cid');

                // change data
                var sort = $(this).find('.sort').val();
                var title = $(this).find('.menuTitle').val();
                var isHide = $(this).find('.isHide').val();
                var module = $(this).find('.module').val();
                var api = $(this).find('.api').val();
                var controller = $(this).find('.controller').val();
                var action = $(this).find('.action').val();

                //old data
                var old_order = $(this).find('.sort').attr('data-old');
                var old_title = $(this).find('.menuTitle').attr('data-old');
                var old_module = $(this).find('.module').attr('data-old');
                var old_controller = $(this).find('.controller').attr('data-old');
                var old_api = $(this).find('.api').attr('data-old');
                var old_action = $(this).find('.action').attr('data-old');
                var old_isHide = $(this).find('.isHide').attr('data-old');

                if (!(sort == old_order && title == old_title && isHide == old_isHide && module == old_module && controller == old_controller && action == old_action && old_api == api)) {
                    if (controller && action && title && cid) {
                        var menu = {
                            id: id,
                            cid: cid,
                            title: title,
                            sort: sort,
                            is_hide: isHide,
                            module: module,
                            api: api,
                            controller: controller,
                            action: action
                        };
                        data.push(menu);
                    }
                }
            });

            if (data.length == 0) {
                tip.showTip('err', '您未作任何的修改', 3000);
                return false;
            }

            // console.log(a);
            var data = {'menus': data}

            // disable the button
            $(btn).attr('disabled', true);
            // api request
            base.requestApi('/admin/api/admin/setMenu', data, function (res) {


                // cancel to disable the btn
                $(btn).attr('disabled', false);
                if (res.error.code == 0) {
                    tip.showTip('ok', '恭喜您，导航更新成功！即将跳转', 3000);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
            });
            e.stopImmediatePropagation();
        });


    };

    /**
     * menus cats
     */
    exports.setMenusCat = function () {

        $("table#menuCats").on({
                mouseenter: function () {
                    $(this).find('.add').show();
                },
                mouseleave: function () {
                    $(this).find('.add').hide();
                }
            }
        );
        /**
         * expand the hide menus
         */
        $('table#menuCats').on('click', ' .expand', function (e) {
            var status = $(this).attr('data-status');
            var cid = $(this).attr('data-cid');
            var txt = $(this).text();
            // current is hidden
            if (status == 'hide') {
                $('#menuCats tr[data-pid=' + cid + ']').show();
                $(this).attr('data-status', 'show');
                if (txt == '[ + ]') {
                    $(this).text('[ - ]');
                } else {
                    $(this).text('[-]');
                }
            } else {
                $('tr[data-pid=' + cid + ']').hide();
                $(this).attr('data-status', 'hide');
                if (txt == '[ - ]') {
                    $(this).text('[ + ]');
                } else {
                    $(this).text('[+]');
                }
            }
            e.stopImmediatePropagation();
        });

        /**
         * add action
         */
        $('table#menuCats').on('click', ' .add', function (e) {
            var parent_id = $(this).attr('data-pid');
            $('.expand[data-cid=' + parent_id + ']').attr('data-status', 'hide').text('[+]').trigger('click');
            // append empty item
            var str = '<tr class="item level2" data-id="" data-pid="' + parent_id + '"  style="display:table-item;">';
            str += '    <th class="name"></th>';
            str += '    <td class="operate"></td>';
            str += '    <td><input class="txt sort" type="text" value="0" /></td>';
            str += '    <td><input class="txt isHide" type="text" value="0" /></td>';
            str += '    <td><input class="txt icon" type="icon" value="" /></td>';
            str += '    <td>|一一 <input class="txt catTitle" type="text" value="" /></td>';
            str += '    <td><input class="txt catUrl" type="text" value="" /></td>';
            str += '</tr>';
            // append
            $('#menuCats tr[data-id=' + parent_id + ']').after(str);
            e.stopImmediatePropagation();
        });
        var btn = '#catDoBtn';
        $(btn).on('click', function (e) {
            var data = [];
            $('#menuCats .item').each(function () {
                var cid = $(this).attr('data-id');
                var parent_id = $(this).attr('data-pid');

                // change data
                var sort = $(this).find('.sort').val();
                var title = $(this).find('.catTitle').val();
                var url = $(this).find('.catUrl').val();
                var isHide = $(this).find('.isHide').val();
                var icon = $(this).find('.icon').val();

                //old data
                var old_order = $(this).find('.sort').attr('data-old-order');
                var old_title = $(this).find('.catTitle').attr('data-old-title');
                var old_url = $(this).find('.catUrl').attr('data-old-url');
                var old_isHide = $(this).find('.isHide').attr('data-old-isHide');
                var old_icon = $(this).find('.icon').attr('data-old-icon');

                if (!(sort == old_order && title == old_title && url == old_url && isHide == old_isHide && icon == old_icon)) {
                    var menu = {
                        id: cid,
                        parent_id: parent_id,
                        title: title,
                        sort: sort,
                        url: url,
                        icon: icon,
                        is_hide: isHide
                    };
                    data.push(menu);
                }
            });
            if (data.length == 0) {
                tip.showTip('err', '您未作任何的修改', 3000);
                return false;
            }
            //var a = JSON.stringify(data);
            // console.log(a);
            var data = {'menuCats': data}
            //console.log(data);
            // disable the button
            $(btn).attr('disabled', true);
            // api request
            base.requestApi('/admin/api/admin/setMenuCat', data, function (res) {

                tip.showTip('ok', '恭喜您，导航更新成功！即将跳转', 3000);
                setTimeout(function () {
                    window.location.reload();
                }, 1000);

                // cancel to disable the btn
                $(btn).attr('disabled', false);
            });
            e.stopImmediatePropagation();
        });
    }

    /**
     * set group
     */
    exports.setGroup = function () {
        // first cat click
        $("#groupForm").on('click', ' #addOption', function (e) {
            var str = '<tr class="item" >';
            str += '     <th class="name"></th>';
            str += '     <td><input class="txt group_name" type="text" value="" /></td>';
            str += '     <td><input class="txt group_desc" type="text" value="" /></td>';
            str += '     <td></td>';
            str += '</tr>';
            // append
            $("#groupForm .listData").append(str);
            e.stopImmediatePropagation();
        });

        var btn = '#groupForm #setGroupBtn';
        $(btn).on('click', function (e) {
            var data = [];
            $('#groupForm .listData .item').each(function () {
                var id = $(this).attr('data-id');

                // change data
                var group_name = $(this).find('.group_name').val();
                var group_desc = $(this).find('.group_desc').val();

                //old data
                var old_name = $(this).find('.sort').attr('data-old-name');
                var old_desc = $(this).find('.menuTitle').attr('data-old-desc');

                if (!(group_name == old_name && group_desc == old_desc)) {
                    if (group_name) {
                        var group = {
                            id: id,
                            name: group_name,
                            desc: group_desc
                        };
                        data.push(group);
                    }
                }
            });

            if (data.length == 0) {
                tip.showTip('err', '您未作任何的修改', 3000);
                return false;
            }
            //var a = JSON.stringify(data);
            // console.log(a);
            var data = {'groups': data};

            // disable the button
            $(btn).attr('disabled', true);
            // api request
            base.requestApi('/admin/api/admin/setGroup', data, function (res) {

                if (res.error.code == 0) {
                    tip.showTip('ok', '恭喜您，管理员组设置成功！即将跳转', 3000);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }

                // cancel to disable the btn
                $(btn).attr('disabled', false);
            });
            e.stopImmediatePropagation();
        });
    }

    /**
     * set user permission
     */
    exports.setUserPermission = function () {
        $('#permissionForm ').on('click', '.chk', function (e) {
            var perm = $(this).val();
            if (perm == 1) {
                $(this).val(0);
            } else {
                $(this).val(1);
            }
            e.stopImmediatePropagation();
        });

        // select all
        $('#permissionForm').on('click', ' .selcAll', function () {
            var cid = $(this).attr('data-cid');
            var selc = cid ? '[data-cid=' + cid + ']' : '';
            $('#permissionForm .chk' + selc).each(function () {
                $(this).prop('checked', "checked");
                $(this).val(1);
            });
        });

        // select none
        $('#permissionForm').on('click', '.selcNone', function () {
            var cid = $(this).attr('data-cid');
            var selc = cid ? '[data-cid=' + cid + ']' : '';
            $('#permissionForm .chk' + selc).each(function () {
                $(this).prop('checked', false);
                $(this).val(0);
            });
        });

        //
        var btn = '#permissionForm .setPermissionBtn';
        // set permission
        $(btn).on('click', function (e) {

            var data = [];
            var uid = $(this).attr('data-uid');

            $('#permissionForm .chk').each(function () {
                var perm_val = $(this).val();
                var old_perm = $(this).attr('data-old-perm');
                var perm_id = $(this).attr('data-perm-id');
                var menu_id = $(this).attr('data-menu-id');

                if (!(old_perm == perm_val)) {
                    var info = {'perm_id': perm_id, 'menu_id': menu_id, 'enable': perm_val};
                    data.push(info);
                }
            });
            if (data.length == 0) {
                tip.showTip('err', '您未作任何的修改', 3000);
                return false;
            }
            var data = {'permissions': JSON.stringify(data), 'uid': uid}


            // disable the button
            $(btn).attr('disabled', true);
            // api request
            base.requestApi('/admin/api/admin/setUserPerm', data, function (res) {

                if (res.error.code == 0) {
                    tip.showTip('ok', '恭喜您，管理员权限设置成功！即将跳转', 3000);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }

                // cancel to disable the btn
                $(btn).attr('disabled', false);
            });
            e.stopImmediatePropagation();
        })
    }

    /**
     * set user permission
     */
    exports.setGroupPermission = function () {
        $('#permissionForm').on('click', ' .chk', function (e) {
            var perm = $(this).val();
            if (perm == 1) {
                $(this).val(0);
            } else {
                $(this).val(1);
            }
            e.stopImmediatePropagation();
        });

        // select all
        $('#permissionForm').on('click', '.selcAll', function () {
            var cid = $(this).attr('data-cid');
            var selc = cid ? '[data-cid=' + cid + ']' : '';
            $('#permissionForm .chk' + selc).each(function () {
                $(this).val(1);
                $(this).prop('checked', 'checked');
            });
        });

        // select none
        $('#permissionForm').on('click', ' .selcNone', function () {
            var cid = $(this).attr('data-cid');
            var selc = cid ? '[data-cid=' + cid + ']' : '';
            $('#permissionForm .chk' + selc).each(function () {
                $(this).val(0);
                $(this).prop('checked', false);
            });
        });

        //
        var btn = '#permissionForm .setPermissionBtn';
        // set permission
        $(btn).on('click', function (e) {

            var data = [];
            var gid = $(this).attr('data-gid');

            $('#permissionForm .chk').each(function () {
                var perm_val = $(this).val();
                var old_perm = $(this).attr('data-old-perm');
                var perm_id = $(this).attr('data-perm-id');
                var menu_id = $(this).attr('data-menu-id');

                if (!(old_perm == perm_val)) {
                    var info = {'perm_id': perm_id, 'menu_id': menu_id, 'enable': perm_val};
                    data.push(info);
                }
            });
            if (data.length == 0) {
                tip.showTip('err', '您未作任何的修改', 3000);
                return false;
            }

            var data = {'permissions': JSON.stringify(data), 'gid': gid};

            // disable the button
            $(btn).attr('disabled', true);
            // api request
            base.requestApi('/admin/api/admin/setGroupPerm', data, function (res) {

                if (res.error.code == 0) {
                    tip.showTip('ok', '恭喜您，管理员权限设置成功！即将跳转', 3000);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }

                // cancel to disable the btn
                $(btn).attr('disabled', false);
            });
            e.stopImmediatePropagation();
        })
    }

    /**
     */
    exports.delAdmin = function () {
        $(".list .listData").on('click', ".delBtn", function (e) {
            // params
            var id = $(this).attr('data-id');
            var data = id;
            // confirm
            var cm = window.confirm('你确定需要该条数据吗？');
            if (!cm) {
                return;
            }

            // api request
            base.requestApi('/admin/api/admin/del', {data: data}, function (res) {
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

    exports.saveAdmin = function () {
        // add click
        $('.addOptionBtn').click(function (e) {
            base.showPop('#optionPopup');

            e.stopImmediatePropagation();
        });

        // confirm
        $('#optionWidget').on('click', '.res-btn', function () {
            var id = $(this).attr('data-id');
            var obj = $('#optionWidget');
            var name = obj.find('.name').val();
            var password = obj.find('.password').val();
            var account = obj.find('.account').val();
            var active = $('#optionWidget .active:checked').val();
            var level = $('#optionWidget .role').val();

            if (!checkField(obj.find('.account'), '登陆账号未5-16位字母数字下线组成', /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/)) {
                obj.find('.account').focus();
                tip.showTip('err', '登陆账号为5-16位字母数字下线组成', 3000);
                return false;
            }

            if (!id) {
                if (password.length < 6 || password.length > 16) {
                    obj.find('.password').focus();
                    tip.showTip('err', '新建账号时,密码必须填写,长度为6-16位~!', 3000);
                    return false;
                }
            } else {
                if (password) {
                    if (!(password.length >= 6 && password.length <= 16)) {
                        obj.find('.password').focus();
                        tip.showTip('err', '密码长度为6-16位,为空则不修改~!', 3000);
                        return false;
                    }
                }
            }

            if (!level) {
                obj.find('.role').focus();
                tip.showTip('err', '请选择用户角色~!', 3000);
                return false;
            }

            var data = {
                account: account,
                name: name,
                password: password,
                group_id: level,
                active: active
            };

            base.requestApi('/admin/api/admin/save', {data: data, id: id}, function (res) {
                if (res.result == 1) {
                    window.location.reload();
                    base.hidePop('#optionPopup');
                }
            });

        });

        // update
        $('.list .listData .upBtn').click(function (e) {
            var id = $(this).attr('data-id');
            var level = $(this).attr('data-level');
            var name = $(this).attr('data-name');
            var account = $(this).attr('data-account');
            var active = $(this).attr('data-active');

            if (id) {
                base.showPop('#optionPopup');

                $('#optionWidget .res-btn').attr('data-id', id);
                var obj = $('#optionWidget');
                obj.find('.account').val(account);
                obj.find('.name').val(name);
                obj.find('.password').val("");
                obj.find('.role option[value="' + level + '"]').prop('selected', 'selected');
                obj.find('.active[value="' + active + '"]').prop('checked', 'checked');
            }

            e.stopImmediatePropagation();
        });

        // update
        $('.addBtn').click(function (e) {
            var id = $(this).attr('data-id');
            var level = $(this).attr('data-level');
            var name = $(this).attr('data-name');
            var account = $(this).attr('data-account');
            var active = $(this).attr('data-active');

            base.showPop('#optionPopup');

            $('#optionWidget .res-btn').attr('data-id', id);
            var obj = $('#optionWidget');
            obj.find('.account').val("");
            obj.find('.name').val("");
            obj.find('.password').val("");
            obj.find('.role option[value=""]').prop('selected', 'selected');
            obj.find('.active[value="1"]').prop('checked', 'checked');

            e.stopImmediatePropagation();
        });

    };
});