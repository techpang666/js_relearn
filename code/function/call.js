let arr = [1, 2, 3, 4];
function add(a, b) {
	console.log(this);
}
add(); /* window */
// 改变this指向为数组
add.call(arr); /* [ 1, 2, 3, 4 ] */
// 非严格模式下 指定unll/undefined的话 会替换为全局对象window 原始值会被包装
add.call(undefined); /* window */
// call第一个参数为this 其他为实参列表
add.call(this, a, b);

// 和apply()方法的区别是 call()方法接受的是一个参数列表 而apply()方法接受的是一个包含多个参数的数组
