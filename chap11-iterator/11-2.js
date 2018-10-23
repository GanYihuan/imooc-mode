class Iterator {
	constructor(conatiner) {
		this.list = conatiner.list
		this.index = 0
	}
	next() {
		return this.hasNext() ? this.list[this.index++] : null
	}
	hasNext() {
		return this.index >= this.list.length ? false : true
	}
}

class Container {
	constructor(list) {
		this.list = list
	}
	getIterator() {
		return new Iterator(this)
	}
}

let container = new Container([1, 2, 3])
let iterator = container.getIterator()
while (iterator.hasNext()) {
	console.log(iterator.next()) // 1 2 3
}
