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
