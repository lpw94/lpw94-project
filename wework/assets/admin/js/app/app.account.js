define(function (require, exports) {
    var base = require("/static/panel/js/app/panel/panel.base");
    require("/static/panel/js/jquery/jquery.dragdrop");
    require('/static/panel/js/jquery/jquery.stickyNavbar.min');
    require('/static/panel/js/jquery/jquery.easing.min');

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


            base.requestApi('/operator/api/account/login', data, function (res) {
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

    function checkField(elem, regx) {
        var val = $(elem).val();
        var placeholder = $(elem).attr("placeholder");
        var tips = $(elem).attr("data-tip");
        if ($(elem).val() == '') {
            tip.showTip('err', placeholder + '不能为空', 2000);
            return false;
        } else {
            if (regx) {
                tips = tips || "格式不正确";
                if (!new RegExp(regx).test(val)) {
                    tip.showTip('err', placeholder + tips, 3000);
                    return false;
                }
            }
        }

        return true;
    }

});