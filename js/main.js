// build time:Fri Jan 18 2019 18:44:30 GMT+0800 (GMT+08:00)
require([],function(){var i=false;var e=function(){require([yiliaConfig.rootUrl+"js/mobile.js"],function(e){e.init();i=true})};var a=false;var t=function(){require([yiliaConfig.rootUrl+"js/pc.js"],function(i){i.init();a=true})};var n={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&a){$(window).unbind("resize");return}var n=$(window).width();if(n>=700){t()}else{e()}});if(!!n.versions.mobile||$(window).width()<800){e()}else{t()}resetTags=function(){var i=$(".tagcloud a");for(var e=0;e<i.length;e++){var a=Math.floor(Math.random()*7);i.eq(e).addClass("color"+a)}$(".article-category a:nth-child(-n+2)").attr("class","color0")};if(!!yiliaConfig.fancybox){require([yiliaConfig.fancybox_js],function(i){var e=$(".isFancy");if(e.length!=0){var a=$(".article-inner img");for(var t=0,n=a.length;t<n;t++){var r=a.eq(t).attr("src");var o=a.eq(t).attr("alt");if(typeof o=="undefined"){var o=a.eq(t).attr("title")}var c=a.eq(t).attr("width");var l=a.eq(t).attr("height");a.eq(t).replaceWith("<a class='fancy-ctn' href='"+r+"' title='"+o+"' data-fancybox='images' data-caption='"+r.substring(r.lastIndexOf("/")+1)+"'><img src='"+r+"' width="+c+" height="+l+" title='"+o+"' alt='"+o+"'></a>")}$(".article-inner .fancy-ctn").fancybox({loop:true,touch:false,toolbar:true,wheel:false,buttons:["fullScreen","thumbs","close"]})}})}if(!!yiliaConfig.animate){if(!!yiliaConfig.isHome){require([yiliaConfig.scrollreveal],function(i){var e=["pulse","fadeIn","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=e.length,t=e[Math.ceil(Math.random()*a)-1];if(!window.requestAnimationFrame){$(".body-wrap > article").css({opacity:1});if(navigator.userAgent.match(/Safari/i)){function n(){$(".article").each(function(){if($(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")){$(this).removeClass("hidden").addClass("show");$(this).addClass("is-hiddened")}else{if(!$(this).hasClass("is-hiddened")){$(this).addClass("hidden")}}})}$(window).on("scroll",function(){n()});n()}return}var r=".body-wrap > article";var o=$(".body-wrap > article:first-child");if(o.height()>$(window).height()){var r=".body-wrap > article:not(:first-child)";o.css({opacity:1})}i({duration:0,afterReveal:function(i){$(i).addClass("animated "+t).css({opacity:1})}}).reveal(r)})}else{$(".body-wrap > article").css({opacity:1})}}if(yiliaConfig.toc){require(["toc"],function(){})}var r=["#6da336","#ff945c","#66CC66","#99CC99","#CC6666","#76becc","#c99979","#918597","#4d4d4d"];var o=Math.ceil(Math.random()*(r.length-1));$("#container .left-col .overlay").css({"background-color":r[o],opacity:.3});$("#container #mobile-nav .overlay").css({"background-color":r[o],opacity:.7});$("table").wrap("<div class='table-area'></div>");$(document).ready(function(){if($("#comments").length<1){$("#scroll > a:nth-child(2)").hide()}});if(yiliaConfig.isArchive||yiliaConfig.isTag||yiliaConfig.isCategory){$(document).ready(function(){$("#footer").after("<button class='hide-labels'>TAGS</button>");$(".hide-labels").click(function(){$(".article-info").toggle(200)})})}$("ul > li").each(function(){var i={field:this.textContent.substring(0,2),check:function(i){var e=new RegExp(i);return this.field.match(e)}};var e=["[ ]",["[x]","checked"]];var a=i.check(e[1][0]);var t=i.check(e[0]);var n=$(this);function r(i,e){var a=["disabled",""];n.html(n.html().replace(i,"<input type='checkbox' "+e+" "+a[1]+" >"))}if(a||t){this.classList.add("task-list");if(a){r(e[1][0],e[1][1]);this.classList.add("check")}else{r(e[0],"")}}})});
//rebuild by neat 