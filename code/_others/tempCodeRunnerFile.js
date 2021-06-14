
let a = 6
let b = 9

function simpleTag(strings, a, b, sum) {
	console.log(strings);
	console.log(a);
	console.log(b);
	console.log(sum);
	return 'testStr'
}

let res = `${a} + ${b} = ${a + b}`
let tagRes = simpleTag`${a} + ${b} = ${a + b}`

console.log(res);
console.log(tagRes);