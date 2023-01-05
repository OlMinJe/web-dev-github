// node.js는 브라우저에서 실행되지 않기 때문에 상호 작용할 수 있는 DOM이 없다.
// node.js를 사용하면 컴퓨터와 서버에서 독립 실행형으로 실행되는 코드를 작성한다.

//const userName = 'Maximilian';
//console.log(userName);
// 터미널에 node app.js를 입력하고 엔터
// 콘솔의 값이 출력됨 -> 기본 시스템 명령 프롬프트 또는 터미널을 통해 이 노드 도구로 자바스크립트 코드를 실행한 결과임

const http = require('http');
// 이 함수를 호출하면 노드js에서 제공하는 유틸리티 메서드와 속성이 가득찬 객체가 반환됨.

function handleRequest(request, response) { // 요청, 응답

    // localhost:3000/currenttime
    // localhost/ 뒤에 무언가의 정보를 표시하고 싶음 -> url에 입력된 응답
    // 요청 함수에서 자동으로 가져오는 이 요청 객체에서 추가 데이터를 추출할 수 있다.
    // url 속성은 localhost:3000이라는 부분을 보유하고 있다.
    if (request.url === '/currenttime') {
        response.statusCode = 200; 
        // statusCode는 브라우저에 요청이 성공했는지 여부를 알리는 간단한 방법임.
    
        // 다시 응답을 사용해서 응답을 보내야됨.
        response.end('<h1>' + new Date().toISOString() + '</h1>');
        // 생성된 날짜 객체를 문자열로 변환한다.
    } else if (request.url === '/') {
        response.statusCode = 200;
        response.end('<h1>Hello World!</h1>');
    }
}

const server = http.createServer(handleRequest); 
// 들어오는 요청을 처리하고 응답을 다시 보내는 방법을 알고 있는 서버를 먼저 생성한다.

server.listen(3000);
// 포트 번호에서 수신 대기를 시작한다.