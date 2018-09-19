# msgbox-confirm
自定义alert,confirm.兼容电脑和微信

### 如果你会handlebars，可以用模板写弹出的html，而不用在js里面拼接，这里的handlebars被我注释了
  

# example

<pre><code>
  $.MsgBox.Alert("提示","请输入xxx");
  
  $.MsgBox.Alert("提示","请输入xxx",function(){
      console.log("ok callback");
  });
  
  $.MsgBox.Confirm("提示","请输入xxx",function () {
       console.log("ok callback");
  },function(){
       console.log("cancel callback");
  });

  $.MsgBox.CustomizeConfirm("提示","请输入xxx","left button","right button",function () {
    console.log('left callback');
  },function () {
    console.log('right callback');
  });

</code></pre>
 
