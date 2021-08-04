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

const pList = (input[1]).split(' ').map(x => parseInt(x));
const K = parseInt(input[2]);

//Такой наивный алгоритм имеет сложность O(n*k). Он не проходит последние тесты из-за своей медлительности.
function naive_SMA(array, K) {
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
    return result;
}

//Если убрать внутренний цикл, то скорость выполнения увеличится в K раз.
function improved_SMA(array, K) {
    let result = new Array();
    let current_sum = 0;
    for (let i = 0; i < K; i++) {
        current_sum += array[i];
    }
    result.push(current_sum / K)
    for (let j = 0; j < array.length - K; j++) {
        current_sum -= array[j];
        current_sum += array[j + K];
        current_avg = current_sum / K;
        result.push(current_sum / K);
    }
    return result;
}

const writeStream = fs.createWriteStream('output.txt');
improved_SMA(pList, K).forEach(value => writeStream.write(`${value} `));
writeStream.end();
