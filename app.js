let userScore = 0;
let computerScore = 0;
const userElem = document.getElementById("user-score");
const compElem = document.getElementById("comp-score");
const scoreboard = document.querySelector(".score");
const result = document.querySelector(".result-message > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");


const computerChoice = () => {
    const choices = ["r","p","s"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const convert = (letter) => {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}


const win = (userChoice,compChoice) => {
    userScore++;
    userElem.innerHTML = userScore;
    compElem.innerHTML = computerScore;
    result.innerHTML = `User's ${convert(userChoice)} beats Computer's ${convert(compChoice)}. You win!😁`;
}

const lose = (userChoice,compChoice) => {
    computerScore++
    compElem.innerHTML = computerScore;
    userElem.innerHTML =userScore;
    result.innerHTML = `Computer's ${convert(compChoice)} beats User's ${convert(userChoice)}. You lose!😢`;
}

const draw = (userChoice,compChoice) => {
    result.innerHTML = `Computer chose ${convert(userChoice)} too. Its a DRAW!😒`;
}

const game = (userChoice) => {
    const compChoice = computerChoice();

    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);  
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,compChoice);
            break;
    }
}

const main = () => {

    rock.addEventListener("click", () =>{
       game("r");
    });
    
    paper.addEventListener("click", () =>{
        game("p");
    });
    
    scissors.addEventListener("click", () =>{
        game("s");
    });

};

main();