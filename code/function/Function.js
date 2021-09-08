
/**
 * @description 通过构造函数创建函数
 */

function demo(a, b) {
  return a + b
}
console.log(demo(1, 3));

const fn = new Function('a', 'b', 'return a + b')

console.log(fn(1, 3));
