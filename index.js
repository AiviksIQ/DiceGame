let button = document.querySelector('.btn');
let numbers = document.querySelectorAll('.number')
let result = document.querySelector(".result")

button.addEventListener('click', diceNumbers)

function diceNumbers() {
    numbers.forEach((number) => {
        number.textContent = Math.floor(Math.random() * 6);
    });
    // setTimeout(winner, 300);
    winner();
}

let player1 = document.querySelector('.player-1');
let player2 = document.querySelector('.player-2');

// get local storage working
function winner() {
    result.textContent = "";
    let p1 = player1.textContent
    let p2 = player2.textContent
    localStorage.setItem('player1Name', p1);
    localStorage.setItem('player2Name', p2);

    if (player1.nextElementSibling.textContent === player2.nextElementSibling.textContent) {
        result.innerHTML += `<h2 class='grey' >It's a DRAW</h2>`;
        player2.nextElementSibling.classList.remove('green');
        player1.nextElementSibling.classList.remove('green');
    } else {
        if (player1.nextElementSibling.textContent > player2.nextElementSibling.textContent) {
            result.innerHTML += `<h2> ${p1} won!</h2>`;
            player2.nextElementSibling.classList.remove('green');
            player1.nextElementSibling.classList.add('green');

        } else {
            result.innerHTML += `<h2> ${p2} won!</h2>`;
            player1.nextElementSibling.classList.remove('green');
            player2.nextElementSibling.classList.add('green');

        }
    }
}