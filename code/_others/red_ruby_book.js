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

/**
 * @todo 210601
 */

/**
 * @description const声明
 */

// const和let的区别在于声明变量的时候 必须赋值

// 尝试修改const声明的变量会报错
const age = 18;
age = 19; /* TypeError: Assignment to constant variable */

// 不允许重复声明
const age = 18;
const age = 20; /* SyntaxError: Identifier 'age' has already been declared */

const age = 18;
if (true) {
	// 块级作用域
	const age = 20;
}
console.log(age);

const person = {};
// 给person对象加个age属性
person.age = 18;
console.log(person);
console.log(person.age);

/*

const声明的限制只限于它指向的变量引用

如果这个引用是个对象

修改对象内部的属性不属于违反const的限制

*/

for (
	const i = 0;
	i < 10;
	i++
) {} /* TypeError: Assignment to constant variable */

/*

引擎会给for循环中的let声明分别创建个独立的变量实例

虽然const和let相似 但是不能用const声明迭代变量(因为这个变量会自增 违反了const的给常量赋值)

*/

// 如果想用const声明一个不会被修改的变量 也可以(每次迭代都是创建一个新的变量)

let i = 0;
for (const j = 7; i < 5; i++) {
	// 每次都是新的变量
	console.log(j); /* 7 7 7 7 7 */
}

// for-in循环
for (const key in { a: 1, b: 2 }) {
	console.log(key); /* a b */
}

// for-of循环
for (const value of [1, 2, 3, 4, 5]) {
	console.log(value); /* 1 2 3 4 5 */
}

/**
 * @description 声明风格及最佳实践
 */

/*

不使用var

有助于提升代码质量 变量有了明确的作用域/声明位置/不变的值

const优先/let次之

使用const声明让浏览器运行时强制保持变量不变 让静态代码分析工具提前发现不合法的赋值操作

优先使用const声明变量 需要修改变量的时候再改为let

*/

/**
 * @todo 210602
 */

/**
 * @description 数据类型
 */

/*

6种简单数据类型(原始类型)
- undefined
- null
- boolean
- number
- string
- symbol(es6新增)
- object(复杂数据类型)

object是一种无序名值对的集合

ECMA的数据类型很灵活

一种数据类型可以当作多种数据类型使用

*/

/**
 * @description typeof操作符
 */

// ECMA的类型系统是松散的 需要一种手段确定任意变量的数据类型

// 使用typeof操作符会返回对应的类型字符串

/*

- object 表示值为对象(不是函数)或者null
- function 表示值为函数
- symbol 表示值为符号

严格来说 函数被认为是对象 不代表一种数据类型

但是 函数也有自己特殊的属性 所以就通过typeof操作符来区分函数和其他对象

null是一个对空对象的引用

*/

let message = 'dddd';
console.log(typeof message);
console.log(typeof 18);

// typeof操作符不是函数 不需要参数(但可以使用参数)

console.log(typeof null); /* object */

/**
 * @description undefined类型
 */

/*

只有一个值 就是undefined

使用var/let声明变量没有初始化的时候

就是给变量赋值了undefined

字面量undefined主要用于比较

这个特殊值是为了明确空对象指针(null)和未初始化变量的区别

*/

let demo;
// 显式的赋值undefined是没必要的 没有初始化的变量都是undefined
let demo = undefined;
console.log(demo == undefined); /* true */
// 也是全等的
console.log(demo === undefined); /* true */

let demo;
let age;
console.log(demo); /* undefined */
console.log(age); /* undefined */
