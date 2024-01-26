
function getComputerChoice(){
  let num = Math.floor(Math.random() * 3) + 1
  
  switch (num){
    case 1: return 'rock';
    case 2: return 'paper';
    case 3: return 'scissors';
  }
}


function playRound(){
  const computerSelection = getComputerChoice();
  if (!computerSelection) return 'Enter something'
  const playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase();

  let playerSelectionCaps = playerSelection.at(0).toUpperCase() + playerSelection.slice(1);
  let computerSelectionCaps = computerSelection.at(0).toUpperCase() + computerSelection.slice(1);

  if (playerSelection === computerSelection){
    return ('It\'s a tie!')
  }else if (playerSelection == 'rock' && computerSelection == 'paper'){
    return (`You lose! ${computerSelectionCaps} beats ${playerSelectionCaps}`)
  }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return (`You win! ${playerSelectionCaps} beats ${computerSelectionCaps}`)
  }else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return (`You win! ${playerSelectionCaps} beats ${computerSelectionCaps}`)
  }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return (`You lose! ${computerSelectionCaps} beats ${playerSelectionCaps}`)
  }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return (`You lose! ${computerSelectionCaps} beats ${playerSelectionCaps}`)
  }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return (`You win! ${playerSelectionCaps} beats ${computerSelectionCaps}`)
  }else{
    return null;
  }
  
}

function playGame(){
  let wins = 0;
  let looses = 0;
  
  for (i = 0; i <= 5;){
    playRound();
    if (!playRound){
      return ('Please, enter either Rock, Paper or Scissors')
    }

    if (String(playRound).at(5) == 'l'){
      i++
      return (`Wins: ${wins} Looses: ${looses++}`)
    } else if (String(playRound).at(5) == 'w'){
      i++
      return (`Wins: ${wins++} Looses: ${looses}`)
    }
  }

  if (wins > looses){
    return (`\n ${wins} wins VS ${looses} looses. You WON! `)
  }else{
    return (`\n ${wins} wins VS ${looses} looses. You lost! `)
  }
}







