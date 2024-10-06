function my1()
{
	var person = new Object();
	person.firstname = "John";
	person.lastname = "Doe";
	person.age = 50;
	person.eyecolor = "blue";
	document.write(person.firstname + " is " + person.age + " years old.");
}

function my2()
{
	person={firstname:"John",lastname:"Doe",
	age:50,eyecolor:"blue"}
	document.write(person.firstname + " is "
	+ person.age + " years old.");
}

function my3()
{
	function person(firstname,lastname,age,eyecolor){
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
    this.eyecolor=eyecolor;
}
myFather=new person("John","Doe",50,"blue");
	document.write(myFather.firstname + " is " + 
	myFather.age + " years old.");
}

function my4()
{
	function person(firstname,lastname,age,eyecolor){
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
    this.eyecolor=eyecolor;
    this.changeName=changeName;
    	function changeName(name)
    	{	
    		this.lastname=name;
    	}
    }
    myMother=new person("Sally","Rally",48,"green");
    myMother.changeName("Doe");
    document.write(myMother.lastname);
}

function my5()
{
	var x;
	var txt = "";
	var person = {fname:"Bill",lname:"Gates",age:56};
    for (x in person)
    {
    	txt = txt + person[x];
    }
    document.getElementById("demo5").innerHTML = txt;
}

function my6()
{
	var myNumber = 128;
	document.write(myNumber + '十进制<br>');
	document.write(myNumber.toString(16) + '十六进制<br>');
	document.write(myNumber.toString(8) + '八进制<br>');
	document.write(myNumber.toString(2) + '二进制<br>');

}

function my7()
{
	myNumber=2;
	while (myNumber!=Infinity)
	{
		myNumber=myNumber*myNumber;
		document.write(myNumber +'<BR>');
	}
}

function my8()
{
	var x = 1000 / "Apple";
	var y = 1000 / "1000";
	document.getElementById("demo8").innerHTML = isNaN(x) + "<br>" + isNaN(y);
}

function my9()
{
	var txt = "Hello World!";
	document.write("<p>" + txt.length +"</p>");
	var txt = "ABCDEFGHJIJKLMNOPQRSTUVWXYZ";
	document.write("<p>" + txt.length +"</p>")
}

function my10()
{
	var str=document.getElementById("p1").innerHTML;
	var n=str.indexOf("locate");
	document.getElementById("p2").innerHTML=n+1;
}

function my11()
{
	var str="Hello world!";
	document.write(str.match("world") + "<br>");
	document.write(str.match("World") + "<br>");
	document.write(str.match("world!"));
}

function my12()
{
	var d = new Date();
	// document.write(d);
	var x = document.getElementById("demo12");
	x.innerHTML = d.getFullYear();
}

function startTime()
{
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("tet").innerHTML = h + ":" + m + ":" + s;
	t = setTimeout(function(){startTime()},500);
}
function checkTime(i)
{
	if (i < 10)
	{
		i = "0" + i;
	}
	return i;
}

function my13() 
{
	var i;
	var mycars = new Array();
	mycars[0] = "Sabb";
	mycars[1] = "Volvo";
	mycars[2] = "BMW";
	for (i=0;i<mycars.length;i++)
	{
	document.write(mycars[i] + "<br>");
	}
}

Array.prototype.myUcase=function()
{
	for (i=0;i<this.length;i++)
	{
		this[i]=this[i].toUpperCase();
	}
}
function myFunction()
{
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.myUcase();
	var x=document.getElementById("demo14");
	x.innerHTML=fruits;
}

function my15()
{
	var fruits = ["Banana","Orange","Apple","Mango"];
	var x = document.getElementById("demo15");
	x.innerHTML = fruits.join();
}

