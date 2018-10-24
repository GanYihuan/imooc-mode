/* adapter pattern */
class Jadapter {
	plug() {
		return '日本插头'
	}
}

class Cadapter {
	constructor() {
		this.jadapter = new Jadapter()
	}
	request() {
		let info = this.jadapter.plug()
		return `${info} - 中国插头`
	}
}

let cadapter = new Cadapter()
let res = cadapter.request()
console.log(res) // 日本插头 - 中国插头
