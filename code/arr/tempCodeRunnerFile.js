
const arr = [
  {id: 1, name: '西瓜', state: true, price: 10, count: 1},
  {id: 2, name: '榴莲', state: false, price: 80, count: 2},
  {id: 3, name: '草莓', state: true, price: 10, count: 3},
]

const res = arr.every(item => item.state)
console.log(res);