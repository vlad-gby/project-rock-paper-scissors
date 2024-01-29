
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
  let playerSelection;

  // CHECK IF INPUT IS VALID-----------
  // x controls the loop 
  // pr checks what to display in the prompt
  for(let x = 0, pr = 0; x != 1;){
    switch (pr){
      case 0:
        playerSelection = prompt('Enter Rock, Paper or Scissors') || 'close';
      break;
      case 1:
        playerSelection = prompt('May be you got a typo.\nPlease, enter Rock, Paper or Scissors') || 'close';
      break;
    }
    if (playerSelection == 'close')return;
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection){
      case 'rock': x = 1; break;
      case 'paper': x = 1; break;
      case 'scissors': x = 1; break;
      default: pr = 1;
    }
  }
  

  const playerSelectionCaps = playerSelection.at(0).toUpperCase() + playerSelection.slice(1);
  const computerSelectionCaps = computerSelection.at(0).toUpperCase() + computerSelection.slice(1);

  // WHO WINS?-------------------------
  if (playerSelection === computerSelection){
    return (`It\'s a tie! I also have a ${computerSelectionCaps}`)
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
  }

}


// GAME OF 5 ROUNDS--------------------
function playGame(){
  let w = 0;
  let l = 0;
  
  for (i = 0; i < 5;){
    let result = playRound();

    if(result === undefined) return;
    
    if (result.at(4) == 'l') l++;
    if (result.at(4) == 'w') w++;
    i++
  }


  let winpl = w == 1 ? 'win' : 'wins'
  let loosepl = l == 1 ? 'loose' : 'looses'
  let tiepl = 5 - (w+l) == 1 ? 'tie' : 'ties' 


  if (w > l){
    return (`\n ${w} ${winpl} VS ${l} ${loosepl}, and ${5 - (w+l)} ${tiepl}. You WON!`)
  }else if(w < l){
    return (`\n ${w} ${winpl} VS ${l} ${loosepl}, and ${5 - (w+l)} ${tiepl}. You lost!`)
  } else if(w == l){
    return (`\n ${w} ${winpl} VS ${l} ${loosepl}, and ${5 - (w+l)} ${tiepl}. It\'s a TIE!`)
  }

}







