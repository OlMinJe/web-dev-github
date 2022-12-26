// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4); // 나눈 값
console.log(10 % 4); // 나눈 값에서 남아있는 나머지

console.log((10 + 3 - 5) * 10);

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result++; // result = result + 1
result--; // result = result - 1

result += 5;
result -= 5;
result /= 5;
result *= 5;
console.log(result);

console.log('LEE' + ' ' + 'MINJE')
// 문자열을 숫자처럼 계산하게 된다면 "Not a Number"(=NaN)이라는 결과를 얻게됨 -> 자바스크립트에만 있는 특수 값

let userName = 'LEEMINJE';
console.log(userName.length);
// 모든 문자열은 자바스크립트에 의해 자동으로 객체에 감싸진다.
// -> 문자열이 특정 속성들에 접근할 수 있도록

let hobbies = ['스포츠','요리','독서'];
console.log(hobbies.length);
// 문자열은 문자의 모음, 배열은 종류에 제한 없는 값의 모음이기 때문에 lengh