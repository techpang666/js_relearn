
// 定义Person构造函数
function Person (name, age) {
  this.name = name
  this.age = age
}

// 原型上挂载say方法
Person.prototype.say = function () {
  console.log('人类会说话');
}

// 定义Student构造函数
function Student (name, age, className) {
  this.name = name
  this.age = age
  this.className = className
}

/**
 * @description 继承
 * 
 * 可以让多个构造函数之间建立关联 便于管理和复用
 * 
 * 原型继承
 * 组合继承
 * 寄生组合继承
 * 
 */

/**
 * @description 组合继承
 */

/*

组合继承指的是将原型链和借用构造函数call技术组合到一块

背后的思路 是使用原型链实现对原型属性和方法的继承(主要是方法)

而通过借用构造函数来实现对实例属性构造的继承
这样既通过在原型上定义方法实现了函数复用 又能保证每个实例都有它的自己的属性

*/

function Student (name, age, className) {
  Person.call(this, name, age) // 实现构造属性的继承
  this.className = className
}

/**
 * @description 寄生组合继承
 */

/*

student实例上有相关的属性(name/age) 原型__proto__上不需要再有这些属性
可以利用Object.create(参数对象)改装

Object.create()会创建一个新的对象 它的__proto__会指向传入的参数对象

Object.create()以参数的对象 作为新建对象的__proto__属性的值 返回新建的对象

*/

Student.prototype = Object.create(Person.prototype)

Student.prototype.study = function () {
  console.log('学生在学习');
}

/**
 * @description 原型继承
 */

/*

原型继承 通过改造原型链 利用原型链的语法 实现继承方法

利用原型链 继承于父级构造函数 继承原型上的方法

语法
子构造函数.prototype = new 父构造函数()

*/

Student.prototype = new Person()

let stu = new Student('张三', 18, '高三一')
stu.say()
console.log(stu);
