$(document).ajaxStart(function () {
	console.log("start")
	jQuery.support.cors=true;
	////jQuery.ajax.arguments[0].xhrFields={
    ////                  	withCredentials:true //携带跨域cookie
    ////                  }
//jquery.ajax.arguments[0].
	    ///var html = '<div id="ajaxLoadingMask" style=" position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 20000; background-color: white; filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;"></div><div style="position:fixed;top:45%;left:45%;width:63px; height:37px; background:url(/scripts/lib/layer/2.1/skin/default/loading-0.gif) no-repeat;z-index:999999" id="ajaxLoadingMaskIcon"></div>';
	    ///if ($("#ajaxLoadingMask").length == 0) {
	    ///    $(document.body).append(html);
	    ///}
	}).ajaxComplete(function (a, r) {
	console.log("complete")
	    ///if ($("#ajaxLoadingMask").length > 0) {
	    ///    $("#ajaxLoadingMask").remove();
	    ///    $("#ajaxLoadingMaskIcon").remove();
	    ///}
	    if(r.readyState==0){
	    	if (confirm("登录已过期，是否重新登录？"))
	                top.window.location.href = "../login/login.html";
	    }
	    switch (r.status) {
	        case 401:
	            if (confirm("登录已过期，是否重新登录？"))
	                top.window.location.href = "../login/login.html";
	            break;
	    }
	});