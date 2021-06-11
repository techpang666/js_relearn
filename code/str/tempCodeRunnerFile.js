
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