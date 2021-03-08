/**
 * @description 什么是数组
 *
 * 用于在单一变量中存储多个值
 * 可以字符串/数字
 * 通过索引号进行访问
 */

/**
 * @description 创建数组的两种方式
 * 关键词(new Array)
 * 数组文本(语法糖)
 */

// 关键词
const newArr = new Array('Saab', 'Volvo', 'BMW')
// 语法糖
const strArr = ['Saab', 'Volvo', 'BMW']
// 也可以存放数字
const numArr = [6, 3, 3, 8, 6, 4, 2, 8, 9, 4]

/**
 * @description 访问数组及修改
 */

const cars = ['Saab', 'Volvo', 'BMW']
// 访问数组
console.log(cars)
// 通过索引号访问数组
console.log(cars[0])
// 修改数组
cars[0] = 'test'
console.log(cars[0])

/**
 * @description 数组也是对象
 *
 * 但是还是以数组的方式描述的好
 */

const person = ['Bill', 'Gates', 62]
// 数组是一种特殊类型的对象 通过typeof关键字返回的是object
console.log(typeof person)

const personObj = { firstName: 'John', lastName: 'Doe', age: 46 }
// 常规对象访问属性的方式
console.log(personObj.firstName)
// 也可以通过数组的形式
console.log(personObj['firstName'])

/**
 * @description 数组的元素也可以是对象
 *
 * 开发常见 从数组中获取对象
 *
 * 因为数组是一种特殊类型的对象 所以可以存放不同类型的变量
 */

// 模拟数据
const myArray = []
const myCars = []
function myFunction() {}

// 可以存放对象
myArray[0] = Date.now()
// 可以存放函数
myArray[1] = myFunction
// 可以存放数组
myArray[2] = myCars
// 检查数据而已
console.log(myArray)

/**
 * @description 如何识别数组及length属性
 */

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// 通过typeof()关键字
console.log(typeof fruits)
// length属性始终大于最高数组索引(因为索引从0开始)
console.log(fruits.length)

/**
 * @description 总结
 *
 * 数组是用于单一变量中存放多个变量 通过索引号访问
 * 是一种特殊类型的对象(通过typeof识别) 可以存放不同类型的变量
 */
