import { readonly } from 'core-decorators'

// function readonly(target, name, descriptor) {
// 	descriptor.writable = false
// 	return descriptor
// }

class Person {
	constructor() {
		this.first = 'A'
		this.last = 'B'
	}
	@readonly
	name() {
		return `${this.first} ${this.last}`
	}
}

let p = new Person()
console.log(p.name)
/* readonly */
// p.name = function() {
//   alert(100)
// }
