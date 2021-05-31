/**
 * @description split()方法
 */

let testStr = 'if_you_are_my_world';
console.log(testStr.split('')); /* 如果不传参 每个字符之间都会被分割 */
console.log(testStr.split('_')); /* [ 'if', 'you', 'are', 'my', 'world' ] */

// 如果字符串带空格 通过空格进行拆分 会占用一个空的数组下标
let str = ' 1 2 345 6    ';
console.log(str.split(' ')); /* ['', '1', '2', '345', '6', '', '', '', ''] */
