/**
 * @description 写一个方法把下划线命名转成大驼峰命名
 */

/*

通过split()方法将字符串拆分为数组 通过传参把下划线给去掉

通过map()方法将每个数组的第一位转为大写 通过substr()方法直接输出第二位后面的

通过join()方法拼接成字符串 这时候的字符串首字母还是大写

需要再次通过s[0]转换首字母为小写 输出后面的字符串

*/

function toCamelCase(str) {
	if (typeof str !== 'string') {
		return str;
	}
	const s = str
		.split('_')
		.map((item) => item[0].toUpperCase() + item.substr(1))
		.join('');
	return s[0].toLowerCase() + s.substr(1);
}

let testStr = 'if_you_are_my_world';
// console.log(testStr.split('_'));
console.log(toCamelCase(testStr));
