/**
 * 
 * @authors Your Name (704002390@qq.com)
 * @date    2017-04-08 13:16:38
 * @version $Id$
 */
$(init)
function init(){
	//凯撒加密
	$(".ui-page-bt-jiami").click(function(){
		var key=parseInt($(".ui-page-input-key").val());
		var str=$(".ui-page-input-m").val();
		var kaisai=new Array();
		for(i=0;i<$(str.length);i++){
			var num=str[i].charCodeAt();
			if(num>=65 && num<=90)
				num=(num-65+key)%26+65;
			else if(num>=97 && num<=122)
				num=(num-97+key)%26+97;
			kaisai[i]=String.fromCharCode(num);

		}
		$(".ui-page-input-c").html("+kaisai+");
	});

	//滑动页
	$(".ui-page-box").hide();
	$(".ui-way-cell:eq(0)").css("background-color","#ffffff");
	$(".ui-page-box:eq(0)").fadeIn(500);
	$(".ui-way-cell").click(function(){
		var number=$(this).index();
		$(this).css("background-color","#ffffff").siblings(this).css("background-color","#ccc");
		$(".ui-page-box:eq("+number+")").fadeIn(500).siblings(".ui-page-box").fadeOut();
	});

	$(".ui-page-load").click(function(){

	});
}


