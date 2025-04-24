function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  
    let result = '';
  
    if (playerChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
  
    document.getElementById('winner').textContent = result;
  }
  