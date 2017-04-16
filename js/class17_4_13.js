/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 16:10:40
 * @version $Id$
 * 点击第一个box，将第二个box的文字改变成hello；
点击第二个box，将第一个box的边长变成150px;
点击第三个box，将第三个box的背景变成红色；
点击第四个box，将输入框的内容改成sunday；
 */
$(init)
function init(){
	$(".ui-page-box:eq(0)").click(function(){
		$(".ui-page-box:eq(1)").text("hello");
	}
		)

	$(".ui-page-box:eq(1)").click(function(){
		$(".ui-page-box:eq(0)").width("150px");
		$(".ui-page-box:eq(0)").height("150px");
	}
		)

	$(".ui-page-box:eq(2)").click(function(){
		$(".ui-page-box:eq(2)").css("background-color","red");
	}
		)

	$(".ui-page-box:eq(3)").click(function(){
		$(".ui-page-input").val("sunday");
	}
		)

}

