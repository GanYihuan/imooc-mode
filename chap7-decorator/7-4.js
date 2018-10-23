/* 弹出提示：即将废除的代码 */
import { deprecate } from 'core-decorators'

class Person {
  /* 即将废除的代码, 查看 'wwww.imooc.com' */
	@deprecate('即将废除!', { url: 'www.imooc.com' })
	name() {
		return 'zhangshan'
	}
}

let p = new Person()
p.name()
