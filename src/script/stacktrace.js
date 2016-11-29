// Accessing line number in V8 JavaScript (Chrome & Node.js)
// http://stackoverflow.com/questions/11386492/accessing-line-number-in-v8-javascript-chrome-node-js/11386493
Object.defineProperty(window, '__stack', {
	get: function() {
		var orig = Error.prepareStackTrace;
		Error.prepareStackTrace = function(_, stack) {
			return stack;
		};
		var err = new Error;
		Error.captureStackTrace(err, arguments.callee);
		var stack = err.stack;
		Error.prepareStackTrace = orig;
		return stack;
	}
});

Object.defineProperty(window, '__line', {
	get: function() {
		return __stack[1].getLineNumber();
	}
});

Object.defineProperty(window, '__function', {
    get: function() {
        return __stack[1].getFunctionName();
    }
});

Object.defineProperty(window, '__stackObj', {
    get: function() {
        return __stack;
    }
});

function foo () {
    document.write(__line);
    document.write(__function);
    console.log(__stackObj);
}

foo()
