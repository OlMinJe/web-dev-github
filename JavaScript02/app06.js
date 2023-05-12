// [1] for of
const users = ['apple', 'banana', 'melon'];

for(const user of users) {
    console.log(user);
}

// [2] for in
const loggedInUser = {
    name: 'MinJe',
    age: 32,
    isAdmin: true
};

for(const propertyName in loggedInUser) {
    // in을 통해 반복하고자 하는 객체를 지정한다.
    console.log(propertyName); // 객체 안에 있는 속서의 값이 출력됨
    
    //console.log(loggedInUser['name']); // loggedInUser.name과 같다. - 비효율적
    console.log(loggedInUser[propertyName]); // 효율적 -> 값을 찾을 때는 이 방법을 사용할 것
    // loggedInUser.propertyName 의 점 표기점은 작동하지 않음 -> loggedInUser.propertyName가 있기 때문

}

