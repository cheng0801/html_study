function my1()
{
	x=document.getElementById("intro");
	document.write("<p>文本来自 id 为 intro 段落: " + x.innerHTML + "</p>");
}

function my2()
{
	var x = document.getElementById("main");
	var y = x.getElementsByTagName("p");
	document.write('id="main"元素中的第一个段落为：' + y[1].innerHTMl);
}

function my3()
{
	x = document.getElementsByClassName("intro");
	y=(Date() + "<p>文本来自 class 为 intro 段落：" + x[0].innerHTMl +"</p>");
	document.getElementById("demo99").innerHTML = y;
}

function my4()
{
	document.getElementById("p1").innerHTML = "新文本";
}

function my5()
{	
	document.getElementById("demo5").innerHTML = "新标题";
}

function my6()
{
	document.getElementById("demo6").src="./statics/images/falali2.jpg";
}

function my7()
{
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontsize = "5em";
}

function changetext(id)
{
	id.innerHTML = "Ooops!";

}



function displayDate()
{
	document.getElementById("demo").innerHTML=Date();
}

function checkCookies()
{
	if (navigator.cookieEnabled==true)
	{
		alert("Cookies 可用")
	}
	else
	{
		alert("Cookies 不可用")
	}
}

function my8Function()
{
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}

function mOver(obj)
{
	obj.innerHTML = "Thank You"
}
function mOut(obj)
{
	obj.innerHTml="Mouse Over Me"
}

function mDown(obj) 
{	
	obj.style.backgroundColor = "#1ec5e5";
	obj.innerHTML = "Release Me";
}
function mUp(obj) 
{
	obj.style.backgroundColor = "#D94A38";
	obj.inerHTML = "Thank You";
}

function displayDate()
{
	document.getElementById("demo9").innerHTML = Date();
}

function my10() 
{
	var x = document.getElementById("myBtn");
	x.addEventListener("click", myFunction);
	x.addEventListener("click", someOtherFunction);
	function myFunction()
	{
	    alert ("Hello World!")
	}
	function someOtherFunction()
	{
	    alert ("函数已执行!")
	}
	document.getElementById("demo10").innerHTML = myFunction() + someOtherFunction();
}

function my11(a,b)
{	var a = 5;
	var b = 7;
	var result = a * b;
	document.getElementById("demo11").innerHTML = result;
}




document.getElementById("myP").addEventListener("click", function() {
    alert("你点击了 P 元素!");
}, false);

document.getElementById("myDiv").addEventListener("click", function() {
    alert(" 你点击了 DIV 元素 !");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
    alert("你点击了 P2 元素!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("你点击了 DIV2 元素 !");
}, true);
