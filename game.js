const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay =  document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const scoreDisplay = document.getElementById("score")
const lostDisplay = document.getElementById("lost")
const matchDisplay = document.getElementById("match")



let userChoice
let computerChoice
let result
let userImageCode
let code1=0
let resulCode1,resultCode2
let score=0,lost =0,match=0,count


let code2=1
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML =  userChoice
    userImageChange(userChoice)
    generatecomputerChoice()
    generateResult()
    changeImage()

}) )
function matchIncrease()
{
    match+=1
    matchDisplay.innerHTML=match



}

function scoreIncrease(){
    score+=1
    match+=1
    scoreDisplay.innerHTML=score
    matchDisplay.innerHTML=match
    



}
function lostIncrease(){
    lost+=1
    match+=1

    lostDisplay.innerHTML=lost

    matchDisplay.innerHTML=match
}


function generatecomputerChoice(){
    const randomNumber =  Math.floor(Math.random()*3 +1)

    if(randomNumber ===1){
        computerChoice ='Rock'
        randomImage(randomNumber)
    


    }
    if(randomNumber ===2){
        computerChoice='Paper'
        randomImage(randomNumber)

     
    }
    if(randomNumber ===3){
        computerChoice='Scissor'
        randomImage(randomNumber)
    }
    computerChoiceDisplay.innerHTML = computerChoice

}
function userImageChange(y){
    if(y ==='Rock'){
        userImageCode=1
        userImageDisplay(userImageCode)
        
    
    }
    if(y ==='Paper'){
        userImageCode=2
        userImageDisplay(userImageCode)


     
    }
    if(y==='Scissor'){
        userImageCode=3
        userImageDisplay(userImageCode)

    
        
    }

}     


function generateResult()
{
    if (computerChoice=== userChoice)
    {
        result = 'its draw'
        matchIncrease()
    }
    if (computerChoice=== 'Rock' && userChoice ==='Paper')
    {
        result = 'You win'
        scoreIncrease()

            
        
    }
    if (computerChoice=== 'Rock' && userChoice ==='Scissor')
    {
        result = 'You lost'
        lostIncrease()
    }    
    if (computerChoice=== 'Paper' && userChoice ==='Rock')
    {
        result = 'You win'
        scoreIncrease()
    }
    if (computerChoice=== 'Paper' && userChoice ==='Scissor')
    {
        result = 'You lost'
        lostIncrease()
        
    }
    if (computerChoice=== 'Scissor' && userChoice ==='Rock')
    {
        result = 'You win'
        scoreIncrease()
    }
    if (computerChoice=== 'Scissor' && userChoice ==='Paper')
    {
        result = 'You lost'
        lostIncrease()
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


  