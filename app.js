const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const scoreComputerDisplay=document.getElementById('score-computer')
const scoreUserDisplay=document.getElementById('score-user')
const resultDisplay = document.getElementById('result')
const possiblesChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let scoreComputer=0
let scoreUser=0


possiblesChoices.forEach(possiblesChoices=>possiblesChoices.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    
    generateComputerChoice()
    generateWinner()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possiblesChoices.length);
    console.log(randomNumber) 
    if(randomNumber===0)
        {
        computerChoice='Piedra'
        }
        if(randomNumber===1){
            computerChoice='Papel'
        }
        if (randomNumber===2) {
            
            computerChoice='Tijera'
        }
        computerChoiceDisplay.innerHTML=computerChoice
            
}

function generateWinner(){
    if(computerChoice===userChoice){
        result='es un empate'
    }
    if(computerChoice==='Piedra' && userChoice==='Tijera')
    {
        result='Perdiste'
        scoreComputer=scoreComputer+1
    }
    if (computerChoice==='Papel'&& userChoice==='Piedra') {
        result = 'Perdiste'
        scoreComputer=scoreComputer+1
        
    }
    if (computerChoice==='Tijera'&& userChoice==='Papel') {
        result = 'Perdiste'
        scoreComputer=scoreComputer+1
        
    }
    if(computerChoice==='Piedra' && userChoice==='Papel')
    {
        result='Ganaste'
        scoreUser=scoreUser+1
    }
    if (computerChoice==='Papel'&& userChoice==='Tijera') {
        result = 'Ganaste'
        scoreUser=scoreUser+1
        
    }
    if (computerChoice==='Tijera'&& userChoice==='Piedra') {
        result = 'Ganaste'
        scoreUser=scoreUser+1
    }
    scoreComputerDisplay.innerHTML=scoreComputer
    scoreUserDisplay.innerHTML=scoreUser
    resultDisplay.innerHTML=result
}