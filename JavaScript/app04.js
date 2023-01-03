//[1]
let paragraphElement = document.querySelector('p');

function changeParagraphText(event) {
    paragraphElement.textContent = 'Clicked!';
    console.log('paragraph clicked!');
    console.log(event);
}

paragraphElement.addEventListener('click', changeParagraphText);

//[2]
let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // 입력 요소의 경우 삽입된 값을 가져오려면 value 속성을 사용한다.
    // value를 찾을 수 있는 두 가지 방법
    // [1] let enteredText = inputElement.value;
    // [2] 여기까지는 입력 받은 값을 입력 받을 때마다 전부 보여준다
    let enteredText = event.target.value;

    // [3] (1,2번과 다름)마지막으로 입력 이벤트 발생으로 추가된 입력만 출력된다.
    // let enteredText = event.data;
    console.log(enteredText);

    // 참고
    console.log(event); 
    // 매개변수를 확인해보면 객체가 자동으로 생성되어 있다는 것을 확인할 수 있다.
    // target 속성은 이벤트가 발생한 html 요소 객체를 잡아주는 역할을 한다.
}

inputElement.addEventListener('input', retrieveUserInput);
// keydown은 key가 놓기 전에 눌렀을 때 발생됨. keyup은 그 이후에 일어남
// input은 입력 필드에 어떤 항목이 삽입될 때마다 이 입력 이벤트가 발생한다.