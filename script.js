let sqaures = Array.from(document.querySelectorAll(".data"));
let playerDisplay = document.querySelector(".display-player");
let resetbtn = document.querySelector(".restart");
let announcementwinner = document.querySelector(".result");

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let GameOn = true;

const playerX_WON = 'playerX_WON';
const platyerO_WON = 'playerO_WON';
const TIE = 'TIE';

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function isValid(sqaure) {
    if (sqaure.innerText === "X" || sqaure.innerText === "O") {
        return false;
    }
    else {
        return true;
    }
}

function updateBoard(index) {
    board[index] = currentPlayer;

}

function changePlayer() {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText === currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

function announce(type) {
    switch(type) {
        case playerO_WON :
            announcementwinner.innerHTML = 'Player <span class="playerO">O</span> Won';
            break;
        case playerX_WON:
            announcementwinner.innerHTML = 'Player <span class="playerX">X</span> Won';
        case TIE:
            announcementwinner.innerHTML = 'TIE';
    }
    announcementwinner.classList.remove('hide');
}

function resultCheck() {
    let roundWon = false;
    for (let i=0; i <= 9; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue
        }
        if (a === b && b === c){
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        announce(currentPlayer === "X" ? playerX_WON : platyerO_WON);
        GameOn = false;
        return;
    }

    if (!board.includes("")) announce(TIE);
}

function UserAction(sqaure, index) {
    if (isValid(sqaure) && GameOn) {
        sqaure.innerText = currentPlayer;
        sqaure.classList.add(`player${currentPlayer}}`);
        updateBoard(index);
    }
}
