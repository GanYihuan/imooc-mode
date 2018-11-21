const readline = require('readline')
const fs = require('fs')

let rl = readline.createInterface({
	input: fs.createReadStream('./data/file1.txt')
})
let lineNum = 0

rl.on('line', function(line) {
	lineNum++
})
rl.on('close', function() {
	console.log('lineNum', lineNum)
})
