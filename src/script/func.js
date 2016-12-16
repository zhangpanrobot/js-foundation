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

function toArray (obj) {
	return Array.prototype.slice.call(obj, 0);
}

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


// 给本地存json做多项计数，给定localStorage key, 给json添加key,并累加，当达到某个值时不再执行
/**
 * localStorageKey json名
 * jsonKey, 要计数的key
 * limit, 计数限制
 */
function getLocalJSON() {
	if (!window.localStorage) return false;
	var localStr = localStorage.getItem(localStorageKey);
	if (typeof localStr === 'string' && !localStr.length || localStr === null) return 0;
	if (localStr && localStr.length && localStr[0] === '{') {
		return JSON.parse(localStr);
	}
	return false;
}

function setLocalPMS(localStorageKey, JSONKey, limit) {
	var localPMS = getLocalJSON(localStorageKey);
	// 执行， 不计数
	if (localPMS === false) return 0;
	if (localPMS === 0) {
		// 初始化
		localPMS = {};
		localPMS[key] = 1;
		localStorage.setItem(localStorageKey, JSON.stringify(localPMS));
	}
	if (localPMS && +localPMS[JSONKey] < limit) {
		localPMS[JSONKey] = +localPMS[JSONKey] + 1;
		localStorage.setItem(localStorageKey, JSON.stringify(localPMS));
	} else if (localPMS && !localPMS[JSONKey]) {
		localPMS[JSONKey] = 1;
		localStorage.setItem(localStorageKey, JSON.stringify(localPMS));
	} else {
		// 不再执行
		return 2;
	}
	// 执行并计数
	return 1;
}

// http://bbs.51js.com/thread-74706-1-1.html
// from winter
function currying(func) {
	return function() {
		if (arguments.length < func.length) {
			var args = arguments;
			var retarg = new Array(func.length - arguments.length);
			for (var i = 0; i < retarg.length; i++) retarg[i] = "_" + i;
			eval("var ret=function(" + retarg + "){return args.callee.apply(this,Array.prototype.slice.call(args).concat(Array.prototype.slice.call(arguments)));}");
			return currying(ret);
		} else return func.apply(this, arguments);
	}
}

// from 月影
function currying(func) {
	return function() {
		var args = Array.prototype.slice.call(arguments, 0);
		if (args.length < func.length) {
			return function() {
				var _args = args.concat(Array.prototype.slice.call(arguments, 0));
				return currying(func).apply(this, _args);
			}
		} else {
			return func.apply(this, args);
		}
	}
}

function f(a ,b ,c) {
	console.log([a, b, c]);
}
// callcc from 'http://stackoverflow.com/questions/14019341/whats-the-difference-between-a-continuation-and-a-callback'
function callcc(f) {
	var cc = function(x) {
		cc = x;
	};
	f(cc);
	return cc;
}

// call these three function, tell when it's called
function testA() {
	return 1;
}

function testB() {
	return 2;
}

function testC() {
	return 3;
}
/**
 * tell that which function is called and when it is called success
 * consider async function
 */
function callSome(f1, f2) {
	return function () {
		var args = toArray(arguments);
		f.apply(this, args);
		console.log(f.name);
	}
}

var oddList = [1, 3, 5, 7, 9];

var oddList = []
for(var i = 1; i <= 10; i++) {
    if (i % 2) oddList.push(i);
}

function smaller (x, y) {
    return x < y ? x : y;
}

function toArray (obj) {
	return Array.prototype.slice.call(obj, 0);
}

function reduce(fn){
    return function(...args){
        return args.reduce(fn.bind(this));
    }
}

var smallerBind = reduce(smaller);

// add tow bigger item
function biggerTwoSum (x, y, z) {
    return x + y + z - smallerBind(x, y, z)
}
