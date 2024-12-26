let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return;
    
    const computerSelection = getComputerChoice();
    let result = '';
    
    if (playerSelection === computerSelection) {
        result = `Tie! Both chose ${playerSelection}`;
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    // Update the DOM
    document.getElementById('result').textContent = result;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    
    // Check for winner
    if (playerScore >= 5) {
        document.getElementById('winner').textContent = 'Congratulations! You won the game!';
    } else if (computerScore >= 5) {
        document.getElementById('winner').textContent = 'Game Over! Computer wins!';
    }
}

// Add event listeners to buttons
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.dataset.choice);
    });
});