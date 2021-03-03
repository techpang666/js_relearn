// 从空的对象中拿数据会报错

const obj = { a: 1, b: 2 };
console.log(obj.c); /* undefined */
console.log(obj.c.d); /* 会报错 */
