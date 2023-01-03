const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

console.dir(productNameInputElement); // input의 최대 길이를 알아보기
const maxAllowedChars = productNameInputElement.maxLength; // 60이라는 최대값 보다 더 효율적으로 길이를 가져와서 변수를 선언하기

function updateRemainingCharacters(event) {
    const enteredText =  event.target.value;
    const enteredTExtLength = enteredText.length; // 문자열은 기본적으로 문자의 배열이기 때문에 배열 속성 사용가능하다.
    
    const remainingCharacters = maxAllowedChars - enteredTExtLength;

    remainingCharsElement.textContent = remainingCharacters;
    // 상수로 저장된 객체를 바꾸기 때문에 상수 자체의 값이 바뀌지 않음.

    const spanElement = document.getElementById('remaining-chars');
    if(remainingCharsElement.innerText <= 10){
        // spanElement.className = 'warning'; -> 클래스 추가가 아니라 초기화 후 추가
        spanElement.classList.add('warning'); // 기존 클래스를 유지하면서 또 다른 클래스를 추가할 수 있다.
    } else {
        spanElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('keyup', updateRemainingCharacters);