/* decorator pattern */
/* 为对象添加新功能，不改变原有的结构和功能 */

class Circle {
	draw() {
		console.log('draw circle')
	}
}

class Decorator {
	constructor(circle) {
		this.circle = circle
	}
	draw() {
		this.circle.draw()
		this.setRed(circle)
	}
	setRed(circle) {
		console.log('draw red')
	}
}

let circle = new Circle()
circle.draw() // draw circle

let dec = new Decorator()
dec.draw() // draw circle, draw red
