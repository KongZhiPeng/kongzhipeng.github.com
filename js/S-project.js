/**
 * 
 * @authors Your Name (704002390@qq.com)
 * @date    2017-04-08 13:16:38
 * @version $Id$
 */
$(document).ready(function(){
	$("input.ui-page-input-c").text("");
	$("button.ui-page-bt-kaisa-jiami").click(function(){
		 $("input.ui-page-input-c").val($("input.ui-page-input-m").val()+$(".ui-page-input-key").val);
	});
});


// $(init)
// function init(){
// 
// 
// 
// }
// 

