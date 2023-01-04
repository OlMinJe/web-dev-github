 function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; 
    // html의 데이터 세트 속성을  가져옴 ex. data-nanana
    // data- 부분은 무시되고, 이후 부분은 객체 속성으로 데이터 집합 객체에 추가됨
    // 만약 playerid가 아닌 player-id일 경우 dataset['player-id']로 엑세스 해야됨

    // +를 붙여 문자열을 숫자로 변환해준다.

    playerConfigOverlayElement.style.display = 'block'; 
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
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

    const updataPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updataPlayerDataElement.children[1].textContent = enteredPlayername;

    //if(editedPlayer === 1) {
    //    players[0].name = enteredPlayername;
    //} else {
    //    players[1].name = enteredPlayername;
    //}

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}