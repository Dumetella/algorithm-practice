/*
Рита и Гоша играют в игру. У Риты есть n фишек, на каждой из которых написано количество очков. Сначала Гоша называет число k, затем Рита должна выбрать две фишки, сумма очков на которых равна заданному числу.

Рите надоело искать фишки самой, и она решила применить свои навыки программирования для решения этой задачи. Помогите ей написать программу для поиска нужных фишек.
Формат ввода

В первой строке записано количество фишек n, 2 ≤ n ≤ 104.

Во второй строке записано n целых чисел —– очки на фишках Риты в диапазоне от -105 до 105.

В третьей строке —– загаданное Гошей целое число k, -105 ≤ k ≤ 105.
Формат вывода

Нужно вывести два числа —– очки на двух фишках, в сумме дающие k.

Если таких пар несколько, то можно вывести любую из них.

Если таких пар не существует, то вывести «None».
*/

const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
const input = file.split('\n');

const list = (input[1]).split(' ').map(x => parseInt(x));
const n = parseInt(input[2]);

// O(n^2)/2.
function naive_twoSum(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                return [arr[i], arr[j]];
            }
        }
    }
    return ["None"];
}
//
function doubleCounter_twoSum(arr, n) {
    let newArr = arr.slice().sort((a, b) => a - b)
    let left = 0;
    let right = newArr.length - 1;
    while (left < right) {
        let currentSum = newArr[left] + newArr[right];
        if (currentSum === n) {
            return [newArr[left], newArr[right]];
        }
        if (currentSum < n) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return ["None"];
}

function set_twoSum(arr, n) {
    let set = new Set();
    let y;
    for (let i of arr) {
        y = n - i;
        if (set.has(y)) {
            return [i, y];
        } else {
            set.add(i);
        }
    }
    return ["None"];
}


console.log(...set_twoSum(list, n));
