import { renderPageFirstLevelDifficulty } from "./page-game-difficult.js";
export function renderSelectionLevelGame() {


    const appHtml = `
    <div class="content center">
    <div class="content__game">
        <h1 class="content__game_h1">Выбери сложность</h1>
            <div class="content__box">  
                <div class="content__game_game1"> 
                    <input type="radio" id="radio1" name="difficulty" value="easy" checked>
                    <label for="radio1">1</label>
                    
                    <input type="radio" id="radio2" name="difficulty" value="medium">
                    <label for="radio2">2</label>
                    
                    <input type="radio" id="radio3" name="difficulty" value="hard">
                    <label for="radio3">3</label>
                </div> 
            </div>
        <button id="start-button" class="button__level button__level_text ">Старт</button>
    </div>
    </div>
    `
    app.innerHTML = appHtml;

    const gameData = {
        difficulty: 'easy', // по умолчанию выбран легкий уровень сложности
        numCards: 6 // по умолчанию 6 карточек
    };


    const difficultyInputs = document.querySelectorAll('.content__game_game1 input[name="difficulty"]');

    const startButton = document.querySelector('#start-button');


    function updateNumCards() {
        switch (gameData.difficulty) {
            case 'easy':
                gameData.numCards = 6;
                break;
            case 'medium':
                gameData.numCards = 8;
                break;
            case 'hard':
                gameData.numCards = 10;
                break;
        }
    };

    difficultyInputs.forEach(input => {
        input.addEventListener('change', () => {
            gameData.difficulty = input.value;
            updateNumCards();
        });
    });
    
    startButton.addEventListener('click', () => {
        startGame(gameData.difficulty);
    });

    function startGame(difficulty) {
        //     // shuffle();// перемешиваем все карточки
        //     // let selectedCards = cards.slice(0, gameData.numCards);
        //     // selectedCards.forEach(card => {
        //     //   card.classList.remove('flipped');
        //     //   card.addEventListener('click', flipCard);};
        console.log(`Запуск игры с уровнем сложности "${difficulty}"`);
        renderPageFirstLevelDifficulty(difficulty);

    };
}