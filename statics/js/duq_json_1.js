function myJson(){
	var data =	
{
	"language_cn":
	{
		"library1":[
			{
				"name": "西游记",
				"author": "吴承恩",
				"price": 24,
				"publish": "中国人名出版社",
			},
			{
				"name": "三国演义",
				"author": "罗贯中",
				"price": 21,
				"publish": "中国人名出版社",
			}		
		],
		"library2":[
			{
				"name": "水浒传",
				"author": "吴承恩",
				"price": 25,
				"publish": "中国人名出版社",
			},
			{
			
				"name": "红楼梦",
				"author": "曹雪芹",
				"price": 21,
				"publish": "中国人名出版社",

			}
		],
		"library3":[
			{
				"name": "资治通鉴",
				"author": "司马光",
				"price": 23,
				"publish": "中国人名出版社",
			}
			
		]
	},
	"language_en":
	{
		"library1":[
			{
				"name": "A Doll's House",
				"author":"亨里克·易卜生",
				"price":"20",
				"publish":"挪威"
			},
			{
				"name": "A Farewell to Arms",
				"author":"海明威",
				"价格":"21",
				"publish":"美国"
			}		
		],
		"library2":[
			{
				"name": "A Midsummer Night's Dream",
				"author":"莎士比亚",
				"price":"22",
				"publish":"英国"
			},
			{
				"name": "A Midsummer Night's Dream",
				"author":"莎士比亚",
				"price":"22",
				"publish":"英国"
			}
		],
		"library3":[
			{
				"name": "Adam Bede",
				"author":"亚当·贝德",
				"price":"20",
				"publish":"查尔斯·狄更斯,英国"
			},
			{
				"name": "All's Well That Ends Well",
				"author":"终成眷属",
				"价格":"21",
				"publish":"莎士比亚，英国"
			}		
		]
	}

}
;
	// alert("111");
			function traverseObject(obj) {
		        Object.keys(obj).forEach(key => {	
		            var value = obj[key];

		            if (typeof value === 'object') {
		            	// document.write("&nbsp&nbsp&nbsp&nbsp");

		            	document.write( key + "<br>");
		                traverseObject(value); // 如果值是对象，递归遍历
		            } else {

		                    document.write(`&nbsp&nbsp&nbsp&nbsp ${key}: ${value} <br>`); // 否则，打印键和值
		                    }
		      	});
		    }
			traverseObject(data);


}
		