let result = document.querySelector('.result')
let yourScore = document.querySelector('#humanscore')
let scoreMachine = document.querySelector('#machinescore')
let machineChoiceElement = document.querySelector('#machinechoice');

let humanScoreNumber = 0
let machineScoreNumber = 0

let playHuman = (humanchoice) =>{
    result.innerHTML = "Escolhendo...";
    setTimeout(() => {
        playMachine();
    }, 1000);
}

let playMachine = () =>{
    let choiceClasses = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor (Math.random() *3)
    let machineChoiceButton = document.querySelector(`${choiceClasses[randomNumber]}`);
    machineChoiceButton.click();
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