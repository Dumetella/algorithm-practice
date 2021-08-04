/*
Вам дана статистика по числу запросов в секунду к вашему любимому рекомендательному сервису.

Измерения велись n секунд.

В секунду i поступает qi запросов.

Примените метод скользящего среднего с длиной окна k к этим данным и выведите результат.
Формат ввода

В первой строке передаётся натуральное число n, количество секунд, в течение которых велись измерения. 1 ≤ n ≤ 105

Во второй строке через пробел записаны n целых неотрицательных чисел qi, каждое лежит в диапазоне от 0 до 103.

В третьей строке записано натуральное число k (1 ≤ k ≤ n) —– окно сглаживания.
*/

const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
const input = file.split('\n');
const writeStream = fs.createWriteStream('output.txt');

const t = parseInt(input[0]);
const pList = (input[1]).split(' ').map(x => parseInt(x));
const K = parseInt(input[2]);


function SMA(array, K) {
    let result = new Array();
    for (let begin = 0; begin <= array.length - K; begin++) {
        let end = begin + K;
        let current_sum = 0;
        for (let v = begin; v < end; v++) {
            current_sum += array[v];
        }
        let current_avg = current_sum / K;
        result.push(current_avg);
    }
    result.forEach(value => writeStream.write(`${value} `));
    writeStream.end();
}

SMA(pList, K)
