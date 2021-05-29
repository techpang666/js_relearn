let arr = new Array(5);
let num = randomNumber();
let i = 0;
// 执行函数
randomArr(arr, num);
// 获取随机数组
function randomArr(arr, num) {
  // 如果这个元素不存在 就存进数组中
	if (arr.indexOf(num) < 0) {
		arr[i] = num;
		i++;
	} else {
    // 再次获取随机数
		num = randomNumber();
	}
  // 如果达到数组的长度了 就输出数组 return掉
	if (i >= arr.length) {
		console.log(arr);
		return;
	} else {
    // 再次获取随机数组
		randomArr(arr, num);
	}
}
// 获取随机数
function randomNumber() {
  // +2 从2开始找元素 向下取整避免跑出32
	return Math.floor(Math.random() * 31 + 2);
}
