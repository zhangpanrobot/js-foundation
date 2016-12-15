// 三种flatten写法
var nestedArr = [1, 2 , [3], [4, [5, [6]]]]

function flatten(arr) {
    if (!arr || !Array.isArray(arr)) return arr
    let ret = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            ret = ret.concat(flatten(arr[i]));
        } else {
            ret.push(arr[i]);
        }
    }
    return ret;
}

function flatten (arr) {
    return arr.reduce((a, b) => {
        if (Array.isArray(b)) {
            return a.concat(flatten(b))
        }
        return a.concat(b)
    }, [])
}

const flatten = (arr) => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

1 * 2 *3 ... 10
