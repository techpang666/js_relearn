
/**
 * @description 解构
 */

/**
 * @description 数组解构
 */

// 左右配对模式

let [demo, [[test], name]] = [1, [[2, 3], 4]]
console.log(test); /* 2 */

let [demo, ...detail] = [1, 2, 3, 4]
console.log(detail); /* [ 2, 3, 4 ] */

let [x, y, ...z] = ['a']
console.log(y); /* undefined */
console.log(z); /* [] */

// 解构不成功 会undefined
let [demo] = []
console.log(demo); /* undefined */
