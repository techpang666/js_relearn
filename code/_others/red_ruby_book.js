/**
 * @todo 210527
 */

console.log(666);

/**
 * @todo 210528
 */

/**
 * @description let关键字
 */

/*

let和var最大的区别就是

let块级作用域

var是函数作用域

*/

// var定义变量
if (true) {
	var test = 'test';
	console.log(test); /* test */
}

console.log(test); /* test */

// let定义变量
if (true) {
	let age = 18;
	console.log(age); /* 18 */
}

console.log(age); /* ReferenceError: age is not defined */

/*

age变量不能在外部引用是因为

它的作用域仅限于该块内部

块级作用域是函数作用域的子集

适用于var的作用域限制也适用于let

*/

let age;
let age; /* SyntaxError: Identifier 'age' has already been declared */

/*

let不允许同个块级作用域中冗余声明

JavaScript引擎会记录用于变量声明的标识符及其所在的作用域

即使嵌套使用相同的标识符都不会报错

没有在同一块中重复声明

*/

let age = 18;
console.log(age); /* 18 */

if (true) {
	let age = 28;
	console.log(age); /* 28 */
}

var age;
let age; /* SyntaxError: Identifier 'age' has already been declared */

/*

冗余声明的报错不会因为混用关键字受影响

这两个关键字声明的并不是不同类型的变量

而是声明这个变量在作用域中如何存在

*/

console.log(
	age,
); /* ReferenceError: Cannot access 'age' before initialization */
let age = 18;

/*

let和var还有一个区别就是

let声明的变量不会在作用域中提升

在解析代码的时候 JavaScript引擎会注意到块后面的let声明

不过在此之前不能以任何方式去引用未声明的变量

let声明之前的执行瞬间被称为(暂时性死区)

在此阶段引用后面才声明的变量都会报错

*/

/**
 * @todo 210529
 */

var demo = 'dddd';
console.log(window.demo); /* dddd */

let age = 18;
console.log(window.age); /* undefined */

/*

在全局作用域中

let不会成为window对象的属性

var会呢

但let声明还是在全局作用域中发生的

相应的变量会在页面的生命周期中生存

避免syntaxerror 要确保没有重复声明一个变量

*/

// 第一个script标签

var demo = 'dddd';
let age = 18;

// 第二个script标签

var demo = 'test'; /* 正常执行 */
let age = 18; /* Uncaught SyntaxError: Identifier 'age' has already been declared */

/*

由于var声明会被提升

JavaScript引擎会在作用域顶部将多余的声明合并成一个声明

let报错是因为它们一个全局作用域

由于let的作用域是块 就检查不到前面是否有同名变量 也就不可能在没有声明的情况下声明它

*/

function test() {
	let age = 18;
	console.log(age); /* 18 */
}

function demo() {
	let age = 18;
	console.log(age); /* 18 */
}

test();
demo();

/**
 * @todo 210530
 */

// 第一个script标签

// 全局作用域的声明
let demo = 'dddd';
// let age = 18
console.log(demo);

// 第二个script标签

if (typeof demo === 'undefined') {
	// 块级作用域的声明
	let demo;
	demo = 16;
	console.log(demo); /* 这个if是false 所以这里不会执行 */
}
// 这里的demo不是if里面的demo 全局声明的demo
demo = 'i is a demo';
console.log(demo); /* i is a demo 全局作用域 */
try {
	console.log(age); /* 18 如果没有声明就会报错 */
} catch (err) {
	let age;
	age = 20;
	console.log(age);
}
// 这个age不是catch里面的age 全局变量 上面的是块级作用域的变量
age = 12;
console.log(age);

/*

let不能依赖条件声明模式

这是个反模式 程序难以理解

*/

/**
 * @todo 210531
 */

/**
 * @description for循环的let声明
 */

// var定义的迭代变量
for (var i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i); /* 5 */

// let定义的迭代变量
for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i); /* ReferenceError: i is not defined */

/*

let之前 for循环定义的迭代变量会渗透到循环体外面

也就是外面可以log迭代变量i

改成let后 这个问题就不存在了

因为let的作用域在循环块内

*/

for (var i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 0); /* 5 5 5 5 5 */
}

/*

之所以是这个输出 是因为退出循环的时候 迭代变量保存的是最终导致循环退出的值(5)

在这之后执行超时逻辑的时候 i都是同一个变量 所以就是输出同一个最终值

在使用let的时候 引擎会给每个迭代循环声明一个新的迭代变量

每个setTimeout引用的都是不同的变量实例 所以log是我们的期望值

这种每次迭代都声明一个独立变量实例的行为都适用于所有风格的for循环 包括for-in/for-of循环

*/

for (let i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 0); /* 0 1 2 3 4 */
}
