function my1() 
{
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	x = document.getElementById("demo1");
	x.innerHTML = "浏览器window宽度：" + w +",高度:" + h +"。"
}

function my2()
{
	document.write("可用宽度：" +screen.availWidth + "<br>");

	document.write(location.href + "<br>");
	 document.write(location.pathname);
}

function newDpc()
{
	window.locatin.assign("http://www.W3Cschool.cn");
}

 function goBack()
{
      window.history.back();
} 


function goForward()
{
        window.history.forward()
} 

function my3()
{
	txt = "<p>浏览器代号： " + navigator.appCodeName + "<p>";
	txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
	txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
	txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
	txt+= "<p>硬件平台: " + navigator.platform + "</p>";
	txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
	txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
	document.getElementById("example").innerHTML=txt;
}

function my4()
{
	alert("你好，我是一个警告框！");
}

function my5()
{
		var x;
	var r=confirm("按下按钮!");
	if (r==true)
	{
		x="你按下了\"确定\"按钮!";
	}
	else
	{
		x="你按下了\"取消\"按钮!";
	}
	document.getElementById("demo5").innerHTML=x;
}

function my6()
{
	var x;
	var person=prompt("请输入你的名字","Harry Potter");
	if (person!=null && person!=""){
	    x="你好 " + person + "！今天感觉如何？";
	    document.getElementById("demo6").innerHTML=x;
	} 
}

function my7() 
{
	alert("Hello\nHow are you?");
}

function my8()
{
	setInterval(function(){alert("Hello")},3000);
}

var myVar = setInterval(function(){myTimer() },1000);
function myTimer()
{
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("demo9").innerHTML = t;
}
function myStopFunction()
{
	clearInterval(myVar);
}

var my1Var;
function my11()
{
	my1Var = setTimeout(function(){alert("Hello")},3000) ;
}
function my1StopFunction()
{
	clearInterval(my1Var);
}