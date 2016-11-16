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


// 给本地存json做多项计数，给定localStorage key, 给json添加key,并累加，当达到某个值时不再执行
/**
 * localStorageKey json名
 * jsonKey, 要计数的key
 * limit, 计数限制
 */
function getLocalJSON () {
	if (!window.localStorage) return false;
	var localStr = localStorage.getItem(localStorageKey);
	if (typeof localStr === 'string' && !localStr.length || localStr === null) return 0;
	if (localStr && localStr.length && localStr[0] === '{') {
		return JSON.parse(localStr);
	}
	return false;
}

function setLocalPMS (localStorageKey, JSONKey, limit) {
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

// from winter
function currying(func) {
    return function()
    {
        if(arguments.length<func.length)
        {
            var args=arguments;
            var retarg=new Array(func.length-arguments.length);
            for(var i=0;i<retarg.length;i++)retarg[i]="_"+i;
            eval("var ret=function("+retarg+"){return args.callee.apply(this,Array.prototype.slice.call(args).concat(Array.prototype.slice.call(arguments)));}");
            return currying(ret);
        }
        else return func.apply(this,arguments);
    }
}
