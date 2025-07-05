let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".resetbtn");
let winnertxt=document.querySelector(".winnertext");

let turnO = true;
const winpatterns = [
    [0,1,2,],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],      
];

boxes.forEach((btn) => {
    btn.addEventListener("click",() =>{
        console.log("Box was clicked");
        if (turnO === true){
            btn.innerText="O";
            turnO = false;
        }
        else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        
        checkwinner();
        
    });
});

const checkwinner = () =>{
    for (let pattern of winpatterns){
        let val1= boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3= boxes[pattern[2]].innerText;

    if (val1 !="" && val2 !="" && val3 !=""){
        if (val1 ===val2 && val2 === val3){
            console.log("Winner",val1);
            disableBoxes();
            winnertxt.textContent = `Winner is ${val1}`; 
        }
    }
}
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  winnertxt.textContent = ""; 
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

reset.addEventListener("click", resetGame);


        
    
  
