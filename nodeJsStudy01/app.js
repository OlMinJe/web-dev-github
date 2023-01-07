// 8
const fs = require('js');

// 5-1
const path = require('path');

// 1. express 서버 생성하기
const express = require('express');
const app = express();

// 9. ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 7. 특수 미들웨어 등록(css, js 파일에 대한 요청/ 프로젝트 폴더의 일부 폴더 안에 해당 파일을 전달할 수 있는지 확인하는 모든 수신 요청에 대해 실행)
app.use(express.static('public'));
// 사용자가 접근할 수 있는 폴더 public를 정해준다.
// 이 다음 모든 수신 요청에 대해 이 공용 폴더에서 찾을 수 있는 파일에 대한 요청인지 확인해야 된다고 익스프레스에서 알려줘야함
// 파일이 음답으로 반환 그렇지 않으면 요청이 다른 경로로 전달, 경로가 없으면 실패

// 8. name 속성으로 input에 입력된 데이터 추출하기 위헤 설정
app.use(express.urlencoded({extended: false}));



// 3. 유용한 서버를 사용하려면 도메인 이상의 경로가 필요함, get은 '/'만 해줘도 됨.
app.get('/', function(req, res) {
  //res.send('<h1>Hello World!</h1>');
  
  //const htmlFilePath = path.join(__dirname, 'views', 'index.html');
  //res.send(htmlFilePath);

  // ejs 파일 렌더링
  res.render('index'); // 파일 확장면 생략가능
});

app.get('/recommend', function(req, res) {
  // const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
  //res.send(htmlFilePath);

  res.render('recommend');
});

// 8. post 요청의 경우에는 get 경로가 활성화되지 않기 때문에 사용 가능하다.
app.post('/recommend', function(req, res) {
  const restaurantName = req.body;
  // data 파일 만든후 restaurants.json 파일 추가
  const filePath = path.join(__dirname, 'data', 'restaurants.json'); // 파일 경로

  const fileData = fs.readFileSync(filePath); // 배열로 저장
  const storedRestaurants = JSON.parse(fileData) // 자바스크립트로 변환

  storedRestaurants.push(restaurant); // 새로운 레스토랑의 정보를 푸시하기 위함
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants)); // 자바스크립트 -> 제이슨 형식의 텍스트로 변환

  res.redirect('/confirm');
  // 양식이 다시 제출되는 것을 막기위해 다음 동작을 페이지로 지정한다.
  // 대신 recommed.html 파일의 form action에 /recommend 추가
});

app.get('/confirm', function(req, res) {
  //const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
  //res.send(htmlFilePath);

  res.render('confirm');
});

app.get('/about', function(req, res) {
  //const htmlFilePath = path.join(__dirname, 'views', 'about.html');
  //res.send(htmlFilePath);
  
  res.render('about');
});

// 4. html 파일을 응답으로
app.get('/restaurants', function(req, res) {
  // 5-2
  //const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');

  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  //res.sendFile(htmlFilePath); 
  // sendFile: 프로젝트 폴더를 자동적으로 스캔하지 않음. 5번으로 가서 설정
  res.render('restaurants', { 
    numberOfRestaurants: storedRestaurants.length,
    restaurant: storedRestaurants // 레스트랑 말고 다른 값이면 다시 포멧ㄴ
  });
});


// 2. 특정 포트에서 들어오는 네트워크 트래픽에 대해 들어오는 요청의 수신을 시작할 수 있다.
app.listen(3000);