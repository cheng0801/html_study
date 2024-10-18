var a1 = new Array(5);
console.log(a1.length);
console.log(a1);

console.log(1111111);

var a2 = new Array(5,6);
console.log(a2.length);
console.log(a2);

console.log(22222222);

var a3=[5];
console.log(a3.length);//1
console.log(a3); //[5]

var a4=[5,6];
console.log(a4.length);//2
console.log(a4); //[5,6]

console.log(33333333);

var a5=new Array(1,2,3);
a5[3]=99;
console.log(a5);//[1, 2, 3, 99]
delete a5[2];
console.log(a5[2]); //undefined

console.log(44444444);

// push推进 pop弹出
var a6=new Array(1,2,3);
a6.push(4);
console.log(a6);//[1, 2, 3, 4] 
console.log(a6.length);//4
console.log(a6.pop(a6));//4
console.log(a6); //[1, 2, 3] 
console.log(a6.length);//3


console.log(555555555);

// shift 方法可以删除数组index最小元素，unshift 方法，用于向数组头部添加一个元素
var a7=new Array(1,2,3);
a7.unshift(4);
console.log(a7);//[4, 1, 2, 3] 
console.log(a7.length);//4
console.log(a7.shift(a7));//4
console.log(a7); //[1, 2, 3] 
console.log(a7.length);//3

console.log(66666666);

// splic 的第一个参数是绝对索引值，而不是相对于数组索引，
// 第二个参数并不是删除元素个数，而是删除动作执行多少次，
// 并不是按数组实际引索移动，而是连续移动。同时调整后面
// 元素引索，前面引索不理会。
var a8=new Array();
a8[2]=2;
a8[3]=3;
a8[7]=4;
a8[8]=5;

console.log(a8.splice(3,4)); //[3] 
console.log(a8.length); //5
console.log(a8); //[2: 2, 3: 4, 4: 5]