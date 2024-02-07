
function getComputerChoice(){
  let num = Math.floor(Math.random() * 3) + 1
  
  switch (num){
    case 1: return 'rock';
    case 2: return 'paper';
    case 3: return 'scissors';
  }
}


function playRound(playerSelection){
  const computerSelection = getComputerChoice();

  const playerSelectionCaps = playerSelection.at(0).toUpperCase() + playerSelection.slice(1);
  const computerSelectionCaps = computerSelection.at(0).toUpperCase() + computerSelection.slice(1);

  // WHO WINS?-------------------------
  if (playerSelection === computerSelection){
    return [computerSelection,0]
  }else if (playerSelection == 'rock' && computerSelection == 'paper'){
    return [computerSelection,-1];
  }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return [computerSelection,1];
  }else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return [computerSelection,1];
  }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return [computerSelection,-1];
  }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return [computerSelection,-1];
  }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return [computerSelection,1];
  }

}

const choice = document.querySelectorAll('.choice-box .choice');
choice.forEach((item) => {
  item.style.outlineOffset = '2px'
  // item.style.border = "4px solid rgb(0,0,0,0)";
    
});
choice.forEach((item) => {
  item.addEventListener('mouseover', e => {
    item.style.outline = '4px solid rgb(146, 121, 92)';
  });
  item.addEventListener('mouseout', e => {
    item.style.outline = '0px solid';
  });
  item.addEventListener('click', e => {
    const result = playRound(e.target.classList[1]);
    const output = document.querySelector('.computer-box .choice');
    const background = document.querySelector('body');
    
    if(output.classList[1]){
      switch (output.classList[1]){
        case 'rock': output.classList.remove('rock');
        break;
        case 'paper': output.classList.remove('paper');
        break;
        case 'scissors': output.classList.remove('scissors');
        break;
      }
    }
    output.classList.add(result[0]);

   
    switch (result[1]){
      case 1:
         background.style.backgroundColor = 'rgb(193, 218, 165)';
      break;
      case -1:
         background.style.backgroundColor = 'rgb(215, 164, 157)';
      break;
      case 0:
         background.style.backgroundColor = 'rgb(235, 211, 113)';
      break;
    }
  });
});


// GAME OF 5 ROUNDS--------------------
// function playGame(){
//   let w = 0;
//   let l = 0;
  
//   for (i = 0; i < 5;){
//     let result = playRound();

//     if(result === undefined) return;
    
//     if (result.at(4) == 'l') l++;
//     if (result.at(4) == 'w') w++;
//     i++
//   }


//   let winpl = w == 1 ? 'win' : 'wins'
//   let loosepl = l == 1 ? 'loose' : 'looses'
//   let tiepl = 5 - (w+l) == 1 ? 'tie' : 'ties' 


//   if (w > l){
//     return (`\n ${w} ${winpl} VS ${l} ${loosepl}, and ${5 - (w+l)} ${tiepl}. You WON!`)
//   }else if(w < l){
//     return (`\n ${w} ${winpl} VS ${l} ${loosepl}, and ${5 - (w+l)} ${tiepl}. You lost!`)
//   } else if(w == l){
//     return (`\n ${w} ${winpl} VS ${l} ${loosepl}, and ${5 - (w+l)} ${tiepl}. It\'s a TIE!`)
//   }

// }







