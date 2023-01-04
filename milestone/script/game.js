function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gamelsOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';
    
    let gameBoardIndex = 0;

    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex]
            // children은 배열로 불러옴
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (players[0].name === '' && players[1].name === '') {
        alert('Please set custom player names for both player');
        return;
    }

    resetGameStatus();

    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    console.log(event.target.tagName);
    if(event.target.tagName != 'LI' || gamelsOver == true) {
        return;
    }

    const selectedField = event.target;
    // 주의 dataset의 값은 문자열이기 때문에 주의 -> 수학 연산을 통ㅇ해 정수로 바꿈
    const selectedColum = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedColum] > 0) {
        alert('Please select an empty field');
        return;
    }

    event.target.textContent = players[activePlayer].Symbol; // player[0]부터 시작
    event.target.classList.add('disabled');

    gameData[selectedRow][selectedColum] = activePlayer + 1
    console.log(gameData);

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
            return gameData[i][0]; // 플레이어의 아이디를 반환
        }
    }

    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[0][i] === gameData[2][i]) {
            return gameData[0][i]; // 플레이어의 아이디를 반환
        }
    }

    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1; // 무승부
    }
    return 0;
}

function endGame(winnerId) {
      gameOverElement.style.display = 'block';

      if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
      } else {
        gameOverElement.firstElementChild. textContent = 'It\'s a draw!'; 
      }

      gamelsOver = true;
}