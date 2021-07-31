function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function testArray(num) {
    let output = [];
    for (let i = 0; i < num; i++) {
        output.push(Math.floor(Math.random() * 100));
    }
    return output
}

bubbleSort(testArray(40))
