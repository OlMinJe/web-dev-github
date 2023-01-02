/*
'window'는 전역 객체이다.
- 활성화된 브라우저 윈도우와 관련된 많은 유틸리티 정보와 기능이 여기에 저장되며,
- 브라우저 탭을 의미하기도 한다.
- 그래서 현재 열고 있는 웹사이트 브라우저 탭 정보에 엑세스 해야함 
- 그렇지 않으면 다른 탭에 저장된 다른 웹사이트에서 정보를 빼 올 수 있기 떄문이다.
- 이런걸 해주는 객체임.
*/

/* window 객체 살펴보기 */
//console.log(window);
// 안에 내장된 메소드는 f라는 함수 기호로 표시되어 있다.
// window가 없어도 안에 있는 모든 메소드와 속성을 엑세스 할 수 있다. 
 
/* 이 두 개는 같은 의미임 */
//alert();
//window.alert(); 

/* 
< window 객체의 문서 속성(window.doucument) >
- 다른 객체의 안에 있는 객체를 의미한다.(=중첩객체)
- 이 문서 객체는 저장된 웹사이트의 콘텐츠와 관련된 함수, 정보가 포함되어 있다.
*/


/* 
<DOM - document object model>
- 작성된 html 코드를 분석해서 데이터와 브라우저의 내부를 표현하는 것을 설명해주는 역할을 한다.
- html 코드의 자바스크립트 표현과 html 구조 
- html 코드의 특정 요소에 접근하기 위해서는 문서 객체를 사용해야 한다.
*/

//window.document에서 window 생략 가능
console.log(document); 
// -> 랜더링 된 html 코드 전체를 나타내준다.
console.dir(document); 
// -> 문서에 저장된 진짜 객체를 출력하는 방법

//a 태그에 스크립트로 링크 추가하기 (p태그 안에 a태그가 있는 구조)
//document.body.children[1].children[0].href = 'https://naver.com';
//하지만 app02.js:40 Uncaught TypeError: Cannot read properties of null (reading 'children') 오류가 뜸
//이유: 스크립트 코드가 html 코드가 분석되기 전에 실행되기 때문이다.
//해결1: 스크립트 링크를 body 태그 맨 뒤에 위치한다.
//해결2: 스크립트 링크에 'defer'를 추가해준다. -> 전체 문서가 분석이 될 때까지 스크립트 실행이 지연되어야 한다고 브라우저에게 알려줌

//안 좋은 방식이기 때문에 id 또는 class 이름(쿼리 메서드)등으로 찾는다. -> dom과 html의 정확한 구조를 알 필요 없기 때문에 편하다.


/*
콘솔창에
1. document.body.firstChild => #text
- 브라우저에 의해 저장된 html 문서에 있는 텍스트도 있기 때문이다. = text 유형이다.
- html 코드에 있는 의미 없는 공백 = data: "\n" 이런식임

2. document.body.firstElementChild => ex. <h1>title</h1>

3. document.body.childNodes => NodeList 
- 노드는 기본저긍로 텍스트 또는 html 요소이기 때문에 전체 컨텐츠나 html 컨텐츠가 이 노드로 해석이 될 수 있다.
- document.body.childNodes[index]
*/

//쿼리 메서드
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://naver.com';

document.querySelector('p a');
anchorElement.href = 'https://google.com';
//querySelector는 단일 요소를 반환, querySelectorAll은 일치하는 모든 요소를 반환 -> 배열 형태로 반환한다.

/*
자바 스크립트를 통해 HTML 요소를 쿼리/선택할 때 일반적으로 사용되는 몇 가지 기본 제공 메서드가 있습니다.
● document.getElementById('some-id'): ID로 HTML 요소 선택(ID는 고유해야 하므로 하나의 요소만 선택)
● document.querySelector('<some-css-selector>'): 제공된 CSS 선택자에 의해 충족/선택된 첫 번째 일치(!) HTML 요소를 선택합니다. CSS 선택자는 기본적으로 모든 종류의 유효한 CSS 선택자(예: ID 선택자, 태그 유형 선택자, 클래스 선택자, 결합 선택자 등)일 수 있습니다.
● document.querySelectorAll('<some-css-selector>'): 제공된 CSS 선택자에 의해 충족/선택된 일치하는 모든 HTML 요소를 선택합니다.

덜 사용되는 선택 방법도 몇 가지 있습니다.
● document.getElementsByClassName('some-css-class'): 제공된 CSS 클래스가 있는 모든 HTML 요소를 선택합니다.
● document.getElementsByTagName('tag'): 제공된 HTML 태그 유형의 모든 HTML 요소를 선택합니다.
*/