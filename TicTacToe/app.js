let gameSquares = document.querySelectorAll(".game-square");
let playerTurn = document.querySelector("#game-heading");
let restartBtn = document.querySelector("#restart-button");
let board = document.querySelector("#board");
const nought = "O";
const cross = "X";
let currentPlayer = "";
const WINNING_COMBOS = [
     // Left / Right
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
      // Top / Down
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
     // Diagonal
	[0, 4, 8],
	[2, 4, 6]
]

function init() {
    currentPlayer = cross;
    showCurrentPlayer();
}

function reset() {
    gameSquares.forEach((item) => {
        item.innerText = '';
    });
    gameSquares.forEach(item=>{
        item.removeAttribute('disabled');
    })
    init();
}

function changeCurrentPlayer() {
	return currentPlayer = currentPlayer === cross ? nought : cross;
}

function showCurrentPlayer() {
    if (currentPlayer=='X') {
        playerTurn.innerText = "Player 1's turn | X";
    }
    else{
        playerTurn.innerText = "Player 2's turn | O";
    }
}

function checkWin() {
	return WINNING_COMBOS.some(combo => {
        return combo.every(x => { 
            return gameSquares[x].innerText == currentPlayer;
        });
    });
}
function checkDraw() {
    return [...gameSquares].every(item => {
        return item.innerText.includes(cross) || item.innerText.includes(nought);
    });
}

gameSquares.forEach((item) => {
	item.addEventListener("click", e => {
        if(e.currentTarget.innerText) return;
		e.currentTarget.innerText = currentPlayer;
        if(checkDraw()) {
            playerTurn.innerText = "It's draw!";
            restartBtn.style.display = "block";
            gameSquares.forEach(item=>{
                item.setAttribute('disabled', '');
            })
            return;
        }
        
        if(checkWin()) {
            playerTurn.innerText = `${currentPlayer} won`;
            restartBtn.style.display = "block";
            gameSquares.forEach(item=>{
                item.setAttribute('disabled', '');
            })
            return;
        }
        changeCurrentPlayer();
        showCurrentPlayer();
	});
});

restartBtn.addEventListener("click", () => {
    reset();
    
});

init();