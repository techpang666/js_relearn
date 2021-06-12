
let pageHTML = `<div>
	<span>demo</span>
</div>
`

console.log(pageHTML);

// 模板字面量会保持反引号内部的空格 在换行符后有25个空格符
console.log(pageHTML.length); /* 33 */
console.log(pageHTML[0] === '\n'); /* true */
