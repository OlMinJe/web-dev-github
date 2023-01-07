// node.js는 브라우저에서 실행되지 않기 때문에 상호 작용할 수 있는 DOM이 없다.
// node.js를 사용하면 컴퓨터와 서버에서 독립 실행형으로 실행되는 코드를 작성한다.

//const userName = 'Maximilian';
//console.log(userName);
// 터미널에 node app.js를 입력하고 엔터
// 콘솔의 값이 출력됨 -> 기본 시스템 명령 프롬프트 또는 터미널을 통해 이 노드 도구로 자바스크립트 코드를 실행한 결과임


const fs = require('fs');
// [4] fs: 파일 시템 패키지 -> 익스프레스 요청 전에 먼저 요청함 
const path = require('path');
// 경로 패키지 사용으로 완전한 경로를 쉽게 구성

//const http = require('http');
// 이 함수를 호출하면 노드js에서 제공하는 유틸리티 메서드와 속성이 가득찬 객체가 반환됨.
// [2] 익스프레스 설치 했으니 다시 구축
const express = require('express');
// [2] 익스프레스 패키지에서 내장된 HTTP 패키지의 경우 객체가 아니라 함수임 -> 패키지는 노출할 대상을 간단히 결정할 수 있다.
// 함수니까..
const app = express();

// [3] 여기 여기!
app.use(express.urlencoded({extended: false}));
// 요청 종류 신경 안 씀.
// 미들웨어 함수가 필요하다. (미들웨어란? 여러[또는 모든] 들어오는 요청에 대해 실행하는 요청 처리기이다.)
// 들어오는 모든 요청 데이터를 살펴봄 -> 구문 분석 후 자바스크립트로 변환해줌.

// (1) 필터링 하려는 경로 (2) 요청에 대해 실행되어야 하는 함수
app.get('/currenttime', function(request, response) { // req, res, next = 함수 내에서 실행할 수 있는 함수
    response.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', function(req, res) {
    //res.send('<h1>Hello World!</h1>');
    res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
})

app.post('/store-user', function(req, res) {
    const userName = req.body.username;
    // body: 요청이 객체에 노출되어 요청에 첨부된 데이터에 액세스할 수 있고, post 요청에 해당 데이터가 있는 경우엔 점 표기법을 사용하여 다른 필드에 엑세스할 수 있다.
    // 기본적으로 자바스크립트 객체임.
    
    // console.log(userName);
    // [4] 파일이 기록되어야 하는 파일의 위치를 파일 시스템 패키지에 알려주고 데이터를 저장.
    const filePath = path.join(__dirname, 'data', 'users.json') // __driname: 절대 경로를 보유하는 내장된 변수 또는 상수
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData); 
    // json 형식을 따르는 텍스트 내용을 실제 자바스크립트 객체 또는 배열로 변환되도록
    existingUsers.push(userName);
    fs.writeFileSync(filePath, JSON.stringify(existingUsers)); // stringify = 자바스크립트 값을 넣으면 원시 텍스트로 변환해줌

    res.send('<h1>userName</h1>');
    // 얘는 자바스크립트 코드로 변환 안 하기 때문에 [3] 가서 해줘야함.
});

// [5] 저장된 데이터를 화면에 출력하기 위한 과정(전송된 get 요청을 처리함)
app.get('/users', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'users.json') // __driname: 절대 경로를 보유하는 내장된 변수 또는 상수
    
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData); 

    let responseData = '<ul>';
    for (const user of existingUsers) {
        responseData += '<li>' + user + '</li>';
    }
    responseData += '</ul>';

    res.send(responseData);
});


// 서버 생성 -> 밑에있는 createServer 보다 간편하다
app.listen(3000);

// ---------------------------------------------------------------------------
/*
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
*/