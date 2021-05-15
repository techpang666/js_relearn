
/**
 * @description 凡是能用js实现的功能 最终都会用js来实现
 */

/**
 * @description JavaScript语言的组成
 */

/*

- ECMAScript(JavaScript的核心)
- BOM(浏览器对象模型(WebAPI))
- DOM(文档对象模型(WebAPI))

ECMAScript定义了JavaScript的语言规范(JavaScript的核心) 描述了语言的基本语法和数据类型

ECMAScript是一套标准 定义了一种语言的标准与具体实现无关

一套操作浏览器功能的API 通过BOM可以操作浏览器窗口 比如 弹出框/控制浏览器跳转/获取分辨率等

一套操作页面元素的API(别人提供好的一套方法) DOM可以把HTML看做是文档树 通过DOM提供的API可以对树上的节点进行操作

*/

/**
 * @description JS代码三种写法
 */

/*

外联样式(写在js文件中 使用script的src属性导入)

<script src="./test.js"></script>

内联样式(写在script标签中 如果代码较少可以使用 复杂不推荐)

<script>alert('test')</script>

行内样式(不推荐 不便于维护)

<button onclick="window.alert('test')">test</button>

*/

/**
 * @description 细节
 */

/*

html的代码是从上往下解析的

外联样式只能写在js文件中 不能写在script标签中

如果一个script标签有src属性(外联写法) 此时内联的js代码不会执行

src是js文件所在的路径 外联路径不一定是自己服务器上的相对路径 可以是外部服务器提供

外联写法/内联写法/行内写法 互不干扰 可以在一个html中多次使用

*/

/**
 * @description JS的两种注释写法
 */

// 注释内容

/* 注释内容 */

/*

理清思路 方便自己以后阅读代码

规范编程 方便以后别人接手代码便于维护

新手阶段 建立自己的整体思维逻辑 通过注释将思路先完成/后写代码

写清楚自己要做什么

自己是如何理解要做的内容/怎么设计步骤 按照顺序来编写好注释

按照写好的思路来一步步用代码实现

*/

/**
 * @description JS常用的五句话
 */

alert('弹出一个提示框 通常用于提示用户/也可以用于调试')

console.log('用于打印调试')

prompt('弹出输入框 用于输入数据')

confirm('弹出确认框')

document.write('替换body原来的内容')

/**
 * @description 代码运行的原理
 */

/*

1. 计算机将存储在硬盘中的html文件读取到内存中
2. 浏览器内核编译器开始编译代码(CPU只能处理二进制数据 需要将我们写的代码转成二进制)
3. CPU处理与计算
4. CPU将我们代码在运行时产生的数据保存到内存中
5. 系统将内存中的数据转换成人可识别的符号展示给用户(显示/存储等)

*/
