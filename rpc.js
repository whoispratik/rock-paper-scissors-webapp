let userScore = 0;
      let computerScore = 0;
      let userScoreElem=document.getElementById('user-score');
      let computerScoreElem=document.getElementById('computer-score');
      //alert(userScoreElem);
  let computerdecision=document.querySelector(' .main > .decision');
      let computerChoice = {
        rock:false,
        paper:false,
        Scissors:false,
      };
      let rockBtn = document.getElementById("rock");
      let paperBtn = document.getElementById("paper");
      let Scissors = document.getElementById("Scissors");
      let userChoice = {
        rock:false,
        paper:false,
        Scissors:false,
      };

      rockBtn.addEventListener("click", (event) => {
        userChoice.rock = true;
        userChoice.paper = false;
        userChoice.Scissors = false;
        let random = Math.floor(Math.random() * 10);
        if (random == 0 ) {
          computerChoice.rock = true;
          computerChoice.paper = false;
          computerChoice.Scissors = false;
        } else if (random == 1) {
          computerChoice.rock = false;
          computerChoice.paper = true;
          computerChoice.Scissors = false;
        } else {
          computerChoice.rock = false;
          computerChoice.paper = false;
          computerChoice.Scissors = true;
        }
        let Usermap = Object.entries(userChoice); //[['rock',true],['paper',false],['Scissors',false]];
        let computermap = Object.entries(computerChoice);
        for (const u of Usermap) {
          if (u[0]=="rock" && u[1] == true) {
            for (const c of computermap) {
              if (c[0]=="rock" && c[1] == true) {
                // its a tie
                computerdecision.textContent="the computer has chosen rock so its a tie";
                updateScore();
                return;
              }
              else if(c[0]=="paper" && c[1]==true){
              //paper wins i.e computer wins computer score must be incremented;
            computerScore++;
            computerScoreElem.innerHTML=computerScore;
            computerdecision.textContent="the computer has chosen paper";  
            updateScore();   
            return;      
            }
           else if(c[0]=="Scissors" && c[1]==true){
               //scissor loses i.e user wins  and user score must be incrementrd;
               userScore++;
               userScoreElem.innerHTML=userScore;
               computerdecision.textContent="the computer has chosen scissiors";
               updateScore();
               return;
           }

            
        }
    }}
      });
      paperBtn.addEventListener("click", (event) => {
        userChoice.rock = false;
        userChoice.paper = true;
        userChoice.Scissors = false;
        let random = Math.floor(Math.random() * 10);
        if (random == 0 ) {
          computerChoice.rock = true;
          computerChoice.paper = false;
          computerChoice.Scissors = false;
        } else if (random == 1 ) {
          computerChoice.rock = false;
          computerChoice.paper = true;
          computerChoice.Scissors = false;
        } else {
          computerChoice.rock = false;
          computerChoice.paper = false;
          computerChoice.Scissors = true;
        }
        let Usermap = Object.entries(userChoice); //[['rock',true],['paper',false],['Scissors',false]];
        let computermap = Object.entries(computerChoice);
        for (const u of Usermap) {
            if (u[0]=="paper" && u[1] == true) {
              for (const c of computermap) {
                if (c[0]=="rock" && c[1] == true) {
                  // paper wins i.e user wins 
                  userScore++;
                userScoreElem.innerHTML=userScore;
                computerdecision.textContent="the computer has chosen rock";
                updateScore();
                return;
                }
                else if(c[0]=="paper" && c[1]==true){
                //paper against paper its a tie
           
              computerdecision.textContent="the computer has chosen paper";     
              updateScore();
              return;      
              }
             else if(c[0]=="Scissors" && c[1]==true){
                 //scissors wins i.e computer wins
                 computerScore++;
                computerScoreElem.innerHTML=computerScore;
                 computerdecision.textContent="the computer has chosen scissiors";
                 updateScore();
                 return;
             }
  
              
          }
      }}
      });
      Scissors.addEventListener("click", (event) => {
        userChoice.rock = false;
        userChoice.paper = false;
        userChoice.Scissors = true;
        let random = Math.floor(Math.random() *3);
        if (random == 0 ) {
          computerChoice.rock = true;
          computerChoice.paper = false;
          computerChoice.Scissors = false;
        } else if (random == 1 ) {
          computerChoice.rock = false;
          computerChoice.paper = true;
          computerChoice.Scissors = false;
        } else {
          computerChoice.rock = false;
          computerChoice.paper = false;
          computerChoice.Scissors = true;
        }
        let Usermap = Object.entries(userChoice); //[['rock',true],['paper',false],['Scissors',false]];
        let computermap = Object.entries(computerChoice);
        for (const u of Usermap) {
            if (u[0]=="Scissors" && u[1] == true) {
              for (const c of computermap) {
                if (c[0]=="rock" && c[1] == true) {
                  // rock wins update computerScore
                  computerScore++;
                computerScoreElem.innerHTML=computerScore;
                computerdecision.textContent="the computer has chosen rock";
                updateScore();
                return;
                }
                else if(c[0]=="paper" && c[1]==true){
                //scissors against paper ,scissor wins update userScore score
           userScore++;
           userScoreElem.innerHTML=userScore;
              computerdecision.textContent="the computer has chosen paper";
              updateScore(); 
              return;       
              }
             else if(c[0]=="Scissors" && c[1]==true){
                 //scissors wins i.e computer wins
                 computerdecision.textContent="the computer has chosen scissiors";
                 updateScore();
                 return;
             }
  
              
          }
      }}
      });
  function updateScore(){
    let resultnode=document.getElementById('result');
    if(userScore>computerScore)
    resultnode.innerHTML="You are in the lead";
  else if(computerScore>userScore)
  resultnode.innerHTML="Computers in the lead";
else if(computerScore==userScore)
resultnode.innerHTML="The Scores are Level";

  }