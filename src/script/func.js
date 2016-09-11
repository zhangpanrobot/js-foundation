// closure
const closure = () => {
	let counter = 1
	function f() {
		counter += 1
		return counter
	}
	return f
}
closure()

// this
const myObject = {
	foo: 'bar',
	func: () => {
		const that = this
		console.log('outer func:  this.foo = ' + this.foo)
		console.log('outer func:  that.foo = ' + that.foo)
		(() => {
			console.log('inner func:  this.foo = ' + this.foo)
			console.log('inner func:  that.foo = ' + that.foo)
		})()
	}
}

myObject.func()
const outFunc = myObject.func
outFunc()

/**
 * Write a simple function (less than 80 characters)
 * that returns a boolean indicating whether or not a string is a palindrome.
 */
function isPalindrome(str) {
	return str.split('').reverse().join('') === str
}

// deepcopy
function deepCopy(obj) {
	const cloneObj = {}
	let key
	for (key in obj) {
	  if (obj && obj.hasOwnProperty(key) && typeof obj === 'object') {
	    cloneObj[key] = deepCopy(obj[key])
	  }
	}
	return cloneObj
}

// bind
function list() {
	return Array.prototype.slice.call(arguments)
}

const plusBase = list.bind(undefined, 11)
const plusRes = plusBase()
const plusRes2 = plusBase(4, 5, 6)

// execute fn specified time
function wrapper(fn, time, cb) {
	return function() {
		if (time-- < 0) return
		fn.apply(this, arguments)
		if (time <= 0) cb && cb.apply(this, arguments)
	}
}

function voidReplace() {
	let undefined = 10
	console.log(undefined)
}
