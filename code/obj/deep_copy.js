
/**
 * @description 浅拷贝
 */

let obj = {
  name: '张三',
  age: 18
}

let obj2 = {
  ...obj
}

console.log(obj2);

/**
 * @description 深拷贝
 */

let obj = {
  name: '张三',
  age: 18,
  car: {
    brand: '宝马',
    price: 100
  }
}

let obj2 = JSON.parse(JSON.stringify(obj))

console.log(obj2);
