function greetUser(greetingPrefix, userName = 'user') {
    //console.log(greetingPrefix + ' ' +userName + '');
    console.log('${greetingPrefix} ${userName}!');
}

greetUser('Hi', 'Max');
greetUser('Hello');

// undefined 값을 받지 않은 매개변수

function sumUp(numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUp([1, 5, 10, 11]));

// NaN: 숫자가 아니다

function sumUpes(...numbers) { 
    // ...은 배열을 배열인지 확인하지 않음 -> 밑에처럼 ...을 사용하여 보내긴

    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUpes(1, 5, 10, 11));

const inputNumbers = [1, 5, 10, 11, 20];
console.log(sumUpes(...inputNumbers)); // 배열을 여러 개의 개별 값으로 분산시킴 