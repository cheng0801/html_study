// js 读取外部的本地json文件
// 方案1
//  运行本地web服务器,提供文件服务
// 方案2  
function myFunction()
{
	var data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
	var mydata = JSON.parse(data);
	document.getElementById("demo").innerHTML = mydata;
}

//方案3 另外，这个功能还可以用于加载.html或.txt文件，将mime类型参数覆盖到"text/html"，"text/plain"等。  
function readTextFile(file,callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechang = function () {
		if (rawFile.readyState === 4 && rawFile.status =="200") {
			calback(rawFile.responseText);
		}
	} 
	rawFile.send(null);
}

//usage:
// readTextFile ("./statics/json/duq_local.json", function (text){
// 	var data = TSON.parse(duq_local);
// 	alert(data)
// });

function myFunction(text){
	var data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
	var data = JSON.parse(data);
	var data = JSON.stringify(data)
	alert(data)
};
// 方案4
// 使用FileAPI
// 检查文件的API的支持
// if (window.File && window.FileReader && window.FileList && window.Slob) {
	
// 支持.
// } esle {
//alert('这个浏览器不完全支持文件API');
//}
//选择文件
//1.使用表单输入进行选择文件
<input type="file" id="files" name="files[]" multiple />
<output id="list"></output>

<script>
	function handleFileSelect (evt) {
		var files = evt.target.files; // FileList object
		//file is a FileList of File objects. List some properyies.
		var output = [];
		for (var i = 0, f; f = files[i]; i ++){
			output.push('<li><stong>', escape(f.name), '</strong> (',f.type || 'n/a', ') - ',
				f.size, ' bytes, last modifide: ',
				f.lastModifiedDate.toLocaleDsteString(),'<li/>');
		}
		document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	}
	document.getElementById('files').addEventListener('change', handleFileSelect, false);  
</script>
// 2.使用拖放进行选择文件
<div id="drop_zone">Drop files here</div>
<ouput id="list"></output>

<script>
	function handleFileSelect (evt)  {
		evt.stopPropagation();
		evt.preventDefault();
		var files = evt.dataTransfer.files;//FileList object.
		var output = [];
		for (var i = 0, f; f = files[i]; i++)  {
			f.size, ' bytes,last modified: '
			f.lastModifieDate.toLocalDateString(),
		}
		document.getElementById('list').innerHTML = '<ul>' + output.join('') + </ul>'
	}
		function handleFileSelect (evt) {
			evt.stopPropagation();
			evt.preventDefault();
			evt.dataTransfer();.dropEffect = 'copy';//Explicitly show this is a copy.
		}
	//Setup the dnd listeners.
		var dropZone = document.getElementById('drop_zone');
		dropZone.addEventListener('dragover', handleDragOver,false);
		dropZone.addEventListener('drop', handleFileSelect, false)

	

</script>
