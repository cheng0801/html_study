$(function(){
	$("#btn").click(function (){
		$.getJSON("http://192.168.6.195:8080/glist?list_type=3",function (data){
			console.log(data);
					for(var key in data){
						if(data.hasOwnProperty(key)){
							var x = key + " : " + data[key] + "<br>";
							document.getElementById("demo1").innerHTML += x ;
						}
						if(key == "data"){
							// alert(data[key]);
							for(var a in data[key]){
								// alert(a);
								if(data[key].hasOwnProperty(a)){
									// alert("1");
									var y = "&nbsp&nbsp&nbsp&nbsp" + a + " : " + data[key][a] + "<br>";
									document.getElementById("demo1").innerHTML += y ;
									for(var b in data[key][a]){
										// alert("2");
										var z = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + b + " : " + data[key][a][b] + "<br>";
										document.getElementById("demo1").innerHTML += z ;
									}
								}
								
							}
						}
					}
			})
			
			
	}) 
})

$(function(){
	$("#btn").click(function (){
		$.getJSON("http://192.168.6.195:8080/glist?list_type=3",function (data){
			function traverseObject(obj) {
		        Object.keys(obj).forEach(key => {	
		            var value = obj[key];
		            if (typeof value === 'object') {
		            	// document.write("&nbsp&nbsp&nbsp&nbsp");
		                traverseObject(value); // 如果值是对象，递归遍历
		            } else {

		                    console.log(`${key}: ${value}  <br>`); // 否则，打印键和值
		                    }
		      	});
		    }
			traverseObject(data);
		})
	})
})

$(function(){
	$("#btn").click(function (){
		$.getJSON("http://192.168.6.195:8080/glist?list_type=3",function (data){
			var $jsontip = $("#jsonTip");
		    var strHtml = "";
		    //存储数据的变量 
		    $jsontip.empty();
		    //清空内容 
		     $.each(data, function (infoIndex, info){
		     	// alert("1");
		     	// alert(info);		        
		        if(typeof info === "object"){
		        	// alert("222");
		        	 $.each(info, function (infoIndex1, info1){
		        	 	strHtml += "&nbsp&nbsp&nbsp&nbsp" + infoIndex1 + "&nbsp&nbsp&nbsp&nbsp" + info1 + "<br>";
		        	 	if(typeof info1 === "object"){
		        	 		// alert("333");
		        	 		 $.each(info1, function (infoIndex2, info2){	
		        	 		 	strHtml += "&nbsp&nbsp&nbsp&nbsp" + "&nbsp&nbsp&nbsp&nbsp" + infoIndex2 + "&nbsp&nbsp&nbsp&nbsp" + info2 + "<br>";
		        	 		 })
		        	 	}
		        	 })
		        }else{
		        	strHtml += infoIndex + "&nbsp&nbsp&nbsp&nbsp" + info + "<br>";

		        }
		                               
		    }) 
		   $jsontip.html(strHtml);
		    //显示处理后的数据 
		})
	})
})