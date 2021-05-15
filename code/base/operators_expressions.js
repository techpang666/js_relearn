
/**
 * @description 运算符与表达式
 */

/*

表达式一定有结果 要么直接打印 要么存入变量中

加号的作用

字符串连接符 只要有一个string

算术加法 两个都是number

*/

let myName = 'test'
console.log('my name is ' + myName); /* my name is test */

console.log('10' + 10); /* 1010 */
console.log(10 + 10); /* 20 */

/*

%求余(求模)

算术运算符的优先级 小括号>乘除模>加减

0不能作为除数 否则会Infinity无穷大

*/

console.log(10 / 0); /* Infinity */

console.log(10 % 3); /* 1 */

let num = 5
num += 5 /* num = num + 5 是等价的 在自身的基础上再加多少 */
console.log(num);

let num = 10
num -= 10 - 5 /* 不管怎么复合运算 都是左右的结果进行运算 */
console.log(num);

/*

自操作运算都是一元表达式 即只有一个变量参与运算 自操作运算不能用于字面量

单独使用 前置和后置都没有区别

前置会自增再参与运算 后置会保留自己参与运算 再自增

*/

let num = 10
num++ /* 后置自增 */
++num /* 前置自增 */
console.log(num);

let num1 = num2 = 1
console.log(num1++); /* 1 */
console.log(++num2); /* 2 */
console.log(num1, num2); /* 2 2 */

// 请说出以下代码的结果
let a = 10;
let b = a++ + a++; /* 10 + 11 */
console.log(b); /* 21 */

/**
 * @description Math高级数学计算
 */

// 向上取整
console.log(Math.ceil(8.1)); /* 9 */
console.log(Math.ceil(-8.1)); /* -8 */

// 向下取整
console.log(Math.floor(8.1)); /* 8 */
console.log(Math.floor(-8.1)); /* -9 */

// 随机数操作
console.log(Math.random()); /* 0-1的随机小数 */
console.log(Math.floor(Math.random() * 100)); /* 0-100的随机整数 向下取整 */

/**
 * @description 关系运算符和关系表达式
 */

/*

=是赋值 ==才是等于

!= 不等于
!== 不全等(类型比较)
== 等于
=== 全等(类型比较)

关系表达式的结果一定是布尔值

*/

console.log(1 == 1); /* true */
console.log('1' == 1); /* true 只比较数值 不比较类型 */
console.log('1' === 1); /* false 先比较数值 再比较类型 */

/**
 * @description 逻辑运算符和逻辑表达式
 */

/*

&& 逻辑与(有一假为假)
|| 逻辑或(有一真为真)
! 逻辑非(取反)

*/

console.log(!false); /* true */
console.log(!(2 > 1)); /* false */

// 运算符优先级可以通过()来提升优先级
let res = 3 + 2 - 5 * 0
console.log(res); /* 5 */

// 请说出以下代码的结果
let num = 2
let res = num++ * (++num + num - num--)
console.log(res, num); /* dddd */
