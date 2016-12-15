var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};


var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

var head = function(x) { return x[0]; };
var reverse = reduce(function(acc, x){ return [x].concat(acc); }, []);
var last = compose(head, reverse);


// 优点：简单函数的组合， 拼积木一样的组成各处多功能函数
