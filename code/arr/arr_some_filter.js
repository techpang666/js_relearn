// 数组的some和filter方法

const arr = [1, 2, 3, 666, 888]

// some方法用于检测是否有至少一个符合条件的数据
// const res = arr.some(item => {
//   // return item > 100
//   return item > 1000
// })

// filter方法用来筛选符合要求的数据组成新的数组
// 遍历所有元素进行回调 如果是true就可以保留 保留的元素组成新的数组
const res = arr.filter(item => {
  return item > 100
})

console.log(res)
