/**
 * @description 去除字符串中最后一个指定的字符
 */

function trim(str) {
	// 如果参数为字符串
	if (typeof str === 'string') {
		// substring(start, stop)方法接受两个参数
		// 第一个必需参数 从哪里开始截取字符串
		// 第二个可选项 如果要最后一个字符的话就长度-1就可以了 省略这个参数的话会截取到字符串最后一个
		let trimStr = str.substring(0, str.length - 1);
		return trimStr;
	}
}

console.log(trim('essdgdg'));
