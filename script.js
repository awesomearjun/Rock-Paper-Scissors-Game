document.querySelector('#submit').addEventListener('click', () => {
    const plays = ['Rock', 'Paper', 'Scissors'];
    let play = document.querySelector('#player').value;
    let number = Math.floor(Math.random() * plays.length);
    let cPlay = plays[number];

    while (play === '') {
        play = prompt('Enter Your Play:');
    }

    if (play === cPlay) {
        alert('Computer got ' + cPlay + '! ' + 'It\'s a Tie!')
    } else if (play == 'Rock' && cPlay == 'Scissors') {
        alert('Computer got Scissors! You Win!');
    } else if (play == 'Paper' && cPlay == 'Rock') {
        alert('Computer got Rock! You Win!');
    } else if (play == 'Scissors' && cPlay == 'Paper') {
        alert('Computer got Paper! You Win!');
    } else {
        alert('Computer got ' + cPlay + '! Computer Wins!')
    }

    let playAgain = confirm('Do you want to play again?');

    if (playAgain == true) {
        location.reload();
    } else {
        alert('Good Bye!');
        window.close();
    }
})