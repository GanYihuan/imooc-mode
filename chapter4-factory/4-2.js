/* Factory pattern */
/* 将 new 操作单独封装 */

/*
jQuery - $('div)
React.createElement
vue 异步组件
*/

class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create('p1')
p.init()
