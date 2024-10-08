//冒泡排序
Array.prototype.bubbleSort = function(){
	for(var i = 0; i < this.length -1; i++ ){
		for (var j = 0; j < this.length - 1 - i; j++){
			if(this[j] > this[j + 1]){
				const temp = this[j];
				this[j] = this[j + 1];
				this[j + 1] = temp; 
			}
		}
	}
}
var arr = [4,8,1,43,53,22,11,0] ;
arr.bubbleSort();
console.log(arr);