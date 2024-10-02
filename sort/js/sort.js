// 一.冒泡排序
// 说明：
// 1.比较所有相邻元素，如果第一个比第二个大，则交换他们
// 2.一轮下来保证可以找到一个数是最大的
// 3.执行n-1轮，就可以完成排序

// 定义一个原生的bubbleSort方法
function mpSort() {
Array.prototype.bubbleSort = function () {
	for (let i = 0; i < this.length - 1;i += 1) {
		//通过 this.length 次把第一为放到最后，完成排序
		//-i是因为最后的位置是会动态改变的，当完成最后一次，最后一位会变成倒数第二位
		for (let j = 0; j < this.length -1 - i; j += 1) {
			if (this[j] > this[j+1]) {
				const temp = this[j];
				this[j] = this[j+1];
				this[j+1] = temp;
			}
		}
	}
}
const arr = [4,8,1,43,53,22,11,0] ;
arr.bubbleSort();
console.log(arr);
document.getElementById("demo1").innerHTML = arr;
}

// 2.选择排序
// 说明：
// 1.找到数组中的最小值，选中他并将其放置在第一位
// 2.接着找到第二个最小值，选中它并将他放置到第二位
// 3.执行n-1轮，就可以完成排序

function xzSort(){
Array.prototype.selectionSort = function () {
	for (let i = 0; i < this.length - 1; ++i){
		// 假设最小的值就是当前的下标
		let indexMin = i;
		// 遍历剩余长度找到最小下标
		for (let j = i; j <this.length; ++j) {
			if (this[j] < this[indexMin] ) {
				indexMin = j;
			}
		}
		if (indexMin !== i) {
			// 交换当前下标i与最小下biao的值，重复this.length次
			const temp = this[i];
			this[i] = this[indexMin];
			this[indexMin] = temp;
		}
	}
}
const arr = [5,4,3,2,1];
arr.selectionSort();
console.log(arr);
document.getElementById("demo2").innerHTML = arr;
}

// 3.插入排序
// 说明：
// 1.从第二个数开始往前比
// 2.比它大就往后排
// 3.以此类推进行到最后一个数

function crSort(){
	Array.prototype.insertionSort = function() {
		// 从第二个数开始往前比
		for (let i = 1; i < this.length; ++i) {
			// 先把值保存起来
			const temp = this[i];
			let j = i;
			while (j > 0) {
				if (this[j - 1] > temp) {
					this[j] = this[j-1];
				}
				else{
					// 因为已经是排序过的了，如果比上一位大，那就没必要在更上上位比较了
					break;
				}
				j -= 1;
			}
			// 这里的j 有可能是第0 位，也有可能是到了一半停止了
			this[j] = temp;
		}
	}
	const arr = [5,4,3,2,1];
	arr.insertionSort()
	document.getElementById("demo3").innerHTML = arr;
}

// 4.归并排序
// 说明
// 分: 把数组劈成两半，再递归地对数组进行“分”操作，直到分成一个个单独的数
// 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组

function gbSort() {
	Array.prototype.mergeSort = function () {
		const rec = (arr) =>{
			// 如果数组长度为1，说明切完了，可以直接返回
			if (arr.length === 1) {return arr;}
			// 切分数组，把每一项都单独切出来
			const mid = Math.floor(arr.length / 2);
			const left = arr.slice(0,mid);
			const right = arr.slice(mid,arr.length);
			// 有序的左边数组
			const orderLeft = rec(left);
			// 有序的右边数组
			const orderRight = rec(right);
			// 定义一个数组来存放顺序数组
			const res = [];
			// 把左右两个有序的合并为一个有序的返回
			while (orderLeft.length || orderRight.length){
				if (orderLeft.length && orderRight.length){
					res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
				} else if (orderLeft.length){
					res.push(orderLeft.shift());
				} else if (orderRight.length){
					res.push(orderRight.shift());
				}
			}
			return res;
		};
		const res = rec(this);
		// 拷贝到数据本身
		res.forEach((n,i) => { this[i] = n;});
	}
	const arr = [5,4,3,2,1];
	arr.mergeSort();
	document.getElementById("demo4").innerHTML = arr;
}

// 5.快速排序
// 说明
// 分区: 从数组中任意选择一个基准，所有比基准小的元素放到基准前面，比基准大的元素放到基准的后面
// 递归：递归地对基准前后的子数组进行分区

function ksSort() {
	Array.prototype.quickSort = function() {
		const rec = (arr) => {
			// 预防数组是空的或只有一个元素，当所有元素都大于等于基准值就会产生空的数组
			if (arr.length === 1 || arr.length === 0 ) {return arr; }
			const left = [];
			const right = [];
			// 以第一个元素为基准
			const mid = arr[0];
			// 小于基准值的放左边，大于基准值的放右边
			for (let i = 1; i < arr.length; ++i) {
				if (arr[i] < mid) {
					left.push(arr[i]);
				} else {
					right.push(arr[i]);
				}
			}
			// 递归调用，最后放回数组
			return [...rec(left),mid,...rec(right)];
			};
			const res = rec(this);
			res.forEach((n,i) =>{ this[i] = n; })
		}
		const arr = [2,3,4,5,3,1];
		arr.quickSort();
		document.getElementById("demo5").innerHTML = arr;
	}
