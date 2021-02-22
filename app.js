//Displaying HTML
const displayController = (() => {
    const gameContainer = document.getElementById("game-container");
    let newDiv;

    for(let i = 0; i < 9; i++) {
        newDiv = document.createElement('div');
        gameContainer.appendChild(newDiv);
        newDiv.classList.add('game-cell');
        newDiv.id = i;
    }

    return {gameContainer, newDiv}
})();

//Gameboard module
const gameBoard = (() => {
    const board = [];

    const controlGame = function(e) {
        if(e.target.classList.contains("game-cell")) {
            if(e.target.textContent === "")
                if(player1.turn === true) {
                    e.target.textContent = "X";
                    board.push(e.target.textContent);
                    player1.turn = false;
                    player2.turn = true;
                } else if(player2.turn === true) {
                    e.target.textContent = "O";
                    board.push(e.target.textContent);
                    player2.turn = false;
                    player1.turn = true;
                }
        }
    };

    const checkWinner = function(boardId) {
        const winningBoards = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];

        
    }

    return {controlGame};
})();

window.addEventListener('click', gameBoard.controlGame)


//Player Factory
const Player = (name, mark, turn) => {
    const getName = () => name;
    const getMark = () => mark
    let isTurn = () => turn;

    return {name, mark, turn}
};

const player1 = Player("Conor", "X", true);
const player2 = Player("Leah", "O", false);


