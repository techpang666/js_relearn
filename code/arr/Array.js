
/**
 * @description indexOf()方法
 */

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); /* 1 */
console.log(beasts.indexOf('bison', 2)); /* 4 */
// 没有第三个指定元素 返回最后一个索引
console.log(beasts.indexOf('bison', 3)); /* 4 */
// 如果索引值大于或等于数组长度 就不会在数组里查找 返回-1
console.log(beasts.indexOf('bison', 5)); /* -1 */
console.log(beasts.indexOf('demo')); /* -1 */

/**
 * @description reduce()方法
 */

const arr = [
  {id: 1, name: '西瓜', state: true, price: 10, count: 1},
  {id: 2, name: '榴莲', state: false, price: 80, count: 2},
  {id: 3, name: '草莓', state: true, price: 10, count: 3},
]

// 定义初始值 总数和每一项 return出去叠加初始值
const res = arr.filter(item => item.state).reduce((total, item) => {
  return total += item.price * item.count
},0)

console.log(res);

/**
 * @description every()方法
 */

const arr = [
  {id: 1, name: '西瓜', state: true, price: 10, count: 1},
  {id: 2, name: '榴莲', state: false, price: 80, count: 2},
  {id: 3, name: '草莓', state: true, price: 10, count: 3},
]

// 都满足条件才是true 判断是否全选
const res = arr.every(item => item.state)

console.log(res);
