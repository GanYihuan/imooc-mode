/* Decorator pattern */
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
// draw circle
circle.draw()

let dec = new Decorator()
// draw circle
// draw red
dec.draw()
