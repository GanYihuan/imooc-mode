/* adapter pattern */
class Adaptee {
	plug() {
		return 'japan plug'
	}
}

class Target {
	constructor() {
		this.adaptee = new Adaptee()
	}
	request() {
		let info = this.adaptee.plug()
		return `${info} - china plug`
	}
}

let target = new Target()
let res = target.request()
console.log(res)
