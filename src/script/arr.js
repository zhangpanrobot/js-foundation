// distinct
const duplicateArr = [1, 3, 4, 5, 3, 2]
const duplicateArrNested = [[1, 2], 3, 4, 5, 3, [1, 2]]
function uniq(arr) {
	return arr.filter((item, index, currentArr) => {
		if (Array.isArray(item)) {
			// TODO: 
		} else {
			return currentArr.indexOf(item) === index
		}
	})
}

function shallowEqual(obj1, obj2) {
	if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') return false
	if (Array.isArray(obj1) && Array.isArray(obj1)) {
		return obj1.every((item, index) => item === obj2[index])
	}
}


// flat
const nestedArr = [2, [3, [4, [5, 6]]], [7, 8]]

function flatten(arr) {
	if (!arr || !Array.isArray(arr)) return arr
	let resultArr = []
	arr.forEach((item) => {
		if (!item) return
		if (Array.isArray(item)) {
			resultArr = resultArr.concat(flatten(item))
		} else {
			resultArr.push(item)
		}
	})
	return resultArr
}

flatten(nestedArr)
