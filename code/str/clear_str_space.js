let str = ' 1 2 345 6    ';
// 通过split()方法将字符串拆成数组 传参从哪里开始拆 第二个参数可指定返回的数组的最大长度 不改变原始字符串
console.log(str.split(' '));
// 然后通过join()把数组中的所有元素转换一个字符串 不传参默认逗号隔开
console.log(str.split(' ').join('')); /* 123456 */
// 逗号也是字符串
console.log(str.split(' ').join().length); /* 14 */
