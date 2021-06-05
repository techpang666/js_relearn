/**
 * @description toString()和valueOf()
 */

/*

对象的两个方法 Object.protototype

toString() 返回对象的字符串表示
valueOf() 返回对象的字符串/数值或布尔值表示(返回自身)

看结果就很明显

toString()在对象的时候 就变成"[object Object]"

表示数组的时候 就变成数组内容以逗号连接的字符串

相当于Array.join(',')

valueOf()就返回自身

valueOf的优先级比toString高

*/

// 测试数据
let a = 3;
let b = '3';
let c = true;
let d = { test: '123', example: 123 };
let e = function () {
	console.log('example');
};
let f = ['test', 'example'];

// 先看看toString()方法的结果
console.log(a.toString()); /* 3 */
console.log(b.toString()); /* 3 */
console.log(c.toString()); /* true */
console.log(d.toString()); /* [object Object] */
console.log(e.toString()); /* function (){console.log('example');} */
console.log(f.toString()); /* test,example */

console.log('------');

// 再看看valueOf()方法的结果
console.log(a.valueOf()); /* 3 输出的是数值 */
console.log(b.valueOf()); /* 3 */
console.log(c.valueOf()); /* true */
console.log(d.valueOf()); /* {test:'123',example:123} */
console.log(e.valueOf()); /* function(){console.log('example');} */
console.log(f.valueOf()); /* ['test','example'] */
