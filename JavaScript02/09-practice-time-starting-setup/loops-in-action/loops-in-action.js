// 숫자 합하기
const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;
    
    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber += i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);


// 하이라이트 링크
const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchorElement of anchorElements) {
        if(anchorElement.classList == 'highlight') {
            anchorElement.classList.remove('highlight');
        } else {
            anchorElement.classList.add('highlight');
        }
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);


// display user data
const dummyUserData = {
    firstName: 'Lee',
    lastName: 'MinJe',
    age: 24
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for(const key in dummyUserData) { 
        const newUserDataListItemElement = document.createElement('li');
        // 실제로 여러 블록으로 구성되기 때문에 이 코드 줄을 짧고 간결하게 유지하고, 한 줄에 모든 작업이 실행되지 않도록 별도의 상수에 해당 문자열을 저장해준다.
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        // 이건 key로 시작하는 문자열이 됨. -> 속서으이 이름은 모두 대문자로 변환하고 키가 문자열 값을 보유하기 때문에
        // 점 표기법을 사용하여 작업을 실행할 수 있고, toUpperCase를 입력해서 모든 문자열에 실행할 수 있는 메서드로 거기에 있는 모든 문자를 대문자로 변환함.
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

// 통계 주사위 돌리기 예제 -. 입력한 값이 나올 때까지 돌리는
const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
    // 0-1 사이의 부동소수점을 반환하기 때문에 6을 곱해준다.
    // 정수로 받기 위해 Math.floor 메서드를 이용한다.
    // 0부터 5사이의 숫자에 1을 더해준다.
}

function deriveNumberOfDiceRolls() {
    const targerNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targerNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRollsTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRollsTargetNumber) {
        const rolledNumber = rollDice();

        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        //if(rolledNumber == enteredNumber) {
        //    hasRollsTargetNumber = true;
        //}
        diceRollsListElement.append(newRollListItemElement);
        hasRollsTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);