const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay =  document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML =  userChoice
    generatecomputerChoice()
    generateResult()

}) )


function generatecomputerChoice(){
    const randomNumber =  Math.floor(Math.random()*3 +1)

    if(randomNumber ===1){
        computerChoice ='rock'

    }
    if(randomNumber ===2){
        computerChoice='paper'

    }
    if(randomNumber ===3){
        computerChoice='scissor'
        
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function generateResult()
{
    if (computerChoice=== userChoice)
    {
        result = 'its draw'
    }
    if (computerChoice=== 'rock' && userChoice ==='paper')
    {
        result = 'You win'
    }
    if (computerChoice=== 'rock' && userChoice ==='scissor')
    {
        result = 'you lost'
    }
    if (computerChoice=== 'paper' && userChoice ==='rock')
    {
        result = 'you win'
    }
    if (computerChoice=== 'paper' && userChoice ==='scissor')
    {
        result = 'You lost'
    }
    if (computerChoice=== 'scissor' && userChoice ==='rock')
    {
        result = 'you win'
    }
    if (computerChoice=== 'scissor' && userChoice ==='paper')
    {
        result = 'you lost'
    }
    resultDisplay.innerHTML = result
}


  