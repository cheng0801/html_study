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

Array.prototype.selectionSort = function(){
	for (var i = 0; i < this.length - 1; ++i){
		var indexMin = i;
		for (let j = i; j <this.length; ++j) {
			if (this[j] < this[indexMin]);
				indexMin = j;
		}
		if(indexMin !== i);
		const temp = this[i];
		this[i] = this[indexMin];
		this[indexMin] = temp;
	}
}


// 这是一个JavaScript实现的快速排序算法的简化版本，
// 它被自定义地赋给了Array.prototype.quickSort属性。
// 快速排序是一种常用的高效排序算法，它的基本思想是分治法
// 。这个函数的工作原理如下：

//     定义一个名为rec的辅助递归函数，用于对数组进行分区操作。
//         如果数组长度为1或0，说明已经有序，直接返回数组。
//         创建两个新数组left和right，分别存放小于和大于基准值（这里是第一个元素mid）的元素。
//         遍历数组，将每个元素与mid比较并放入相应的数组。
//         递归地对left和right进行排序，并将结果合并（左、中、右），最后将排序后的数组返回。

//     主函数quickSort首先调用rec函数处理原始数组this，得到已排序的新数组。

//     然后通过forEach遍历新数组，并更新原始数组this的位置，将排序好的元素插入到原位置。

// 当你运行这段代码，给定数组arr = [2,3,4,5,3,1]会被快速排序，最终打印出排序后的数组
Array.prototype.quickSort = function(){
	const rec = (arr) => {
		if(arr.length === 1 || arr.length === 0) {return arr;}
	
	const left = [];
	const right = [];
	const Mid = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] < Mid){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	// console.log(...rec(left));
	console.log(...rec(right));
	return [...rec(left), Mid, ...rec(right)];
};
	const res = rec(this);//console.log(this);
	res.forEach((n,i) => { this[i] = n; /*console.log(this[i]);*/})

}
	const arr1 = [2,3,4,5,3,1];
	arr1.quickSort();
	console.log(arr1);

// 	这段JavaScript代码定义了一个插入排序算法的插件方法insertionSort，它被添加到Array.prototype上，使得所有数组都可以直接调用这个函数来进行排序。插入排序的工作原理是从数组的第二个元素开始（索引为1），然后将当前元素temp与前面已排序的元素逐个比较，如果当前元素小于前一个元素，则交换它们的位置，直到找到一个位置使得temp不大于它的前一个元素或者已经到达数组开头。最后，将temp放在正确的位置。

// 具体步骤如下：

//     遍历数组，从索引i=1开始。
//     存储当前元素到变量temp。
//     使用while循环，条件是j > 0，并且当前元素大于前一个元素。
//         如果满足条件，就将this[j]的值更新为this[j-1]。
//         否则，跳出循环，因为不需要继续比较。
//     将temp赋值给this[j]，完成一次插入操作。
//     循环结束后，整个数组就被插入排序了。

Array.prototype.insertionSprt = function() {
	for (var i = 1; i < this.length; i++) {
		var temp = this[i];
		var j = i;
		while(j > 0){
			if(this[j - 1] > temp){
			this[j] = this[j - 1];
			}else{
				break;		
			}
			j -= 1;
		}
		temp = this[j];
	}
};
var arr2 = [5,4,3,2,1];
console.log(arr2);

Array.prototype.selectionSort = function() {
	for(var i = 0; i < this.length - 1; i++) {
		var indexMin = i;
		for(var j = i; j < this.length; j++) {
			if(this[j] < this[indexMin]){
				indexMin = j;
			}
		}
	
	if(indexMin !== i){
		var temp = this[i];
		this[i] = this[indexMin];
		this[indexMin] = temp;
	}
}
}
const arr3 = [6,9,5,4,3,2,1,66];
arr3.selectionSort();
console.log(arr3);



Array.prototype.bubblSort = function(){
	for(var i = 0; i < this.length; i++){
		
	}
}