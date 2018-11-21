/* abserver pattern */
/* 发布 & 订阅， 一对多 */

let fs = require('fs')
let readStream = fs.createReadStream('./data/file1.txt') // 读取文件的 Stream
let length = 0

readStream.on('data', function(chunk) {
	length += chunk.toString().length
})
readStream.on('end', function() {
	console.log(length)
})
