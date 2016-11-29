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

document.write(__line);
