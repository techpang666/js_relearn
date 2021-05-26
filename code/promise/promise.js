// 通过Promise构造函数创建promise实例
const promise = new Promise(function (resolve, reject) {
	let test = true;
	if (test) {
		// 异步操作成功的时候
		resolve(res);
	} else {
		reject(err);
	}
});

/*

Promise构造函数接受一个函数作为参数

这个函数又接受两个参数 分别是resolve和reject

他们两个又是一个函数 由JavaScript引擎提供 不需要自己部署

resolve函数是将promise从未完成到成功 也就是pending到resolved

reject函数则是从pending到rejected

将异步结果作为参数传递出去

*/

// 可以通过then方法分别指定resolve和reject的回调函数

promise.then(
	// resolve的回调函数
	function (res) {
		console.log(res);
	},
	// reject的回调函数
	function (err) {
		console.log(err);
	},
);

/*

then方法接受两个回调函数作为参数

第一个是resolve的 第二个是reject的

都是可选项 接受promise对象传出来的值作为参数

*/

/**
 * @description promise对象一个例子
 */

function timeout(value) {
	// 返回一个promise实例 下面就可以调用then方法了
	return new Promise((resolve, reject) => {
		// 要执行的函数 延时 给函数的参数
		setTimeout(reject, value, 'done');
	});
}

timeout(100).then(
	(res) => {
		console.log(res);
	},
	// done在这里出来
	(err) => {
		console.log(err);
	},
);

// promise创建就立即执行

let promise = new Promise(function (resolve, reject) {
	console.log('promise');
	// 外面传入一个resolve的回调函数
	resolve();
});

// 回调函数将在同步任务执行完了才会执行
promise.then(() => {
	console.log('resolve()');
});

console.log(666);

/**
 * @description 异步加载图片
 */

function loadImageAsync(url) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		// 如果加载成功就调用resolve 反之reject
		image.onload = () => {
			resolve(image);
		};
		image.onerror = () => {
			reject(new Error('找不到图片'));
		};
		image.src = url;
	});
}
