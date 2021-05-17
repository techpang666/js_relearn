
/**
 * @description 数据类型与字面量
 */

/*

只有符合数据类型的数据才能被识别

字面量 只要是符合数据类型的数据都叫做字面量 让你从字面上理解这个数据

编译器做两件事 识别语法 处理(存储与计算)数据

如果代码报错 原因只有两个 语法错误(SyntaxError)/数据不识别(ReferenceError)

一旦代码报错 程序终止运行 后面的代码都不会解析

undefined 变量只有声明没有赋值

null是一种空对象 只是目前没有具体内容 变量不确定数据类型

七种数据类型 undefined/null Object属于引用类型 Symbol属于es6新增的

*/

console.log('test');
console.log(123);
console.log(true);
console.log(null);
console.log(undefined);
console.log(Object);
console.log(Symbol);

// 数字极限
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Infinity);
console.log(-Infinity);

let num
console.log(num); /* undefined */

/**
 * @description typeof关键字
 */

/*

检测一个数据所属的类型

会得到该属性所属类型的字符串 string/number/boolean

*/

console.log(typeof (undefined)); /* undefined */
console.log(typeof null); /* object */

// 请说出下列代码的运行结果
console.log(typeof true); /* boolean */
console.log(typeof "true"); /* string */
console.log(typeof (typeof true)); /* string */
console.log(typeof (typeof "true")); /* string */

/**
 * @description null与undefined比较
 */

/*

两个都表示什么都没有

- number
- string
- boolean

- null
- undefined

- Object
- Symbol

*/

console.log(null == undefined); /* true 他们的值都是空 */
console.log(null === undefined); /* false 他们的值相等 但是数据类型不同 */

/**
 * @description NaN与isNaN
 */

/*

NaN(Not a Number)不是一个数字 是number数据类型中一个特殊的数值 是数学计算错误得到的一个结果

number类型浮点数(小数)精度丢失问题

小数在进行数学计算时会有一定的误差 这是计算机本身的bug 不仅是js语言 其他语言也有这个问题

解决方案 不要让两个小数比较大小 这种情况一般不会影响正常开发

*/

console.log(typeof NaN); /* number */
console.log('test' - 100); /* NaN 在数学上这是一种错误的计算 */
console.log(NaN == NaN); /* false NaN与任何数字都不等 包含它本身 */
console.log(NaN == 100); /* false NaN与任何数字都不等 包含它本身 */
console.log(NaN - 100); /* NaN NaN与任何数字计算得到的都是NaN */

// isNaN(数据) 检测一个数据是不是NaN 得到的结果是布尔类型
console.log(isNaN(NaN)); /* true */
console.log(isNaN(100)); /* false */
// 检测不是number类型的时候 会尝试转换为number类型(隐式转换) 再进行判断
console.log(isNaN('100')); /* false */
console.log(isNaN('abc')); /* true */

// 小数在进行数学计算时会有一定的误差 不要让两个小数比较大小
console.log(0.1 + 0.2); /* 0.30000000000000004 */
console.log(1.1 - 0.2); /* 0.9000000000000001 */
console.log(0.4 + 0.5); /* 0.9 */
console.log(0.3 == 0.3); /* true */
console.log(0.1 + 0.2 == 0.3); /* false */

/**
 * @description 字符串比较
 */

/*

字符串比较规则是 按照字母的顺序挨个进行比较 与字符串长度无关 字符串比较区分大小写

*/

console.log('abc' > 'b'); /* false 按照字母的顺序挨个进行比较 b比a大 所以是false */
console.log('a' > 'A'); /* true 字符串比较区分大小写(ASCII码表对应) 小写大于大写 a对应ASCII码表为97 A为65 */

/**
 * @description 显式数据类型转换
 */

/*

数据类型的转变并不会改变原来变量的值 而是会产生一个新的值

为什么要有数据类型转换

有时候想要进行某种计算的时候 由于数据类型不同往往会产生一些错误的结果

为了避免这种结果 我们需要将某种数据类型转化为其他数据类型

例如prompt()输入框得到的数据的类型是string

如果想要进行数学计算则需要转成number类型 否则会计算出错

什么是显示类型转换

程序员主动转换(可以理解为使用关键字来转换) 这种方式代码易读性更高

*/

let num = '10'
console.log(typeof num); /* string */
console.log(typeof parseInt(num)); /* number */
parseInt(num)
console.log(typeof num); /* string 不会改变原来变量的值 */
