function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    // 이름이 의미하는 걸 실행한다. 이건 요청을 보내는 브라우저의 기본 동작을 방지해서 이 일이 발생하는 것을 예방
    // 양식을 제출하면 화면이 다시 로드됨 -> 자바스크립트가 다시 실행됨 -> 이걸 막기위함(기본값 방지)

    const formData = new FormData(event.target); // 내장 함수 - 객체 인스턴스화
    const enteredPlayername = formData.get('playername').trim(); // input의 name
    // trim은 앞뒤 공백을 잘라준다.

    // 빈문자열은 false로 간주됨
    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return; // 값을 반환하면 여기에서 함수의 동작이 멈춘다 -> 에러나면 멈추는 것을 의도함.
    }


  }