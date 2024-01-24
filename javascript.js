let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorePara = document.querySelector("#user-score");
let compscorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const Index = Math.floor(Math.random()*3);
    return options[Index];
}

const drawGame = () =>{
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "Gray";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText = "You Won";
        msg.style.backgroundColor = "Green";
    }
    else{
        CompScore++;
        compscorePara.innerText = CompScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "#CA2E55";
    }
}

const playgame = (userChoice) =>{
    console.log("User choice was",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice was",compChoice);

    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }

}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
