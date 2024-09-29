function dy() 
{
	var ss = {"employees": 
				[{"name":"小明", "age":12},        
			     {"name":"猪八戒", "age":500},     
			     {"name":"孙悟空", "age":1000}        
				]};
	var str = JSON.stringify(ss);
	document.getElementById("demo2").innerHTML = str;
	ss = JSON.parse(str);

	ss.sex = '女';

	document.getElementById("demo1").innerHTML = ss.employees[1].age;
	
	document.getElementById("demo3").innerHTML = ss;
	str = JSON.stringify(ss);
	document.getElementById("demo4").innerHTML = str;

	console.log(ss);

	var id = 'idssss';
	ss[id] = '123';
	console.log(ss);
	console.log(ss.idssss);
	console.log(ss.hasOwnProperty(id))

	delete ss.id;
	console.log(ss);
	delete ss[id];
	console.log(ss);

// [{"name": "小李", "age": 20}, ss];
	var array = [{"name": "小李", "age": 20}];
	console.log(array);
	array.push(ss)
	// array.push(ss.employees[0]);
	// array.push(ss.employees[1]);
	// console.log(array);

	console.log("------------------------------")
	console.log(array);
	for (var item in array)
	{
		console.log(array[item].age);
	}

	console.log("----------------------")
