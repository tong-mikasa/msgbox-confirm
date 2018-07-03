(function($) {
    $.MsgBox = {
        Alert: function (title, msg) {
            this._generateMsgboxHtml("alert", title, msg);
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "alter", title: title, msg: msg}));
            this._btnMsgOk();
            this._btnMsgNo();
        },
        Confirm: function (title, msg, callback) {
            this._generateMsgboxHtml("confirm", title, msg);
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgOk(callback);
            this._btnMsgNo();
        },
        _tplMsgHtm: $("#tpl_confirm_msgbox").html(),
        _btnMsgOk: function(callback) {
            var that = this;
            $("#msg_btn_ok").click(function () {
                that._removeMsgboxPopupWrap();
                if (callback && typeof (callback) == 'function') {
                    callback();
                }
            });
        },
        _btnMsgNo: function() {
            var that = this;
            $("#msg_btn_no").click(function () {
                that._removeMsgboxPopupWrap();
            });
        },
        _generateMsgboxHtml: function (type, title, msg) {
            var strHtm ='<div class="confirm-msgbox-popup-wrap">' +
                '            <div class="confirm-mask-bg"></div>' +
                '            <div id="confirm_content_wrap">' +
                '                <div class="msg-in">' +
                '                    <div id="msg_header" class="text-center">' +
                '                        <span id="msg_title">'+title+'</span>' +
                '                    </div>' +
                '                    <div id="msg_msg" class="text-center">' + msg + '</div>' +
                '                    <div id="msg_btn_wrap" class="text-center">' +
                '                        <input id="msg_btn_ok" class="msg-btn" type="button" value="确定">';

                if(type == "confirm"){
                    strHtm +='<input id="msg_btn_no" class="msg-btn" type="button" value="取消">';
                }

                strHtm +='           </div>' +
                '                </div>' +
                '            </div>' +
                '        </div>';

            $("body").append(strHtm);
        },
        _removeMsgboxPopupWrap: function(){
            $(".confirm-msgbox-popup-wrap").remove();
        }
    };
})(jQuery);
