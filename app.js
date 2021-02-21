//Gameboard module
const gameBoard = (() => {
    const board = [];
});

//Player Factory
const Player = (name) => {
    const getName = () => name;
    return {name}
};

const player1 = Player("Conor");

//Displaying HTML
const displayController = (() => {
    const gameContainer = document.getElementById("game-container");

    for(let i = 0; i < 9; i++) {
        let newDiv = document.createElement('div');
        gameContainer.appendChild(newDiv);
        newDiv.classList.add('game-cell');
    }
})();

const controlGame = (() => {

});