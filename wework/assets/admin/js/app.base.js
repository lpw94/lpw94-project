define(function (require, exports) {
    require('jquery/icheck/jquery.iCheck.min.js');

    exports.init = function () {
        $(function () {
            // 底部时间
            (function startTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                $('.clock').html(h + ":" + m + ":" + s);
                var t = setTimeout(function () {
                    startTime()
                }, 500);

                function checkTime(i) {
                    if (i < 10) {
                        i = "0" + i
                    }
                    // add zero in front of numbers < 10
                    return i;
                }
            })();

            // 美化
            $('.form input:checkbox').icheck();
            $('.form input:radio').icheck();
            // 左侧菜单
            $(".side-menu").on('click', '.top-menu', function (e) {
                if ($(this).siblings('.sub-menu').hasClass('active')) {
                    $(this).find('.arrow-icon').removeClass('icon-unfold').addClass('icon-right');
                    $(this).siblings('.sub-menu').removeClass('active').hide();
                } else {
                    $(this).find('.arrow-icon').removeClass('icon-right').addClass('icon-unfold');
                    $(this).siblings('.sub-menu').addClass('active').fadeIn();
                }
                e.stopImmediatePropagation();
            })
        });
    };

    window.inAjaxProcess = false;
    exports.requestApi = function (uri, data, func, endProcess) {
        // 手动更改请求，立即结束ajax状态
        if (endProcess) {
            window.inAjaxProcess = false;
        }
        if (!inAjaxProcess) {
            var param = {
                url: uri,
                async: true,
                data: data,
                dataType: 'json',
                type: 'post',
                beforeSend: function () {
                    tip.showTip('wait', '处理请求...');
                    if (window.inAjaxProcess) {
                        tip.showTip('wait', '正在请求...');
                        return false;
                    }
                    // 正在处理状态
                    window.inAjaxProcess = true;
                },
                timeout: function () {
                    tip.showTip('err', '请求超时,请重试！', 2000);
                },
                abort: function () {
                    tip.showTip('err', '网路连接被中断！', 2000);
                },
                parsererror: function () {
                    tip.showTip('err', '运行时发生错误！', 2000);
                },
                error: function () {
                    if (window.inAjaxProcess && ajaxTip.time > 1000) {
                        tip.showTip('err', '运行错误，请重试！', 2000);
                    }
                },
                complete: function () {
                    setTimeout(function () {
                        if ($('#ajaxStatus').css('display') !== 'none') {
                            //tip.showTip('ok', '操作成功！', 2000);
                            tip.hideTip();
                        }

                        // 清除处理状态
                        window.inAjaxProcess = false;
                    }, ajaxTip.time);// 最后一次tip时间
                },
                success: function (res) {
                    if (typeof func == 'function') {
                        func(res);
                    }

                    if (res.error.code != 0) {
                        tip.showTip('err', res.error.msg, 3000);
                    }
                }
            };

            $.ajax(param);
        }
    };
    // status : err, ok, wait, warming
    exports.showTip = function (status, tip, time) {
        var t = new ajaxTip();
        t.showTip(status, tip, time);
    };

    exports.hideTip = function () {
        var t = new ajaxTip();
        t.hideTip();
    };

    /**
     * ajax tip
     *
     * @constructor
     */

    function ajaxTip() {

    }

    ajaxTip.ajaxTimer = null;
    ajaxTip.tip = null;
    ajaxTip.time = 0;
    ajaxTip.status = null;
    ajaxTip.prototype = {
        showTip: function (status, tip, time) {
            ajaxTip.status = status;
            ajaxTip.tip = tip;
            ajaxTip.time = time;

            $('#ajaxStatus').show();
            $('#ajaxStatus #ajaxTip').html(ajaxTip.tip).removeClass().addClass(ajaxTip.status);


            if (ajaxTip.time) {
                if (ajaxTip.ajaxTimer) {
                    clearTimeout(ajaxTip.ajaxTimer);
                }
                ajaxTip.ajaxTimer = setTimeout(function () {
                    $('#ajaxStatus').hide();
                    ajaxTip.inProcess = true;
                }, ajaxTip.time);
            }
        },
        hideTip: function () {
            $('#ajaxStatus').hide();
        },
        setTip: function (tip) {
            $('#ajaxStatus #ajaxTip').html(tip);
        }
    };
    window.tip = new ajaxTip();

    // popup basic show hide
    exports.showPop = function (popElem) {
        var pop = new popup(popElem);
        pop.show();
    };


    // popup basic show hide
    exports.hidePop = function (popElem) {
        var pop = new popup(popElem);
        pop.hide(popElem);
    };


    // popup
    function popup(popElem) {

        this.widget = popElem ? popElem : '.popup-wrap';

        var _this = this;
        // close click
        $('.popup-widget .popup-close').on('click', function () {
            _this.hide();
        });

        // bg click
        $('.popup-wrap').on('click', function (e) {
            if (e.target !== this) return;
            if ($(this).attr('data-close')) {
                _this.hide();
            }

            e.stopImmediatePropagation();
        });
    }

    popup.prototype = {
        'show': function () {
            $(this.widget).fadeIn();
        },
        'hide': function (elem) {
            if (elem) {
                $('.popup-wrap' + elem).hide();
            } else {
                $('.popup-wrap').hide();
            }
        }
    };

    // all select status
    exports.selectCheckbox = function () {
        // tr click
        $('.selectable.list .listData').on('click', ' .item .chk', function (e) {
            var chk_id = $(this).attr('data-id');

            if ($(this).prop('checked') == true || $(this).prop('checked') == 'checked') {
                $(this).parents('.item[data-id=' + chk_id + ']').addClass('selected');
            } else {
                $(this).parents('.item[data-id=' + chk_id + ']').removeClass('selected');
            }

            e.stopImmediatePropagation();
        });

        // checkbox click
        $('.selectable.list .listData').on('click', ' .item', function (e) {
            var chk_id = $(this).find('.chk').attr('data-id');
            if ($(this).find('.chk').prop('checked') == true || $(this).find('.chk').prop('checked') == 'checked') {
                $(this).removeClass('selected');
                $(this).find('.chk').attr('checked', false);
            } else {
                $(this).addClass('selected');
                $(this).find('.chk').attr('checked', true);
            }
        });

        // 全选
        $(document).on('click', ".selectAll", function () {
            $(this).addClass('current');
            $(this).siblings('.btn-light').removeClass('current');
            $(".list .listData .item input.chk").attr("checked", true);
            $('.list .listData .item').addClass('selected');
        });
        // 全不选
        $(document).on('click', ".selectNone", function () {
            $(this).siblings('.btn-light').removeClass('current');
            $(".list .listData .item input.chk").attr("checked", false);
            $('.list .listData .item').removeClass('selected');
        });
        // 反选
        $(document).on('click', ".selectInvert", function () {
            $(this).addClass('current');
            $(this).siblings('.btn-light').removeClass('current');
            $(".list .listData .item input.chk").each(function () {
                $(this).attr("checked", !this.checked);//反选
                var chk_id = $(this).attr('data-id')
                if ($(this).attr('checked') == true || $(this).attr('checked') == 'checked') {
                    $(this).parents('.item[data-id=' + chk_id + ']').addClass('selected');
                } else {
                    $(this).parents('.item[data-id=' + chk_id + ']').removeClass('selected');
                }
            });
        });
    };
    exports.selectCheckbox();

    // 列表删除功能
    exports.del = function (api, tip) {
        $('.list').on('click', '.delBtn', function (e) {
            // params
            var id = $(this).attr('data-id');

            // confirm
            var cm = window.confirm(tip || "您确认需要删除选中的数据吗？");
            if (!cm) {
                return;
            }

            del([id]);

            e.stopImmediatePropagation();
        }).on('click', '.delAllSelected', function (e) {
            var data = [];
            $(".list .listData input.chk").each(function () {
                if ($(this).attr('checked') == true || $(this).attr('checked') == 'checked') {
                    data.push($(this).attr('data-id'));
                }
            });

            //  has no selected
            if (data.length == 0) {
                exports.showTip('err', '请选择需要删除的项', 3000);
                return;
            }

            // confirm
            var cm = window.confirm(tip || "您确认需要删除选中的数据吗？");
            if (!cm) {
                return;
            }

            del(data);

            e.stopImmediatePropagation();
        });

        function del(data) {
            // api request
            exports.requestApi(api, {data: data}, function (res) {
                if (res.result == 1) {
                    for (var i = 0; i < data.length; i++) {
                        $('.listData .item[data-id="' + data[i] + '"]').fadeOut();
                        setTimeout(function () {
                            $('.listData .item[data-id="' + data[i] + '"]').remove();
                        }, 1000);
                    }

                    // 没有数据情况
                    if ($('.listData .item').length == 0) {
                        window.location.reload();
                    }

                    exports.showTip('ok', '恭喜您,删除成功！', 2000);
                }
            });
        }
    };

    // api publish
    exports.publish = function (api) {
        $(".list .listData").on('click', '.pubBtn', function (e) {
            // params
            var id = $(this).attr('data-id');
            var is_publish = $(this).attr('data-status');
            var data = {
                'id': id,
                'published': is_publish
            };

            // disable the button
            $(this).attr('disabled', true);
            // api request
            exports.requestApi(api, data, function (res) {
                if (res.result == 1) {
                    var btn = $('.pubBtn[data-id="' + id + '"]');
                    if (is_publish == 1) {
                        btn.attr('data-status', 0).text("取消发布").css('color', '');
                    } else {
                        btn.attr('data-status', 1).text("发布").css('color', '#f00');
                    }
                    exports.showTip('ok', '操作成功！', 1000);
                }
            });
            e.stopImmediatePropagation();
        });
    };

    window.checkField = function (elem, msg, regx) {
        var val = $(elem).val();

        if ($(elem).val() == '') {
            tip.showTip('err', msg, 2000);
            $(elem).focus();
            return false;
        } else {
            if (regx) {
                if (!new RegExp(regx).test(val)) {
                    tip.showTip('err', msg, 2000);
                    $(elem).focus();
                    return false;
                }
            }
        }

        return true;
    };

});


/**
 * Implements JSON stringify and parse functions
 * v1.0
 *
 * By Craig Buckler, Optimalworks.net
 *
 * As featured on SitePoint.com
 * Please use as you wish at your own risk.
 *
 * Usage:
 *
 * // serialize a JavaScript object to a JSON string
 * var str = JSON.stringify(object);
 *
 * // de-serialize a JSON string to a JavaScript object
 * var obj = JSON.parse(str);
 */

var JSON = JSON || {};

// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {

    var t = typeof (obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);

    }
    else {

        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n];
            t = typeof(v);

            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);

            json.push((arr ? "" : '"' + n + '":') + String(v));
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};


// implement JSON.parse de-serialization
JSON.parse = JSON.parse || function (str) {
    if (str === "") str = '""';
    eval("var p=" + str + ";");
    return p;
};
