
/**
 * @description 什么是闭包(closure)
 * 
 * MDN官方解释
 * 闭包是函数和声明该函数得词法环境的组合
 * 
 * 通俗的解释
 * 内层函数引用了外层函数上的变量就形成了闭包
 * 内部函数总是可以访问其所在的外部函数中声明的参数和变量(即使在其外部函数被返回了)
 * 
 */

/**
 * @description 闭包函数
 * 
 * 声明在一个函数中的函数就叫做闭包函数
 * 
 */

/**
 * @description 闭包的特点
 * 
 * 让外部访问函数内部的变量成为了可能
 * 局部变量会常驻在内存中
 * 可以避免使用全局变量 防止全局变量的污染
 * 会造成内存泄漏(因为有一块内存空间被长期占用 没有被释放)
 * 
 */

/**
 * @description 闭包的创建
 * 
 * 闭包就是可以创建一个独立的环境 每个闭包里面的环境都是独立的 互不干扰
 * 
 * 闭包会发生内存泄漏 每次外部函数执行的时候 因为外部函数的引用地址不同 都会重新创建一个新的地址
 * 但凡是当前活动对象中有被内部子集引用的数据 那么这个时候如果这个数据不删除的话 会保留一根指针给内部活动的对象
 * 
 */

/**
 * @description 闭包的应用场景
 * 
 * 闭包找到的是同一地址中父级函数中对应变量最终的值
 * 
 */

/**
 * @description 闭包的内存泄漏
 * 
 * key = value
 * 
 * key被删除了 value常驻内存中
 * 
 */

console.log('一些闭包栗子');

/**
 * @description 内部可以访问外部函数的变量
 */

// testA的活动对象
function testA() {
  let a = 10
  // 匿名函数的活动对象(内部函数可以访问外部函数的参数和变量)
  return function () {
    console.log(a);
  }
}

// 执行函数
testA()() /* 打印结果 10 */



/**
 * @description 闭包栗子
 */

function fn() {
  let a = 3
  return function () {
    return ++a;
  }
}

console.log(fn()());



/**
 * @description 闭包栗子
 */

let i = 0

function outerFn() {
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn
}

let inner1 = outerFn()
let inner2 = outerFn()
inner1()
inner2()
inner1()
inner2()



/**
 * @description 外部函数执行的时候 都会开辟新的内存空间
 */

// 外部函数
function outerFn() {
  let i = 0
  // 内部函数
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn
}

// 执行函数
// 外部函数执行的时候 都会开辟内存空间
// 外部函数的地址不同 都会重新创建新的地址
let inner = outerFn()
inner()
inner()
inner()

let inner2 = outerFn()
inner2()
inner2()
inner2() /* 打印结果 1 2 3 1 2 3 */

console.log(inner === inner);
console.log(inner === inner2);
