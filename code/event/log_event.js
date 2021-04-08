
/**
 * @description 如何在控制台获取页面上所有的事件对象
 */

document.onclick = function (event) {
  event = event || window.event /* 兼容性写法 */
  console.log(event)
}
