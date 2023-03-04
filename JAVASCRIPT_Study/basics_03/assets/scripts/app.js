const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector("#add-modal");
//const addMovieModal = document.body.children[1];
const startMovieButton = document.querySelector('header button');
//const startMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
//const backdrop = document.body.firstChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const clostMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovie = (movieId) => {
    let movieIndex = 0

    for (const movie of movies) {
        if(movie.id === movieId) {
            break;
        }
        movieIndex++;
    }

    // 해당 인덱스의 배열을 삭제한 후 앞으로 한 칸 이동
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    //listRoot.removeChild(listRoot.children[movieIndex]);

    clostMovieDeletionModal();
    updateUI();
};

const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    //confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    //confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger'); 

    //confirmDeletionButton.removeEventListener('click', deleteMovie.bind(null, movieId))
    cancelDeletionButton.removeEventListener('click', clostMovieDeletionModal)

    cancelDeletionButton.addEventListener('click', clostMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id ,title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__imgae">
            <img src="${imageUrl}" alt=${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}</p>
        </div>
    `;
    // bind() 실행될 함수에서 받게 될 인자의 값을 미리 구성
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

// togglemoviemodal
const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for(const userInput of userInputs){
        userInput.value = '';
    }
};

const cancelAddMoviekHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    // 입력 값의 시작 및 끝의 불필요한 공백을 제거
    if(titleValue.trim() === '' || imageUrlValue.trim() ==='' || ratingValue.trim() ==='' || 
        +ratingValue < 1 || +ratingValue > 5
    ) { // +나 parseInt를 사용해 숫자로 변환한다.
        alert('입력 값을 다시 확인해주세요.')
    }

    const newMovie = {
        // 무작위 숫자의 고유의 아이디가 될 수 없지만 테스트 이기 떄문에 설정해놓음
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    console.log(movies);

    // 모달을 닫기 위함
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id ,newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    closeMovieModal();
    clostMovieDeletionModal();
    clearMovieInput();
};

startMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler); 
cancelAddMovieButton.addEventListener('click', cancelAddMoviekHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler)