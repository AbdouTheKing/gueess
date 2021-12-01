let randomNumber = Math.floor(Math.random() * 100) + 1 ;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHight = document.querySelector('.lowOrHight');

let guessSubmit = document.querySelector('.guessSubmit');
let guessfield = document.querySelector('.guessField');

let guessCount = 1 
let restButton;


function checkGuess (){
    let userGuess = Number(guessfield.value);
    guessSubmit.addEventListener('click', checkGuess);
    if (guessCount === +1) {
        guesses.textContent = `Your previous attempt:` ;
        
    }
    guesses.textContent  += userGuess + ' ';
    
    if (userGuess === randomNumber){

        lastResult.textContent = 'Great! You guessed right you are Genius';
        lastResult.style.backgroundColor = 'green'
        // lowOrHight.textContent = '';
        // setGameOver();

    } else if (guessCount === 10) {
        lastResult.textContent = ' ! Game over !';
        setGameOver();

    } else {
        {if (userGuess < randomNumber ) {
            lowOrHight.textContent = ' The number you guessed was too low ';
        } else if (userGuess > randomNumber) {

            lowOrHight.textContent = 'The number you guessed was too high';
        }
    }
    

        
    }
    

    guessCount++;
    guessfield.value = '';
    guessfield.focus();
        
    
}guessSubmit.addEventListener('click', checkGuess);
// function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     // lastResult.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Start new game';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
//   }
//   function resetGame() {
//     guessCount = 1;
  
//     let resetParas = document.querySelectorAll('.resultParas p');
//     for (let i = 0 ; i < resetParas.length ; i++) {
//       resetParas[i].innerHTML = '';
//     }
  
//     resetButton.parentNode.removeChild(resetButton);
  
//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = '';
//     guessField.focus();
    
  
//     lastResult.style.backgroundColor = 'white';
  
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//   }
