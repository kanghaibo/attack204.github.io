// build time:Sat Oct 20 2018 12:26:27 GMT+0800 (中国标准时间)
define([],function(){var t=function(){var t=$(".tips-box");return{show:function(){t.removeClass("hide")},hide:function(){t.addClass("hide")},init:function(){}}}();var e=function(t){var e=$(".switch-wrap"),i=["-webkit-transform: translate(-"+t*100+"%, 0);","-moz-transform: translate(-"+t*100+"%, 0);","-o-transform: translate(-"+t*100+"%, 0);","-ms-transform: translate(-"+t*100+"%, 0);","transform: translate(-"+t*100+"%, 0);"];e[0].style.cssText=i.join("");$(".icon-wrap").addClass("hide");$(".icon-wrap").eq(t).removeClass("hide")};var i=function(){var i=$("#myonoffswitch");var o=$(".second-part");var n=$(".first-part");i.click(function(){if(i.hasClass("clicked")){i.removeClass("clicked");o.removeClass("turn-left");n.removeClass("turn-left")}else{i.addClass("clicked");o.addClass("turn-left");n.addClass("turn-left");resetTags()}});var a;var s=false;var r=false;$(".icon").bind("mouseenter",function(){s=true;t.show()}).bind("mouseleave",function(){s=false;setTimeout(function(){if(!r){t.hide()}},100)});$(".tips-box").bind("mouseenter",function(){r=true;t.show()}).bind("mouseleave",function(){r=false;setTimeout(function(){if(!s){t.hide()}},100)});$(".tips-inner li").bind("click",function(){var i=$(this).index();e(i);t.hide()})};var o=function(){if(yiliaConfig.isPost){$(".post-list").addClass("toc-article");$("#post-nav-button > a:nth-child(2)").click(function(){$("#post-nav-button .fa-bars,#post-nav-button .fa-times").toggle();$(".post-list").toggle(300);if($(".toc").length>0){$("#toc, #tocButton").toggle(200,function(){if($(".switch-area").is(":visible")){$("#toc, .switch-btn, .switch-area").toggle();$("#tocButton").attr("value",yiliaConfig.toc[0])}})}else{$(".switch-btn, .switch-area").fadeToggle(300)}})}}();if(yiliaConfig.jquery_ui[0]){var n=function(){require([yiliaConfig.jquery_ui[1]],function(){var t=function(t,e){var i=document.createElement("link");i.rel="stylesheet";i.href=t;var o=document.querySelector("head");o.insertBefore(i,o.childNodes[e])};t(yiliaConfig.jquery_ui[2],25);if(!$().tooltip)return;if(navigator.userAgent.match(/(iPhone|iPad|Android|ios|PlayBook|Touch)/i))return;$("[title]").tooltip({show:{effect:"blind",delay:250,duration:55}});$("#scroll").tooltip({show:{effect:"clip",delay:600,duration:50}});$("#tocButton, #comments").tooltip({show:{delay:1200}});$(".ds-replybox form").off("tooltip");$("#post-nav-button").tooltip({show:{effect:"clip",delay:280,duration:65}});$("#post-nav-button > a:nth-child(2)").tooltip({show:{delay:1500}});$(".social").tooltip({show:{effect:"scale",delay:350,duration:70}})})}()}if(yiliaConfig.search){var a=function(){require([yiliaConfig.rootUrl+"js/search.js"],function(){var t=document.querySelector("#local-search-input");var e=$("#toc, #tocButton, .post-list, #post-nav-button a:nth-child(2)");var i=$("#search-form .fa-times");var o=$("#local-search-result");var n=function(){var t="search.xml";var e=yiliaConfig.rootUrl+t;searchFunc(e,"local-search-input","local-search-result")};var a=t.getAttribute("searchonload");if(yiliaConfig.search&&a==="true"){n()}else{t.onfocus=function(){n()}}var s=function(){e.css("visibility","hidden");i.show()};t.oninput=function(){s()};t.onkeydown=function(){if(event.keyCode==13)return false};resetSearch=function(){e.css("visibility","initial");o.html("");document.querySelector("#search-form").reset();i.hide();$(".no-result").hide()};o.bind("DOMNodeRemoved DOMNodeInserted",function(t){if(!$(t.target).text()){$(".no-result").show(200)}else{$(".no-result").hide()}})})}()}return{init:function(){resetTags();i();t.init()}}});
//rebuild by neat 