class House {
	constructor(city) {
		this.city = city
	}
	showCity() {}
}

/* father */
class People extends House {
	constructor(name, house) {
    super(house)
		this.name = name
	}
	saySomething() {}
}

/* child */
class A extends People {
	constructor(name, house, number) {
    /* super(): invoked father constructor */
		super(name, house)
		this.number = number
	}
	saySomething() {
		alert('I am A')
	}
}

class B extends People {
	constructor(name, house) {
		super(name, house)
	}
	saySomething() {
		alert('I am B')
	}
}
 
/* OO */
let aHouse = new House('beijing')
let a = new A('aHouse', aHouse, 10)
/* polymorphic */
a.saySomething() // I am A

/* extend */
let bHouse = new House('guangzhou')
let b = new B('bHouse', bHouse, 'A2')
/* polymorphic */
b.saySomething() // I am B
