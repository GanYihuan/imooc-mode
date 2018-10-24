// 明星
let star = {
	name: '范冰冰',
	age: 30,
	phone: '明星: 13910733521'
}

// 经纪人
let agent = new Proxy(star, {
	get: function(target, key) {
		if (key === 'phone') {
			// 返回经纪人自己的手机号
			return '经纪人: 18611112222'
		}
		if (key === 'price') {
			// 明星不报价，经纪人报价
			return 120000
		}
		return target[key]
	},
	set: function(target, key, val) {
		if (key === 'customPrice') {
			if (val < 100000) {
				// 最低 10w
				throw new Error('价格太低')
			} else {
				target[key] = val
				return true
			}
		}
	}
})

// 主办方
console.log(agent.name) // 范冰冰
console.log(agent.age) // 30
console.log(agent.phone) // 经纪人: 18611112222
console.log(agent.price) // 120000

// agent.customPrice = 150000
/* agent.customPrice 150000 */
agent.customPrice = 90000
/* agent.customPrice 90000  报错：价格太低 */
console.log('agent customPrice', agent.customPrice)
