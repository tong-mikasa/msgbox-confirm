(function($) {
    $.MsgBox = {
        Alert: function (title, msg, callback) {
            this._generateMsgboxHtml("alert", title, msg,"确定",""," msg-ok "," msg-no ");
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "alter", title: title, msg: msg}));
            this._btnMsgLeft(callback);
        },
        Confirm: function (title, msg, callback,cancelCallback) {
            this._generateMsgboxHtml("confirm", title, msg,"确定","取消"," msg-ok "," msg-no ");
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgLeft(callback);
            this._btnMsgRight(cancelCallback);
        },
        CustomizeConfirm: function (title, msg, leftButtonText,rightButtonText,leftCallback,rightCallback) {
            this._generateMsgboxHtml("confirm", title, msg,leftButtonText,rightButtonText," msg-ok "," msg-no ");
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgLeft(leftCallback);
            this._btnMsgRight(rightCallback);
        },
        leftConfirmAndRightCancel: function (title, msg, leftButtonText,rightButtonText,leftCallback,rightCallback) {
            this._generateMsgboxHtml("confirm", title, msg,leftButtonText,rightButtonText," msg-ok "," msg-no ");
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgLeft(leftCallback);
            this._btnMsgRight(rightCallback);
        },
        leftCancelAndRightConfirm: function (title, msg, leftButtonText,rightButtonText,leftCallback,rightCallback) {
            this._generateMsgboxHtml("confirm", title, msg,leftButtonText,rightButtonText," msg-no "," msg-ok ");
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgLeft(leftCallback);
            this._btnMsgRight(rightCallback);
        },
        _tplMsgHtm: $("#tpl_confirm_msgbox").html(),
        _btnMsgLeft: function(callback) {
            var that = this;
            $("#msg_btn_left").click(function () {
                that._removeMsgboxPopupWrap();
                if (callback && typeof (callback) == 'function') {
                    callback();
                }
            });
        },
        _btnMsgRight: function(cancelCallback) {
            var that = this;
            $("#msg_btn_right").click(function () {
                that._removeMsgboxPopupWrap();
                if (cancelCallback && typeof (cancelCallback) == 'function') {
                    cancelCallback();
                }
            });
        },
        _generateMsgboxHtml: function (type, title, msg,leftButtonText,rightButtonText,leftClass,rightClass) {
            var okButtonText = (typeof leftButtonText == "undefined") ? '确定' : leftButtonText
                , noButtonText = (typeof rightButtonText == "undefined")  ? '取消': rightButtonText;

            var strHtm ='<div class="confirm-msgbox-popup-wrap">' +
                '            <div class="confirm-mask-bg"></div>' +
                '            <div id="confirm_content_wrap">' +
                '                <div class="msg-in">' +
                '                    <div id="msg_header" class="text-center">' +
                '                        <span id="msg_title">'+title+'</span>' +
                '                    </div>' +
                '                    <div id="msg_msg" class="text-center">' + msg + '</div>' +
                '                    <div id="msg_btn_wrap" class="text-center">';

            if(type == "alert")
            {
                strHtm += '<span id="msg_btn_left" class="msg-btn cursor-point '+leftClass+'">'+okButtonText+'</span>';
            }

            if(type == "confirm"){
                strHtm += '<span id="msg_btn_left" class="msg-btn cursor-point '+leftClass+'">'+okButtonText+'</span>';
                strHtm += '<span id="msg_btn_right" class="msg-btn cursor-point '+rightClass+' ">'+noButtonText+'</span>';
            }

            strHtm +='           </div>' +
                '                </div>' +
                '            </div>' +
                '        </div>';

            this._removeMsgboxPopupWrap();
            $("body").append(strHtm);
        },
        _removeMsgboxPopupWrap: function(){
            $(".confirm-msgbox-popup-wrap").remove();
        }
    };
})(jQuery);

/*
<script type="text/x-handlebars-template" id="tpl_confirm_msgbox">
    <div class="confirm-msgbox-popup-wrap">
        <div class="confirm-mask-bg"></div>
        <div id="confirm_content_wrap">
            <div class="msg-in">
                <div id="msg_header" class="text-center">
                    <span id="msg_title">{{title}}</span>
                </div>
                <div id="msg_msg" class="text-center">
                    {{msg}}
                </div>
                <div id="msg_btn_wrap" class="text-center">

                    {{#ifCond type '==' 'alert'}}
                    <span id="msg_btn_ok" class="msg-btn cursor-point">xxx</span>
                    {{/if}}

                    {{#ifCond type '==' 'confirm'}}
                    <span id="msg_btn_left" class="msg-btn cursor-point">xxx</span>
                    <span id="msg_btn_right" class="msg-btn cursor-point">xxx</span>
                    {{/ifCond}}
                </div>
            </div>
        </div>
    </div>
</script>
*/
