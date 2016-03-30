// admin user,group,menus,permission settings
define(function (require, exports) {

    var base = require('app.base');//公共函数
    var store = require('app/app.storage');//公共函数

    /**
     * publish post or not
     *
     */
    exports.pubSalon = function () {
        base.publish('/admin/api/salon/publish');
    };

    /**
     * del post
     */
    exports.delSalon = function () {
        base.del('/admin/api/salon/del');
    };
    /**
     * del post
     */
    exports.delQuestion = function () {
        base.del('/admin/api/salon/delQuestion');
    };
    /**
     * mv cat and their children to new parent
     * @param btn
     */
    exports.mvPost = function () {
        $('.list').on('click', '.mvPostBtn', function (e) {
            // params
            var toCid = $('select.mvPostCat').val();

            if (isNaN(toCid) || toCid == '') {
                base.showTip('err', '请选择分类！', 3000);
                return false;
            }
            var data = [];
            $(".list .listData input.chk").each(function () {
                if ($(this).attr('checked') == true || $(this).attr('checked') == 'checked') {
                    data.push($(this).attr('data-id'));
                }
            });

            //  has no selected
            if (data.length == 0) {
                base.showTip('err', '请选择需要移动的项', 3000);
                return;
            }

            // confirm
            var cm = window.confirm('你确定需要移动选中的活动到新分类吗？');
            if (!cm) {
                return;
            }

            // api request
            base.requestApi('/admin/api/salon/mvPost', {'data': data, 'cid': toCid}, function (res) {
                if (res.result == 1) {
                    base.showTip('ok', '操作成功！', 2000);
                    setTimeout(function(){
                        window.location.reload();

                    },2000)
                }
            });

            e.stopImmediatePropagation();
        });
    };
    /**
     * add post
     */
    exports.saveSalon = function () {
        require('jquery/timepicker/jquery.datetimepicker');

        // 初始化编辑器
        var editor = require('app/app.editor');
        editor.init('#salonForm #txtContent');
        // 初始化上传
        store.getImg('#upCoverIcon', function (res) {
            $('#thumb').val(res.url);
            $('.imgPreview').attr('src', res.url).show();
        });

        // 时间选择
        $("#end_time").datetimepicker({
            // minDate: 0//yesterday is minimum date(for today use 0 or -1970/01/01)
        });
        // 时间选择
        $("#apply_end").datetimepicker({
            // minDate: 0//yesterday is minimum date(for today use 0 or -1970/01/01)
        });

        $(".submitBtn").on('click', function (e) {
            // params
            var data = $("#salonForm").serializeObject();

            // if update
            var id = $(this).attr('data-id');

            if (checkField('#salonForm #title', '请填写主标题') == false) {
                return false;
            }

            if (checkField('#salonForm #thumb', '请上传封面图片') == false) {
                return false;
            }

        /*    if (checkField('#salonForm #num', '请填写最多容纳人数', /^\d+$/) == false) {
                return false;
            }*/


            if (checkField('#salonForm #time', '请填写活动时间') == false) {
                return false;
            }

          /*  if (checkField('#salonForm #end_time', '请选择活动报名截止日期') == false) {
                return false;
            }*/



            if (checkField('#salonForm #txtContent', '请选择活动介绍') == false) {

            }
            if($("#salonForm #cat_id").val()=='0'){
                base.showTip('err', '请选择沙龙分类！',1000);
                return false;
            }
            if (checkField('#salonForm #cat_id', '请选择沙龙分类') == false) {
                return false;
            }
            // api request
            base.requestApi('/admin/api/salon/save', {data: data, id: id}, function (res) {
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

    exports.setQuestion = function (form) {
        var btn = form + ' .submitBtn';
        // reset form
        function emptyForm() {
            // reset form
            $(form + ' .txtTitle').val('');
            $(form + ' .intSort').val('');
            $(btn).removeAttr('data-id');
        }

        function setItem(item, id) {
            var obj = $('.listData .row[data-id="' + id + '"]');
            // set form data
            obj.find('.admin').text(item.admin);
            obj.find('.contact').text(item.contact);
            obj.find('.sort').text(item.sort);
            obj.find('.txtDetail').text(item.detail);
        }

        // get data
        $('.row .updateBtn').on('click', function () {
            $(form + ' .txtTitle').val($(this).attr('data-name'));
            $(form + ' .intSort').val($(this).attr('data-sort'));
            $(btn).attr('data-id', $(this).attr('data-id'));
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
            var title = $(form + ' .txtTitle').val();
            var sort = $(form + ' .intSort').val();

            var item = {
                'name': title,
                'sort': sort
            };

            // api request
            base.requestApi('/admin/api/salon/saveQuestion', {data: item, id: id}, function (res) {
                if (res.error.code == 0) {
                    window.location.reload();
                    base.showTip('ok', '操作成功！');
                }
            });
            e.stopImmediatePropagation();
        })
    };
    exports.setPic = function () {
        require('jquery/jquery.dragsort.min');

        // 多图
        store.getImg('#uploadProductPictures', function (res) {
            var str = '';
            $(res.url).each(function (index, img_url) {
                var isAdded = $('#picturesPreview').find('img[src="' + img_url + '"]');
                if (!(isAdded && isAdded.length > 0)) {
                    str += '<li class="pic">';
                    str += '<p><img src="' + img_url + '"></p>';
                    str += '<p style="padding: 5px 0;">';
                    str += '<input type="text" name="review_imgs[name][]" value="' + res.name[index] + '" id="" class="" placeholder="图片描述"/>';
                    str += '<input type="hidden" name="review_imgs[url][]" value="' + img_url + '" id="" class="" placeholder="图片描述"/>';
                    str += '</p>';
                    str += '<p class="">';
                    str += ' <a href="javascript:;" class="rmBtn">删除图片</a>';
                    str += '</p>';
                    str += '</li>';
                }
            });
            $('#picturesPreview ul').append(str);
        }, true);

        // $('#picturesPreview ul').dragsort();

        // 移除图片
        $("#picturesPreview").on('click', '.rmBtn', function (e) {
            $(this).parent().parent().remove();
            e.stopImmediatePropagation();
        });

        // 设置主图
        $("#picturesPreview").on('click', '.setMainPic', function (e) {
            var src = $(this).parent().parent().find('img').attr('src');
            $('#thumbPreview').attr('src', src);
            $('#cover').val(src);
            e.stopImmediatePropagation();
        });
    };
    exports.salonCat = function () {
        //删除
        $(".delBtn").click(function () {
            var id = $(this).attr('data-id');
            base.requestApi('/admin/api/salon/delCat', {id: id}, function (res) {
                if (res.result == 1) {
                    window.location.reload();
                    base.showTip('ok', '操作成功！', 1000);
                }
            });
        });
        // update event
        $('.btn-update').click(function (e) {
            var id = $(this).attr('data-id');
            // api request
            base.showTip('ok', '获取数据成功！', 1000);
            base.showPop('#catPopup');
            data = JSON.parse($.base64.decode($(this).attr('data-detail')));
            setModal(data);

            e.stopImmediatePropagation();
        });

        // add event
        $('.btn-add').click(function (e) {
            resetModal();
            base.showPop('#catPopup');
        });

        // save event
        save();

        function setModal(data) {
            $('#catPopup').find('#name').val(data.name);
            $('#catPopup').find('#brief').val(data.brief);
            $('#catPopup').find("input[value='"+data.is_apply+"']").parent().trigger('click');
            $('#catPopup').find('.saveBtn').attr('data-id', data.id);
        }

        function resetModal() {
            $('#catPopup').find('#name').val('');
            $('#catPopup').find('#brief').val('');
            $('#catPopup').find('.saveBtn').removeAttr('data-id');
            $('#catPopup').find("input[value='1']").parent().trigger('click');
        }

        function save() {
            $('#catPopup .saveBtn').click(function (e) {
                var name = $('#catPopup').find('#name').val();
                var brief = $('#catPopup').find('#brief').val();
                var is_apply = $('#catPopup').find(".checked").find('input').val();
                var id = $(this).attr('data-id');

                var data = {
                    name: name,
                    brief: brief,
                    is_apply:is_apply
                };
                // api request
                base.requestApi('/admin/api/salon/saveCat', {'data': data, id: id}, function (res) {
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