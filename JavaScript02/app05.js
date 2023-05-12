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

    if(remainingCharacters === 0){
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if(remainingCharacters <= 10) {
        // remainingCharsElement.className = 'warning'; -> 클래스 추가가 아니라 초기화 후 추가
        remainingCharsElement.classList.add('warning'); // 기존 클래스를 유지하면서 또 다른 클래스를 추가할 수 있다.
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    } else { 
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('keyup', updateRemainingCharacters);


// [if문] 자바스크립트에서 빈 문자열 또는 숫자 0은 거짓으로 처리된다. 그 외의 경우는 참으로 처리하기 위해 노력함.