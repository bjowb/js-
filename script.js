// // console.log("hello world")
// // const accountId = 14453
// // let accountmail = "yo@gmail.com"
// // var accountPassword = "12121212"
// // accountCity = "Jaipur"

// // // accountId = 2
// // console.log(accountId)
// // accountmail = "isekahte"
// // accountPassword = "Aise na karo"
// // accountCity = "Delhi se hu bc"
// // console.table([accountId,accountPassword,accountmail,accountCity])
// // // alert(3+2)

// // let name = "pulkit"//string
// // let age = 18//int
// // let address = "najafgarh"//string
// // let die = false;//boolean
// // let state;//undefined
// // //symbol

// //to recognize type
// // console.log(typeof undefined)

// // let a = 12
// // let b = a-3
// // let c = b/a*100
// // let d = "1"
// // let e = "2"
// // let g = 2
// // console.log(d+g)

// // let a = 12
// // console.log(`this is me, ${a}`)

// let a = "hello world!"
// let b = a.toUpperCase()
// console.log(b)

// function playRound(humanChoice, computerChoice) {
//     // your code here!


// }
let choices = ["rock", "paper", "scissors"]
function getComputerChoice(){
    let random = Math.floor(Math.random()*3)
    return choices[random];
}

function getHumanChoice(){
    let humanChoice = prompt("From the given list of items : [Rock , Paper, Scissor] \n Enter your choice:")
    return choices[humanChoice-1];
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("The bot chooses : " + computerSelection);
    console.log("The man chooses : " + humanSelection);

    if(humanSelection == "rock"){
        if(computerSelection == "scissors"){
            console.log("rock smashes scissors, you win!");
            humanScore++;
        }
        else if(computerSelection == "paper"){
            console.log("paper covers rock, you lose!");
            computerScore++;
        }
        else{
            console.log("its a tie");
        }
    }
    else if(humanSelection == "paper"){
        if(computerSelection == "rock"){
            console.log("paper covers rock, you win!");
            humanScore++;
            }
        else if(computerSelection == "scissors"){
            console.log("scissors cuts paper, you lose!");
            computerScore++;
        }
        else{
            console.log("its a tie");
            }
    }
    else{
        if(computerSelection == "paper"){
            console.log("scissors cuts paper, you win!");
            humanScore++;
            }
        else if(computerSelection == "rock"){
            console.log("rock smashes scissors, you lose!");
            computerScore++;
        }
        else{
            console.log("its a tie");
        }
    }
}


function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
        console.log("Current Score : ")
        console.log("Your Score : "+ humanScore + "         Computer Score : " + computerScore);
        console.log("================================================================================")
    }
    if(humanScore > computerScore)
            console.log("You Won!       Your Score : " + humanScore + "        Computer Score : " + computerScore);
    else if(humanScore < computerScore)
            console.log("You lost!      Your Score : " + humanScore + "        Computer Score : " + computerScore);
    else
        console.log("Go for another game!");
}

playGame();
