let win = document.querySelector(".winState")
let comScore = document.querySelector(".comScore")
let info = document.querySelector(".info")
let youScore = document.querySelector(".youScore")
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let comS = 0;
let youS = 0;
let comNumber = 0;
let youNum = "hi";
let game = () => {
    comNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`com choice ${comNumber}`);
    if (youNum == "rock" && comNumber == 1) {
        console.log("its a draw");
        win.innerText = "Its a draw...Next Move"
        info.innerText = "You and computer both has choosen the same ROCK"
    }
    else if(youNum == "paper" && comNumber == 2){
        console.log("its a draw");
        win.innerText = "Its a draw...Next Move"
        info.innerText = "You and computer both has choosen the same PAPER"
    }else if(youNum == "scissors" && comNumber == 3){
        console.log("its a draw");
        win.innerText = "Its a draw...Next Move"
        info.innerText = "You and computer both has choosen the same SCISSORS"
    } else if(youNum == "rock" && comNumber == 2){
        console.log("Computer Wins...Next Move");
        win.innerText = "Computer Wins...Next Move"
        comS++
        comScore.innerText = comS
        info.innerText = "You choose ROCK and Computer choose PAPER...Computer wins"
    }else if(youNum == "paper" && comNumber == 3){
        console.log("Computer Wins...Next Move");
        win.innerText = "Computer Wins...Next Move"
        comS++
        comScore.innerText = comS
        info.innerText = "You choose PAPER and Computer choose SCISSORS...Computer wins"
    }else if(youNum == "scissors" && comNumber == 1){
        console.log("computer win");
        win.innerText = "Computer Wins...Next Move"
        comS++
        comScore.innerText = comS
        info.innerText = "You choose SCISSORS and Computer choose ROCK...Computer wins"
    } else if(youNum == "rock" && comNumber == 3){
        console.log("you win");
        win.innerText = "You Win...Next Move"
        youS++
        youScore.innerText = youS
        info.innerText = "You choose ROCK and Computer choose SCISSORS...You win"
    }else if(youNum == "paper" && comNumber == 1){
        console.log("you win");
        win.innerText = "You Win...Next Move"
        youS++
        youScore.innerText = youS
        info.innerText = "You choose PAPER and Computer choose ROCK...You win"
    }else if(youNum == "scissors" && comNumber == 2){
        console.log("you win");
        win.innerText = "You Win...Next Move"
        youS++
        youScore.innerText = youS
        info.innerText = "You choose SCISSORS and Computer choose ROCK...You win"
    }
    

    if(youS===5){
        alert("Congratulation you win")
        win.innerText = "Start"
        info.innerText = "Congratulations you will....Want to restart"
        comScore.innerText = "0"
        youScore.innerText = "0"
        youS = 0
        comS = 0
    }else if(comS===5){
        alert("Game over computer Wins")
        win.innerText = "Start"
        info.innerText = "Sorry you loose....Want to play again"
        comScore.innerText = "0"
        youScore.innerText = "0"
        youS = 0 
        comS = 0
    }
}

rock.addEventListener("click", () => {
    youNum = "rock";
    // console.log(`Your choice ${youNum}`)
})
rock.addEventListener("click" , game)
paper.addEventListener("click", () => {
    youNum = "paper";
    console.log(`Your choice ${youNum}`)
})
paper.addEventListener("click",game)
scissors.addEventListener("click", () => {
    youNum = "scissors";
    console.log(`Your choice ${youNum}`)
})
scissors.addEventListener("click",game)

