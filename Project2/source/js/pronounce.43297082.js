!function(i){function t(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return i[e].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=i,t.c=n,t.i=function(i){return i},t.d=function(i,n,e){t.o(i,n)||Object.defineProperty(i,n,{configurable:!1,enumerable:!0,get:e})},t.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(n,"a",n),n},t.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},t.p="",t(t.s=28)}({22:function(i,t){},28:function(i,t,n){i.exports=n(4)},4:function(i,t,n){"use strict";n(22);var e=window.$;e(function(){window.isLogin=!!e("#loginstatus").val();var i=function(){window.HJPassport&&window.HJPassport.show("login")};e("#pingWriteTab").bind("click",function(){e("#pingWriteTab").addClass("active"),e("#pianWriteTab").removeClass("active"),e("#pianWriteListContent").css("display","none"),e("#pingWriteListContent").css("display","block"),e("#writeShowImg").css("display","none")}),e("#pianWriteTab").bind("click",function(){e("#pianWriteTab").addClass("active"),e("#pingWriteTab").removeClass("active"),e("#pingWriteListContent").css("display","none"),e("#pianWriteListContent").css("display","block"),e("#writeShowImg").css("display","none")}),e("#pianWriteList li div .big_font").bind("click",function(){if(window.isLogin){var t=e(this).parent().parent().find("img").attr("src"),n=e(this).attr("data-font");e("#writeShowImg").attr("src",t),e("#writeShowImg").css("display","block"),e("#pianWriteList li div .big_font").removeClass("active"),e(this).addClass("active"),e("#writeAudio").attr("src","//res.hjfile.cn/pt/m/jp/50yin/audio/"+n+".mp3"),e("#writeAudio")[0].play()}else i()}),e("#pingWriteList li div .big_font").bind("click",function(){if(window.isLogin){var t=e(this).parent().parent().find("img").attr("src"),n=e(this).attr("data-font");e("#writeShowImg").attr("src",t),e("#writeShowImg").css("display","block"),e("#pingWriteList li div .big_font").removeClass("active"),e(this).addClass("active"),e("#writeAudio").attr("src","//res.hjfile.cn/pt/m/jp/50yin/audio/"+n+".mp3"),e("#writeAudio")[0].play()}else i()}),e(".pronounce-nav ul li").click(function(){var i=e(".pronounce-nav ul li").index(e(this));e(".pronounce-nav ul li").removeClass("active").eq(i).addClass("active"),e(".font_list").removeClass("show").eq(i).addClass("show")});var t=void 0,n=void 0,s=void 0,a=void 0,o="ping",r=void 0,c=void 0,l=void 0,d=void 0,p=void 0;e(".font_list li").click(function(){if(window.isLogin){e(".font_list li.active").removeClass("active"),e(this).addClass("active"),t=e(this).find("img"),s=e(this).parent().parent(),a=s&&s.attr("class").toString(),d=s.attr("data-picsindex"),"string"!=typeof d||t&&t.length>0||(o=a.indexOf("pian")>-1?"pian":"ping",c=e.trim(e(this).find("p").text()),n=c+(parseInt(e(".font_list li").index(e(this)))+1-parseInt(d)),r="source/img/Character/"+o+"_gif_"+n+".gif",e(this).append("<img src=imgurl />".replace("imgurl",r))),p=parseInt(s.attr("data-auindex"));var f=e(".font_list li").index(e(this));l=p>0?e.trim(e(".font_list li").eq(f-p).text()):e.trim(e(this).text()),a.indexOf("ao")<0&&(l=l.slice(0,1)),e("#read_font").attr("src","//res.hjfile.cn/pt/m/jp/50yin/audio/"+l+".mp3"),document.getElementById("read_font").play();var u=e(this);setTimeout(function(){u.removeClass("active")},5e3)}else i()})})}});