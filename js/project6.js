/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 09:52:43
 * @version $Id$
 */
  

$(init)

function init(){
	//第一题
	$(".ui-cont-cell").each(function(number,picture){
		number+=1;
		$(picture).css("background-image","url('img/project6-img/biaoqing"+number+".jpg')");
		$(picture).data("img",number);
	});

	$(".ui-cont-empcell").hide();

	$(".ui-cont-cell").click(function(){
		var number=$(this).data("img");
		$(".ui-cont-subcell").css("background-image","url('img/project6-img/biaoqing"+number+".jpg')");
		$(".ui-cont-empcell").fadeIn(500);
		$(".ui-cont-empcell").css("background-color","rgba(0,0,0,0.5)");

	});

	$(".ui-cont-empcell").click(function(){
		$(".ui-cont-empcell").fadeOut(500);
	});		

	//第二题
	$(".ui-page-subtext").hide();
	$(".ui-page-sublable").click(function(){
		var number=$(this).index();
		$(this).css("background-color","#c0c0c0").siblings(this).css("background-color","#ffffff");
		$(".ui-page-subtext:eq("+number+")").fadeIn(500).siblings(".ui-page-subtext").fadeOut();
		$(".ui-page-subtext:eq("+number+")").text(number+1);

	});

	//第三题
	addnum();
	adddelete();

	$(".ui-row-delete").click(function(){
		$(this).parent().remove();
		addnum();
		adddelete();
	});

	$(".ui-data-add").click(function(){
		var row=$('<div></div>').addClass("ui-data-row");
		var num=$('<div></div>').addClass("ui-row-num");
		var text=$('<div></div>').addClass("ui-row-text");
		var delet=$('<div></div>').addClass("ui-row-delete");
		delet.on("click",function(){
			$(this).parent().remove();
			addnum();
			adddelete();

		});
		row.append(num).append(text).append(delet);
		$(".ui-data-add").before(row);
		addnum();
		adddelete();
	});
	
}

function addnum(){
	$(".ui-row-num").each(function(number){
		number+=1;
		$(this).text(number);
	});
}

function adddelete(){
	$(".ui-row-delete").each(function(){
		$(this).text("Delete");
	});
}


	
