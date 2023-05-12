/*
변수명 규칙(camelCase)
1. 특수문자는 $ _ 를 제외하고 불가능
2. 두 개의 연속적인 단어를 연결하는 경우에는 두 번째 단어의 첫 글자는 대문자로 시작한다. 
*/
let greetingText = "Hi, I\'m is MinJe!"; // 이스케이프로 작은 따옴표를 표현했기 때문에 큰따옴표로 감싸주기
let age = 32;
/* 배열 */
let hobbies = ['스포츠','요리','독서'];
//alert(hobbies[0]);

/* 객체에 사용되는 레이블 값 조합을 속성(property)라고 한다. */
let job = { 
    title: 'Developer', 
    place: 'New York', 
    salary: 50000
};
/*
let jobTitle = 'Developer';
let jobPlace = 'New York';
let jobPSalary = 50000;
alert(job.place);
*/

let adultYears;
function calculateAdultYears(userAge) {
    //adultYears = age - 18;
    return age - 18;
} // 함수 재사용 - on demand

//calculateAdultYears()
// return을 추가해줌으로서 아래와같이 변수에 값을 할당할 수 있다.
adultYears = calculateAdultYears(age);
console.log(adultYears);


let person = {
    name: 'MinJe',  // Property
    greet() {       // Method
        console.log('Hello');
    }
};

person.greet();