(function($) {
    $.MsgBox = {
        Alert: function (title, msg, callback) {
            this._generateMsgboxHtml("alert", title, msg);
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "alter", title: title, msg: msg}));
            this._btnMsgOk(callback);
        },
        Confirm: function (title, msg, callback,cancelCallback) {
            this._generateMsgboxHtml("confirm", title, msg);
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgOk(callback);
            this._btnMsgNo(cancelCallback);
        },
        CustomizeConfirm: function (title, msg, leftButtonText,rightButtonText,callback,cancelCallback) {
            this._generateMsgboxHtml("confirm", title, msg,leftButtonText,rightButtonText);
            //$("body").append(Handlebars.compile(this._tplMsgHtm)({type: "confirm", title: title, msg: msg}));
            this._btnMsgOk(callback);
            this._btnMsgNo(cancelCallback);
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
        _btnMsgNo: function(cancelCallback) {
            var that = this;
            $("#msg_btn_no").click(function () {
                that._removeMsgboxPopupWrap();
                if (cancelCallback && typeof (cancelCallback) == 'function') {
                    cancelCallback();
                }
            });
        },
        _generateMsgboxHtml: function (type, title, msg,leftButtonText,rightButtonText) {

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
                strHtm += '<span id="msg_btn_ok" class="msg-btn cursor-point col-full">'+okButtonText+'</span>';
            }

            if(type == "confirm"){
                strHtm += '<span id="msg_btn_ok" class="msg-btn cursor-point col-half">'+okButtonText+'</span>';
                strHtm +='<span id="msg_btn_no" class="msg-btn cursor-point col-half">'+noButtonText+'</span>';
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
                    <span id="msg_btn_ok" class="msg-btn cursor-point col-full">xxx</span>
                    {{/if}}

                    {{#ifCond type '==' 'confirm'}}
                    <span id="msg_btn_ok" class="msg-btn cursor-point col-half">xxx</span>
                    <span id="msg_btn_no" class="msg-btn cursor-point col-half">xxx</span>
                    {{/ifCond}}
                </div>
            </div>
        </div>
    </div>
</script>
*/
