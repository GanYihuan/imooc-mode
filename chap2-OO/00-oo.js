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
}

let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()

let wang = new People('wang', 21)
wang.eat()
wang.speak()

let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.study()
