let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");


const lost = document.getElementById("lost");
const loose = document.getElementById("loose");
const loose_btn = document.getElementById("loose_btn");
const looser_img  = document.getElementById("looser_img");
const rules_btn = document.getElementById("rules_btn");


const draw = document.getElementById("draw");
const tie_game = document.getElementById("tie_game");
const btn = document.getElementById("btn");
const tie_btn =document.getElementById("tie_btn");
const cls = document.querySelector(".cls");



const winer = document.getElementById("winer");
const win = document.getElementById("win");
const win_btn = document.getElementById("win_btn");
const next_btn = document.getElementById("next_btn");
const winer_rules = document.getElementById("winer_rules");



const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {

console.log("GAME WAS TIE");

tie_game.style.display="flex";
draw.style.display="flex";
btn.style.display ="flex";
cls.style.display ="flex";
third.style.display="flex";
tie_btn.style.display="flex";


};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // userScore++;
    console.log("YOU WIN");

    // userScorePara.innerText = userScore;

    win.style.display="flex";
    winer.style.display="flex";
    win_btn.style.display ="flex";
    next_btn.style.display="flex";
    winer_sec.style.display="flex";
    winer_rules.style.display="flex";
    

  } else {
    // compScore++;
    console.log("YOU LOOSE");

    // compScorePara.innerText = compScore;
    
    looser_img.style.display="flex";
    lost . style.display="flex";
    loose.style.display = "flex";
    loose_btn.style.display = "flex";
    rules_btn.style.display="flex";  
}
}

const playGame = (userChoice) => {
    console.log(" USER CHOICE =" , userChoice)
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("COMP  CHOICE =" , compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    first.style.display="none";
    second.style.display="none";
    third.style.display = "none";

  })
});



  function rulesShow(){
addEventListener("click",()=>{
document.getElementById("one")
.style.display =" block";

})
}











