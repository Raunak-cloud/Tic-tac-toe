const inputter = document.querySelectorAll('input')
const selectInput = id => document.getElementById(id).value
const player1 = { signature:'X', playing:false  }   
const player2 = {  signature:'O',  playing:false } 
function checkWin(w){
  const win = w+w+w  
  if(selectInput(0) + selectInput(1) + selectInput(2) === win
                           || 
  selectInput(0) + selectInput(3) + selectInput(6) === win
                           ||
  selectInput(0) + selectInput(4) + selectInput(8) === win 
                           ||
   selectInput(1) + selectInput(4) + selectInput(7) === win 
                           ||
    selectInput(2) + selectInput(5) + selectInput(8) === win 
                           ||
    selectInput(2) + selectInput(4) + selectInput(6) === win
                           ||
    selectInput(3) + selectInput(4) + selectInput(5) === win 
                           ||
    selectInput(6) + selectInput(7) + selectInput(8) === win
  ){
document.getElementById('winner').innerHTML=  w===player1.signature?  "Player 1 is winner" :"Player 2 is winner" 
for(let x of inputter.values()){
if(x.value==="")x.disabled = true}
  return false} return true;}
function handleClick(id){ 
 const getInput =  document.getElementById(id)
   if(getInput.value!="")return
   if(!player1.playing && !player2.playing){    
      getInput.value = player1.signature 
      getInput.style.color = 'teal'
      player2.playing = !player2.playing  
      } 
   else{getInput.value = player2.signature;
   getInput.style.color = 'purple'
   player2.playing = !player2.playing;
   }
    checkWin(getInput.value)
   }
//Clearing all our input values ("X" and "O")
function newGame(){
    for(let x of (inputter.values())){
    x.value = ""
    x.disabled = false 
    }  document.getElementById('winner').innerHTML=""
        player2.playing = false; 
        }

