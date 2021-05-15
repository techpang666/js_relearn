
/**
 * @description 数据类型与字面量
 */

/*

只有符合数据类型的数据才能被识别

字面量 只要是符合数据类型的数据都叫做字面量 让你从字面上理解这个数据

编译器做两件事 识别语法 处理(存储与计算)数据

如果代码报错 原因只有两个 语法错误(SyntaxError)/数据不识别(ReferenceError)

一旦代码报错 程序终止运行 后面的代码都不会解析

undefined 变量只有声明没有赋值

null是一种空对象 只是目前没有具体内容 变量不确定数据类型

七种数据类型 undefined/null Object属于引用类型 Symbol属于es6新增的

*/

console.log('test');
console.log(123);
console.log(true);
console.log(null);
console.log(undefined);
console.log(Object);
console.log(Symbol);

// 数字极限
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Infinity);
console.log(-Infinity);

let num
console.log(num); /* undefined */

/**
 * @description typeof关键字
 */

/*

检测一个数据所属的类型

会得到该属性所属类型的字符串 string/number/boolean

*/

console.log(typeof (undefined)); /* undefined */
console.log(typeof null); /* object */

// 请说出下列代码的运行结果
console.log(typeof true); /* boolean */
console.log(typeof "true"); /* string */
console.log(typeof (typeof true)); /* string */
console.log(typeof (typeof "true")); /* string */
