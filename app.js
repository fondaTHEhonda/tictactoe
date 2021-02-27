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
    const player1Moves = [];
    const player2Moves = [];
    const winningBoards = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]; 

    const checkWinner = function (e) {
        for(let i = 0; i < winningBoards.length; i++) {
            for(let j = 0; j < winningBoards[i].length; j++) {
                if(winningBoards[i][j] === parseInt(e.target.id)) {
                    winningBoards[i][j] = e.target.textContent
                    console.log(winningBoards);
                        if(winningBoards[i][0] === "X" && winningBoards[i][1] === "X" && winningBoards[i][2] === "X") {
                        alert(`${player1.name} wins!`);
                    } else if(winningBoards[i][0] === "O" && winningBoards[i][1] === "O" && winningBoards[i][2] === "O") {
                        alert(`${player2.name} wins!`);
                    }
                }
            }
        }
    }


    const controlGame = function(e) {
        if(e.target.classList.contains("game-cell")) {
            if(e.target.textContent === "")
                        if(player1.turn === true) {
                            e.target.textContent = "X";
                            board.push(e.target.textContent);
                            player1Moves.push(parseInt(e.target.id));
                            console.log(player1Moves)
                            console.log(board)
                            player1.turn = false;
                            player2.turn = true;
                            
                        } else if(player2.turn === true) {
                            e.target.textContent = "O";
                            board.push(e.target.textContent);
                            player2Moves.push(parseInt(e.target.id));
                            console.log(player2Moves)
                            console.log(board)
                            player2.turn = false;
                            player1.turn = true;
                }
            }
    };

    return {controlGame, checkWinner}
})();

window.addEventListener('click', gameBoard.controlGame)
window.addEventListener('click', gameBoard.checkWinner)


//Player Factory
const Player = (name, mark, turn) => {
    const getName = () => name;
    const getMark = () => mark
    let isTurn = () => turn;

    return {name, mark, turn, getMark}
};

const player1 = Player("Conor", "X", true);
const player2 = Player("Leah", "O", false);


