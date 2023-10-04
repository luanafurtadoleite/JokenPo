let result = document.querySelector('.result')
let yourScore = document.querySelector('#humanscore')
let scoreMachine = document.querySelector('#machinescore')

let humanScoreNumber = 0
let machineScoreNumber = 0

let playHuman = (humanchoice) =>{
    const machineChoice = playMachine()
    playTheGame (humanchoice, machineChoice)
}

let playMachine = () =>{
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor (Math.random() *3)

    return choice [randomNumber] 
}

let playTheGame = (human, machine) =>{
    
   if(human === machine){
        result.innerHTML = "Deu Empate"
   } else if(
             human === 'paper' && machine === 'rock' || 
             human ==='rock' && machine === 'scissors' ||
             human === 'scissors' && machine ==='paper'){
        
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
   } else {

        machineScoreNumber++
        scoreMachine.innerHTML=machineScoreNumber
        result.innerHTML = "Você Perdeu!"
   }
}

let resetButton = document.querySelector('#resetButton')

resetButton.addEventListener ('click', () => {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    yourScore.innerHTML = humanScoreNumber;
    scoreMachine.innerHTML = machineScoreNumber;
    result.innerHTML = "";
})