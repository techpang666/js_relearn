
/**
 * @description 原型对象
 */

function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHi = function() {
  console.log('你好');
}

let p1 = new Person('张三', 18)
let p2 = new Person('李四', 30)

console.log(p1.sayHi === p2.sayHi); /* true */

/*

添加到Person原型上的方法 都可以被所有实例访问到 所以是true

原型对象三角图
https://gitee.com/techpang/img_emoji_libs/blob/master/img_bed/note_img/prototype.png

实例访问属性或者方法的时候 都会优先访问自己的
自己没找到就往原型上找 还没有就是找原型的原型 直到顶端(Object.prototype)
还没找到就报错

原型链顶端的原型对象(Object.prototype)

*/

console.log('分割线');

let person = {
  name: 'tom',
  age: 18,
  job: 'student'
}

console.log(person.hasOwnProperty('name')); /* true */
console.log(person.hasOwnProperty('hasOwnProperty')); /* false */
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); /* true */

/*

绝大多数函数都会包含一个prototype属性 指向原型对象

基于构造函数创建的实例 都可以访问原型对象的属性

例如 hasOwnProperty, toString都是Object原型对象上的方法 可以被任何对象当作自己的方法使用

hasOwnProperty是用来判断某个属性是不是自己的

上面的例子就是证明了 hasOwnProperty不是person的属性 但是可以调用

*/

console.log('分割线');

/**
 * @description 原型链
 */

/*

每个对象都有一个__proto__属性 指向当前对象的构造函数的原型

对象可以通过__proto__属性和构造函数的原型对象连接起来

因为构造函数的原型对象也有__proto__属性 这样就形成了一个链式结构 我们称之为原型链

*/
