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
    let board = [];
    const winner = document.getElementById("winner");
    const reset = document.getElementById('reset');
    let winningBoards = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]; 





    const playAgain = function() {
        const divs = document.querySelectorAll('.game-cell')
        const divArray = [...divs]
        divArray.forEach(i=> {
            i.innerHTML = ''
            i.style.backgroundColor = '#FFFFFF'
        })
        board = []
        winner.textContent = ''
        winner.style.visibility = 'hidden'
        window.addEventListener('click', gameBoard.controlGame)
        reset.style.visibility = 'hidden'
        winningBoards = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];
        console.log(board, 'clicked')
    }


    const controlGame = function(e) {
        if(e.target.classList.contains("game-cell")) {
            if(e.target.textContent === "")
                        if(player1.turn === true) {
                            e.target.textContent = "X";
                            e.target.style.backgroundColor = "#F03A47"
                            board.push(e.target.textContent);
                            _checkWinner(e);
                            _checkDraw();
                            console.log(board);
                            player1.turn = false;
                            player2.turn = true;
                        } else if(player2.turn === true) {
                            e.target.textContent = "O";
                            e.target.style.backgroundColor = "#276FBF"
                            board.push(e.target.textContent);
                            _checkWinner(e);
                            _checkDraw();
                            player2.turn = false;
                            player1.turn = true;           
                        } 
            }
    };

    const _checkWinner = function (e) {
        for(let i = 0; i < winningBoards.length; i++) {
            for(let j = 0; j < winningBoards[i].length; j++) {
                if(winningBoards[i][j] === parseInt(e.target.id)) {
                    winningBoards[i][j] = e.target.textContent
                        if(winningBoards[i][0] === "X" && winningBoards[i][1] === "X" && winningBoards[i][2] === "X") {
                            winner.textContent = `${player1.name} wins!`;
                            player1.score ++
                            p1ScoreDisplay.textContent = `Score: ${player1.score}`;
                            winner.style.backgroundColor = "#F03A47";
                            winner.style.visibility = "visible";
                            window.removeEventListener('click', gameBoard.controlGame);
                            reset.style.visibility = "visible"
                            reset.addEventListener('click', playAgain);
                    } else if(winningBoards[i][0] === "O" && winningBoards[i][1] === "O" && winningBoards[i][2] === "O") {
                        winner.textContent = `${player2.name} wins!`;
                        player2.score ++
                        p2ScoreDisplay.textContent = `Score: ${player2.score}`;
                        winner.style.backgroundColor = "#276FBF";
                        winner.style.visibility = "visible";
                        window.removeEventListener('click', gameBoard.controlGame);
                        reset.style.visibility = "visible"
                        reset.addEventListener('click', playAgain);
                    } 
                }
            }
        }
    }

    const _checkDraw = function() {
        if(!_checkWinner && board.length >= 9) {
            winner.textContent = "It's a draw!";
            winner.style.backgroundColor = "#00916E"
            winner.style.visibility = "visible";
            window.removeEventListener('click', gameBoard.controlGame);
            reset.style.visibility = "visible"
            reset.addEventListener('click', playAgain);
        }
    }

    return {controlGame}
})();

window.addEventListener('click', gameBoard.controlGame)



//Player Factory
const Player = (name, mark, turn, score) => {
    const getName = () => name;
    const getMark = () => mark
    let isTurn = () => turn;
    const getScore = () => score

    return {name, mark, turn, getMark, score}
};

const player1 = Player(prompt("What is Player 1's name?"), "X", true, 0);
const player2 = Player(prompt("What is Player 2's name?"), "O", false, 0);

const p1NameDisplay = document.getElementById("player-one-name");
const p1MarkDisplay = document.getElementById("player-one-mark");
const p1ScoreDisplay = document.getElementById("player-one-score");
p1NameDisplay.textContent = `Name: ${player1.name}`;
p1MarkDisplay.textContent = `Mark: ${player1.mark}`;
p1ScoreDisplay.textContent = `Score: ${player1.score}`;

const p2NameDisplay = document.getElementById("player-two-name");
const p2MarkDisplay = document.getElementById("player-two-mark");
const p2ScoreDisplay = document.getElementById("player-two-score");

p2NameDisplay.textContent = `Name: ${player2.name}`;
p2MarkDisplay.textContent = `Mark: ${player2.mark}`;
p2ScoreDisplay.textContent = `Score: ${player2.score}`;
