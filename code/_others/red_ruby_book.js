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
 * @description const关键字
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
 * @description Undefined类型
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

/**
 * @todo 210603
 */

// 这个变量被声明了 只是值为undefined
let demo;
// 没有声明过这个变量
// let age;
console.log(demo); /* undefined */
console.log(age); /* ReferenceError: age is not defined */

/*

输出一个没有声明过的变量会报错

对于没有声明的变量 只能执行一个操作 就是对它调用typeof

也可以调用delete 不过没啥用 严格模式下还会报错

*/

console.log(typeof age); /* undefined */
// 没啥用
console.log(delete age); /* true */

// 已经声明的变量
let demo;
// 没有声明的变量
// let age;
console.log(typeof demo); /* undefined */
console.log(typeof age); /* undefined */

/*

无论声明还是未声明的 都是返回undefined

逻辑上是对的 虽然这两个变量存在根本性上的差异

但它们都无法执行实际操作

*/

/**
 * @description 注意点
 */

/*

即使未初始化的变量会被自动赋值undefined

但我们建议声明变量的时候同时初始化

这样当typeof返回undefined的时候 你就会知道那是因为给的变量没有声明 而不是没有初始化

undefined是个假值 其他可能的值也是假值

所以 一定要明确自己想要检测的就是undefined这个字面值 而不是假值

作为条件判断的时候 undefined为false

*/

/**
 * @todo 210604
 */

// 被声明了 值为undefined
let demo
// 没有声明的变量
// age

if (demo) {
	console.log(666); /* 条件为false 所以不会执行 */
}

if (!demo) {
	console.log(666); /* 取反了 条件为true 所以会执行 */
}

if (age) {
	console.log(666); /* 找不到age这个变量 报错 */
}

/**
 * @description Null类型
 */

/*

null也只有一个值 就是null

逻辑上 null表示为空对象指针

所以typeof的时候会输出object

*/

let demo = null
console.log(typeof demo); /* object */

let car = null
if (car != null) {
	console.log(666);
}

/*

定义要保存对象值的变量 建议使用null来初始化

这样只要检查这个变量是不是null就知道这个变量是不是用于一个对象的引用

null也是一个假值 所以要明确自己检测的是null这个字面值 而不是假值

*/

// undefined是由null派生出来的 所以ECMA262定义为表面相等 不是全等
console.log(null == undefined); /* true */

// == 这个操作符会为了比较而转换它的操作数

// 作条件判断的时候 为false
let demo = null
let age /* 这个是自动赋值undefined */
if (!demo) {
	console.log(666); /* 666 */
}

if (!age) {
	console.log(666); /* 666 */
}

/**
 * @todo 210605
 */

/**
 * @description Boolean类型
 */

/*

true不等于1

false不等于0

布尔值字面量区分大小写 True是有效标识符 不是布尔值

通过Boolean()转型函数 将其他数据类型转为布尔值

这些情况输出true
非空字符串/非零数值(包括无穷值)/任意对象/(N/A)不存在

这些情况输出false
空字符串/0/NaN/null/undefined

*/

let demo = 'dddd'
let res = Boolean(demo)
console.log(res); /* true */

let demo = 'dddd'
if (demo) {
	console.log(666);
}

// NaN取反是true
if (!NaN) {
	console.log(666); /* true */
}

/**
 * @description Number类型
 */

/*

使用IEEE754格式表示整数/浮点值(其他语言叫做双精度值)

不同的数值类型有对应的字面量格式

可能存在整零/负零 在所有情况下都被认为是等同的

*/

// 最基本的数值字面量格式是十进制 八进制/十六进制的数值都会转为十进制
let intNum = 55
console.log(intNum); /* 55 */

// 八进制(8为基数)前缀为0 后面是八进制数字(0-7) 八进制在严格模式下是无效的 会语法错误(需要通过前缀0o表示)
// 如果字面量的数字超出范围会忽略掉前缀0 后面的数字被当作十进制处理
let octalNum = 070
console.log(octalNum); /* 八进制的56 */
// let octalNum = 079
console.log(octalNum); /* 无效的八进制 当作79处理 */
let octalNum = 08
console.log(octalNum); /* 无效的八进制 当作8处理 */

// 十六进制(16为基数)前缀为0x(区分大小写) 后面跟着0-9/A-F(大小写都可以)
let hexNum = 0xA
console.log(hexNum); /* 十六进制的10 */
let hexNum = 0x1f
console.log(hexNum); /* 十六进制的31 */

/**
 * @todo 210606
 */

/**
 * @description 浮点值
 */

let num = 0.1
let num = .1 /* 有效 不推荐 */

// 存储浮点值使用的内存是整数值的两倍 这些情况都会被转为整数

let num = 1. /* 小数点后面没有数字 当成1处理 */
let num = 10.0 /* 小数点后面是0 当成10处理 */

// 非常大/小的数值 浮点值可以使用科学记数法 格式为一个数值后面跟着一个小写e 然后10的多少次幂(也就是第二位开始多少个数字)

let num = 315e7 /* 没有-是整数值 后面多少个0就是多少次幂 */
console.log(num); /* 3150000000 */

let num = 315e-7 /* -是浮点值 小数点后面多少位就是多少次幂 */
console.log(num); /* 0.0000315 */

// ECMA会将小数点后面至少6个0的浮点值通过科学记数法表示

// 浮点值的精确度最高可达17位 但算术中不如整数精确

// 这是拿不到0.3的 之所以这样 是因为使用了IEEE754数值 这种错误并非ECMA独有
console.log(0.1 + 0.2); /* 0.30000000000000004 */
console.log(0.15 + 0.25); /* 0.4 */

/**
 * @description 值的范围
 */

/*

ECMA将最大/最小的值保存在MAX_VALUE/MIN_VALUE中

超出JavaScript可以表示的范围的数值 会转换成Infinity

这时候不会再进行任何计算

因为Infinity没有可用于计算的数值表示形式

*/

console.log(Number.MAX_VALUE); /* 1.7976931348623157e+308 */
console.log(Number.MIN_VALUE); /* 5e-324 */

// 这两个属性保存的就是-Infinity和Infinity
console.log(Number.NEGATIVE_INFINITY); /* -Infinity */
console.log(Number.POSITIVE_INFINITY); /* Infinity */

// 可以通过isFinite()函数判断一个值是不是有限大
let res = isFinite(1+1)
console.log(res); /* true */
let num = Number.MAX_VALUE + Number.MAX_VALUE
console.log(isFinite(num)); /* false */

/**
 * @description NaN
 */

/*

NaN表示不是数值

在本来要返回数值的操作失败了(不是抛出错误)

*/

// 0 +0 -0相除都会NaN
console.log(0/0); /* NaN */
console.log(-0/+0); /* NaN */

// 分子不是0 分母是0的时候 会返回正负无穷
console.log(5/0); /* Infinity */
console.log(5/-0); /* -Infinity */

// 涉及到NaN的操作都会返回NaN
console.log(NaN/10); /* NaN */

// NaN不等于包括NaN在内的任何值
console.log(NaN == NaN); /* false */
console.log(NaN === NaN); /* false */

// isNaN函数用于判断是不是数值 会尝试转换为数值
console.log(isNaN(NaN)); /* true */
console.log(isNaN(1)); /* false */
console.log(isNaN('1')); /* false 转换为1 */
console.log(isNaN('demo')); /* true 转换失败 */
console.log(isNaN(true)); /* false true可以表示为1 */

/**
 * @description 数值转换
 */

/*

Number()是转型函数 可以任意数据类型

parseInt()和parseFloat()用于将字符串转为数值

*/

console.log(Number('1'));
console.log(parseFloat('1'));
console.log(parseInt('1'));

// Number()的转换规则
console.log(Number(true)); /* 1 */
console.log(Number(false)); /* 0 */
// null为0
console.log(Number(null)); /* 0 */
// undefined转换成NaN
console.log(Number(undefined)); /* NaN */

// 字符串转换规则
console.log(Number('1')); /* 1 */
// 会忽略掉前面的0
console.log(Number('001')); /* 1 */
// 会忽略掉前面的0
console.log(Number('1.1')); /* 1.1 */
// 十六进制会转换对应的十进制
console.log(Number('0xf')); /* 15 */
// 空字符串会转换成0
console.log(Number('')); /* 0 */
// 转换失败 为NaN
console.log(Number('demo')); /* NaN */

let demo = {a:1}
console.log(demo); /* { a: 1 } */
console.log(demo.toString()); /* [object Object] */
console.log(demo.valueOf()); /* { a: 1 } */
console.log(demo.valueOf() === demo); /* true */





console.log(666);

/**
 * @description 一些盲区
 */

/**
 * @description isNaN()可以用于测试对象
 */

/*

先调用对象的valueOf()

确定返回的值是否可以转为数值

不能的时候 调用toString()方法并测试返回值

*/




