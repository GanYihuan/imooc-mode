/* for of: 遍历 iterator */
/* for in: 遍历 对象 */
// function each(data) {
// 	// 生成遍历器
// 	let iterator = data[Symbol.iterator]()
// 	// console.log(iterator.next())  // 有数据时返回 {value: 1, done: false}
// 	// console.log(iterator.next())
// 	// console.log(iterator.next())
// 	// console.log(iterator.next())
// 	// console.log(iterator.next())  // 没有数据时返回 {value: undefined, done: true}
// 	let item = { done: false }
// 	while (!item.done) {
// 		item = iterator.next()
// 		if (!item.done) {
// 			console.log(item.value)
// 		}
// 	}
// }

/* for of: 简写上面 */
let arr = [1, 2, 3, 4]
let nodeList = document.getElementsByTagName('p')
let m = new Map()

m.set('a', 100)
m.set('b', 200)
function each(data) {
	for (let item of data) {
		console.log(item)
	}
}

each(arr)
each(nodeList)
each(m)
