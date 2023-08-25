let currentPlayer = 'X';
const b = document.querySelector('.new-game');
const p = document.querySelector('.Player');
const q = document.querySelector('.PLAYER');
const r = document.querySelector('.restart');
q.textContent = 'X'; 
b.style.zIndex = "-1";
r.style.zIndex = "-1";
b.style.transform = "translateX(-50%)";

const cells = document.querySelectorAll('.common');
let gameOver = false;


function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
           
            const fbox = setTimeout(first, 200);

                    function first() {
            cells[a].style.backgroundColor = '#50C54B';
                   
                    }
            const sbox = setTimeout(second, 250);

                    function second() {
            cells[b].style.backgroundColor = '#50C54B';

                    }
            const tbox = setTimeout(third, 300);

                    function third() {
            cells[c].style.backgroundColor = '#50C54B';
            p.textContent = `${cells[b].textContent} wins!`;

                    
                    }


            r.style.zIndex = "-1";

            
            gameOver = true;
            break;
        }
    }

    if (gameOver) {
        b.style.transition = "ease-out 1s";
        b.style.transform = "translateX(0%)";
        b.style.zIndex = "1";
        q.textContent = "";
        b.style.backgroundColor = ' rgba(240, 248, 255, 0.77)';

    }

    if (!gameOver) {
        let draw = true;
        for (const cell of cells) {
            if (cell.textContent === '') {
                draw = false;
                break;
            }
        }
        if (draw) {
            p.textContent = "It's a draw!";
            // cells.textContent = "";
        q.textContent = "";
        r.style.zIndex = "-1";


            b.style.zIndex = "1";
        b.style.transform = "translateX(0%)";

        b.style.transition = "cubic-bezier(.26,.53,.83,.67) ";
            gameOver = true;
        }
    }
}

function makeMove(cellIndex) {
    
        r.style.zIndex = "1";
    console.log(cellIndex);
    if (!gameOver && cells[cellIndex].textContent === '') {
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        q.textContent = currentPlayer;
        checkWinner();
    }
}

b.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.style.backgroundColor = ''; // Reset background color
    });
    b.style.transform = "translateX(-50%)";

    p.textContent = 'Player:- ';
    currentPlayer = 'X';
    q.textContent = 'X'; // Set the current player to 'X'
    gameOver = false;
    b.style.zIndex = '-1';
});


r.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.style.backgroundColor = ''; // Reset background color
    });
    b.style.transform = "translateX(-50%)";

    p.textContent = 'Player:- ';
    currentPlayer = 'X';
    q.textContent = 'X'; // Set the current player to 'X'
    gameOver = false;
    b.style.zIndex = '-1';
});

