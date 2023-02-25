const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay =  document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
let userChoice
let computerChoice
let result
let userImageCode
let code1=0
let resulCode1,resultCode2

let code2=1

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML =  userChoice
    userImageChange(userChoice)
    generatecomputerChoice()
    generateResult()
    changeImage()

}) )


function generatecomputerChoice(){
    const randomNumber =  Math.floor(Math.random()*3 +1)

    if(randomNumber ===1){
        computerChoice ='rock'
        randomImage(randomNumber)
    


    }
    if(randomNumber ===2){
        computerChoice='paper'
        randomImage(randomNumber)

     
    }
    if(randomNumber ===3){
        computerChoice='scissor'
        randomImage(randomNumber)

    
        
    }
    computerChoiceDisplay.innerHTML = computerChoice

}
function userImageChange(y){
    if(y ==='rock'){
        userImageCode=1
        userImageDisplay(userImageCode)
        
    


    }
    if(y ==='paper'){
        userImageCode=2
        userImageDisplay(userImageCode)


        
        

     
    }
    if(y==='scissor'){
        userImageCode=3
        userImageDisplay(userImageCode)



    
        
    }

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
        result = 'You lost'
    }    
    if (computerChoice=== 'paper' && userChoice ==='rock')
    {
        result = 'You win'
    }
    if (computerChoice=== 'paper' && userChoice ==='scissor')
    {
        result = 'You lost'
    }
    if (computerChoice=== 'scissor' && userChoice ==='rock')
    {
        result = 'You win'
    }
    if (computerChoice=== 'scissor' && userChoice ==='paper')
    {
        result = 'You lost'
    }
    resultDisplay.innerHTML = result
}

function randomImage(a){
    var imageSource = "images/"+"img" +a + ".png";
        var imageOriginal = document.querySelectorAll('img')[0];

    imageOriginal.setAttribute('src',imageSource)





}
function userImageDisplay(z){
       var userimageSource = "images/"+"img" +z+ ".png";
       
        var userimageOriginal = document.querySelectorAll('img')[1];

    

    

      userimageOriginal.setAttribute('src',userimageSource)





}


  