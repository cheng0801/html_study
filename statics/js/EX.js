function my1() 
{
	document.getElementById("myPar").innerHTML="你好世界";
	document.getElementById("myDiv").innerHTML="你最近怎么样?";
}

function my2() 
{
	var firstname;
	firstname = "Hege";
	document.write(firstname);
	document.write("<br>");
	firstname = "Tove";
	document.write(firstname);
}

function my3() 
{
	var x = "";
	var time = new Date().getHours();
	if (time < 20) 
	{
		x = "Good day";
	}
	document.getElementById("demo3").innerHTML = x;
}

function my4() 
{
	var x = "";
	var time = new Date().getHours();
	if (time < 20) 
	{
		x = "Good day";
	}
	else
	{
		x = "Good evening";
	}
	document.getElementById("demo4").innerHTML = x;
}

function my5()
{
	var r = Math.random();
	var x = document.getElementById("demo5")
	if (r > 0.5)
	{
		x.innerHTML = "<a href = 'https://w3cschool.cn'>Visit w3cschool</a>";
	}
	else
	{
	x.innerHTML="<a href='http://wwf.org'>Visit WWF</a>";
	}
}

function my6()
{
	var x ;
	var d = new Date().getDay();
	switch (d)
	{
		
		case 0:x="今天是星期日";
    	break;
 		case 1:x="今天是星期一";
        break;
  		case 2:x="今天是星期二";
        break;
        case 3:x="今天是星期三";
   	 	break;
  		case 4:x="今天是星期四";
    	break;
  		case 5:x="今天是星期五";
        break;
  		case 6:x="今天是星期六";
    	break;
	}
	document.getElementById("demo6").innerHTML = x;
}

function my7()
{
	alert("你好，\n我是一个警告框！");
	var x;
	var r = confirm("按下按钮！");
	if (r == true)  
	{
		x = "你按下了\"确定\"按钮";
	}
	else
	{
		x = "你按下了\"取消\"按钮";
	}
	var b;
	var person=prompt("请输入你的名字","Harry Potter");
	if (person!=null && person!=""){
	    b="你好 " + person + "！今天感觉如何？";
	    document.getElementById("demo").innerHTML=b;
	}
}

