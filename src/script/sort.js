// bubble sort
function bubbleSort(arr, compare) {
	let swapped
	let arrLeng = arr.length
	do {
		swapped = false
		for(let i = 0; i < arrLeng - 1; i++) {
			let buffer = arr[i]
			if (arr[i] > arr[i + 1]) {
				arr[i] = arr[i + 1]
				arr[i + 1] = buffer
				swapped = true
			}
			console.log('bubble')
		}
	} while (swapped)
	return arr
}

// bucket sort
function bucketSort(arr, compare) {

}

// insertion sort
function insertionSort(arr, compare) {
	let current
	let j
	for (var i = 1; i < arr.length; i += 1) {
		current = arr[i]
		j = i - 1
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j]
			j -= 1
			console.log('insert1')
		}
		arr[j + 1] = current
		console.log('insert2')
	}
	return arr
}

// merge sort
function mergeSort(arr, compare) {

}
