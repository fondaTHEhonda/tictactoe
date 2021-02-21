//Displaying HTML
const displayController = (() => {
    const gameContainer = document.getElementById("game-container");

    for(let i = 0; i < 9; i++) {
        let newDiv = document.createElement('div');
        gameContainer.appendChild(newDiv);
        newDiv.classList.add('game-cell');
    }
})();

//Gameboard module
const gameBoard = (() => {
    const board = [];

    const controlGame = function(e) {
        if(e.target.classList.contains("game-cell")) {
            if(e.target.textContent === "")
            e.target.textContent = prompt("X or O?");
            board.push(e.target.textContent);
            console.log(board);
        }
    };
    return {controlGame};
})();

window.addEventListener('click', gameBoard.controlGame)


//Player Factory
const Player = (name, mark, turn) => {
    const getName = () => name;
    const getMark = () => mark
    let isTurn = () => turn;

    const changeTurn = () => {
        
    }

    return {name, mark, turn}
};

const player1 = Player("Conor", "X", true);
const player2 = Player("Leah", "O", false);


