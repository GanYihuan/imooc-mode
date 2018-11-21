/* proxy pattern */
/* 使用者无权访问目标对象，中间加代理，通过代理做授权和控制 */

class ReadImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDisk()
  }
  display() {
    console.log('display...' + this.fileName)
  }
  load() {
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new ReadImg(fileName)
  }
  display() {
    this.realImg.display()
  }
}

let proxyImg = new ProxyImg('1.png')
proxyImg.display() // display...1.png
