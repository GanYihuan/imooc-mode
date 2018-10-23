/* father */
class People {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	eat() {
		alert(`${this.name} eat something`)
	}
	speak() {
		alert(`My name is ${this.name}, age ${this.age}`)
	}
	saySomething() {}
}

/* child */
class Student extends People {
	constructor(name, age, number) {
		/* super(): invoked father constructor */
		super(name, age)
		this.number = number
	}
	study() {
		alert(`${this.name} study`)
	}
	saySomething() {
		alert('I am Student')
	}
}

class Teacher extends People {
	constructor(name) {
		super(name)
	}
	saySomething() {
		alert('I am Teacher')
	}
}

/* OO */
let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()

/* extend */
let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.study()

/* polymorphic */
let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething()
