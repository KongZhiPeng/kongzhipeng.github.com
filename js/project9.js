/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 16:00:37
 * @version $Id$
 */

	var map = new BMap.Map("myMap"); 
	var point = new BMap.Point(120.15077, 30.249961);
	map.centerAndZoom(point, 15);   
	// map.zoomOut();
	// map.zoomOut();

	window.setTimeout(function() {
  	map.panTo(new BMap.Point(120.15077, 30.249961));
	}, 2000);     
	map.enableScrollWheelZoom();
	map.addControl(new BMap.NavigationControl());   
	map.addControl(new BMap.ScaleControl());    
	map.addControl(new BMap.OverviewMapControl());    
	map.addControl(new BMap.MapTypeControl()); 
		var marker = new BMap.Marker(point);// 创建标注    
		map.addOverlay(marker);

	marker.enableDragging();    
	marker.addEventListener("dragend", function(e){    
    alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
	})


	// map.centerAndZoom(new BMap.Point(120.15077, 30.249961), 13);
	var local = new BMap.LocalSearch(map, {
  	pageCapacity: 8,
  	renderOptions: {
    map: map,
    panel: "subresult"
  	}
	});
	local.searchNearby("宾馆", "西湖");

	// map.centerAndZoom(new BMap.Point(120.15077, 30.249961), 13);
	var transit = new BMap.TransitRoute(map, {
    renderOptions: {
    map: map,
    panel: "result"
    }
	});
	transit.search("杭州师范大学-东南门", "西湖,宾馆");

	var opts = {
    width: 300,    
    height: 300,  
    title: "<span style='color:#FF0000'>"+"地址：", 
      
    }

    var adress_array=[
    	[120.016976,30.295394,"博文苑1号楼"],
    	[120.015413,30.295005,"博文苑4号楼"],
    	[120.016239,30.295862,"博文苑6号楼"],
    	[120.015008,30.296067,"博文苑7号楼"],
    	[120.015745,30.296533,"博文苑9号楼"],
    	[120.013208,30.29502,"田径场"],
    	[120.017924,30.29573, "恕园7号楼"],
    	[120.019127,30.296423,"恕园13号楼"],
    	[120.020883,30.29733,"恕园16号楼"],
    	[120.01827,30.297499,"恕园23号楼"],
   	 	[120.019743,30.297148,"恕园17号楼"],
    	[120.019527,30.297417,"恕园21号楼"],
    	[120.020039,30.294819,"恕园1号楼"],
    	[120.016527,30.293952,"恕园6号楼"],
    	[120.020632,30.297891,"恕园27号楼"]
	];


for(var i = 0;i < adress_array.length;i++){
	var point= new BMap.Marker(new BMap.Point(adress_array[i][0],adress_array[i][1]));
	var address="<p style='margin:0 0 5px 0;padding:0'>"+ adress_array[i][2]+"</p>";
	var imgaddress="<img style='width:200px;height:200px' src='img/project6-img/biaoqing"+i%10+".jpg' />";
	var box=address+imgaddress;
	OnClick(box,point);
	map.addOverlay(point);
}

function OnClick(div,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}
  
	