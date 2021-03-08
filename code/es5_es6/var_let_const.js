/**
 * @description 三者的区别
 *
 * let和const是es6新增的
 *
 * 变量提升/作用域/初始值/重复声明
 */

/**
 * @description 变量提升
 *
 * var才支持变量提升
 * let和const不支持 会报错
 *
 * 常规都是先声明再使用的
 */

console.log(a) /* undefined */
// console.log(b); /* 报错 */
// console.log(c); /* 报错 */

var a = '张三'
let b = '李四'
const c = '王五'

/**
 * @description 作用域
 *
 * let和const是块级作用域 且不支持外部访问 会报错
 * var是函数作用域
 */

var str1 = '科比'
let str2 = '詹姆斯'
const str3 = '乔丹'

if (true) {
	var str1 = '易建联'
	let str2 = '姚明'
	const str3 = '朱芳雨'
	console.log(str1, str2, str3)
}

// 只有var因为是函数作用域被覆盖了
console.log(str1, str2, str3)

// 块级作用域不支持外部访问
if (true) {
	let str4 = '詹姆斯'
	const str5 = '乔丹'
	var str6 = '易建联'
	console.log(str4, str5, str6)
}

console.log(str6)
// console.log(str4); /* 报错 */
// console.log(str5); /* 报错 */

/**
 * @description 初始值
 *
 * 只有const声明变量必须赋值
 */

// const name; /* 报错 */
// name = '张三'
// console.log(name);

const test = '张三'
console.log(test)

/**
 * @description 重复声明
 *
 * 只有const不支持重复声明
 *
 * const可以修改数组及对象的元素 不算是对常量的修改
 */

// const name3='cccc';
// name3='dd';
// console.log(name3) /* 报错 */

// 数组
const cars = ['Saab', 'Volvo', 'BMW']
console.log(cars[0])
cars[0] = 'test'
console.log(cars[0])

// 对象
const obj = { name: '张三' }
console.log(obj.name)
obj.name = '李四'
console.log(obj.name)

/**
 * @description 总结
 *
 * const是不可以重复声明 但可以修改数组和对象
 *
 * JavaScript是个弱类型 通过let和const可以提升性能 避免奇怪的问题
 *
 * 建议都用const 需要改let再去改回来
 * 避免变量名在别处被改引起不必要麻烦
 */
