
let demo = {a:1}
console.log(demo); /* { a: 1 } */
console.log(demo.toString()); /* [object Object] */
console.log(toString.call(demo)); /* [object Object] */
console.log(demo.toString() === toString.call(demo));