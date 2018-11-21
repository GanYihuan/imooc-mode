/* singleton pattern */
/* 系统中被唯一使用, 一个类只有一个实例 */

/* 登录框, 购物车 */
/* 单例模式要 java 特性 (private) */
/* typescript 才有 (private) */

class SingleObject {
  login() {
    console.log('login...')
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2) // true
/* java 中不能 new SingleObject */
/* js 中即使 new 也不报错  */
let obj3 = new SingleObject()
obj3.login()
console.log(obj1 === obj3) // false