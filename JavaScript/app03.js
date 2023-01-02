// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

// h1에 접근하는 두 가지 방법
let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];

console.dir(h1Element);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

// 부모 요소로 접근하기
console.dir(h1Element.parentElement);

//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)

// 형제 요소 = sibling or previousSibling -> 모든 형제 요소를 의미 \n = text도 포함
//console.dir(h1Element.previousSibling);
// previousElementSibling는 이전 형제 요소를 의미한다.
// nextSibling은 다음 형제 요소
console.dir(h1Element.nextElementSibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

h1Element = document.getElementById('first-title');
console.dir(h1Element);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
let highlightedParagraph = document.querySelector('.highlighted-paragraph');
console.dir(highlightedParagraph);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
highlightedParagraph.textContent = 'This was change by Hi';