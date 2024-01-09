layui.use(['form','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer
        $ = layui.jquery;

    $(".loginBody .seraph").click(function(){
        layer.msg("这只是做个样式，至于功能，你见过哪个后台能这样登录的？还是老老实实的找管理员去注册吧",{
            time:5000
        });
    })

    //登录按钮
    form.on("submit(login)",function(data){
    	that=$(this);
        $(this).text("登录中...").attr("disabled", "disabled").addClass("layui-disabled");

        if ($("#userName").val() == "admin" && $("#password").val() == "admin2021")
        {
            that.text("登录").attr("disabled", false).removeClass("layui-disabled");
            layer.msg("登录成功！", { icon: 1 }, function () { location.href = "../admin/default"; });
        }
 
            //        $.ajax({
            //    type: 'POST',
            //    contentType: "application/json; charset=urf-8",
            //    url: "/admin/login/Login",
            //    data: JSON.stringify({ uid: $("#userName").val(), pwd: $("#password").val(),checkCodeText: $('#code').val()}),
            //    dataType: 'json',
            //    xhrFields:{
            //          	withCredentials:true //携带跨域cookie
            //         },
            //    success: function (result) {
            //        ///debugger;
            //        if (result.code==0)
            //            window.location.href = "/admin";
            //        else {
            //            alert(result.msg);
            //            that.text("登录").attr("disabled",false).removeClass("layui-disabled");
            //            //if (result.RsCount > 5) $('#validateBox').css('display', 'block');
            //        }

            //    },
            //    error: function (e) { alert($.parseJSON(e.responseText).Message); }
            //});
        //setTimeout(function(){
        //    window.location.href = "/layuicms2.0";
        //},1000);
        //return false;
    })

    //表单输入效果
    $(".loginBody .input-item").click(function(e){
        e.stopPropagation();
        $(this).addClass("layui-input-focus").find(".layui-input").focus();
    })
    $(".loginBody .layui-form-item .layui-input").focus(function(){
        $(this).parent().addClass("layui-input-focus");
    })
    $(".loginBody .layui-form-item .layui-input").blur(function(){
        $(this).parent().removeClass("layui-input-focus");
        if($(this).val() != ''){
            $(this).parent().addClass("layui-input-active");
        }else{
            $(this).parent().removeClass("layui-input-active");
        }
    })
    
})
function changeCheckCode() {
    $('#checkcode').attr('src', 'https://api.xhr99.cn/Admin/User/GetCheckCode?' + Math.random());
        }