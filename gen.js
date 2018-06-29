var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);
function* genFile() {
	var r1 = yield readFile('./package.json');
	console.log(r1.toString());
	var r2 = yield readFile('/etc/shells');
	console.log(r2.toString());
}



// function* gen(x) {
// 	var y = yield x + 2;
// 	return y;
// }

// var g = gen(1);
// console.log(g.next());
// console.log(g.next(2));
// var g = genFile();

// g.next().value((err, data) => {
// 	if(err) throw err;
// 	var r2 = g.next(data);
// 	r2.value((err, data) => {
// 		if (err) throw err;
// 		g.next(data);
// 	})

// })

function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(reject('jack'), ms);
	})
}

async function asyncPrint(value, ms){
	var a = await timeout(ms).catch(() => {});
	console.log(a);
	console.log('hello world');
}

asyncPrint('hello', 1000);
console.log('sdsd');



























