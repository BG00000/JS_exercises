
function fibonacci(fibLength, fibItem) {
    let arr = [1, 1]

    for (i = 1; i < fibLength - 1; i++) {
        arr.push(arr[i] + arr[i - 1])
    }

    let item = arr[fibItem]

    return item
}

console.log(fibonacci(1000, 89))