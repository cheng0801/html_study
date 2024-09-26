
function my1()
{
	function my1Function (a,b)
	{
		return a*b;
	}
	document.getElementById("demo1").innerHTML = my1Function(4,3);
}

function my2()
{
	function my2Function (x,y)
	{
		if  (y === undefined)
		{
			y = 0;
		}
		return x * y;
	}
	document.getElementById("demo2").innerHTML = my2Function (4);
}

function my3Function()
{
	var x = function (a, b) {return a * b};
	document.getElementById("demo3").innerHTML = x;
}

function my4()
{
	function my4Function(x,y)
	{
		y = y || 0;
		return x*y;
	}
	document.getElementById("demo4").innerHTML = my4Function(4);
}

function my5()
{
	var x = findMax(1, 123, 500, 115, 44, 88);

	function findMax() 
	{
	    var i, max = arguments[0];

	    if(arguments.length < 2)return max;

	    for (i = 0; i < arguments.length; i++) 
	    {
	        if (arguments[i] > max) 
	        {
	            max = arguments[i];
       		}	
   		}
    return max;
	}
	document.getElementById("demo5").innerHTML = x;
}

function my6()
{
	function sumAll()
	{
		var i, sum = 0;
		for (i = 0;i < arguments.length; i++)
		{
			sum += arguments[i];
		}
		return sum;
	}
	document.getElementById("demo6").innerHTML = sumAll(1, 123, 500, 115, 44, 88);
}

function my7()
{
	 
	var myObject = 
	{
		firstName:"Jhon",
		lastName: "Doe",
		fullName: function()
		{
			return this.firstName + " " + this.lastName;
		}
	}	
	document.getElementById("demo7").innerHTML = myObject.fullName();
}




// function name(){
// 	return 0;
// }

// //
// var  add = (function () {
//     var counter = 0;
//     return function () {return counter += 1;}
// })();


// add()


// a = ["add", "add2"]


// a[0]()


// document.

//函数闭包
var add = (function ()
{
	var counter = 0;
	return function () {return counter += 1;}
})();		
function my8()
{
	document.getElementById("demo8").innerHTML =add();
}
