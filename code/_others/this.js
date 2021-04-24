
/**
 * @description 箭头函数的this
 */

/*

箭头函数不同于传统函数 它其实没有属于自己的this

它所谓的this是捕获其外层上下文的this值作为自己的this值

并且由于箭头函数没有属于自己的this 它是不能被new调用的

*/

// es6代码
const obj = {
  test() {
    return () => {
      console.log(this === obj);
    }
  }
}

// es5代码
var obj = {
  test: function getArrow() {
    var that = this
    return function () {
      console.log(that === obj);
    }
  }
}
