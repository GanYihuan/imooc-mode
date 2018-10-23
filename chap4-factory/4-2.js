/* Factory pattern */
/*
jQuery - $('div)
React.createElement
vue Asynchronous component
*/
class Product {
	constructor(name) {
		this.name = name
	}
	init() {
		alert('init')
	}
	fun1() {
		alert('fun1')
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
p.fun1()
