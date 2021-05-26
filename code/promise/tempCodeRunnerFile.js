
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => { resolve(image) }
    image.onerror = () => { reject(new Error('找不到图片')) }
    image.src = url
  })
}

let url = 'https://gitee.com/techpang/img_emoji_libs/raw/master/img_bed/markdown_images/end.jpg'

loadImageAsync(url)