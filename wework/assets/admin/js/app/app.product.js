define(function (require, exports) {
    var base = require('app.base');
    var editor = require('app/app.editor');
    var store = require('app/app.storage');
    require('jquery/jquery.dragsort.min');
    require('jquery/jquery.stickyNavbar.min');
    require('jquery/jquery.easing.min');

    exports.pub = function () {
        base.publish('/admin/api/product/publish');
    };

    /**
     * del post
     * @param btn
     */
    exports.delProduct = function () {
        base.del('/admin/api/product/del');
    };

    // 商品规格设置
    function ItemSpecTable() {

    }

    ItemSpecTable.spec_data = {};
    ItemSpecTable.prototype = {
        init: function (data_spec) {
            var _this = this;
            $('#product-spec').on('click', '.spec-chk', function () {
                _this.genTable();
            });

            if (data_spec) {
                ItemSpecTable.spec_data = data_spec;
                _this.genTable();
            }
        },
        genTable: function () {
            var _this = this;
            // 循环获取
            var data_tmp = [];
            $('.spec-field').each(function () {
                var spec_id = $(this).attr('data-spec_id');
                var spec_index = $(this).attr('data-index');
                var spec_name = $(this).attr('data-spec_name');
                var spec_arr = [];

                $(this).find('.spec-chk:checked').each(function () {
                    var spec_key = $(this).attr('data-spec_key');
                    var spec_val = $(this).attr('data-spec_val');
                    var tmp = {"key": spec_key, "val": spec_val, "spec_id": spec_id, "spec_name": spec_name};
                    spec_arr.push(tmp);
                });

                if (spec_arr.length > 0) {
                    // 排序作用
                    data_tmp[spec_index] = {
                        "spec_id": spec_id,
                        "spec_name": spec_name,
                        "spec_data": spec_arr,
                        "spec_count": spec_arr.length
                    };
                }
            });

            if (data_tmp.length > 0) {
                var data = [];
                // 去除索引，去除空数组。
                for (var n in data_tmp) {
                    if (data_tmp[n]) {
                        data.push(data_tmp[n]);
                    }
                }
                _this.genTHead(data);
                _this.genTBody(data);
            } else {
                $('.spec-list .listHead').html("");
                $('.spec-list .listData').html("");
            }
        },
        genTBody: function (data) {
            var len = data.length;
            var tableColRowData = [];
            var fullColRowData = [];
            var g = 0;
            var hour_price = $('#hour_price').val();
            var day_price = $('#day_price').val();
            if (len == 1) {
                var fst = data[0].spec_data;
                for (var i = 0; i < fst.length; i++) {
                    fullColRowData[g] = [fst[i]];

                    tableColRowData.push([fst[i]]);

                    g++;
                }
            }

            if (len == 2) {
                var sec0 = data[0].spec_data;
                var sec1 = data[1].spec_data;
                var row_flag = 0;

                for (var i0 = 0; i0 < sec0.length; i0++) {
                    for (var i1 = 0; i1 < sec1.length; i1++) {
                        var b0 = sec0[i0];
                        var b1 = sec1[i1];
                        fullColRowData[g] = [b0, b1];

                        b0.rowspan = sec1.length;

                        // 当前行号+spec_id
                        if (row_flag == b0.spec_id + '' + i0) {
                            b0 = '-';
                        }

                        // 设置flag
                        row_flag = b0 == '-' ? row_flag : b0.spec_id + '' + i0;

                        tableColRowData.push([b0, b1]);

                        g++;
                    }
                }
            }

            if (len == 3) {
                var thr0 = data[0].spec_data;
                var thr1 = data[1].spec_data;
                var thr2 = data[2].spec_data;

                var row0_flag = 0;
                var row1_flag = 0;

                for (var j0 = 0; j0 < thr0.length; j0++) {
                    for (var j1 = 0; j1 < thr1.length; j1++) {
                        for (var j2 = 0; j2 < thr2.length; j2++) {
                            var c0 = thr0[j0];
                            var c1 = thr1[j1];
                            var c2 = thr2[j2];
                            fullColRowData[g] = [c0, c1, c2];

                            c1.rowspan = thr2.length;
                            c0.rowspan = thr1.length * thr2.length;

                            // 第一列：当前行号+spec_id
                            if (row0_flag == c0.spec_id + '' + j0) {
                                c0 = '-';
                            }

                            // 第二列：
                            if (row1_flag == c1.spec_id + '' + j0 + '' + j1) {
                                c1 = '-';
                                c1.skip_row = true;
                            }

                            // 设置flag
                            row0_flag = c0 == '-' ? row0_flag : c0.spec_id + '' + j0;
                            row1_flag = c1 == '-' ? row1_flag : c1.spec_id + '' + j0 + '' + j1;

                            tableColRowData.push([c0, c1, c2]);

                            g++;
                        }
                    }
                }
            }

            var strTbody = "";
            for (var n in tableColRowData) {
                var columns = tableColRowData[n];
                var all = fullColRowData[n];
                var strColumn = "";
                var spec_data = []; // spec data group
                var spec_uniq_key = ''; // spec data group

                for (var m in columns) {
                    // 循环
                    spec_data.push({
                        "spec_id": all[m].spec_id,
                        "spec_name": all[m].spec_name,
                        "key": all[m].key,
                        "val": all[m].val
                    });
                    spec_uniq_key += all[m].spec_id + ':' + all[m].key + ';';
                    var spec = columns[m];
                    if (spec != '-') {
                        var rowspan = !isNaN(spec.rowspan) ? 'rowspan="' + spec.rowspan + '"' : "";

                        strColumn += '<td ' + rowspan + ' data-spec_key="' + spec.key + '" data-spec_id="' + spec.spec_id
                            + '" data-spec_val="' + spec.val + '">' + tableColRowData[n][m].val + '</td>';
                    } else {
                        strColumn += '';
                    }
                }

                strTbody += '<tr ' +
                    'data-spec_data="' + $.base64.encode(JSON.stringify(spec_data)) + '"  ' +
                    'data-spec_uniq_key="' + spec_uniq_key + '"  ' +
                    'class="spec">';
                strTbody += strColumn;

                // 初始化原有数据
                var icon = '', num = '', barcode = '';
                if (ItemSpecTable.spec_data) {
                    var spec_item = ItemSpecTable.spec_data[spec_uniq_key];
                    if (spec_item && spec_item != undefined) {
                        hour_price = spec_item.hour_price;
                        day_price = spec_item.day_price;
                        icon = spec_item.icon;
                        num = spec_item.num;
                    }
                }

                // 最后默认数据
                strTbody += '<td><input type="text" value="' + num + '" class="num" /></td>';
                strTbody += '<td><input type="text" value="' + hour_price + '" class="hour_price" /></td>';
                strTbody += '<td><input type="text" value="' + day_price + '" class="day_price" /></td>';
                strTbody += '<td style="text-align: left;"><input type="hidden" value="' + icon + '" class="icon"><img style="height:36px;" src="' + icon + '" alt=""/><a href="javascript:;" data-id="' + n + '" class="btn btn-success uploadBtn">上传</a></td>';
                strTbody += '</tr>';
            }

            $('.spec-list .listData').html(strTbody);
            this.setImg();
            this.setChange();
        },

        genTHead: function (data) {
            var strTHead = '';
            for (var i in data) {
                var spec_info = data[i];
                // 表格头
                strTHead += '<th>' + spec_info.spec_name + '</th>';
            }

            strTHead += '<th style="width: 50px">容纳人数<span class="red">*</span></th><th style="width: 50px">小时价格<span class="red">*</span></th><th style="width: 50px">按天价格 <span class="red">*</span></th><th>显示图标 <span class="red">*</span></th>';
            $('.spec-list .listHead').html(strTHead);
        },

        setImg: function () {
            // data属性获取
            $('.spec-list#specDataList').on('click', '.uploadBtn', function () {
                $("#specDataList").attr('data-upload', $(this).attr('data-id'));
            });
            // 通过data设置
            store.getImg('#specDataList .uploadBtn', function (res) {
                var upload = $("#specDataList").attr('data-upload');
                $('#specDataList').find('.uploadBtn[data-id="' + upload + '"]')
                    .siblings('img').attr("src", res.url).siblings('input').val(res.url);
            });
        },

        setChange: function () {
            // hour_price
            $('#specDataList .hour_price').on('change', function (e) {
                var val = $(this).val();

                if (isNaN(val) || val < 0) {
                    $(this).focus();
                    tip.showTip('err', '请正确填写该商品规格的出售价格！', 3000);
                }

                var OPrice = $(this).parent().parent().find('.day_price');
                if (OPrice.val() < val) {
                    OPrice.focus();
                }

                e.stopImmediatePropagation();
            });
            // 原始价格
            $('#specDataList .day_price').on('change', function (e) {
                var val = $(this).val();

                if (isNaN(val) || val < 0) {
                    $(this).focus();
                    tip.showTip('err', '请正确填写该商品规格的原始价格！', 3000);
                }

                var SPrice = $(this).parent().parent().find('.hour_price');
                if (SPrice.val() > val) {
                    SPrice.focus();
                }

                e.stopImmediatePropagation();
            });
            // num
            $('#specDataList .num').on('change', function (e) {

                var val = $(this).val();

                if (isNaN(val) || val < 0) {
                    $(this).focus();
                    tip.showTip('err', '请正确填写该商品规格的数量！', 3000);
                    return;
                }

                var total = 0;
                $('.spec-list .spec .num').each(function () {
                    var num = $(this).val();
                    if (!isNaN(num) && num > 0) {
                        total += parseInt(num);
                    }
                });

                $('#quantity').val(total);

                e.stopImmediatePropagation();
            });
        }
    };
    // 设置分店库存时商品规格调取 2015/1/23
    function SpecTable() {

    }

    SpecTable.spec_data = {};
    SpecTable.prototype = {
        init: function (data_spec) {
            var _this = this;
            if (data_spec) {
                SpecTable.spec_data = data_spec;
                _this.genTable();
            }
        },
        genTable: function () {
            var _this = this;
            // 循环获取
            var data_tmp = [];
            $('.spec-field').each(function () {
                var spec_id = $(this).attr('data-spec_id');
                var spec_index = $(this).attr('data-index');
                var spec_name = $(this).attr('data-spec_name');
                var spec_arr = [];

                $(this).find('.spec-chk:checked').each(function () {
                    var spec_key = $(this).attr('data-spec_key');
                    var spec_val = $(this).attr('data-spec_val');
                    var tmp = {"key": spec_key, "val": spec_val, "spec_id": spec_id, "spec_name": spec_name};
                    spec_arr.push(tmp);
                });

                if (spec_arr.length > 0) {
                    // 排序作用
                    data_tmp[spec_index] = {
                        "spec_id": spec_id,
                        "spec_name": spec_name,
                        "spec_data": spec_arr,
                        "spec_count": spec_arr.length
                    };
                }
            });

            if (data_tmp.length > 0) {
                var data = [];
                // 去除索引，去除空数组。
                for (var n in data_tmp) {
                    if (data_tmp[n]) {
                        data.push(data_tmp[n]);
                    }
                }
                _this.genTHead(data);
                _this.genTBody(data);
            } else {
                $('.spec-list .listHead').html("");
                $('.spec-list .listData').html("");
            }
        },
        genTBody: function (data) {
            var len = data.length;
            var tableColRowData = [];
            var fullColRowData = [];
            var g = 0;
            var hour_price = $('#hour_price').val();
            var day_price = $('#day_price').val();

            if (len == 1) {
                var fst = data[0].spec_data;
                for (var i = 0; i < fst.length; i++) {
                    fullColRowData[g] = [fst[i]];

                    tableColRowData.push([fst[i]]);

                    g++;
                }
            }

            if (len == 2) {
                var sec0 = data[0].spec_data;
                var sec1 = data[1].spec_data;
                var row_flag = 0;

                for (var i0 = 0; i0 < sec0.length; i0++) {
                    for (var i1 = 0; i1 < sec1.length; i1++) {
                        var b0 = sec0[i0];
                        var b1 = sec1[i1];
                        fullColRowData[g] = [b0, b1];

                        b0.rowspan = sec1.length;

                        // 当前行号+spec_id
                        if (row_flag == b0.spec_id + '' + i0) {
                            b0 = '-';
                        }

                        // 设置flag
                        row_flag = b0 == '-' ? row_flag : b0.spec_id + '' + i0;

                        tableColRowData.push([b0, b1]);

                        g++;
                    }
                }
            }

            if (len == 3) {
                var thr0 = data[0].spec_data;
                var thr1 = data[1].spec_data;
                var thr2 = data[2].spec_data;

                var row0_flag = 0;
                var row1_flag = 0;

                for (var j0 = 0; j0 < thr0.length; j0++) {
                    for (var j1 = 0; j1 < thr1.length; j1++) {
                        for (var j2 = 0; j2 < thr2.length; j2++) {
                            var c0 = thr0[j0];
                            var c1 = thr1[j1];
                            var c2 = thr2[j2];
                            fullColRowData[g] = [c0, c1, c2];

                            c1.rowspan = thr2.length;
                            c0.rowspan = thr1.length * thr2.length;

                            // 第一列：当前行号+spec_id
                            if (row0_flag == c0.spec_id + '' + j0) {
                                c0 = '-';
                            }

                            // 第二列：
                            if (row1_flag == c1.spec_id + '' + j0 + '' + j1) {
                                c1 = '-';
                                c1.skip_row = true;
                            }

                            // 设置flag
                            row0_flag = c0 == '-' ? row0_flag : c0.spec_id + '' + j0;
                            row1_flag = c1 == '-' ? row1_flag : c1.spec_id + '' + j0 + '' + j1;

                            tableColRowData.push([c0, c1, c2]);

                            g++;
                        }
                    }
                }
            }

            var strTbody = "";
            for (var n in tableColRowData) {
                var columns = tableColRowData[n];
                var all = fullColRowData[n];
                var strColumn = "";
                var spec_data = []; // spec data group
                var spec_uniq_key = ''; // spec data group

                for (var m in columns) {
                    // 循环
                    spec_data.push({
                        "spec_id": all[m].spec_id,
                        "spec_name": all[m].spec_name,
                        "key": all[m].key,
                        "val": all[m].val
                    });
                    spec_uniq_key += all[m].spec_id + ':' + all[m].key + ';';
                    var spec = columns[m];
                    if (spec != '-') {
                        var rowspan = !isNaN(spec.rowspan) ? 'rowspan="' + spec.rowspan + '"' : "";

                        strColumn += '<td ' + rowspan + ' data-spec_key="' + spec.key + '" data-spec_id="' + spec.spec_id
                            + '" data-spec_val="' + spec.val + '" class="center">' + tableColRowData[n][m].val + '</td>';
                    } else {
                        strColumn += '';
                    }
                }

                strTbody += '<tr ' +
                    'data-spec_data="' + $.base64.encode(JSON.stringify(spec_data)) + '"  ' +
                    'data-spec_uniq_key="' + spec_uniq_key + '"  ' +
                    'class="spec">';
                strTbody += strColumn;

                // 初始化原有数据
                var num = '', serial = '', barcode = '';

                if (SpecTable.spec_data) {
                    var spec_item = SpecTable.spec_data[spec_uniq_key];
                    if (spec_item && spec_item != undefined) {
                        num = spec_item.num;
                    }
                }

                // 最后默认数据
                strTbody += "<td><input type='text' value='" + num + "' class='num'/></td>";
                strTbody += '</tr>';
            }

            $('.spec-list .listData').html(strTbody);
            this.setChange();
        },

        genTHead: function (data) {
            var strTHead = '';
            for (var i in data) {
                var spec_info = data[i];
                // 表格头
                strTHead += '<th>' + spec_info.spec_name + '</th>';
            }

            strTHead += '<th style="width:50px">数量<span class="red">*</span></th>';
            $('.spec-list .listHead').html(strTHead);
        },
        setChange: function () {

            // num
            $('#specDataList .num').on('change', function (e) {

                var val = $(this).val();

                if (isNaN(val) || val < 0) {
                    $(this).focus();
                    tip.showTip('err', '请正确填写该商品规格的数量！', 3000);
                    return;
                }

                var total = 0;
                $('.spec-list .spec .num').each(function () {
                    var num = $(this).val();
                    if (!isNaN(num) && num > 0) {
                        total += parseInt(num);
                    }
                });

                $('#quantity').val(total);

                e.stopImmediatePropagation();
            });
        }
    };
    exports.selectCat = function (product_id) {
        $('#product-area').on('change', '#prod-cat', function (e) {
            var cid = $(this).val();
            if (cid) {
                if (product_id > 0) {
                    var cm = window.confirm("警告：\n更换分类后，所有属性和规格将会消失!!\n您确定需要更换商品分类吗？");
                    if (cm) {
                        window.location.href = '/admin/service/edit?iid=' + product_id + '&cid=' + cid;
                    }
                } else {
                    window.location.href = '/admin/service/edit?cid=' + cid;
                }
            }
            e.stopImmediatePropagation();
        });
    };

    exports.setSpec = function (data_spec) {
        var spec = new ItemSpecTable();
        spec.init(data_spec);
    };

    exports.setPic2 = function () {

        // 多图
        store.getImg('#uploadProductPictures', function (res) {

            $('#picturesPreview .clear').remove();

            $(res.url).each(function (index, node) {
                var isAdded = $('#picturesPreview').find('img[src="' + node + '"]');
                if (isAdded && isAdded.length > 0) {
                    return false;
                }
                var str = '<p class="pic"><a href="javascript:;" class="setMainPic">设为主图</a><img src="' + node + '"/>' +
                    '<input type="text" placeholder="设置链接"/>' +
                    '<a href="javascript:;" class="rmBtn">删除</a></p>';
                $('#picturesPreview').append(str);
            });

            $('#picturesPreview').append("<div class='clear'></div>");

            reVal();

            $('#picturesPreview').dragsort({
                dragEnd: function () {
                    reVal();
                }
            });

        }, true);

        $('#picturesPreview').dragsort({
            dragEnd: function () {
                reVal();
            }
        });

        // 移除图片
        $("#picturesPreview").on('click', '.rmBtn', function (e) {
            $(this).parent().remove();
            reVal();
            e.stopImmediatePropagation();
        });

        // 设置主图
        $("#picturesPreview").on('click', '.setMainPic', function (e) {
            var src = $(this).parent().find('img').attr('src');
            $('#thumbPreview').attr('src', src);
            $('#thumb').val(src);
            e.stopImmediatePropagation();
        });

        function reVal() {
            var picVal = "";
            $('#picturesPreview .pic img').each(function () {
                picVal += $(this).attr("src") + ';';
            });
            $('#productImages').val(picVal);
        }
    };
    exports.setPic = function () {
        // 主图
        store.getImg('#uploadMainPic', function (res) {
            $('#thumb').val(res.url);
            $('#thumbPreview').attr('src', res.url);
        });
        // 多图
        store.getImg('#uploadProductPictures', function (res) {

            $('#picturesPreview .clear').remove();

            $(res.url).each(function (index, node) {
                var isAdded = $('#picturesPreview').find('img[src="' + node + '"]');
                if (isAdded && isAdded.length > 0) {
                    return false;
                }
                var str = '<p class="pic"><a href="javascript:;" class="setMainPic">设为主图</a><img src="' + node + '"><a href="javascript:;" class="rmBtn">删除</a></p>';
                $('#picturesPreview').append(str);
            });

            $('#picturesPreview').append("<div class='clear'></div>");

            reVal();

            $('#picturesPreview').dragsort({
                dragEnd: function () {
                    reVal();
                }
            });

        }, true);

        $('#picturesPreview').dragsort({
            dragEnd: function () {
                reVal();
            }
        });

        // 移除图片
        $("#picturesPreview").on('click', '.rmBtn', function (e) {
            $(this).parent().remove();
            reVal();
            e.stopImmediatePropagation();
        });

        // 设置主图
        $("#picturesPreview").on('click', '.setMainPic', function (e) {
            var src = $(this).parent().find('img').attr('src');
            $('#thumbPreview').attr('src', src);
            $('#thumb').val(src);
            e.stopImmediatePropagation();
        });

        function reVal() {
            var picVal = "";
            $('#picturesPreview .pic img').each(function () {
                picVal += $(this).attr("src") + ';';
            });
            $('#productImages').val(picVal);
        }
    };

    exports.asideNav = function () {
        $('.asideNav').stickyNavbar({
            activeClass: "active", // Class to be added to highlight nav elements
            sectionSelector: "product-widget", // Class of the section that is interconnected with nav links
            animDuration: 350, // Duration of jQuery animation as well as jQuery scrolling duration
            startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
            easing: "swing", // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
            animateCSS: true, // AnimateCSS effect on/off
            animateCSSRepeat: false, // Repeat animation everytime user scrolls
            cssAnimation: "fadeInDown", // AnimateCSS class that will be added to selector
            jqueryEffects: false, // jQuery animation on/off
            jqueryAnim: "slideDown", // jQuery animation type: fadeIn, show or slideDown
            selector: "a", // Selector to which activeClass will be added, either "a" or "li"
            mobile: false, // If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth
            mobileWidth: 480, // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)
            zindex: 1, // The zindex value to apply to the element: default 9999, other option is "auto"
            stickyModeClass: "sticky", // Class that will be applied to 'this' in sticky mode
            unstickyModeClass: "unsticky" // Class that will be applied to 'this' in non-sticky mode
        });
    };

    exports.saveService = function () {

        editor.init('#txtContent');

        // 保存商品
        $(document).on('click', '.saveBtn', function (e) {
            var data_base = $('#product-form').serializeObject();
            // 验证base
            if (!data_base.name) {
                $('#product-form input[name="name"]').focus();
                tip.showTip('err', '请填写商品名称', 3000);
                return;
            }

            if (!data_base.province_id) {
                $('#product-form #province_id').focus();
                tip.showTip('err', '请选择省份', 3000);
                return;
            }

            if (!data_base.city_id) {
                $('#product-form #city_id').focus();
                tip.showTip('err', '请选择城市', 3000);
                return;
            }

            if (!data_base.county_id) {
                $('#product-form #county_id').focus();
                tip.showTip('err', '请选择区域', 3000);
                return;
            }
            // 商品属性
            var data_attr = [];
            var attr_checked = true;
            var attr_checked_obj = {};
            $('#product-attr .input').each(function () {
                var id = $(this).attr("data-id");
                var type = $(this).attr("data-type");
                var name = $(this).attr("data-name");
                var must = $(this).attr("data-must");
                var attr_key = '';// 单选和多选情况存在
                // 多选
                if (type == 'multi') {
                    var chk_data = [];
                    var chk_keys = [];
                    $(this).find('.chk').each(function () {
                        if ($(this).attr('checked')) {
                            chk_data.push($(this).val());
                            chk_keys.push($(this).attr('data-key'))
                        }
                    });

                    if (chk_data.length == 0 && must == 1) {
                        $(this).find('.chk').focus();

                        attr_checked = false;
                        attr_checked_obj = {"name": name, "type": type};
                        return;
                    }

                    if (chk_data.length > 0) {
                        data_attr.push({
                            "attr_id": id,
                            "attr_name": name,
                            "attr_key": chk_keys.join(","),
                            "attr_val": chk_data.join(' '),
                            "attr_type": type
                        });
                    }
                } else {
                    var val = $(this).val().trim();
                    if (must == 1 && (val == "" || val == null || val == undefined)) {
                        attr_checked = false;
                        $(this).focus();
                        attr_checked_obj = {"name": name, "type": type};
                        return;
                    }

                    if (val != "" && val != null && val != undefined) {
                        if (type == 'single') {
                            attr_key = $(this).find('option:selected').attr('data-attr_key');
                        }
                        data_attr.push({
                            "attr_id": id,
                            "attr_name": name,
                            "attr_key": attr_key,
                            "attr_val": val,
                            "attr_type": type
                        });
                    }
                }
            });

            // check
            if (attr_checked == false) {
                tip.showTip('err', '请选择并填写商品属性[ <span class="red">' + attr_checked_obj.name + '</span> ]', 3000);
                return;
            }
            if (data_base.peripheral) {
                var peripheral = data_base.peripheral;
                var peri_name = data_base.peri_name;
                var temp = [];
                for (var i in peripheral) {
                    temp.push($(".peri_name[data-id='" + peripheral[i] + "'").val());
                }
                data_base.peri_name = temp;
            } else {
                data_base.peri_name = [];
            }

            if (!data_base.thumb) {
                $('#product-form #thumb').focus();
                tip.showTip('err', '请填写上传商品图片', 3000);
                return;
            }

            var product_id = $('#product-form .product_id').val();

            var data = {
                product_id: product_id,
                data_base: data_base
            };
            console.log(data_base);
            // ajax 提交
            base.requestApi('/admin/api/product/save', data, function (res) {
                if (res.result == 1) {
                    window.location.href = res.data;
                }
            });

            e.stopImmediatePropagation();
        });
    };
    //bcms数据同步
    exports.sysBCMS = function () {
        $(".btn-syn").on('click', function () {
            base.requestApi('/admin/api/product/sysBcms', {}, function (res) {
                if (res.result == 1) {
                    tip.showTip("ok", res.data, 1000);
                    setTimeout(function () {
                        window.location.reload()
                    }, 1000)
                }
            });
        });

    };

    exports.saveProduct = function () {

        editor.init('#txtContent');

        // 保存商品
        $(document).on('click', '.saveBtn', function (e) {
            var data_base = $('#product-form').serializeObject();
            // 验证base
            if (!data_base.LinkMan) {
                $('#product-form input[name="LinkMan"]').focus();
                tip.showTip('err', '请填写联系人姓名', 3000);
                return;
            }
            if (!data_base.Mobile) {
                $('#product-form input[name="Mobile"]').focus();
                tip.showTip('err', '请填写正确的手机号码', 3000);
                return;
            }

            if (!data_base.Phone) {
                $('#product-form input[name="Phone"]').focus();
                tip.showTip('err', '请填写正确的电话号码', 3000);
                return;
            }

            if (!data_base.Fax) {
                $('#product-form input[name="Fax"]').focus();
                tip.showTip('err', '请填写正确的传真号码', 3000);
                return;
            }
/*
            if (!data_base.Email) {
                $('#product-form input[name="Email"]').focus();
                tip.showTip('err', '请填写正确的邮箱', 3000);
                return;
            }*/

            if (!data_base.Thumb) {
                $('#product-form #thumb').focus();
                tip.showTip('err', '请填写上传商品图片', 3000);
                return;
            }

            var product_id = $('#product-form .product_id').val();
            if (data_base.peripheral) {
                var peripheral = data_base.peripheral;
                var peri_name = data_base.peri_name;
                var temp = [];
                for (var i in peripheral) {
                    temp.push($(".peri_name[data-id='" + peripheral[i] + "'").val());
                }
                data_base.peri_name = temp;
            } else {
                data_base.peri_name = [];
            }
            var data = {
                product_id: product_id,
                data_base: data_base
            };

            // ajax 提交
            base.requestApi('/admin/api/product/saveOffice', data, function (res) {
                if (res.result == 1) {
                    window.location.href = res.data;
                }
            });

            e.stopImmediatePropagation();
        });
    };

    exports.toLatLng = function () {
        $(function () {
            // 百度地图API功能
            var map = new BMap.Map("mapWrap");
            map.enableScrollWheelZoom();
            window.map = map;
            point = new BMap.Point(107.948239, 26.631742);
            map.centerAndZoom(point, 15);

            var marker = new BMap.Marker(point);
            marker.enableDragging();

            marker.addEventListener("dragend", function showInfo() {
                var cp = this.getPosition();
                $('#txtLat').val(cp.lat);
                $('#txtLng').val(cp.lng);
                map.centerAndZoom(cp, 16);
            });

            map.addOverlay(marker);

            var myGeo = new BMap.Geocoder();

            var lat = parseFloat($('#txtLat').val());
            var lng = parseFloat($('#txtLng').val());
            if (!isNaN(lat) && !isNaN(lng) && lat > 0 && lng > 0) {
                point = new BMap.Point(lng, lat);
                map.centerAndZoom(point, 15);
                marker.setPosition(point);
            } else {
                geoPoint();
            }

            $('.form').on('change', '#txtAddress', function () {
                geoPoint();
            });

            // 三级联动
            $(".form").on("change", ".province_id",function (e) {
                var id = $(this).val();
                base.requestApi('/home/api/area/getCities', {"province_id": id}, function (res) {
                    if (res.result == 1) {
                        $("#county_id").find("option[value='']").prop("selected", "selected");
                        var str = '<option value="">==请选择地区==</option>';
                        for (var i in res.data) {
                            var area = res.data[i];
                            str += '<option value="' + area.id + '">' + area.name + '</option>';
                        }
                        $("#city_id").html(str);
                    }
                });
                $('#province_name').val($(this).find('option:selected').text());
                e.stopImmediatePropagation();
            }).on("change", ".city_id",function (e) {
                var id = $(this).val();
                base.requestApi('/home/api/area/getCounties', {"city_id": id}, function (res) {
                    if (res.result == 1) {
                        var str = '<option value="">==请选择地区==</option>';
                        for (var i in res.data) {
                            var area = res.data[i];
                            str += '<option value="' + area.id + '">' + area.name + '</option>';
                        }
                        $("#county_id").html(str);
                    }
                });
                $('#city_name').val($(this).find('option:selected').text());
                e.stopImmediatePropagation();
            }).on('change', '.county_id', function () {
                $('#county_name').val($(this).find('option:selected').text());
                geoPoint();
            });

            function geoPoint() {
                var addr = $('#province_name').val() + $('#city_name').val() + $('#county_name').val() + $("#txtAddress").val();
                if (addr) {
                    // 将地址解析结果显示在地图上,并调整地图视野
                    myGeo.getPoint(addr, function (point) {
                        console.log(point);
                        if (point) {
                            $('#txtLat').val(point.lat);
                            $('#txtLng').val(point.lng);
                            map.centerAndZoom(point, 16);
                            marker.setPosition(point);
                        }
                    });
                }
            }
        })
    }

});