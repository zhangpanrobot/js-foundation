function toArray (obj) {
	return Array.prototype.slice.call(obj, 0);
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
		var args = toArray(arguments);
		if (args.length < func.length) {
			return function() {
				var _args = args.concat(toArray(arguments));
				return currying(func).apply(this, _args);
			}
		} else {
			return func.apply(this, args);
		}
	}
}


function toArray (x, y, z) {
	console.log([x, y, z])
}

// 柯里化优点，1.保证返回值的纯度，2.局部调用

// https://www.h5jun.com/post/functional-how-far
// 代码示例1
function add(x, y){
    return x + y;
}

function mul(x, y){
    return x * y;
}

function concat(arr1, arr2){
    return arr1.concat(arr2);
}

console.log(add(1, add(2, 3)),     //6
    mul(1, mul(2, mul(3, 4))),        //24
    concat([1, 2], concat([3, 4], [5, 6]))); //[1,2,3,4,5,6]

//


// 示例代码2
function add(...args){
    return args.reduce((x, y) => x + y);
}

function mul(...args){
    return args.reduce((x, y) => x * y);
}

function concat(...args){
    return args.reduce((arr1, arr2) => arr1.concat(arr2));
}

console.log(add(1, 2, 3),     //6
    mul(1, 2, 3, 4),        //24
    concat([1, 2], [3, 4], [5, 6])); //[1,2,3,4,5,6]

// 缺点



// 示例代码3
function reduce(fn, ...args){
    return args.reduce(fn);
}

function add(x, y){
    return x + y;
}

function mul(x, y){
    return x * y;
}

function concat(arr1, arr2){
    return arr1.concat(arr2);
}

console.log(reduce(add, 1, 2, 3),     //6
    reduce(mul, 1, 2, 3, 4),        //24
    reduce(concat, [1, 2], [3, 4], [5, 6])); //[1,2,3,4,5,6]

// 缺点



// 示例代码4
function reduce(fn, ...args){
    return args.reduce(fn);
}

function add(x, y){
    return x + y;
}

function mul(x, y){
    return x * y;
}

function concat(arr1, arr2){
    return arr1.concat(arr2);
}

add = reduce.bind(null, add);
mul = reduce.bind(null, mul);
concat = reduce.bind(null, concat);

console.log(add(1, 2, 3),     //6
    mul(1, 2, 3, 4),        //24
    concat([1, 2], [3, 4], [5, 6])); //[1,2,3,4,5,6]

// 缺点


// 示例代码5
// pointfree, currying
function reduce(fn){
    return function(...args){
        return args.reduce(fn.bind(this));
    }
}

function add(x, y){
    return x + y;
}

function mul(x, y){
    return x * y;
}

function concat(arr1, arr2){
    return arr1.concat(arr2);
}

add = reduce(add);
mul = reduce(mul);
concat = reduce(concat);

console.log(add(1, 2, 3),     //6
    mul(1, 2, 3, 4),        //24
    concat([1, 2], [3, 4], [5, 6])); //[1,2,3,4,5,6]



// 过程抽象

// throttle

// debounce


function nguiDialogError(msg) {
    typeof msg === 'string' ? nguiDialog.error(msg) : nguiDialog.error(0)
}

function ebAjax(ajax, callback) {
    return ajax.promise.then(function (res) {
        if (res.status) return nguiDialogError(res.msg);
        callback(res);
    }, function () {
        nguiDialogError(0);
    })
}

function (ajax, callback) {
    return ajax.promise.then(function (res) {
        if (res.status) return nguiDialogError(res.msg);
        callback(res);
    }, nguiDialogError)
}
