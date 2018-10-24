function testDec(target) {
	target.isDec = isDec
}

@testDec(false)
class Demo {}

alert(Demo.isDec) // false
